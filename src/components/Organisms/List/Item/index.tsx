import { useRouter } from 'next/router';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

type Props = {
  id: number;
  date: string;
  big: boolean;
  name: string;
  posts: Post[];
};

type Post = {
  uid: string;
  name: string;
  url: string;
};

export default function Item({ id, date, big, name, posts }: Props) {
  const router = useRouter();

  return (
    <TableRow onClick={() => router.push(`/keiba/${id}`)}>
      <TableCell component="th" scope="row">
        {date}
      </TableCell>
      <TableCell>
        {big ? (
          <Badge variant="dot" color="error">
            {name}
          </Badge>
        ) : (
          name
        )}
      </TableCell>
      <TableCell>
        <AvatarGroup max={10}>
          {posts.map((post) => (
            <Avatar key={post.uid} alt={post.name} src={post.url} />
          ))}
        </AvatarGroup>
      </TableCell>
    </TableRow>
  );
}
