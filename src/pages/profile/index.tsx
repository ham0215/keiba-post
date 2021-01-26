import { useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styled from 'styled-components'
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import Error from '../../components/Error';
import { UserContext } from '../../UserContext';
import { updataUser } from '../../firestore/User';

const ButtonArea = styled.div`
  text-align: center;
`;

type FormInputType = {
  name: string;
  photoUrl: string;
};

export default function Profile() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormInputType>();

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const onClickCancel = useCallback(() => {
    router.push(`/`)
  }, [router]);

  const onClickPost = useCallback(async (data: FormInputType) => {
    if (!currentUser) return;
    if (!setCurrentUser) return;

    const updatedUser = await updataUser(
      currentUser.id,
      data.name,
      data.photoUrl
    );

    setCurrentUser(updatedUser);
    router.push(`/`)
  }, [currentUser, router, setCurrentUser]);

  if (!currentUser) return <Error />;

  return (
    <>
      <form onSubmit={handleSubmit(onClickPost)}>
        <TextField
          id="name"
          name="name"
          label="name"
          fullWidth
          required
          defaultValue={currentUser.name}
          inputProps={{ ref: register({ required: true }) }}
        />
        <TextField
          id="photoUrl"
          name="photoUrl"
          label="photoUrl"
          fullWidth
          required
          defaultValue={currentUser.photoUrl}
          inputProps={{ ref: register({ required: true }) }}
        />
        <ButtonArea>
          <Button variant="outlined" onClick={onClickCancel}>
            キャンセル
          </Button>
          <Button type="submit" variant="outlined" color="primary">
            更新
          </Button>
        </ButtonArea>
      </form>
    </>
  );
}
