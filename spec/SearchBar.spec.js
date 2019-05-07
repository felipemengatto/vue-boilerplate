import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';

import { SearchBar } from '@containers';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('SearchBar Spec', () => {
    let actions, mutations, store, wrapper;

    const searchKey = 'Star';

    beforeEach(() => {

        actions = {
            setSearchValue: jest.fn(),
        }

        mutations = {
            SET_SEARCH_VALUE(state, value) {
                state.searchValue = value;
            }
        }

        store = new Vuex.Store({
            actions,
            mutations,
            state: {
                searchValue: '',
            }
        });

        wrapper = mount(SearchBar, {
            store,
            localVue
        });
    });

    it('has searchValue', () => {
        store.commit('SET_SEARCH_VALUE', searchKey);
        expect(wrapper.vm.searchValue).toEqual(searchKey);
    });

    it('calls the right action search', () => {
        store.commit('SET_SEARCH_VALUE', searchKey);
        wrapper.find('button').trigger('click');
        expect(actions.setSearchValue).toHaveBeenCalled();
    })

});