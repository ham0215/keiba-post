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
  results: number[];
};

const AvatarGroupRow = styled(AvatarGroup)`
  flex-direction: row;
`;

export default function Item({ id, date, big, name, tag, bets, results }: Props) {
  const router = useRouter();

  const onClickToDetail = () => router.push({ pathname: `/keiba/${id}`, query: { tag } });
  const onClickResults = () => router.push({ pathname: `/keiba/${id}`, query: { tag } });
  const hasResults = results.length > 0;

  return (
    <TableRow>
      <TableCell component="th" scope="row" onClick={onClickToDetail}>
        {date.substring(5)}
      </TableCell>
      <TableCell onClick={onClickToDetail}>
        {big ? (
          <Badge variant="dot" color="error">
            {name}
          </Badge>
        ) : (
          name
        )}
      </TableCell>
      <TableCell onClick={hasResults ? onClickResults : onClickToDetail}>
        <AvatarGroupRow max={10}>
          {bets.filter((bet, index) => (!hasResults || results[index] > 0)).map((bet, index) => (
            <Avatar key={index} src={bet} sx={{ width: 24, height: 24 }} />
          ))}
        </AvatarGroupRow>
      </TableCell>
    </TableRow>
  );
}
