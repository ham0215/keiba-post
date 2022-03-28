import { ReactNode, useContext } from 'react';
import { UserContext } from 'UserContext';
import Pleaselogin from './PleaseLogin';

type Props = {
  children: ReactNode;
};

export default function WithAuth({ children }: Props) {
  const { currentUser } = useContext(UserContext);
  if (!currentUser || !currentUser.enabled) return <Pleaselogin />;

  return <>{children}</>;
}
