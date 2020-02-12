import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, object } from '@storybook/addon-knobs';

import TedDropdown from '../components/TedDropdown';

export default {
  title: 'TedDropdown',
  component: TedDropdown,
  decorators: [withA11y, withKnobs],
  excludeStories: /.*Data$/,
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
      default: text('Label', dropdownData.label),
    },
    options: {
      default: object('Options', dropdownData.options),
    },
    placeholder: {
      default: text('Placeholder Text', dropdownData.placeholder),
    },
  },
  methods: {
    action: action('itemSelection'),
  },
});
