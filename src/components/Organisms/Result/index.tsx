import { useState, useContext, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
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
    register,
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

  const onClickPost = useCallback(
    async (data) => {
      if (!currentUser) return;
      if (typeof id !== 'string') return;

      await updataPost({
        keibaId: id,
        uid: currentUser.id,
        name: currentUser.name,
        url: currentUser.url,
        text: data.keibaText,
        createdAt: new Date(),
      });
      router.push({ pathname: `/keiba/${id}` });
    },
    [currentUser, id, router]
  );

  if (!currentUser) return <Error />;

  return (
    <>
      <form onSubmit={handleSubmit(onClickPost)}>
        {bets.map((bet, index) => (
          <TextField
            key={index}
            id={bet}
            name={bet}
            label={bet}
            multiline
            fullWidth
            variant="outlined"
            defaultValue=""
          />
        ))}
        <ButtonArea>
          <Button variant="outlined" onClick={onClickCancel}>
            キャンセル
          </Button>
          <Button type="submit" variant="contained" disabled={!isDirty || isSubmitted || !isValid}>
            更新
          </Button>
        </ButtonArea>
      </form>
    </>
  );
}
