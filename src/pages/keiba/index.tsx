import React, { useContext } from 'react';
import Pleaselogin from 'components/PleaseLogin';
import { UserContext } from 'UserContext';
import List from './List';
import Rule from './Rule';

export default function Keiba() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) return (<Pleaselogin />);

  return (
    <>
      <Rule />
      <List />
    </>
  );
}
