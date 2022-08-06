import React, {useState, useEffect}  from "react";
import Header from "../components/headerTeamList/";
import TeamDetails from "../components/teamDetails/";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: "100vh",
  },
}));

const TeamDetailsPage = (props) => {
//  const sample = props.sample;
const classes = useStyles();
const { id } = useParams();
const [team, setTeam] = useState(null);

useEffect(() => {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1be2b2759emshb78e8166f2966bbp18caa5jsn412b63e85da2',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };
  fetch(
    `https://api-football-v1.p.rapidapi.com/v3/teams?id=${id}`, options
  )
    .then((res) => {
      return res.json();
    })
    .then((team) => {
      //console.log(team)
      setTeam(team);
    });
}, [id]);

  return (
    <>
      {team ? (
        <>
          <Header team={team} />
          <Grid container spacing={10} style={{ padding: "20px" }}>
            <Grid item xl={3}>

            </Grid>
            <Grid item xs={11}>
              <TeamDetails team={team} />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default TeamDetailsPage;