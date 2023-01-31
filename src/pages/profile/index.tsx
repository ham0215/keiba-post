import { PleaseLogin } from 'libs/features/PleaseLogin';
import { Profile } from 'libs/features/Profile';
import { UserContext } from 'libs/hooks/UserContext';
import { useContext } from 'react';

export default function ProfilePage() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser || !currentUser.enabled) return <PleaseLogin />;

  return <Profile currentUser={currentUser} />;
}
