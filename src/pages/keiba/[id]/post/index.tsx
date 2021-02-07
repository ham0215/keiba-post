import { useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styled from 'styled-components'
import TextField from '../../../../components/TextField';
import Button from '../../../../components/Button';
import Error from '../../../../components/Error';
import { updataPost } from '../../../../firestore/Post';
import { UserContext } from '../../../../UserContext';

const ButtonArea = styled.div`
  text-align: center;
`;

type FormInputType = {
  keibaText: string;
};

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const { register, handleSubmit } = useForm<FormInputType>();

  const { currentUser } = useContext(UserContext);

  const onClickCancel = useCallback(() => {
    router.push(`/keiba/${id}`)
  }, [id, router]);

  const onClickPost = useCallback(async (data) => {
    if (!currentUser) return;
    if (typeof id !== 'string') return;

    await updataPost({
      keibaId: id,
      uid: currentUser.id,
      type: 'text',
      text: data.keibaText,
      image: '',
      createdAt: new Date(),
    });
    router.push({ pathname: `/keiba/${id}` });
  }, [currentUser, id, router]);

  if (!currentUser) return <Error />;

  return (
    <>
      <form onSubmit={handleSubmit(onClickPost)}>
        <TextField
          id="keibaText"
          name="keibaText"
          label="予想"
          multiline
          fullWidth
          rows={10}
          variant="outlined"
          inputProps={{ ref: register({ required: true }) }}
        />
        <ButtonArea>
          <Button variant="outlined" onClick={onClickCancel}>
            キャンセル
          </Button>
          <Button type="submit" variant="outlined" color="primary">
            投稿
          </Button>
        </ButtonArea>
      </form>
    </>
  );
}
