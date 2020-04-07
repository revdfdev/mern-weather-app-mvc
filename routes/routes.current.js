const express = require('express');
const CurrentWeatherController = require('../controllers/current-weather.controller');
const current = express.Router();

current
    .get('/city', CurrentWeatherController.getCurrentWeatherByCity)
    .get('/city-state', CurrentWeatherController.getCurrentWeatherByCityAndState)
    .get('/city-state-countrycode', CurrentWeatherController.getCurrentWeatherByCityStateAndCountryCode)


module.exports = current;
