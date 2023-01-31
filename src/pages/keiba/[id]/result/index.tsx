import { Error } from 'libs/features/Error';
import { PleaseLogin } from 'libs/features/PleaseLogin';
import { Result } from 'libs/features/Result';
import { UserContext } from 'libs/hooks/UserContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';

export default function ResultPage() {
  const { currentUser } = useContext(UserContext);
  const router = useRouter();
  if (!currentUser || !currentUser.enabled) return <PleaseLogin />;

  const { id } = router.query;
  if (!id || typeof id !== 'string') return <Error />;

  return <Result keibaId={id} currentUser={currentUser} />;
}
