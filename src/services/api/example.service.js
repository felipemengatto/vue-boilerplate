import HttpGenericService from './api.config.js';

export default {

    findAll() {
        return HttpGenericService.get('/example/findAll');
    },

}