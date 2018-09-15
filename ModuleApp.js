import Vue from 'vue';

import store from '@store';
import router from './ModuleRoutes';

Vue.config.productionTip = false;

window.addEventListener('load', () => {
    new Vue({
        el: 'ModuleApp',
        store,
        router,
        template: `<div class="d-flex flex-column mb-4">
                        <router-view />
                    </div>`,
    });
});
