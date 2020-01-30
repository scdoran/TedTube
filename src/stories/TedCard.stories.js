import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import TedCard from '../components/Card/TedCard';
import TedCardAction from '../components/Card/TedCardAction';
import TedCardMedia from '../components/Card/TedCardMedia';
import TedCardTitle from '../components/Card/TedCardTitle.vue';

import videos from '../shared/mock-data/mock-data';

export default {
  title: 'TedCard',
  components: [TedCard, TedCardAction, TedCardMedia, TedCardTitle],
  decorators: [withA11y, withKnobs],
  excludeStories: /.*Data$/,
};

const buttonTemplate = `<TedButton @clicked="action" :color="color" :hideBackground="hideBackground" :icon="icon" :small="small" :text="text"/>`;
const buttonIconTemplate = `<TedButton @clicked="action" :color="color" :hideBackground="hideBackground" :icon="icon" :small="small" :text="text"><TedIcon :iconType="iconType" /></TedButton>`;

export const Default = () => ({
  components: {
    TedCard,
  },
  data: () => {
    this.props = videos;
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
