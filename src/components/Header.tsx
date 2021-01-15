import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router';

const Header = styled.header`
  flex-grow: 1;
`;

const MenuButton = styled(IconButton)`
  margin-right: 2px;
`;

const Title = styled(Typography)`
  flex-grow: 1;
`;

export default function ButtonAppBar() {
  const router = useRouter();

  return (
    <Header>
      <AppBar position="static">
        <Toolbar>
          <MenuButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </MenuButton>
          <Title variant="h6">
            <span onClick={() => router.push('/')}>Keiba Post</span>
          </Title>
          <Button color="inherit" onClick={() => router.push('/login')} > Login</Button>
        </Toolbar>
      </AppBar>
    </Header>
  );
}