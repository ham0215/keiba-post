import { useEffect, useState } from 'react';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from '../Row';
import * as Styles from './Table.styles';
import { findKeibas, Keiba } from 'libs/firestore/Keiba';
import { KeibaCalendar } from 'data/KeibaCalendar';

export function Table({ tag }: { tag: string }) {
  const [keibas, setKeibas] = useState<Keiba[]>([]);

  useEffect(() => {
    (async () => {
      setKeibas(await findKeibas());
    })();
  }, []);

  return (
    <TableContainer component={Paper}>
      <MuiTable aria-label="keiba calendar">
        <Styles.Header>
          <TableRow>
            <TableCell>日付</TableCell>
            <TableCell>レース名</TableCell>
            <TableCell>的中 or 投票済</TableCell>
          </TableRow>
        </Styles.Header>
        <TableBody>
          {KeibaCalendar.filter((row) => row.tag === tag).map((row) => (
            <Row
              key={row.id}
              {...row}
              bets={keibas.find((keiba) => keiba.id === row.id)?.bets || []}
              results={keibas.find((keiba) => keiba.id === row.id)?.results || []}
            />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
