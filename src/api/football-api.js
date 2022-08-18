const APIKEY = process.env.REACT_APP_API_KEY

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': APIKEY,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

export const getTeams = year => {
    return fetch(
      `https://api-football-v1.p.rapidapi.com/v3/standings/?season=${year}&league=39`, options)
      .then(res => res.json())
  };

export const getTeam = id => {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/teams?id=${id}`, options
  ).then(res => res.json());
};

export const getFixtureByDate = date => {
  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${date}`, options
  ).then(res => res.json());
};



