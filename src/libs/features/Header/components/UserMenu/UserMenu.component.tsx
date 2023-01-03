import { useRef } from 'react';
import { useRouter } from 'next/router';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useUserMenuPresenter } from './UserMenu.presenter';
import * as Styles from './UserMenu.styles';
import { UserAvatar } from 'libs/ui/UserAvatar';
import type { User } from 'libs/firestore/User';

type Props = {
  currentUser: User | null;
};

export function UserMenu({ currentUser }: Props) {
  const router = useRouter();
  const menuButtonRef = useRef(null);

  const { open, setOpen, handleLogout, handleProfile } = useUserMenuPresenter();

  return (
    <>
      {currentUser ? (
        <>
          <Styles.MenuButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
            ref={menuButtonRef}
          >
            <UserAvatar url={currentUser.url} />
          </Styles.MenuButton>
          <Menu anchorEl={menuButtonRef.current} keepMounted open={open} onClose={() => setOpen(false)}>
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
