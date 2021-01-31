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

const CustomCard = styled(Card)`
  margin: 8px 8px 8px 8px;
`;

type PostCard = {
  text: string | undefined,
  createdAt: Date,
  name: string | null | undefined,
}

export default function PostCard({ text, createdAt, name }: PostCard) {
  const [show, setShow] = useState(true);

  const handleDelete = useCallback(() => {
    setShow(false);
  }, []);

  if (!show || !text) return <div />;

  return (
    <CustomCard>
      <CardHeader
        avatar={<UserAvatar name={name} />}
        action={
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        }
        title={name}
        subheader={format(createdAt, 'yyyy-MM-dd HH:mm')}
      />
      <CardContent>
        <PreWrapTypography variant="body1">
          {text}
        </PreWrapTypography>
      </CardContent>
    </CustomCard>
  );
}
