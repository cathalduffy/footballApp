import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { makeStyles } from "@material-ui/core/styles";
import TeamTable from "../teamPageTable/";

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  gridList: {
    width: 300,
    height: "100vh",
  },
}));

const TeamDetails = (props) => {
  const classes = useStyles();
  const teams = props.teams;

  return (
    <>
      <Typography variant="h4" component="h3">
        Team Overview
      </Typography>
      <Grid container spacing={8} style={{ padding: "60px" }}>
        <Grid item xs={3}>
          <div className={classes.root}>
            <ImageList rowHeight={300} className={classes.gridList} cols={1}>
              <ImageListItem
                key={teams.team.logo}
                className={classes.gridListTile}
                cols={1}
              >
                <img src={teams.team.logo} alt={teams.team.logo} />
              </ImageListItem>
              <ImageListItem
                key={teams.venue.image}
                className={classes.gridListTile}
                cols={1}
              >
                <img src={teams.venue.image} alt={teams.venue.image} />
              </ImageListItem>
            </ImageList>
          </div>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6" component="p">
            {teams.league.season}
            <br></br>
          </Typography>
          <Typography variant="h3" component="p">
            {teams.team.name}
            <br></br>
            <br></br>
          </Typography>
          <Grid key={teams.id} item xs={12}>
          <TeamTable key={teams.id} name={teams.team.name} country={teams.team.country} founded={teams.team.founded} stadium={teams.venue.name} capacity={teams.venue.capacity} city={teams.venue.city}/>
        </Grid>
          <div className={classes.chipRoot}>
            <Paper component="ul" className={classes.chipSet}>
              <li>
                <Chip
                  label="Points"
                  className={classes.chipLabel}
                  color="primary"
                />
              </li>
              <li key={teams.team.id}>
                <Chip label={teams.team.id} className={classes.chip} />
              </li>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default TeamDetails;
