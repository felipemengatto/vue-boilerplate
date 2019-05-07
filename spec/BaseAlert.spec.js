import { mount } from '@vue/test-utils';
import { BaseAlert } from '@components';

describe('BaseAlert Spec', () => {
    let wrapper;

    const propsData = {
        type: 'success',
        text: 'Olá Alerta!'
    };

    beforeEach(() => {
        wrapper = mount(BaseAlert, {
            propsData
        });
    })

    it('has BaseAlert property', () => {
        expect(wrapper.vm).toHaveProperty('text', propsData.text);
        expect(wrapper.vm).toHaveProperty('type', propsData.type);
    })
})