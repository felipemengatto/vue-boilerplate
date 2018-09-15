import { createNamespacedHelpers } from 'vuex';
import { createHelpers } from 'vuex-map-fields';

import exampleModule from './example';

export const EXAMPLE = 'exampleModule';

export const createPmPublisherHelpers = () => createVuexHelpers(EXAMPLE);


function createVuexHelpers(moduleName) {
    const vuexHelpers = createNamespacedHelpers(moduleName);
    const formHelpers = createVuexForm(moduleName);
    return { ...vuexHelpers, ...formHelpers };
}

function createVuexForm(moduleName) { 
    return createHelpers({
        getterType: `${moduleName}/getField`,
        mutationType: `${moduleName}/updateField`,
    });
}

export default {
    [EXAMPLE]: exampleModule,
};