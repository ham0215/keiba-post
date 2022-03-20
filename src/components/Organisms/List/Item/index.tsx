import { useRouter } from 'next/router';
import styled from '@emotion/styled';
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
  tag: string;
  bets: string[];
};

const AvatarGroupRow = styled(AvatarGroup)`
  flex-direction: row;
`;

export default function Item({ id, date, big, name, tag, bets }: Props) {
  const router = useRouter();

  return (
    <TableRow onClick={() => router.push({ pathname: `/keiba/${id}`, query: { tag } })}>
      <TableCell component="th" scope="row">
        {date.substring(5)}
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
        <AvatarGroupRow max={10}>
          {bets.map((bet, index) => (
            <Avatar key={index} src={bet} sx={{ width: 24, height: 24 }} />
          ))}
        </AvatarGroupRow>
      </TableCell>
    </TableRow>
  );
}
