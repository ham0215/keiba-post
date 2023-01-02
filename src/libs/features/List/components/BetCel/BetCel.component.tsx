import Avatar from '@mui/material/Avatar';
import TableCell from '@mui/material/TableCell';
import { AvatarGroup } from 'libs/ui/AvatarGroup';

type Props = {
  bets: string[];
  onClick: () => void;
};

export function BetCel({ bets, onClick }: Props) {
  return (
    <TableCell onClick={onClick}>
      <AvatarGroup max={10}>
        {bets.map((bet, index) => (
          <Avatar key={index} src={bet} sx={{ width: 24, height: 24 }} />
        ))}
      </AvatarGroup>
    </TableCell>
  );
}
