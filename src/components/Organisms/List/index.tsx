import { useState } from 'react';
import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Item from './Item';
import Header from './Header';
import NextRace from './NextRace';
import { KeibaCalendar, currentTag } from 'data/KeibaCalendar';

const StyledHeader = styled(TableHead)`
  background-color: lightgray;
`;

export default function List() {
  const [tag, setTag] = useState(currentTag);

  return (
    <>
      <Header tag={tag} setTag={setTag} />
      <NextRace tag={tag} />
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
            {KeibaCalendar.filter((row) => row.tag === tag).map((row) => (
              <Item key={row.id} {...row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
