import { all } from 'redux-saga/effects';
import { getAllCititesSaga } from '../ducks/search';
import { getWeatherDataSaga } from '../ducks/weather';


export default function* rootSaga() {
    yield all([
        getAllCititesSaga(),
        getWeatherDataSaga()
    ]);
}