import React from "react";
import Team from "../teamCard/";
import Grid from "@material-ui/core/Grid";

const TeamList = (props) => {
  let teamCards = props.teams.league.standings[0].map((m) => (
    <Grid key={m.team.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Team key={m.team.id} team={m} />
    </Grid>
  ));
  console.log(teamCards);
  return teamCards;
};

export default TeamList;
