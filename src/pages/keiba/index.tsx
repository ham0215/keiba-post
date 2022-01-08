import React, { useContext } from 'react';
import Pleaselogin from 'components/PleaseLogin';
import { UserContext } from 'UserContext';
import List from 'components/Organisms/List';

export default function Keiba() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) return <Pleaselogin />;

  return (
    <List />
  );
}
