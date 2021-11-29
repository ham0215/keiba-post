import { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import firebaseApp from 'firebaseApp';
import { getAuth, signOut } from 'firebase/auth';
import { User } from 'firestore/User';

const MenuButton = styled(IconButton)`
  margin-right: 2px;
`;

export default function Header({ user }: { user: User | null }) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const menuButtonRef = useRef(null);

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleG1 = useCallback(() => {
    setOpen(false);
    router.push('/keiba');
  }, [router]);

  const handleResult = useCallback(() => {
    setOpen(false);
    router.push('/result');
  }, [router]);

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
      <MenuButton edge="start" color="inherit" aria-label="menu" onClick={handleClick} ref={menuButtonRef}>
        <MenuIcon />
      </MenuButton>
      {user && (
        <Menu anchorEl={menuButtonRef.current} keepMounted open={open} onClose={handleClose}>
          {user.enabled && <MenuItem onClick={handleG1}>GI Racing</MenuItem>}
          {user.enabled && <MenuItem onClick={handleResult}>Ranking</MenuItem>}
          <MenuItem onClick={handleProfile}>Profile</MenuItem>
          <MenuItem color="inherit" onClick={handleLogout}>
            Logout
          </MenuItem>
        </Menu>
      )}
    </>
  );
}
