import { put, call, takeEvery } from 'redux-saga/effects';
import  api from '../../api/api';

//actions

const CITY_SEARCH = 'weather-test/search/CITY_SEARCH';
const CITY_SEARCH_SUCCESSFUL = 'weather-test/search/CITY_SEARCH_SUCCESSFUL';
const CITY_SEARCH_FAILURE = 'weather-test/search/CITY_SEARCH_FAILURE';

//state
const initialState = {
    suggestions: [],
    error: null,
    isLoading: false
}


//reducer

export default function search(state={...initialState}, action) {
    switch(action.type){
        case CITY_SEARCH_SUCCESSFUL:
            console.log(action.suggestions)
            return {
                ...state,
                suggestions: action.suggestions,
                isLoading: false
            };
        case CITY_SEARCH_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state;
    }
}

export function citySearch(searchTerm) {
    return {
        type: CITY_SEARCH,
        searchTerm
    }
}

async function getCities(query) {
   try {
       const response = await api.city(query);
       return response;
   } catch (error) {
       throw error;
   }
}

function* handleCitySearch({ searchTerm }) {
    console.log("handling call")
    try {
        const query = {
            cityName: searchTerm
        }
        const response = yield call(getCities, query);
        console.log(response.data.data);
        yield put({ suggestions: response.data.data, type: CITY_SEARCH_SUCCESSFUL});
    } catch(error) {
        yield put({ error: error.message, type: CITY_SEARCH_FAILURE });
    }
}

export function* getAllCititesSaga() {
    yield takeEvery(CITY_SEARCH, handleCitySearch);
}