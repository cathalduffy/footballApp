import React, { useState, useEffect } from "react"; 
import Header from "../components/headerTeamList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TeamList from "../components/teamList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const HomePage = (props) => {
  const classes = useStyles();
  const [teams, setTeams] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1be2b2759emshb78e8166f2966bbp18caa5jsn412b63e85da2',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch('https://api-football-v1.p.rapidapi.com/v3/standings/?season=2021&league=39', options)
    .then((res) => res.json())
    .then((json) => {
      console.log(json.response[0].league.standings[0])
      setTeams(json.response[0].league.standings[0])
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

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