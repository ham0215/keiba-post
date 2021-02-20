import { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Error from 'components/Error';
import ExternalLink from 'components/ExternalLink';
import { Icon } from 'semantic-ui-react';
import ResultCard from './ResultCard';

import { UserContext } from 'UserContext';

export default function Result() {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) return <Error />;

  return (
    <>
      <ResultCard url="https://public.flourish.studio/visualisation/5349437/" title='2021年前半戦' winner='???' />
      <ResultCard url="https://public.flourish.studio/visualisation/3919343/" title='2020年後半戦' winner='natsu' />
      <ResultCard url="https://public.flourish.studio/visualisation/1807679/" title='2020年前半戦' winner='ham' />
    </>
  );
}
