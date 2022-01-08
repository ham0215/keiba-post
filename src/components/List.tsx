import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListItem from 'components/ListItem';
import NextRace from 'components/NextRace';
import { KeibaCalendar } from 'data/KeibaCalendar';

const StyledHeader = styled(TableHead)`
  background-color: lightgray;
`;

export default function List() {
  return (
    <>
      <NextRace />
      <TableContainer component={Paper}>
        <Table aria-label="keiba calendar">
          <StyledHeader>
            <TableRow>
              <TableCell>日付</TableCell>
              <TableCell>レース名</TableCell>
              <TableCell>場所</TableCell>
            </TableRow>
          </StyledHeader>
          <TableBody>
            {KeibaCalendar.map((row) => (
              <ListItem key={row.id} {...row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
