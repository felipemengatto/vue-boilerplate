import * as types from './mutationTypes';

export default {

    [types.SET_LOADING]: (state, value) => {
        state.loading = value;
    },

    [types.SET_MOVIES]: (state, value) => {
        state.movies = value;
    },

    [types.SET_SEARCH_VALUE]: (state, value) => {
        state.searchValue = value;
    },
}