import React, { useState, useCallback } from 'react';
import styled from 'styled-components'
import { format } from 'date-fns';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PreWrapTypography from '../../../components/PreWrapTypography';
import UserAvatar from '../../../components/UserAvatar'
import { User } from '../../../firestore/User';

const CustomCard = styled(Card)`
  margin: 8px 8px 8px 8px;
`;

export default function PostCard({ text, user }: { text: string | undefined, user: User | null }) {
  const [show, setShow] = useState(true);

  const handleDelete = useCallback(() => {
    setShow(false);
  }, []);

  if (!show || !text || !user) return <div />;

  return (
    <CustomCard>
      <CardHeader
        avatar={<UserAvatar user={user} />}
        action={
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        }
        title={user.name}
        subheader={format(new Date(), 'yyyy-MM-dd HH:mm')}
      />
      <CardContent>
        <PreWrapTypography variant="body1">
          {text}
        </PreWrapTypography>
      </CardContent>
    </CustomCard>
  );
}
