import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { UserMenu } from './components/UserMenu';
import * as Styles from './Header.styles';
import { Link } from 'libs/ui/Link';

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
