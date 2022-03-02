import { useState, useContext, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { findBets } from 'firestore/Keiba';
import TextField from 'components/TextField';
import Button from 'components/Button';
import Error from 'components/Error';
import { UserContext } from 'UserContext';

const ButtonArea = styled.div`
  text-align: center;
`;

type FormInputType = {
  keibaText: string;
};

export default function Result() {
  const router = useRouter();
  const { id } = router.query;

  const {
    handleSubmit,
    formState: { isDirty, isSubmitted, isValid },
  } = useForm<FormInputType>({
    mode: 'all',
  });

  const { currentUser } = useContext(UserContext);

  const [bets, setBets] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      if (!id) return;
      if (typeof id !== 'string') return;
      if (!currentUser) return;

      setBets(await findBets(id));
    })();
  }, [currentUser, id]);

  const onClickCancel = useCallback(() => {
    router.push(`/keiba/${id}`);
  }, [id, router]);

  const onClickPost = useCallback(async () => {
    if (!currentUser) return;

    router.push({ pathname: `/keiba/${id}` });
  }, [currentUser, id, router]);

  if (!currentUser) return <Error />;

  return (
    <form onSubmit={handleSubmit(onClickPost)}>
      <List sx={{ width: '100%', maxWidth: 360, margin: '0 auto', padding: 0 }}>
        {bets.map((bet, index) => (
          <>
            <ListItem sx={{ padding: 0 }}>
              <ListItemAvatar>
                <Avatar alt={`result${index}`} src={bet} />
              </ListItemAvatar>
              <TextField
                key={index}
                id={`result${index}`}
                name={`result${index}`}
                variant="standard"
                type="number"
                fullWidth
                defaultValue=""
              />
            </ListItem>
          </>
        ))}
      </List>
      <ButtonArea>
        <Button variant="outlined" onClick={onClickCancel}>
          キャンセル
        </Button>
        <Button type="submit" variant="contained" disabled={!isDirty || isSubmitted || !isValid}>
          更新
        </Button>
      </ButtonArea>
    </form>
  );
}
