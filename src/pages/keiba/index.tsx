import React, { useContext } from 'react';
import List from './List'
import { UserContext } from '../../UserContext';
import Pleaselogin from '../../components/Pleaselogin';

export default function Keiba() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) return (<Pleaselogin />);

  return (<List />);
}
