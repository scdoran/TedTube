import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import TedDropdown from '../components/TedDropdown';

export default {
  title: 'TedDropdown',
  component: TedDropdown,
  decorators: [withA11y],
};

const dropdownTemplate = `<TedDropdown @itemSelection="action" :options="options" :label="label" :placeholder="placeholder" />`;

export const dropdownData = {
  label: 'Search',
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
  placeholder: 'Make a selection',
};

export const Default = () => ({
  components: {
    TedDropdown,
  },
  template: dropdownTemplate,
  props: {
    label: {
      default: dropdownData.label,
    },
    options: {
      default: dropdownData.options,
    },
    placeholder: {
      default: dropdownData.placeholder,
    },
  },
  methods: {
    action: action('itemSelection'),
  },
});
