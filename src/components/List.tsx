import { useRouter } from 'next/router';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Badge from '@mui/material/Badge';
import { KeibaCalendar } from 'data/KeibaCalendar';

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
