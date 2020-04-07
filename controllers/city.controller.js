const CityStore = require('../store/city.store');


class CityController {

    static getMatchingCity(req, res) {
        return CityStore.getMatchingCities(req, res);
    }
}

module.exports = CityController;