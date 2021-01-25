import { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import firebase from '../../firebase';

const MenuButton = styled(IconButton)`
  margin-right: 2px;
`;

export default function Header({ user }: { user: firebase.User | null }) {
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

  const handleLogout = useCallback(() => {
    setOpen(false);
    firebase.auth().signOut()
  }, []);

  return (
    <>
      <MenuButton edge="start" color="inherit" aria-label="menu" onClick={handleClick} ref={menuButtonRef}>
        <MenuIcon />
      </MenuButton>
      <Menu anchorEl={menuButtonRef.current} keepMounted open={open} onClose={handleClose}>
        <MenuItem onClick={handleG1}>
          GI Racing
        </MenuItem>
        {user &&
          <MenuItem color="inherit" onClick={handleLogout}>
            Logout
          </MenuItem>
        }
      </Menu>
    </>
  );
}