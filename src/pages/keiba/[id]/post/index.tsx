import { Error } from 'libs/features/Error';
import { PleaseLogin } from 'libs/features/PleaseLogin';
import { PostKeiba } from 'libs/features/PostKeiba';
import { UserContext } from 'libs/hooks/UserContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';

export default function Post() {
  const { currentUser } = useContext(UserContext);
  const router = useRouter();
  if (!currentUser || !currentUser.enabled) return <PleaseLogin />;

  const { id } = router.query;
  if (!id || typeof id !== 'string') return <Error />;

  return <PostKeiba keibaId={id} currentUser={currentUser} />;
}
