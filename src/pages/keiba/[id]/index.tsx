import { useContext } from 'react';
import Detail from 'libs/features/Detail';
import { PleaseLogin } from 'libs/features/PleaseLogin';
import { UserContext } from 'libs/hooks/UserContext';

export default function DetailPage() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser || !currentUser.enabled) return <PleaseLogin />;

  return <Detail />;
}
