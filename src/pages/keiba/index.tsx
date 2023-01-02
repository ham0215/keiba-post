import { useContext } from 'react';
import List from 'libs/features/List';
import { PleaseLogin } from 'libs/features/PleaseLogin';
import { UserContext } from 'libs/hooks/UserContext';

export default function Keiba() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser || !currentUser.enabled) return <PleaseLogin />;

  return <List />;
}
