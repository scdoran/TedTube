import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text } from '@storybook/addon-knobs';

import TedTextInput from '../components/TedTextInput';

export default {
  title: 'TedTextInput',
  component: TedTextInput,
  decorators: [withA11y, withKnobs],
};

const inputTemplate = `<TedTextInput @updatedText="action" :icon="icon" :placeholder="placeholder" />`;

export const Default = () => ({
  components: {
    TedTextInput,
  },
  template: inputTemplate,
  props: {
    icon: {
      default: text('Icon', ''),
    },
    placeholder: {
      default: text('Placeholder Text', 'Type something...'),
    },
  },
  methods: {
    action: action('updatedText'),
  },
});
