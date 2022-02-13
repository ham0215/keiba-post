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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Badge from '@mui/material/Badge';
import Link from 'components/Link';
import { Props } from 'data/KeibaCalendar';

const CustomCard = styled(Card)`
  margin: 8px;
`;

const Back = styled.div`
  padding: 8px;

  a {
    display: flex;
    align-items: center;
  }
`;

export default function KeibaCard({ date, big, name, place, conditions, course, tag }: Props) {
  return (
    <>
      <Back>
        <Link href={`/keiba?tag=${tag}`}>
          <ArrowBackIosIcon />
          レース一覧へ
        </Link>
      </Back>
      <CustomCard>
        <CardContent>
          <List>
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
              {big ? (
                <Badge variant="dot" color="error">
                  <ListItemText primary={name} />
                </Badge>
              ) : (
                <ListItemText primary={name} />
              )}
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PlaceIcon />
              </ListItemIcon>
              <ListItemText primary={place} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={conditions} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AllInclusiveIcon />
              </ListItemIcon>
              <ListItemText primary={course} />
            </ListItem>
          </List>
        </CardContent>
      </CustomCard>
    </>
  );
}
