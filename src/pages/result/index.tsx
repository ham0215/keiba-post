import { useContext } from 'react';
import Error from 'components/Error';
import ResultCard from './ResultCard';

import { UserContext } from 'UserContext';

export default function Result() {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) return <Error />;

  return (
    <>
      <ResultCard url="https://public.flourish.studio/visualisation/7367172/" title="2021年後半戦" winner="???" />
      <ResultCard url="https://public.flourish.studio/visualisation/5349437/" title="2021年前半戦" winner="t" />
      <ResultCard url="https://public.flourish.studio/visualisation/3919343/" title="2020年後半戦" winner="natsu" />
      <ResultCard url="https://public.flourish.studio/visualisation/1807679/" title="2020年前半戦" winner="ham" />
    </>
  );
}
