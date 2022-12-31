import { useContext, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useForm, useFieldArray } from 'react-hook-form';
import styled from '@emotion/styled';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { findBets, updataResults } from 'firestore/Keiba';
import TextField from 'libs/ui/TextField';
import Button from 'libs/ui/Button';
import Error from 'libs/features/Error';
import { UserContext } from 'UserContext';

const ButtonArea = styled.div`
  text-align: center;
`;

type FormInputType = {
  results: {
    bet: string;
    result: number;
  }[];
};

export default function Result() {
  const router = useRouter();
  const { id } = router.query;

  const {
    control,
    register,
    handleSubmit,
    formState: { isDirty, isSubmitted, isValid },
  } = useForm<FormInputType>({
    mode: 'all',
  });
  const { fields, replace } = useFieldArray({
    name: 'results',
    control,
  });

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      if (!id) return;
      if (typeof id !== 'string') return;
      if (!currentUser) return;

      const betsResults = await findBets(id);
      if (!betsResults || !betsResults.bets) return;

      const results = betsResults.bets.map((bet, index) => ({
        bet,
        result: betsResults.results ? betsResults.results[index] : 0,
      }));

      replace(results);
    })();
  }, [replace, currentUser, id]);

  const onClickCancel = useCallback(() => {
    router.push(`/keiba/${id}`);
  }, [id, router]);

  const onSubmit = useCallback(
    async (data: FormInputType) => {
      if (!id) return;
      if (typeof id !== 'string') return;
      if (!currentUser) return;

      await updataResults({
        keibaId: id,
        results: data.results.map((result) => result.result),
      });

      router.push({ pathname: `/keiba/${id}` });
    },
    [currentUser, id, router]
  );

  if (!currentUser) return <Error />;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <List sx={{ width: '100%', maxWidth: 360, margin: '0 auto', padding: 0 }}>
        {fields.map((field, index) => (
          <ListItem key={field.id} sx={{ padding: 0 }}>
            <ListItemAvatar>
              <Avatar alt={`result${index}`} src={field.bet} />
            </ListItemAvatar>
            <TextField
              variant="standard"
              type="number"
              fullWidth
              defaultValue={field.result}
              inputProps={{ ...register(`results.${index}.result`, { required: true, valueAsNumber: true, min: 0 }) }}
            />
          </ListItem>
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
