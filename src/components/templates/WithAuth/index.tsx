import React, { ReactNode, useContext } from 'react';
import Pleaselogin from 'components/PleaseLogin';
import { UserContext } from 'UserContext';

type Props = {
  children: ReactNode;
};

export default function WithAuth({ children }: Props) {
  const { currentUser } = useContext(UserContext);
  if (!currentUser || !currentUser.enabled) return <Pleaselogin />;

  return <>{children}</>;
}
