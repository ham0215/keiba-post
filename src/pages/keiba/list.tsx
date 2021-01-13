import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { KeibaCalendar } from './KeibaCalendar'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>日付</TableCell>
            <TableCell>レース名</TableCell>
            <TableCell>場所</TableCell>
            <TableCell>条件</TableCell>
            <TableCell>コース</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {KeibaCalendar.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.place}</TableCell>
              <TableCell>{row.conditions}</TableCell>
              <TableCell>{row.course}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
