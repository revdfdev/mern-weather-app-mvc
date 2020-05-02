const cities = require('all-the-cities');
const ResponseUtils = require('../utils/ResponseUtils');


class CityStore{

    static getMatchingCities(req, res) {
        try {
            const filteredCities = cities.filter(city => city.name.match(req.query.cityName));
            if (filteredCities <= 0) {
                throw new Error("No cities found");
            }
            return ResponseUtils.successResponse(res, 200, "Successfully found city", filteredCities);
        } catch (exception) {
            return ResponseUtils.errorResponse(res, 400, exception.message);
        }
    }
}

module.exports = CityStore;