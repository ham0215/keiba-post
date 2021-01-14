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
        < KeibaButton variant="outlined" onClick={() => router.push(`/keiba/${id}`)}>
          キャンセル
        </KeibaButton>
        <KeibaButton variant="outlined" color="primary">
          投稿
        </KeibaButton>
      </ButtonArea>
    </>
  );
}
