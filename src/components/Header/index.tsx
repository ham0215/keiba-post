import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import Menu from './Menu';
import firebase from '../../firebase';
import { UserContext } from '../../UserContext';
import UserAvatar from '../../components/UserAvatar'

const Header = styled.header`
  flex-grow: 1;
  background-color: green;
  color: #fff;
`;

const Title = styled(Typography)`
  flex-grow: 1;
`;

export default function ButtonAppBar() {
  const router = useRouter();

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (setUser) {
        setUser(currentUser);
      }
    });
  }, [setUser]);

  let loginButton;
  if (user) {
    loginButton = <UserAvatar user={user} />;
  } else {
    loginButton = (
      <Button color="inherit" onClick={() => router.push('/login')}>
        Login
      </Button>
    );
  }

  return (
    <Header>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Menu user={user} />
          <Title variant="h6">
            <span onClick={() => router.push('/')}>Keiba Post</span>
          </Title>
          {loginButton}
        </Toolbar>
      </AppBar>
    </Header>
  );
}