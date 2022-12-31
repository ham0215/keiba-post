import { ReactNode, useContext } from 'react';
import { UserContext } from 'libs/hooks/UserContext';
import PleaseLogin from './PleaseLogin';

type Props = {
  children: ReactNode;
};

export default function WithAuth({ children }: Props) {
  const { currentUser } = useContext(UserContext);
  if (!currentUser || !currentUser.enabled) return <PleaseLogin />;

  return <>{children}</>;
}
