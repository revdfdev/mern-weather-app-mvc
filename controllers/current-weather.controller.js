const CurrentWeatherStore = require('../store/current-weather.store');

class CurrentWeatherController {

    static getCurrentWeatherByCity(req, res) {
        return CurrentWeatherStore.currentWeatherByCity(req, res);
    }

    static getCurrentWeatherByCityAndState(req, res) {
        return CurrentWeatherStore.currentWeatherByCityAndState(req, res);
    }

    static getCurrentWeatherByCityStateAndCountryCode(req, res) {
        return CurrentWeatherStore.currentWeatherByCityStateAndCountryCode(req, res);
    }

}

module.exports = CurrentWeatherController;