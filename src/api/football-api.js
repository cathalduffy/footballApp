const APIKEY = process.env.REACT_APP_API_KEY;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": APIKEY,
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};

export const getTeams = (year, leagueID) => {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/standings/?season=${year}&league=${leagueID}`,
    options
  ).then((res) => res.json());
};

export const getTeam = (id) => {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/teams?id=${id}`,
    options
  ).then((res) => res.json());
};

export const getFixturesByDate = (date, leagueID) => {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${date}&league=${leagueID}&season=2022`,
    options
  ).then((res) => res.json());
};

export const getStandingsByLeague = (year,leagueID) => {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/standings?season=${year}&league=${leagueID}`,
    options
  ).then((res) => res.json());
};
