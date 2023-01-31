import type { User } from 'libs/firestore/User';
import { Link } from 'libs/ui/Link';
import { GiHorseHead } from 'react-icons/gi';

import * as Styles from './KeibaButton.styles';

type Props = {
  currentUser: User;
};

export function KeibaButton({ currentUser }: Props) {
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
