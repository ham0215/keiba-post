import Avatar from '@mui/material/Avatar';

type UserAvatar = {
  name?: string;
  url?: string;
};

export function UserAvatar({ name, url }: UserAvatar) {
  if (url) {
    return <Avatar aria-label="avatar" src={url} />;
  } else if (name) {
    return (
      <Avatar aria-label="avatar">
        {name.length >= 1 ? name.slice(0, 1) : null}
      </Avatar>
    );
  }
  return <Avatar aria-label="avatar" />;
}
