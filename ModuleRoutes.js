import Vue from 'vue';
import VueRouter from 'vue-router';

import { BASE_URL_APP } from '@services/api/api.base-url';

import Home from '@pages/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '',
        redirect: '/'
    }
];

const Router = new VueRouter({
    mode: 'history',
    base: `${BASE_URL_APP}/`,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
});

export default Router;
