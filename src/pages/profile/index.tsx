import { useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';
import Error from 'components/Error';
import Card from 'components/Card';
import { UserContext } from 'UserContext';
import { setUser } from 'firestore/User';

const ButtonArea = styled.div`
  text-align: center;
`;

type FormInputType = {
  name: string;
};

export default function Profile() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isDirty, isSubmitted, isValid, errors },
  } = useForm<FormInputType>({
    mode: 'all',
  });

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const onClickCancel = useCallback(() => {
    router.push('/');
  }, [router]);

  const onClickPost = useCallback(
    async (data: FormInputType) => {
      if (!currentUser) return;
      if (!setCurrentUser) return;

      const updatedUser = await setUser({
        id: currentUser.id,
        name: data.name,
        url: currentUser.url,
        enabled: currentUser.enabled,
      });

      setCurrentUser(updatedUser);
      router.push('/');
    },
    [currentUser, router, setCurrentUser]
  );

  if (!currentUser) return <Error />;

  return (
    <Card>
      <form onSubmit={handleSubmit(onClickPost)}>
        <TextField
          id="name"
          name="name"
          label="Name"
          fullWidth
          required
          defaultValue={currentUser.name}
          inputProps={{ ...register('name', { required: true }) }}
        />
        {errors?.name && <Typography color="error">Name is required!!</Typography>}
        <ButtonArea>
          <Button variant="outlined" onClick={onClickCancel}>
            キャンセル
          </Button>
          <Button type="submit" variant="outlined" color="primary" disabled={!isDirty || isSubmitted || !isValid}>
            更新
          </Button>
        </ButtonArea>
      </form>
    </Card>
  );
}
