import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();

  return (
    <div>
      <main>
        <img src="/favicon.ico" alt="keiba post" />

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
