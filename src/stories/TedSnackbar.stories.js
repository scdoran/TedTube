import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import TedSnackbar from '../components/TedSnackbar';

export default {
  title: 'TedSnackbar',
  component: TedSnackbar,
  decorators: [withA11y, withKnobs],
};

const snackbarTemplate = `<TedSnackbar :message="message" :show="show" />`;

export const Default = () => ({
  components: {
    TedSnackbar,
  },
  template: snackbarTemplate,
  props: {
    message: {
      default: text('Message', 'Snackbar is here'),
    },
    show: {
      default: boolean('Display', true),
    },
  },
  methods: {
    action: action('clicked'),
  },
});
