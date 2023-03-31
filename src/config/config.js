import axios from 'axios' ;

const jokes = axios.create ({

  baseURL: 'https://api-nba-v1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '302cd61007mshfdff15e989590edp19dc3fjsnc51dd2dc6573',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
  });

  export default jokes