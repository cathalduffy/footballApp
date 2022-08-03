import React from "react";
import Header from "../components/headerTeamList/";
import TeamDetails from "../components/teamDetails/";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

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
console.log(props)
  const sample = props.sample;
  console.log(props.sample)

  return (
    <>
      {sample ? (
        <>
          <Header teams={sample} />
          <Grid container spacing={10} style={{ padding: "20px" }}>
            <Grid item xl={3}>

            </Grid>
            <Grid item xs={11}>
              <TeamDetails teams={sample} />
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