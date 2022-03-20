import Avatar from '@mui/material/Avatar';
import AvatarGroup from 'components/AvatarGroup';
import TableCell from '@mui/material/TableCell';

type Props = {
  bets: string[];
  onClick: () => void;
};

export default function BetCel({ bets, onClick }: Props) {
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
