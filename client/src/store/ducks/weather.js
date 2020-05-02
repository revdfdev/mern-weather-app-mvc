import { put, call, takeEvery } from 'redux-saga/effects';
import api from '../../api/api';

// actions
const GET_WEATHER_INFO = 'weather-test/weather/GET_WEATHER_INFO';
const GET_WEATHER_INFO_SUCCESS = 'weather-test/weather/GET_WEATHER_INFO_SUCCESS';
const GET_WEATHER_INFO_FAILURE = 'weather-test/weather/GET_WEATHER_INFO_FAILURE';

// state
const initialState = {
    weatherInfo: {
        cityname: "",
        temp: 0,
        temp_min: 0,
        temp_max: 0,
        condition: {
            name: '',
            description: '',
            icon: ""
        }
    },
    isLoading: true,
    error: null,
    errorCode: null,
}

export default function weather(state={...initialState}, action) {
    switch(action.type) {
        case GET_WEATHER_INFO_SUCCESS:
            const { cityname, temp, temp_min, temp_max, condition } = action.weatherInfo;
            return {
                ...state,
                weatherInfo: {
                    ...state.weatherInfo,
                    cityname,
                    temp,
                    temp_min,
                    temp_max,
                    condition: {
                        ...state.weatherInfo.condition,
                        name: condition.name,
                        description: condition.description,
                        icon: condition.icon
                    }
                },
                isLoading: false,
                error: null
            }
        case GET_WEATHER_INFO_FAILURE:
            return {
                ...state,
                error: action.error,
                errorCode: action.errorCode,
                isLoading: false
            }
        default:
            return state;
    }
}

export function getWeatherInfo(cityname) {
    return {
        type: GET_WEATHER_INFO,
        cityname
    }
}

async function getWeatherData(cityname) {
    try {
        const response = await api.weather(cityname);
        return response;
    } catch (error) {
        throw error;
    }
}

function* handleGetWeatherData({ cityname }) {
    try {
        const response = yield call(getWeatherData, cityname);
        console.log("condition", response.data.data.weather[0].description)
        const weatherData = {
            cityname: cityname,
            temp: Math.round(Number(response.data.data.main.temp) - 273.15),
            temp_min: Math.round(Number(response.data.data.main.temp_min) - 273.15),
            temp_max: Math.round(Number(response.data.data.main.temp_max) - 273.15),
            condition: {
                name: response.data.data.weather[0].main,
                description: response.data.data.weather[0].description,
                icon: `http://openweathermap.org/img/wn/${response.data.data.weather[0].icon}@2x.png`
            }
        }
        yield put({ type: GET_WEATHER_INFO_SUCCESS, weatherInfo: weatherData });
    } catch (error) {
        yield put ({ error: error.message, errorCode: error.response.status , type: GET_WEATHER_INFO_FAILURE });
    }
}

export function* getWeatherDataSaga() {
    yield takeEvery(GET_WEATHER_INFO, handleGetWeatherData)
}