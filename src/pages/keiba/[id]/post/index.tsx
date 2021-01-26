import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styled from 'styled-components'
import TextField from '../../../../components/TextField';
import Button from '../../../../components/Button';

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

  const onClickCancel = useCallback(() => {
    router.push(`/keiba/${id}`)
  }, [id, router]);

  const onClickPost = useCallback((data) => {
    router.push({ pathname: `/keiba/${id}`, query: { text: data.keibaText } });
  }, [id, router]);

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
