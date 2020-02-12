import { mount } from '@vue/test-utils';
import TedTextInput from '@/components/TedTextInput.vue';

describe('TedTextInput.vue', () => {
  it('renders props.icon when passed', () => {
    const icon = 'bookmark';
    const wrapper = mount(TedTextInput, {
      propsData: { icon },
    });
    const componentProps = wrapper.vm.$options.propsData;
    expect(componentProps.icon).toMatch(icon);
  });
});
