import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import TedTextInput from '@/components/TedTextInput.vue';
import Vue from 'vue';
import vuetify from 'vuetify';

describe('TedTextInput.vue', () => {
  let wrapper;
  beforeEach(() => {
    Vue.use(vuetify);
    wrapper = mount(TedTextInput, {
      propsData: {
        icon: 'bookmark',
        placeholder: 'Type something',
      },
    });
  });

  it('gets icon prop', () => {
    expect(wrapper.props().icon).toEqual('bookmark');
  });

  it('gets placeholder prop', () => {
    expect(wrapper.props().placeholder).toEqual('Type something');
  });

  it('Contains input field ', () => {
    expect(wrapper.contains('[data-test="tedInputField"]')).toBe(true);
  });

  it('Component text value updates when input value changes', async () => {
    const input = wrapper.find('[data-test="tedInputField"]');
    input.setValue('search');
    expect(wrapper.vm.text).toBe('search');
  });

  it('Check emitted "keyup" event', () => {
    wrapper.vm.$emit('updatedText', 'search');
    expect(wrapper.emitted().updatedText).toBeTruthy();
  });
});
