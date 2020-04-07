const {
    getWeatherForCity,
    getWeatherForCityAndState,
    getWeatherForCityAndStateAndCountryCode
} = require('../services/service');
const ResponseUtils = require('../utils/ResponseUtils');


class CurrentWeatherStore {

    static async currentWeatherByCity(req, res) {
        try {
            if (req.body.city === undefined || req.body.city === "") {
                throw new Error("City is a required field");
            }
            const response = await getWeatherForCity(req.body.city);
            return ResponseUtils.successResponse(res, 200, "Successfully retrieved data", response.data);
        } catch (exception) {
            return ResponseUtils.errorResponse(res, 500, exception.message);
        }
    }

    static async currentWeatherByCityAndState(req, res) {
        try {
            if (req.body.city === undefined || req.body.city === "") {
                throw new Error("City is a required field");
            }

            if (req.body.state === undefined || req.body.state === "") {
                throw new Error("State is a required field");
            }

            const response = await getWeatherForCityAndState(req.body.city, req.body.state);
            return ResponseUtils.successResponse(res, 200, "Successfully retrieved data", response.data);
        } catch (exception) {
            return ResponseUtils.errorResponse(res, 500, exception.message);
        }
    }

    static async currentWeatherByCityStateAndCountryCode(req, res) {
        try {
            if (req.body.city === undefined || req.body.city === "") {
                throw new Error("City is a required field");
            }

            if (req.body.state === undefined || !req.body.state === "") {
                throw new Error("State is a required field");
            }

            if (req.body.countryCode === undefined || req.body.countryCode === "") {
                throw new Error ("Country code is a required field");
            }

            const response = await getWeatherForCityAndStateAndCountryCode(req.body.city, req.body.state, req.body.countryCode);
            return ResponseUtils.successResponse(res, 200, "Successfully retrieved data", response.data);
        } catch (exception) {
            return ResponseUtils.errorResponse(res, 500, exception.message);
        }
    }
}

module.exports = CurrentWeatherStore;