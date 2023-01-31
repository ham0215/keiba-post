import DeleteIcon from '@mui/icons-material/Delete';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import { format } from 'date-fns';
import { deletePost } from 'libs/firestore/Keiba';
import type { User } from 'libs/firestore/User';
import { Card } from 'libs/ui/Card';
import { PreWrapTypography } from 'libs/ui/PreWrapTypography';
import { UserAvatar } from 'libs/ui/UserAvatar';
import { useCallback, useState } from 'react';

type Props = {
  keibaId: string;
  uid: string;
  text: string | undefined;
  createdAt: Date;
  name: string;
  url: string;
  canDelete: boolean;
  currentUser: User;
};

export function PostCard({ keibaId, uid, text, createdAt, name, url, canDelete, currentUser }: Props) {
  const [show, setShow] = useState(true);

  const handleDelete = useCallback(() => {
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
          uid === currentUser.id &&
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
