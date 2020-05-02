const {
    getWeatherForCity,
    getWeatherForCityAndState,
    getWeatherForCityAndStateAndCountryCode
} = require('../services/service');
const ResponseUtils = require('../utils/ResponseUtils');


class CurrentWeatherStore {

    static async currentWeatherByCity(req, res) {
        try {
            if (req.query.city === undefined || req.query.city === "") {
                throw new Error("City is a required field");
            }
            const response = await getWeatherForCity(req.query.city);
            return ResponseUtils.successResponse(res, 200, "Successfully retrieved data", response.data);
        } catch (exception) {
            console.log(exception.message);
            return ResponseUtils.errorResponse(res, 400, exception.message);
        }
    }

    static async currentWeatherByCityAndState(req, res) {
        try {
            if (req.query.city === undefined || req.query.city === "") {
                throw new Error("City is a required field");
            }

            if (req.queryz.state === undefined || req.query.state === "") {
                throw new Error("State is a required field");
            }

            const response = await getWeatherForCityAndState(req.query.city, req.query.state);
            return ResponseUtils.successResponse(res, 200, "Successfully retrieved data", response.data);
        } catch (exception) {
            return ResponseUtils.errorResponse(res, 400, exception.message);
        }
    }

    static async currentWeatherByCityStateAndCountryCode(req, res) {
        try {
            if (req.query.city === undefined || req.query.city === "") {
                throw new Error("City is a required field");
            }

            if (req.query.state === undefined || !req.query.state === "") {
                throw new Error("State is a required field");
            }

            if (req.query.countryCode === undefined || req.query.countryCode === "") {
                throw new Error ("Country code is a required field");
            }

            const response = await getWeatherForCityAndStateAndCountryCode(req.query.city, req.query.state, req.query.countryCode);
            return ResponseUtils.successResponse(res, 200, "Successfully retrieved data", response.data);
        } catch (exception) {
            return ResponseUtils.errorResponse(res, 400, exception.message);
        }
    }
}

module.exports = CurrentWeatherStore;