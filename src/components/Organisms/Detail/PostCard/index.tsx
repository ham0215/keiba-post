import React, { useState, useCallback, useContext } from 'react';
import { format } from 'date-fns';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PreWrapTypography from 'components/atoms/PreWrapTypography';
import UserAvatar from 'components/atoms/UserAvatar';
import Card from 'components/atoms/Card';
import { UserContext } from 'UserContext';
import { deletePost } from 'firestore/Keiba';

type PostCard = {
  keibaId: string;
  uid: string;
  text: string | undefined;
  createdAt: Date;
  name: string;
  url: string;
  canDelete: boolean;
};

export default function PostCard({ keibaId, uid, text, createdAt, name, url, canDelete }: PostCard) {
  const [show, setShow] = useState(true);
  const { currentUser } = useContext(UserContext);

  const handleDelete = useCallback(() => {
    if (!currentUser) return;
    if (!confirm('削除しますか？')) return;

    deletePost(keibaId, currentUser.id, currentUser.url);

    setShow(false);
  }, [currentUser, keibaId]);

  if (!show || !text) return <div />;

  return (
    <Card>
      <CardHeader
        avatar={<UserAvatar url={url} />}
        action={
          uid === currentUser?.id &&
          canDelete && (
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
    </Card>
  );
}
