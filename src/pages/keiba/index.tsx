import { useRouter } from 'next/router';

const Top = () => {
  const router = useRouter();

  return (
    <div>
      <main>
        <img src="/favicon.ico" alt="keiba post" />

        <div>
          <span onClick={() => router.push('/')}>Go to Hoge!!</span>
        </div>
      </main>
    </div>
  );
};

export default Top;