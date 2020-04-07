const express = require('express');
const CityController = require('../controllers/city.controller');
const city = express.Router();

city.get('/cities', CityController.getMatchingCity);

module.exports = city;