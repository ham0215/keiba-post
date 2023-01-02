import { useContext } from 'react';
import { UserContext } from 'libs/hooks/UserContext';
import { PleaseLogin } from 'libs/features/PleaseLogin';
import { PostKeiba } from 'libs/features/PostKeiba';

export default function Post() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser || !currentUser.enabled) return <PleaseLogin />;

  return <PostKeiba currentUser={currentUser} />;
}
