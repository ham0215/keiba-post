import React, { useContext } from 'react';
import Pleaselogin from 'components/PleaseLogin';
import { UserContext } from 'UserContext';
import List from 'components/List';
import Rule from 'components/Rule';

export default function Keiba() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) return <Pleaselogin />;

  return (
    <>
      <Rule />
      <List />
    </>
  );
}
