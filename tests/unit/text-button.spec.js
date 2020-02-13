import { mount } from '@vue/test-utils';
import TedButton from '@/components/TedButton.vue';
import Vue from 'vue';
import vuetify from 'vuetify';

describe('TedButton.vue', () => {
  let wrapper;
  beforeEach(() => {
    Vue.use(vuetify);
    wrapper = mount(TedButton, {
      propsData: {
        className: 'red darken-4 red--text text--lighten-5',
        color: 'red',
        hideBackground: false,
        icon: true,
        small: true,
        text: '',
      },
    });
  });

  it('gets props', () => {
    expect(wrapper.props().className).toEqual(
      'red darken-4 red--text text--lighten-5'
    );
    expect(wrapper.props().color).toEqual('red');
    expect(wrapper.props().hideBackground).toBeFalsy();
    expect(wrapper.props().icon).toBeTruthy();
    expect(wrapper.props().small).toBeTruthy();
    expect(wrapper.props().text).toEqual('');
  });

  it('Contains Vuetify button ', () => {
    expect(wrapper.contains('[data-test="tedButton"]')).toBe(true);
  });

  it('Button text is hidden when icon prop is true', () => {
    const buttonText = wrapper.find('.ted-button-text');
    expect(buttonText.exists()).toBeFalsy();
  });

  it('Button text shows when icon prop is false', async () => {
    wrapper.setProps({ icon: false, text: 'Go!' });
    await wrapper.vm.$nextTick();
    const buttonText = wrapper.find('.ted-button-text');
    expect(buttonText.exists()).toBeTruthy();
  });

  it('Check emitted "clicked" event', () => {
    wrapper.vm.$emit('clicked');
    expect(wrapper.emitted().clicked).toBeTruthy();
  });
});
