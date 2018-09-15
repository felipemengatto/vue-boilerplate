import axios from 'axios';
import axiosCache from 'axios-cache-plugin';
import { applyCacheRoutes } from './api.routes.cache';
import { activeInterceptorLoading } from './api.routes.interceptor';
import { BASE_URL_APP } from './api.base-url';

const http = axios.create({
    baseURL: BASE_URL_APP,
});

activeInterceptorLoading(http);

const HttpGenericService = axiosCache(http, {
    maxCacheSize: 15
});

applyCacheRoutes(HttpGenericService);

export default HttpGenericService;