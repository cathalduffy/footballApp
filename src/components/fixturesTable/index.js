import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function FixturesTable(props) {
  console.log(props.teams.response);
  const homeTeam = props.teams.response[0].teams.home.name;
  const awayTeam = props.teams.response[0].teams.away.name;
  const goalsHome = props.teams.response[0].score.fulltime.home;
  const goalsAway = props.teams.response[0].score.fulltime.away;

  const response = props.teams.response;

  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} size="large">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Home</b>
              </TableCell>
              <TableCell>
                <b>Score</b>
              </TableCell>
              <TableCell>
                <b>Away</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {response.map((opt) => (
                <TableRow key={opt.teams}>
                  <TableCell>
                  {opt.teams.home.name}
                  </TableCell>
              <TableCell>
                {opt.score.fulltime.home} - {opt.score.fulltime.away}
              </TableCell>
              <TableCell>{opt.teams.away.name}</TableCell>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}
