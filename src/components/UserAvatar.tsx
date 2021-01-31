import Avatar from '@material-ui/core/Avatar';

type UserAvatar = {
  name: string | null | undefined
}

export default function UserAvatar({ name }: UserAvatar) {
  if (!name) return <Avatar aria-label="avatar" />

  return (
    <Avatar aria-label="avatar">
      { name.length >= 1 ? name.slice(0, 1) : null}
    </Avatar >
  );
}
