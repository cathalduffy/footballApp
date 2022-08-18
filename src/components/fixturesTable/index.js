import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// export default function FixturesTable({fixtures}) {
// console.log(props.teams.response);
// const homeTeam = props.teams.response[0].teams.home.name;
// const awayTeam = props.teams.response[0].teams.away.name;
// const goalsHome = props.teams.response[0].score.fulltime.home;
// const goalsAway = props.teams.response[0].score.fulltime.away;
// const response = props.teams.response;

const FixturesTable = ({ fixtures }) => {
  const fixturesTable = fixtures.map((fixture) => (
    <TableBody>
      <TableRow key={fixture.teams.name}>
        <TableCell>{fixture.teams.home.name}</TableCell>
        <TableCell>
          {fixture.score.fulltime.home} - {fixture.score.fulltime.away}
        </TableCell>
        <TableCell>{fixture.teams.away.name}</TableCell>
      </TableRow>
    </TableBody>
  ));
  console.log("Props ", fixtures);
  return (
    <>
      <TableContainer component={Paper}>
        <Table size="medium">
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
          {fixturesTable}
        </Table>
      </TableContainer>
    </>
  );
};

export default FixturesTable;
