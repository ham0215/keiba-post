import { useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const KeibaTextField = styled(TextField)`
  margin: 10px 0 10px 0;
`;

const KeibaButton = styled(Button)`
  margin: 8px;
  width: 160px;
`;

const ButtonArea = styled.div`
  text-align: center;
`;

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const onClickCancel = useCallback(() => {
    router.push(`/keiba/${id}`)
  }, [id, router]);

  const onClickPost = useCallback(() => {
    router.push(`/keiba/${id}`)
  }, [id, router]);

  return (
    <>
      <KeibaTextField
        label="予想"
        multiline
        fullWidth
        rows={10}
        variant="outlined"
      />
      <ButtonArea>
        < KeibaButton variant="outlined" onClick={onClickCancel}>
          キャンセル
        </KeibaButton>
        <KeibaButton variant="outlined" color="primary" onClick={onClickPost}>
          投稿
        </KeibaButton>
      </ButtonArea>
    </>
  );
}
