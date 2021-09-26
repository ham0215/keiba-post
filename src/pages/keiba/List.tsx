import { useRouter } from 'next/router';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import { KeibaCalendar } from '../../data/KeibaCalendar';

const StyledHeader = styled(TableHead)`
  background-color: lightgray;
`;

export default function List() {
  const router = useRouter();

  return (
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
            <TableRow key={row.id} onClick={() => router.push(`/keiba/${row.id}`)}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell>
                {row.big ? (
                  <Badge variant="dot" color="error">
                    {row.name}
                  </Badge>
                ) : (
                  row.name
                )}
              </TableCell>
              <TableCell>{row.place}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
