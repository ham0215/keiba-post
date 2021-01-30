import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';

export default function PleaseLogin() {
  const router = useRouter();

  return (
    <Button color="inherit" onClick={() => router.push('/login')}>
      Please Login!!!!
    </Button>
  );
}
