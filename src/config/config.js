import axios from 'axios' ;

const jokes = axios.create ({

  baseURL: 'https://alpha-vantage.p.rapidapi.com',
  params: {
    interval: '5min',
    function: 'TIME_SERIES_INTRADAY',
    symbol: 'MSFT',
    datatype: 'json',
    output_size: 'compact'
  },
  headers: {
    'X-RapidAPI-Key': '302cd61007mshfdff15e989590edp19dc3fjsnc51dd2dc6573',
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  }
  });

  export default jokes