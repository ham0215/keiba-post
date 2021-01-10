import Head from 'next/head';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>keiba post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <span onClick={() => router.push('/hoge')}>Go to Hoge!!</span>
        </div>
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
