import Vue from 'vue';
import VuePaginate from 'vue-paginate';
import Vue2Filters from 'vue2-filters';
import VueToasted from 'vue-toasted';
import VModal from 'vue-js-modal';

Vue.use(VuePaginate);
Vue.use(Vue2Filters);
Vue.use(VueToasted);
Vue.use(VModal, {
    dynamic: true,
    injectModalsContainer: true
});

import '@/scss/index.scss';
import store from '@store';
import router from './router';

import { Icon } from '@components';

Vue.config.productionTip = false;

window.addEventListener('load', () => {
    new Vue({
        el: 'ExampleMovieApp',
        store,
        router,
        template: `<main class="w-100 h-100 bg-light">
                        <header class="navbar navbar-expand bg-dark text-white">
                            <h6 class="m-0">
                                <Icon type="fa-video-camera" />
                                ExampleMovieApp
                            </h6>
                        </header>
                        <section class="px-3 py-4 bg-white">
                            <h2 class="m-0 text-dark">{{ routeName }}</h2>
                        </section>
                        <section class="container-fluid">
                            <router-view />
                            <modals-container />
                        </section>
                    </main>`,
        components: {
            Icon
        },
        computed: {
            routeName() {
                return this.$route.name;
            }
        },
    });
});
