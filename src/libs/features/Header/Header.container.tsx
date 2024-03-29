import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import type { User } from 'libs/firestore/User';
import { Link } from 'libs/ui/Link';

import { UserMenu } from './components/UserMenu';
import * as Styles from './Header.styles';

type Props = {
  currentUser: User | null;
};

export function Header({ currentUser }: Props) {
  return (
    <Styles.Container>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Styles.Title variant="h6">
            <Link href="/">Keiba Post</Link>
          </Styles.Title>
          <UserMenu currentUser={currentUser} />
        </Toolbar>
      </AppBar>
    </Styles.Container>
  );
}
