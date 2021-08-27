import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Country from '../../models/country';
import { AppState } from '../../utils/redux/rootReducer';

interface InitState {
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error?: string;
}

const countriesAdapter = createEntityAdapter({
    selectId: (country: Country) => country.alpha3Code,
});

const initialState = countriesAdapter.getInitialState({ status: 'idle', error: undefined } as InitState);

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
            countriesAdapter.setAll(state, action.payload);
        });

        builder.addCase(fetchCountries.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default countriesSlice.reducer;

export const { selectAll: selectAllCountries, selectById: selectCountryByAlpha3Code } = countriesAdapter.getSelectors(
    (state: AppState) => state.countries
);

export const filteredCountries = createSelector(
    selectAllCountries,
    (state: AppState) => state.filters,
    (countries, filters) => {
        const { searchPhrase } = filters;
        return countries.filter((country: Country) => country.name.toLowerCase().includes(searchPhrase.toLowerCase()));
    }
);
