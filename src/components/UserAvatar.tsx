import Avatar from '@material-ui/core/Avatar';
import { User } from '../firestore/User';

export default function UserAvatar({ user }: { user: User | null }) {
  let avatar;
  if (user?.photoUrl) {
    avatar = (
      <Avatar aria-label="avatar" src={user.photoUrl}>
        {user.name?.slice(0, 1)}
      </Avatar>
    );
  } else {
    avatar = (
      <Avatar aria-label="avatar">
        {user?.name?.slice(0, 1)}
      </Avatar>
    );
  }

  return avatar;
}
