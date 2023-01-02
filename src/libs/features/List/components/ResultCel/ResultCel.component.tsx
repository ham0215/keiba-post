import Avatar from '@mui/material/Avatar';
import { AvatarGroup } from 'libs/ui/AvatarGroup';
import TableCell from '@mui/material/TableCell';
import { ResultModal } from '../ResultModal';
import { useResultCelPresenter } from './ResultCel.presenter';

type Props = {
  name: string;
  bets: string[];
  results: number[];
  onClickToDetail: () => void;
};

export function ResultCel({ name, bets, results, onClickToDetail }: Props) {
  const { openResult, setOpenResult, winners, winnerResults, hasWinners, handleClickResults } = useResultCelPresenter({
    bets,
    results
  });

  return (
    <TableCell onClick={hasWinners ? handleClickResults : onClickToDetail}>
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
