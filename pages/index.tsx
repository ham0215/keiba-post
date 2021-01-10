import { useRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';

export default () => {
  const router = useRouter();

  return (
    <div>
      <main>
        <div>
          <span onClick={() => router.push('/hoge')}>Go to Hoge!!</span>
        </div>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  );
};
