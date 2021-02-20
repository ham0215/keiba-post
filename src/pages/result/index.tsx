import { useContext } from 'react';
import Error from 'components/Error';
import ExternalLink from 'components/ExternalLink'
import { UserContext } from 'UserContext';

export default function Result() {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) return <Error />;

  return (
    <>
      <div>
        <ExternalLink href="https://public.flourish.studio/visualisation/1807679/" variant="body1">2020年前半戦</ExternalLink>
      </div>
      <div>
        <ExternalLink href="https://public.flourish.studio/visualisation/3919343/" variant="body1">2020年後半戦</ExternalLink>
      </div>
    </>
  );
}
