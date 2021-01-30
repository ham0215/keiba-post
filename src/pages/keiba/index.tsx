import React, { useContext } from 'react';
import List from './List'
import Pleaselogin from '../../components/PleaseLogin';
import { UserContext } from '../../UserContext';

export default function Keiba() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) return (<Pleaselogin />);

  return (<List />);
}
