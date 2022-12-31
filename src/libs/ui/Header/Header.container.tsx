import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from 'libs/ui/Link';
import { UserMenu } from './components/UserMenu';
import * as Styles from './Header.styles';

export function Header() {
  return (
    <Styles.Container>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Styles.Title variant="h6">
            <Link href="/">Keiba Post</Link>
          </Styles.Title>
          <UserMenu />
        </Toolbar>
      </AppBar>
    </Styles.Container>
  );
}
