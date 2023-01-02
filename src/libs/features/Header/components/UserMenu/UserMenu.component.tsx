import { useState, useRef, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from 'firebaseApp';
import { UserContext } from 'libs/hooks/UserContext';
import { UserAvatar } from 'libs/ui/UserAvatar';

const MenuButton = styled(IconButton)`
  margin-right: 2px;
`;

export function UserMenu() {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const menuButtonRef = useRef(null);

  const { currentUser } = useContext(UserContext);

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleProfile = useCallback(() => {
    setOpen(false);
    router.push('/profile');
  }, [router]);

  const handleLogout = useCallback(() => {
    setOpen(false);
    const auth = getAuth(firebaseApp);
    signOut(auth);
  }, []);

  return (
    <>
      {currentUser ? (
        <>
          <MenuButton edge="start" color="inherit" aria-label="menu" onClick={handleClick} ref={menuButtonRef}>
            <UserAvatar url={currentUser.url} />
          </MenuButton>
          <Menu anchorEl={menuButtonRef.current} keepMounted open={open} onClose={handleClose}>
            <MenuItem onClick={handleProfile}>Profile</MenuItem>
            <MenuItem color="inherit" onClick={handleLogout}>
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Button color="inherit" onClick={() => router.push('/login')}>
          Login
        </Button>
      )}
    </>
  );
}
