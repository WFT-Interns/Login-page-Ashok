import axios from 'axios' ;

const jokes = axios.create ({

  baseURL: 'https://imdb8.p.rapidapi.com',
  params: {q: 'game of thr'},
  headers: {
    'X-RapidAPI-Key': '302cd61007mshfdff15e989590edp19dc3fjsnc51dd2dc6573',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
  });

  export default jokes