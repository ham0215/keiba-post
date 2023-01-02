import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { style } from './ResultModal.styles';

type Props = {
  name: string;
  winners: string[];
  winnerResults: number[];
  open: boolean;
  setOpen: (open: boolean) => void;
};

export function ResultModal({ name, winners, winnerResults, open, setOpen }: Props) {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          {`${name}の的中！`}
        </Typography>
        <List component="nav">
          {winners.map((bet, index) => (
            <ListItem disablePadding key={index}>
              <ListItemIcon>
                <Avatar key={index} src={bet} sx={{ width: 24, height: 24 }} />
              </ListItemIcon>
              <ListItemText primary={`${winnerResults[index].toLocaleString()}円`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
}
