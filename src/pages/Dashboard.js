import React, { useEffect, useState, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Header from "../components/headerTeamList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TeamList from "../components/teamList";
import { getTeams } from "../api/football-api";
import Menu from "../components/dropdownMenu";
import DropdownLeague from "../components/dropdownMenuLeague";

const useStyles = makeStyles({
  root: {
    padding: "60px",
  },
});

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const classes = useStyles();
  const [teams, setTeams] = useState([]);
  const [year, setYear] = useState(2022);
  const [leagueID, setLeagueID] = useState();

  const pull_data = (data) => {
    setYear(data);
  };

  const get_data = (data) => {
    setLeagueID(data);
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  useEffect(() => {
    getTeams(year,leagueID).then((json) => {
      setTeams(json.response[0].league.standings[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year,leagueID]);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Teams Dashboard"} />
        <DropdownLeague func={get_data}></DropdownLeague>
        <br></br>
        <Menu func={pull_data}></Menu>
      </Grid>
      <Grid item container spacing={5}>
        <TeamList teams={teams}></TeamList>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
