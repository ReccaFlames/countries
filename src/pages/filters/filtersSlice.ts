import { createSlice } from '@reduxjs/toolkit';

export const RegionFilters = {
    All: 'all',
    Africa: 'africa',
    America: 'america',
    Asia: 'asia',
    Europe: 'europe',
    Oceania: 'oceania',
};

const initialState = {
    region: RegionFilters.All,
    searchPhrase: '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        regionFilterChange(state, action) {
            state.region = action.payload;
        },
        searchPhraseChange(state, action) {
            state.searchPhrase = action.payload;
        },
    },
});

export const { regionFilterChange, searchPhraseChange } = filtersSlice.actions;

export default filtersSlice.reducer;
