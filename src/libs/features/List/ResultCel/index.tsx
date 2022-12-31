import { useState, useCallback } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from 'libs/ui/AvatarGroup';
import TableCell from '@mui/material/TableCell';
import { ResultModal } from '../ResultModal';

type Props = {
  name: string;
  bets: string[];
  results: number[];
  onClickToDetail: () => void;
};

export function ResultCel({ name, bets, results, onClickToDetail }: Props) {
  const [openResult, setOpenResult] = useState(false);
  const winners = bets.filter((bet, index) => results[index] > 0);
  const winnerResults = results.filter((result) => result > 0);
  const hasWinners = winners.length > 0;
  const onClickResults = useCallback(() => setOpenResult(!openResult), [openResult]);

  return (
    <TableCell onClick={hasWinners ? onClickResults : onClickToDetail}>
      {hasWinners ? (
        <>
          <AvatarGroup max={10}>
            {winners.map((bet, index) => (
              <Avatar key={index} src={bet} sx={{ width: 24, height: 24 }} />
            ))}
          </AvatarGroup>
          <ResultModal
            name={name}
            winners={winners}
            winnerResults={winnerResults}
            open={openResult}
            setOpen={setOpenResult}
          />
        </>
      ) : (
        <>的中なし</>
      )}
    </TableCell>
  );
}
