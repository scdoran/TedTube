import { mount } from '@vue/test-utils';
import TedDropdown from '@/components/TedDropdown.vue';
import Vue from 'vue';
import vuetify from 'vuetify';

describe('TedDropdown.vue', () => {
  let wrapper;
  beforeEach(() => {
    Vue.use(vuetify);
    wrapper = mount(TedDropdown, {
      propsData: {
        label: 'Search Selection',
        options: [
          {
            text: 'Name',
            value: 'talksByName',
          },
          {
            text: 'Speaker',
            value: 'bySpeaker',
          },
          {
            text: 'Description',
            value: 'talksByDescription',
          },
        ],
        placeholder: 'Choose search criteria',
      },
    });
  });

  it('gets props', () => {
    expect(wrapper.props().label).toEqual('Search Selection');
    expect(wrapper.props().options).toEqual([
      {
        text: 'Name',
        value: 'talksByName',
      },
      {
        text: 'Speaker',
        value: 'bySpeaker',
      },
      {
        text: 'Description',
        value: 'talksByDescription',
      },
    ]);
    expect(wrapper.props().placeholder).toEqual('Choose search criteria');
  });

  it('Contains Vuetify dropdown ', () => {
    expect(wrapper.contains('[data-test="tedDropdown"]')).toBe(true);
  });

  it('Check emitted "itemSelection" event', () => {
    wrapper.vm.$emit('itemSelection', 'talksByDescription');
    expect(wrapper.emitted().itemSelection).toBeTruthy();
  });
});
