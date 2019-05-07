import HttpGenericService from './api.config.js';

export default {

    findMovieByTitle(title) {
        return HttpGenericService.get(`/search/${title}`);
    },

    findMovieDescriptionById(id) {
        return HttpGenericService.get(`/movie/${id}`);
    },
}