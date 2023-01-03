import { useContext } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from 'libs/hooks/UserContext';
import { PleaseLogin } from 'libs/features/PleaseLogin';
import { PostKeiba } from 'libs/features/PostKeiba';
import { Error } from 'libs/features/Error';

export default function Post() {
  const { currentUser } = useContext(UserContext);
  const router = useRouter();
  if (!currentUser || !currentUser.enabled) return <PleaseLogin />;

  const { id } = router.query;
  if (!id || typeof id !== 'string') return <Error />;

  return <PostKeiba keibaId={id} currentUser={currentUser} />;
}
