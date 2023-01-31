import Badge from '@mui/material/Badge';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { BetCel } from '../BetCel';
import { ResultCel } from '../ResultCel';
import { useRowPresenter } from './Row.presenter';

type Props = {
  id: string;
  date: string;
  big: boolean;
  name: string;
  tag: string;
  bets: string[];
  results: number[];
};

export function Row({ id, date, big, name, tag, bets, results }: Props) {
  const { handleClickToDetail, hasResults } = useRowPresenter({
    id,
    tag,
    results,
  });

  return (
    <TableRow>
      <TableCell component="th" scope="row" onClick={handleClickToDetail}>
        {date.substring(5)}
      </TableCell>
      <TableCell onClick={handleClickToDetail}>
        {big ? (
          <Badge variant="dot" color="error">
            {name}
          </Badge>
        ) : (
          name
        )}
      </TableCell>
      {hasResults ? (
        <ResultCel
          name={name}
          bets={bets}
          results={results}
          onClickToDetail={handleClickToDetail}
        />
      ) : (
        <BetCel bets={bets} onClick={handleClickToDetail} />
      )}
    </TableRow>
  );
}
