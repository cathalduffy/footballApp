import React, {useState, useEffect}  from "react";
import Header from "../components/headerTeamList";
import TeamDetails from "../components/teamDetails";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { getTeam } from "../api/football-api";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";


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
const classes = useStyles();
const { id } = useParams();
const [team, setTeam] = useState(null);
const [user, loading, error] = useAuthState(auth);
const navigate = useNavigate();

useEffect(() => {
  getTeam(id).then((team) => {
    setTeam(team);
  });
}, [id]);

useEffect(() => {
  if (loading) return;
  if (!user) return navigate("/");
}, [user, loading]);

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