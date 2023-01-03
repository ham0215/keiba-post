import { useRef } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useUserMenuPresenter } from './UserMenu.presenter';
import * as Styles from './UserMenu.styles';
import { UserAvatar } from 'libs/ui/UserAvatar';
import type { User } from 'libs/firestore/User';
import { LoginButton } from 'libs/ui/LoginButton';

type Props = {
  currentUser: User | null;
};

export function UserMenu({ currentUser }: Props) {
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
        <LoginButton />
      )}
    </>
  );
}
