import Avatar from '@material-ui/core/Avatar';
import firebase from '../firebase';

export default function UserAvatar({ user }: { user: firebase.User | null }) {
  let avatar;
  if (user?.photoURL) {
    avatar = (
      <Avatar aria-label="avatar" src={user.photoURL}>
        {user.displayName?.slice(0, 1)}
      </Avatar>
    );
  } else {
    avatar = (
      <Avatar aria-label="avatar">
        {user?.displayName?.slice(0, 1)}
      </Avatar>
    );
  }

  return avatar;
}
