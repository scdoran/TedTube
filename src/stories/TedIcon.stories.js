import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text } from '@storybook/addon-knobs';

import TedIcon from '../components/TedIcon';

export default {
  title: 'TedIcon',
  component: TedIcon,
  decorators: [withA11y, withKnobs],
};

const iconTemplate = `<TedIcon :color="color" :iconType="iconType"/>`;

export const Default = () => ({
  components: {
    TedIcon,
  },
  template: iconTemplate,
  props: {
    color: {
      default: text('Color', 'red'),
    },
    iconType: {
      default: text('Icon Type', 'bookmark'),
    },
  },
});
