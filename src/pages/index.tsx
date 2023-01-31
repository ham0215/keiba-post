import { PleaseLogin } from 'libs/features/PleaseLogin';
import { Top } from 'libs/features/Top';
import { UserContext } from 'libs/hooks/UserContext';
import { useContext } from 'react';

export default function TopPage() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser || !currentUser.enabled) return <PleaseLogin />;

  return <Top currentUser={currentUser} />;
}
