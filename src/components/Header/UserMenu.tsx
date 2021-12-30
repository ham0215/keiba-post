import { useState, useRef, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import firebaseApp from 'firebaseApp';
import { getAuth, signOut } from 'firebase/auth';
import { UserContext } from 'UserContext';
import UserAvatar from 'components/UserAvatar';

const MenuButton = styled(IconButton)`
  margin-right: 2px;
`;

export default function MenuComponent() {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(true);
  const menuButtonRef = useRef(null);

  const { currentUser } = useContext(UserContext);

  const handleClick = useCallback(() => {
    setOpen(true);
    setTooltipOpen(false);
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
      {currentUser ? (
        <>
          <Tooltip title="メニューはこちらに移動しました！" open={tooltipOpen} placement="bottom" arrow={true}>
            <MenuButton edge="start" color="inherit" aria-label="menu" onClick={handleClick} ref={menuButtonRef}>
              <UserAvatar url={currentUser.url} />
            </MenuButton>
          </Tooltip>
          <Menu anchorEl={menuButtonRef.current} keepMounted open={open} onClose={handleClose}>
            {currentUser.enabled && <MenuItem onClick={handleG1}>GI Racing</MenuItem>}
            {currentUser.enabled && <MenuItem onClick={handleResult}>Ranking</MenuItem>}
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
