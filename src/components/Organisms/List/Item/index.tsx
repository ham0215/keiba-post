import { useRouter } from 'next/router';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Badge from '@mui/material/Badge';

type Props = {
  id: number;
  date: string;
  big: boolean;
  name: string;
  place: string;
};

export default function Item({ id, date, big, name, place }: Props) {
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
      <TableCell>{place}</TableCell>
    </TableRow>
  );
}
