import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const StandingsTable = ({ standings }) => {
  console.log("Standings table...", standings);
  const standingsTable = standings.map((standing) => (
    <TableBody>
      <TableRow key={standing.team.name}>
        <TableCell>{standing.rank}</TableCell>
        <Link to={`/team/${standing.team.id}`}>
          <TableCell>{standing.team.name}</TableCell>
        </Link>
        <TableCell>{standing.all.played}</TableCell>
        <TableCell>{standing.all.goals.for}</TableCell>
        <TableCell>{standing.all.goals.against}</TableCell>
        <TableCell>{standing.goalsDiff}</TableCell>
        <TableCell>{standing.points}</TableCell>
        <TableCell>{standing.form}</TableCell>
      </TableRow>
    </TableBody>
  ));
  return (
    <>
      <TableContainer component={Paper}>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Rank</b>
              </TableCell>
              <TableCell>
                <b>Team</b>
              </TableCell>
              <TableCell>
                <b>Games Played</b>
              </TableCell>
              <TableCell>
                <b>GF</b>
              </TableCell>
              <TableCell>
                <b>GA</b>
              </TableCell>
              <TableCell>
                <b>GD</b>
              </TableCell>
              <TableCell>
                <b>Points</b>
              </TableCell>
              <TableCell>
                <b>Form</b>
              </TableCell>
            </TableRow>
          </TableHead>
          {standingsTable}
        </Table>
      </TableContainer>
    </>
  );
};

export default StandingsTable;
