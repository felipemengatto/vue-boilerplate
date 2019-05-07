import { mount } from '@vue/test-utils';
import { BaseButton } from '@components';

describe('BaseButton Spec', () => {
    let wrapper;

    const propsData = {
        classes: 'btn-topper',
        text: 'IJXIu(U@HCxj09UX)C)'
    };

    beforeEach(() => {
        wrapper = mount(BaseButton, {
            propsData
        });
    })

    it('has BaseButton property', () => {
        expect(wrapper.vm).toHaveProperty('text', propsData.text);
        expect(wrapper.vm).toHaveProperty('classes', propsData.classes);
    })
})