import Vue from 'vue';
import VueRouter from 'vue-router';

import { Movies } from '@pages';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Movies',
        component: Movies,
    },
    {
        path: '',
        redirect: '/'
    }
];

const Router = new VueRouter({
    mode: 'history',
    base: `${BASE_URL}/`,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
});

export default Router;
