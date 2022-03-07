import styled from '@emotion/styled';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'components/Link';
import Card from 'components/Card';
import { Props } from 'data/KeibaCalendar';

const Back = styled.div`
  padding: 8px;

  a {
    display: flex;
    align-items: center;
  }
`;

export default function KeibaCard({ date, big, name, tag }: Props) {
  return (
    <>
      <Back>
        <Link href={`/keiba?tag=${tag}`}>
          <ArrowBackIosIcon />
          レース一覧へ
        </Link>
      </Back>
      <Card>
        <List dense>
          <ListItem>
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary={date} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ConfirmationNumberIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CurrencyYenIcon />
            </ListItemIcon>
            <ListItemText primary={big ? '3,000円' : '1,000円'} />
          </ListItem>
        </List>
      </Card>
    </>
  );
}
