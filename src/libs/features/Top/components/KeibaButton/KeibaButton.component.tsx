import { useContext } from 'react';
import { GiHorseHead } from 'react-icons/gi';
import * as Styles from './KeibaButton.styles';
import { Link } from 'libs/ui/Link';
import { UserContext } from 'libs/hooks/UserContext';

export function KeibaButton() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      {currentUser && currentUser.enabled && (
        <Link href="/keiba">
          <Styles.Button variant="contained" color="success">
            <GiHorseHead />
            レース選択
            <GiHorseHead />
          </Styles.Button>
        </Link>
      )}
    </>
  );
}
