import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { findKeibas, Keiba } from 'libs/firestore/Keiba';
import Row from './Row';
import Header from './Header';
import NextRace from './NextRace';
import { KeibaCalendar, currentTag, tags } from 'data/KeibaCalendar';

const StyledHeader = styled(TableHead)`
  background-color: lightgray;
`;

export default function List() {
  const [keibas, setKeibas] = useState<Keiba[]>([]);

  useEffect(() => {
    (async () => {
      setKeibas(await findKeibas());
    })();
  }, []);

  const router = useRouter();
  const { tag } = router.query;
  const selectedTag = typeof tag === 'string' && tags.includes(tag) ? tag : currentTag;

  return (
    <>
      <Header tag={selectedTag} />
      <NextRace tag={selectedTag} />
      <TableContainer component={Paper}>
        <Table aria-label="keiba calendar">
          <StyledHeader>
            <TableRow>
              <TableCell>日付</TableCell>
              <TableCell>レース名</TableCell>
              <TableCell>的中 or 投票済</TableCell>
            </TableRow>
          </StyledHeader>
          <TableBody>
            {KeibaCalendar.filter((row) => row.tag === selectedTag).map((row) => (
              <Row
                key={row.id}
                {...row}
                bets={keibas.find((keiba) => keiba.id === row.id)?.bets || []}
                results={keibas.find((keiba) => keiba.id === row.id)?.results || []}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
