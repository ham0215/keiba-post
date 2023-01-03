import { useContext } from 'react';
import { Profile } from 'libs/features/Profile';
import { PleaseLogin } from 'libs/features/PleaseLogin';
import { UserContext } from 'libs/hooks/UserContext';

export default function ProfilePage() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser || !currentUser.enabled) return <PleaseLogin />;

  return <Profile currentUser={currentUser} />;
}
