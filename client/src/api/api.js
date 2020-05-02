import axios from 'axios';

const CITY_PATH = '/api/v1/city/cities';
const WEATHER_PATH = '/api/v1/current-weather/city';

const instance = axios.create({
    baseURL: process.env.baseURL || process.env.REACT_APP_BASE_URL,
    timeout: 20000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    city: function (query) {
        return instance.get(CITY_PATH, {
            params: {
                ...query
            }
        });
    },
    weather: function(cityname) {
        return instance.get(WEATHER_PATH, {
            params: {
                city: cityname
            }
        })
    }
}