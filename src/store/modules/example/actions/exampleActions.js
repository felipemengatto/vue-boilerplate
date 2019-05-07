import Vue from 'vue';
import OmdbApi from '@services/api/omdbApi.js';

import * as mutations from '../mutations/mutationTypes';

function errorHandler(error) {
    const { response: { data } } = error;

    Vue.toasted.show(data.error, {
        duration: 5000,
        position: 'top-right',
        type: 'error'
    });
}

export default {

    async findMovieByTitle({ commit, dispatch }, title) {
        dispatch('setLoading', true);

        try {
            const { data } = await OmdbApi.findMovieByTitle(title);
            commit(mutations.SET_MOVIES, data);
        } catch (error) {
            errorHandler(error);
        } finally {
            dispatch('setLoading', false);
        }
    },

    async findMovieDescriptionById({ commit, dispatch }, id) {
        try {
            const { data } = await OmdbApi.findMovieDescriptionById(id);
            return data;
        } catch (error) {
            errorHandler(error);
        }
    },

    setLoading({ commit }, value) {
        commit(mutations.SET_LOADING, value);
    },

    setSearchValue({ commit, dispatch }, value) {
        commit(mutations.SET_SEARCH_VALUE, value);

        if (value) {
            dispatch('findMovieByTitle', value);
        }
    }
}