import React from "react";
import Team from "../teamCard/";
import Grid from "@material-ui/core/Grid";

const TeamList = ({teams}) => {
  const teamList = teams.map(team => 
    <Grid key={team.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Team key={team.id} team={team} />
    </Grid>
    )
  return(
      <>
      {teamList}
      </>
  )

  // console.log(teamCards);
  // return teamCards;
};

export default TeamList;
