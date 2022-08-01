import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function TeamTable(props) {
  console.log(props);
  // const team = props.team;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell align="right">Rank</TableCell>
            <TableCell align="right">League</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key="Name"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Name
            </TableCell>
            <TableCell align="right">{props.id}</TableCell>
            <TableCell align="right">abcdefghijklmno</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
