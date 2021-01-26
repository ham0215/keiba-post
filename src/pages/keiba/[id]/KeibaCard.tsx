import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PlaceIcon from '@material-ui/icons/Place';
import InfoIcon from '@material-ui/icons/Info';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import { KeibaCalendar } from '../../../data/KeibaCalendar'
import Error from '../../../components/Error';

const CustomCard = styled(Card)`
  margin: 8px 8px 8px 8px;
`;

export default function KeibaCard({ keibaId }: { keibaId: number }) {
  const keiba = KeibaCalendar.find(item => item.id === keibaId);
  if (!keiba) return (<Error />);

  return (
    <CustomCard>
      <CardContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary={keiba.date} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ConfirmationNumberIcon />
            </ListItemIcon>
            <ListItemText primary={keiba.name} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
            <ListItemText primary={keiba.place} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={keiba.conditions} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AllInclusiveIcon />
            </ListItemIcon>
            <ListItemText primary={keiba.course} />
          </ListItem>
        </List>
      </CardContent>
    </CustomCard>
  );
}
