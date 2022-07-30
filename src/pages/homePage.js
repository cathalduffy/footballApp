import React from "react";
import Header from "../components/headerTeamList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TeamList from "../components/teamList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const TeamListPage = (props) => {
  const classes = useStyles();
  const sample = props.sample;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Home Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <TeamList teams={sample}></TeamList>
      </Grid>
    </Grid>
  );
};
export default TeamListPage;