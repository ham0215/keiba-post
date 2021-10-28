import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

export default function PleaseLogin() {
  const router = useRouter();

  return (
    <Button color="inherit" onClick={() => router.push('/login')}>
      Please Login!!!!
    </Button>
  );
}
