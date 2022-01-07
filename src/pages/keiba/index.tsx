import React, { useContext } from 'react';
import Pleaselogin from 'components/PleaseLogin';
import { UserContext } from 'UserContext';
import NextRace from 'components/NextRace';
import List from 'components/List';
import ListHeader from 'components/ListHeader';

export default function Keiba() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) return <Pleaselogin />;

  return (
    <>
      <NextRace />
      <ListHeader />
      <List />
    </>
  );
}
