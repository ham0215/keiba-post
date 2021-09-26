import React, { useState, useCallback, useContext } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PreWrapTypography from '../../../components/PreWrapTypography';
import UserAvatar from '../../../components/UserAvatar';
import { UserContext } from '../../../UserContext';
import { deletePost } from '../../../firestore/Post';

const CustomCard = styled(Card)`
  margin: 8px 8px 8px 8px;
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
            <IconButton aria-label="delete" onClick={handleDelete}>
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
