import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';

jest.mock('@modules', () => ({
    EXAMPLE: 'example'
}))

import { SearchBar } from '@containers';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('SearchBar Spec', () => {
    let actions, store, wrapper;

    const searchKey = 'Star';

    beforeEach(() => {

        actions = {
            setSearchValue: jest.fn(),
        }

        const modules = {
            example: {
                namespaced: true,
                actions,
                mutations: {
                    SET_SEARCH_VALUE(state, value) {
                        state.searchValue = value;
                    }
                },
                state: {
                    searchValue: '',
                }
            }
        }

        store = new Vuex.Store({ modules });

        wrapper = mount(SearchBar, {
            store,
            localVue
        });
    });

    it('has searchValue', () => {
        store.commit('example/SET_SEARCH_VALUE', searchKey);
        expect(wrapper.vm.searchValue).toEqual(searchKey);
    });

    it('calls the right action search', () => {
        store.commit('example/SET_SEARCH_VALUE', searchKey);
        wrapper.find('button').trigger('click');
        expect(actions.setSearchValue).toHaveBeenCalled();
    })

});