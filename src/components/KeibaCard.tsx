import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PlaceIcon from '@mui/icons-material/Place';
import InfoIcon from '@mui/icons-material/Info';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Badge from '@mui/material/Badge';
import { KeibaCalendar } from 'data/KeibaCalendar';
import Error from 'components/Error';

const CustomCard = styled(Card)`
  margin: 8px 8px 8px 8px;
`;

export default function KeibaCard({ keibaId }: { keibaId: number }) {
  const keiba = KeibaCalendar.find((item) => item.id === keibaId);
  if (!keiba) return <Error />;

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
            {keiba.big ? (
              <Badge variant="dot" color="error">
                <ListItemText primary={keiba.name} />
              </Badge>
            ) : (
              <ListItemText primary={keiba.name} />
            )}
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
