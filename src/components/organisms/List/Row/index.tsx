import { useCallback } from 'react';
import { useRouter } from 'next/router';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Badge from '@mui/material/Badge';
import BetCel from './BetCel';
import ResultCel from './ResultCel';

type Props = {
  id: number;
  date: string;
  big: boolean;
  name: string;
  tag: string;
  bets: string[];
  results: number[];
};

export default function Row({ id, date, big, name, tag, bets, results }: Props) {
  const router = useRouter();

  const onClickToDetail = useCallback(
    () => router.push({ pathname: `/keiba/${id}`, query: { tag } }),
    [id, router, tag]
  );
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
      {hasResults ? (
        <ResultCel name={name} bets={bets} results={results} onClickToDetail={onClickToDetail} />
      ) : (
        <BetCel bets={bets} onClick={onClickToDetail} />
      )}
    </TableRow>
  );
}
