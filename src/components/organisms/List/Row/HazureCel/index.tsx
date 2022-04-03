import Avatar from '@mui/material/Avatar';
import AvatarGroup from 'components/atoms/AvatarGroup';
import TableCell from '@mui/material/TableCell';

type Props = {
  bets: string[];
  results: number[];
  onClickToDetail: () => void;
};

export default function ResultCel({ bets, results, onClickToDetail }: Props) {
  const notWinners = bets.filter((bet, index) => results[index] === 0);
  const hasNotWinners = notWinners.length > 0;

  return (
    <TableCell onClick={onClickToDetail}>
      {hasNotWinners ? (
        <>
          <AvatarGroup max={10}>
            {notWinners.map((bet, index) => (
              <Avatar key={index} src={bet} sx={{ width: 24, height: 24 }} />
            ))}
          </AvatarGroup>
        </>
      ) : (
        <>全員的中</>
      )}
    </TableCell>
  );
}
