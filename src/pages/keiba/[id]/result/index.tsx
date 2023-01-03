import { useContext } from 'react';
import { Result } from 'libs/features/Result';
import { PleaseLogin } from 'libs/features/PleaseLogin';
import { UserContext } from 'libs/hooks/UserContext';

export default function ResultPage() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser || !currentUser.enabled) return <PleaseLogin />;

  return <Result currentUser={currentUser} />;
}
