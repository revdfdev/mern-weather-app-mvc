import { combineReducers } from 'redux';
import search from '../ducks/search';
import weather from '../ducks/weather';

export default () => combineReducers({
    search,
    weather
})