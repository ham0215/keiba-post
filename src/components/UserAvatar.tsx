import Avatar from '@material-ui/core/Avatar';

type UserAvatar = {
  name: string | null | undefined,
  photoUrl: string | null | undefined
}

export default function UserAvatar({ name, photoUrl }: UserAvatar) {
  if (!name) return <Avatar aria-label="avatar" />

  const avatarProps = photoUrl ? { src: photoUrl } : {};

  return (
    <Avatar aria-label="avatar" {...avatarProps}>
      { name.length >= 1 ? name.slice(0, 1) : null}
    </Avatar >
  );
}
