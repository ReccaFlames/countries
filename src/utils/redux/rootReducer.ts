import { Reducer, combineReducers } from 'redux';
import countriesReducer from '../../pages/countries/countreisSlice';
import filtersReducer from '../../pages/filters/filtersSlice';

const rootReducer: Reducer = combineReducers({ countries: countriesReducer, filters: filtersReducer });

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
