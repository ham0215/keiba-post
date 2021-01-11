import { useRouter } from 'next/router';
import Footer from '../components/Footer';

const Top = () => {
  const router = useRouter();

  return (
    <div>
      <main>
        <img src="/favicon.ico" alt="keiba post" />

        <div>
          <span onClick={() => router.push('/hoge')}>Go to Hoge!!</span>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Top;