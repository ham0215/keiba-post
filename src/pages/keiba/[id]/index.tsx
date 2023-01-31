import { Detail } from 'libs/features/Detail';
import { Error } from 'libs/features/Error';
import { PleaseLogin } from 'libs/features/PleaseLogin';
import { UserContext } from 'libs/hooks/UserContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';

export default function DetailPage() {
  const { currentUser } = useContext(UserContext);
  const router = useRouter();
  const { id } = router.query;

  if (!currentUser || !currentUser.enabled) return <PleaseLogin />;
  if (!id || typeof id !== 'string') return <Error />;

  return <Detail keibaId={id} currentUser={currentUser} />;
}
