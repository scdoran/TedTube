import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import TedButton from '../components/TedButton';
import TedIcon from '../components/TedIcon.vue';

export default {
  title: 'TedButton',
  component: TedButton,
  decorators: [withA11y, withKnobs],
};

const buttonTemplate = `<TedButton @clicked="action" :color="color" :hideBackground="hideBackground" :icon="icon" :small="small" :text="text"/>`;
const buttonIconTemplate = `<TedButton @clicked="action" :color="color" :hideBackground="hideBackground" :icon="icon" :small="small" :text="text"><TedIcon :iconType="iconType" /></TedButton>`;

export const Default = () => ({
  components: {
    TedButton,
  },
  template: buttonTemplate,
  props: {
    color: {
      default: text('Color', 'red'),
    },
    hideBackground: {
      default: boolean('Hide Background', false),
    },
    icon: {
      default: false,
    },
    small: {
      default: boolean('Small', true),
    },
    text: {
      default: text('Button Text', 'Search'),
    },
  },
  methods: {
    action: action('clicked'),
  },
});

export const WithIcon = () => ({
  components: {
    TedButton,
    TedIcon,
  },
  template: buttonIconTemplate,
  props: {
    color: {
      default: text('Color', 'red'),
    },
    hideBackground: {
      default: boolean('Hide Background', true),
    },
    icon: {
      default: true,
    },
    iconType: {
      default: text('Icon Type', 'bookmark'),
    },
    small: {
      default: boolean('Small', false),
    },
    text: {
      default: '',
    },
  },
  methods: {
    action: action('clicked'),
  },
});
