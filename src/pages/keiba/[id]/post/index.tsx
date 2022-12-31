import { useState, useCallback, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { findPostText } from 'firestore/Keiba';
import TextField from 'libs/ui/TextField';
import Button from 'libs/ui/Button';
import WithAuth from 'libs/layouts/WithAuth';
import { updataPost } from 'firestore/Keiba';
import { UserContext } from 'UserContext';

const ButtonArea = styled.div`
  text-align: center;
`;

type FormInputType = {
  keibaText: string;
};

export default function Post() {
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

  const [postText, setPostText] = useState<string>('');

  useEffect(() => {
    (async () => {
      if (!id) return;
      if (typeof id !== 'string') return;
      if (!currentUser) return;

      const text = await findPostText(id, currentUser.id);
      if (!text) return;

      setPostText(text);
    })();
  }, [currentUser, id]);

  const onClickCancel = useCallback(() => {
    router.push(`/keiba/${id}`);
  }, [id, router]);

  const onClickPost = useCallback(
    async ({ keibaText }: { keibaText: string }) => {
      if (!currentUser) return;
      if (typeof id !== 'string') return;

      await updataPost({
        keibaId: id,
        uid: currentUser.id,
        name: currentUser.name,
        url: currentUser.url,
        text: keibaText,
        createdAt: new Date(),
      });
      router.push({ pathname: `/keiba/${id}` });
    },
    [currentUser, id, router]
  );

  return (
    <WithAuth>
      <form onSubmit={handleSubmit(onClickPost)}>
        <TextField
          id="keibaText"
          name="keibaText"
          label="予想"
          multiline
          fullWidth
          rows={10}
          variant="outlined"
          defaultValue={postText}
          inputProps={{ ...register('keibaText', { required: true }) }}
        />
        <ButtonArea>
          <Button variant="outlined" onClick={onClickCancel}>
            キャンセル
          </Button>
          <Button type="submit" variant="contained" disabled={!isDirty || isSubmitted || !isValid}>
            投稿
          </Button>
        </ButtonArea>
      </form>
    </WithAuth>
  );
}
