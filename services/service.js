const axios = require('axios');

const CURRENT_PATH = 'weather'

const service = axios.create({
    timeout: 20000,
    baseURL: process.env.OPEN_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

async function getWeatherForCity(city) {
    let response;
    try {
        response = await service.get(CURRENT_PATH, {
            params: {
                q: city,
                appid: process.env.OPEN_API_KEY
            }
        })
    } catch (exception) {
        throw exception;
    }

    return response;
}

async function getWeatherForCityAndState(city, state) {
    let response;
    try {
        response = await service.get(CURRENT_PATH, {
            params: {
                q: `${city}, ${state}`,
                appid: process.env.OPEN_API_KEY
            }
        });
    } catch (exception) {
        throw exception;
    }
    return response;
}

async function getWeatherForCityAndStateAndCountryCode(city, state, countryCode) {
    let response;

    try {
       response = await service.get(CURRENT_PATH, {
            params: {
                q: `${city}, ${state}, ${countryCode}`,
                appid: process.env.OPEN_API_KEY
            }
        });
    } catch (exception) {
        throw exception;
    }

    return response;
}

module.exports = {
    getWeatherForCity,
    getWeatherForCityAndState,
    getWeatherForCityAndStateAndCountryCode
}