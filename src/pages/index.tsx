import { useContext } from 'react';
import { Top } from 'libs/features/Top';
import { PleaseLogin } from 'libs/features/PleaseLogin';
import { UserContext } from 'libs/hooks/UserContext';

export default function TopPage() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser || !currentUser.enabled) return <PleaseLogin />;

  return <Top currentUser={currentUser} />;
}
