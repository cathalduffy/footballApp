import React, { useState, useEffect, useContext} from "react"; 
import Header from "../components/headerTeamList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TeamList from "../components/teamList";
import { getTeams } from "../api/football-api";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const useStyles = makeStyles({
  root: {
    padding: "60px",
  },
});

const HomePage = (props) => {
  const classes = useStyles();
  const [teams, setTeams] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  useEffect(() => {
   getTeams().then((json) => {
      setTeams(json.response[0].league.standings[0])
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Home Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <TeamList teams={teams}></TeamList>
      </Grid>
    </Grid>
  );
};
export default HomePage;