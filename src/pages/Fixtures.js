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
  const [date, setDate] = useState(2022); //need this to set year in api endpoint

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  useEffect(() => {
    getFixturesByDate().then((json) => {
      setFixtures(json.response);
    });
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Fixtures"} />
        <App></App>
        <br></br>
        <br></br>
      </Grid>
      <Grid item container spacing={5}>
        <FixturesTable fixtures={fixtures}></FixturesTable>
      </Grid>
    </Grid>
  );
}

export default Fixtures;
