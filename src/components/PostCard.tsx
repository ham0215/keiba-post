import React, { useState, useCallback, useContext } from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PreWrapTypography from './PreWrapTypography';
import UserAvatar from './UserAvatar';
import { UserContext } from 'UserContext';
import { deletePost } from 'firestore/Post';

const CustomCard = styled(Card)`
  margin: 8px;
`;

type PostCard = {
  keibaId: string;
  uid: string;
  text: string | undefined;
  createdAt: Date;
  name: string;
  url: string;
};

export default function PostCard({ keibaId, uid, text, createdAt, name, url }: PostCard) {
  const [show, setShow] = useState(true);
  const { currentUser } = useContext(UserContext);

  const handleDelete = useCallback(() => {
    if (!currentUser) return;
    if (!confirm('削除しますか？')) return;

    deletePost(keibaId, currentUser.id);

    setShow(false);
  }, [currentUser, keibaId]);

  if (!show || !text) return <div />;

  return (
    <CustomCard>
      <CardHeader
        avatar={<UserAvatar url={url} />}
        action={
          uid === currentUser?.id && (
            <IconButton aria-label="delete" onClick={handleDelete} size="large">
              <DeleteIcon />
            </IconButton>
          )
        }
        title={name}
        subheader={format(createdAt, 'yyyy-MM-dd HH:mm')}
      />
      <CardContent>
        <PreWrapTypography variant="body1">{text}</PreWrapTypography>
      </CardContent>
    </CustomCard>
  );
}
