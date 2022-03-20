import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ResultModal from './ResultModal';

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
  const [openResult, setOpenResult] = useState(false);

  const onClickToDetail = useCallback(
    () => router.push({ pathname: `/keiba/${id}`, query: { tag } }),
    [id, router, tag]
  );
  const onClickResults = useCallback(() => setOpenResult(!openResult), [openResult]);
  const hasResults = results.length > 0;
  const winners = bets.filter((bet, index) => results[index] > 0);
  const winnerResults = results.filter((result) => result > 0);
  const hasWinners = winners.length > 0;

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
      <TableCell onClick={hasWinners ? onClickResults : onClickToDetail}>
        {!hasResults && (
          <AvatarGroupRow max={10}>
            {bets.map((bet, index) => (
              <Avatar key={index} src={bet} sx={{ width: 24, height: 24 }} />
            ))}
          </AvatarGroupRow>
        )}
        {hasResults &&
          (hasWinners ? (
            <>
              <AvatarGroupRow max={10}>
                {winners.map((bet, index) => (
                  <Avatar key={index} src={bet} sx={{ width: 24, height: 24 }} />
                ))}
              </AvatarGroupRow>
              <ResultModal
                name={name}
                winners={winners}
                winnerResults={winnerResults}
                open={openResult}
                setOpen={setOpenResult}
              />
            </>
          ) : (
            <div>的中なし</div>
          ))}
      </TableCell>
    </TableRow>
  );
}
