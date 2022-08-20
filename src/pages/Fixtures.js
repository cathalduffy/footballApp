import React, { useEffect, useState, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Header from "../components/headerTeamList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { getFixturesByDate } from "../api/football-api";
import App from "../components/calendar";
import FixturesTable from "../components/fixturesTable";
import DropdownLeague from "../components/dropdownMenuLeague";

const useStyles = makeStyles({
  root: {
    padding: "60px",
  },
});

function Fixtures() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const classes = useStyles();
  const [fixtures, setFixtures] = useState([]);
  const [date, setDate] = useState(); //need this to set year in api endpoint
  const [leagueID, setLeagueID] = useState();

  const pull_data = (date) => {
    setDate(date);
  };

  const get_data = (data) => {
    setLeagueID(data);
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  useEffect(() => {
    getFixturesByDate(date,leagueID).then((json) => {
      setFixtures(json.response);
    });
  }, [date,leagueID]);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Fixtures"} />
        <App func={pull_data}></App>
        <br></br>
        <DropdownLeague func={get_data}></DropdownLeague>
        <br></br>
      </Grid>
      <Grid item xs={7} container spacing={1}>
        <FixturesTable fixtures={fixtures}></FixturesTable>
      </Grid>
    </Grid>
  );
}

export default Fixtures;
