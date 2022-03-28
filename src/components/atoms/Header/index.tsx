import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'components/atoms/Link';
import UserMenu from './UserMenu';

const Header = styled.header`
  flex-grow: 1;
  background-color: green;
  color: #fff;
`;

const Title = styled(Typography)`
  flex-grow: 1;
`;

export default function ButtonAppBar() {
  return (
    <Header>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Title variant="h6">
            <Link href="/">Keiba Post</Link>
          </Title>
          <UserMenu />
        </Toolbar>
      </AppBar>
    </Header>
  );
}
