import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Country from '../../models/country';
import { AppState } from '../../utils/redux/rootReducer';

interface CountriesState {
    countries: Array<Country>;
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error?: string;
}

const initialState = {
    countries: [],
    status: 'idle',
    error: undefined,
} as CountriesState;

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    return response.data;
});

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.pending, (state) => {
            state.status = 'pending';
        });

        builder.addCase(fetchCountries.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.countries = state.countries.concat(action.payload);
        });

        builder.addCase(fetchCountries.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default countriesSlice.reducer;

export const selectAllCountries = (state: AppState) => state.countries.countries;

export const selectCountryByAlpha3Code = (state: AppState, countryAlpha3Code: string) =>
    state.countries.countries.find((country: Country) => country.alpha3Code === countryAlpha3Code);
