import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import TedLoader from '../components/TedLoader';

export default {
  title: 'TedLoader',
  component: TedLoader,
  decorators: [withA11y, withKnobs],
};

const loadingTemplate = `<TedLoader :loading="loading" />`;

export const DefaultLoader = () => ({
  components: {
    TedLoader,
  },
  template: loadingTemplate,
  props: {
    loading: {
      default: boolean('Loading', true),
    },
  },
});
