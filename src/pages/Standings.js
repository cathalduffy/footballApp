import React, { useEffect, useState, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Header from "../components/headerTeamList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { getStandingsByLeague } from "../api/football-api";
import Menu from "../components/dropdownMenu";
import StandingsTable from "../components/standingsTable";

const useStyles = makeStyles({
  root: {
    padding: "60px",
  },
});

function Fixtures() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const classes = useStyles();
  const [standings, setStandings] = useState([]);
  const [year, setYear] = useState(2022);

  const pull_data = (data) => {
    setYear(data);
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  useEffect(() => {
    getStandingsByLeague(year).then((json) => {
      setStandings(json.response[0].league.standings[0]);
    });
  }, [year]);

  console.log("Page",standings)

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Standings"} />
        <Menu func={pull_data}></Menu>
        <br></br>
      </Grid>
      <Grid item xs={7} container spacing={1}>
        <StandingsTable standings={standings}></StandingsTable>
      </Grid>
    </Grid>
  );
}

export default Fixtures;