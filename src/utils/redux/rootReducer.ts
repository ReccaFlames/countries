import { Reducer, combineReducers } from 'redux';
import countriesReducer from '../../pages/countries/countreisSlice';

const rootReducer: Reducer = combineReducers({ countries: countriesReducer });

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
