import axios from 'axios';

const API_KEY = '6dd7f84eecbf350c5ed90153b2223c02';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  console.log(url);
  const request = axios.get(url); // request promise

  return {
    type: FETCH_WEATHER,
    payload: request     // before the request is attached to the payload 'react-promise' middleware will require the request promise to be returned
  }
}
