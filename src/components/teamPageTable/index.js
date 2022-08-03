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
      <Table sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><b>Team</b></TableCell>
            <TableCell><b>Details</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>{props.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>{props.country}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Founded</TableCell>
            <TableCell>{props.founded}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Stadium</TableCell>
            <TableCell>{props.stadium}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Stadium Capacity</TableCell>
            <TableCell>{props.capacity}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
