import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

export function LoginButton() {
  const router = useRouter();

  return (
    <Button color="inherit" onClick={() => router.push('/login')}>
      Login
    </Button>
  );
}
