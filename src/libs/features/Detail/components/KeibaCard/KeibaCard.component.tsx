import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Props } from 'data/KeibaCalendar';
import { Card } from 'libs/ui/Card';
import { Link } from 'libs/ui/Link';

import * as Styles from './KeibaCard.styles';

export function KeibaCard({ date, big, name, tag }: Props) {
  return (
    <>
      <Styles.Back>
        <Link href={`/keiba?tag=${tag}`}>
          <ArrowBackIosIcon />
          レース一覧へ
        </Link>
      </Styles.Back>
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
