import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import {
  withKnobs,
  text,
  number,
  boolean,
  object,
} from '@storybook/addon-knobs';

import TedButton from '../components/TedButton';
import TedCard from '../components/Card/TedCard';
import TedCardAction from '../components/Card/TedCardAction';
import TedIcon from '../components/TedIcon';

export const videoData = {
  name: 'Paul Nicklen: Tales of ice-bound wonderlands',
  id: 'Ra-lxoAUP5c',
  embeddedLink:
    '<iframe src="https://embed-ssl.ted.com/talks/paul_nicklen_tales_of_ice_bound_wonderlands.html" width="560" height="315" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
  favorite: true,
  watchlist: false,
  thumbnail_url:
    'http://tedcdnpe-a.akamaihd.net/images/ted/1f6a9f396100ba693c5534a3a8ca597244ff40',
  speaker: {
    name: 'Paul Nicklen',
    bio:
      'Paul Nicklen photographs the creatures of the Arctic and Antarctic, generating global awareness about wildlife in these isolated and endangered environments.nFull bio',
    description:
      'Diving under the Antarctic ice to get close to the much-feared leopard seal, photographer Paul Nicklen found an extraordinary new friend. Share his hilarious, passionate stories of the polar wonderlands, illustrated by glorious images of the animals who live on and under the ice.',
    link: 'http://www.ted.com/speakers/paul_nicklen',
  },
  viewCount: 1729214,
};

export default {
  title: 'TedCard',
  component: TedCard,
  decorators: [withA11y, withKnobs],
  excludeStories: /.*Data$/,
};

const emptyTemplate = `<TedCard :item="item" :width="width" />`;
const defaultTemplate = `<TedCard :width="width" :item="item" :type="type" />`;
const actionTemplate = `<TedCard :width="width" :item="item" :type="type">
                        <TedCardAction>
                          <TedButton
                            :hideBackground="hideBackground"
                            className="'card - button'"
                            :icon="icon"
                            @clicked="action"
                          >
                            <TedIcon
                              color="red"
                              iconType="favorite"
                            />
                          </TedButton>
                          <TedButton
                            :hideBackground="hideBackground"
                            className="'card-button'"
                            :icon="icon"
                            @clicked="action"
                          >
                            <TedIcon
                              color="blue"
                              iconType="bookmark"
                            />
                          </TedButton>
                        </TedCardAction>
                      </TedCard>`;

export const Default = () => ({
  components: {
    TedCard,
  },
  template: defaultTemplate,
  props: {
    item: {
      default: object('Card Data', videoData),
    },
    type: {
      default: text('Card Type', 'image'),
    },
    width: {
      default: number('Card Width', 350),
    },
  },
});

export const WithActions = () => ({
  components: {
    TedButton,
    TedCard,
    TedCardAction,
    TedIcon,
  },
  template: actionTemplate,
  props: {
    hideBackground: {
      default: boolean('Hide Button Background', true),
    },
    icon: {
      default: true,
    },
    item: {
      default: object('Card Data', videoData),
    },
    type: {
      default: text('Card Type', 'image'),
    },
    width: {
      default: number('Card Width', 350),
    },
  },
  methods: {
    action: action('clicked'),
  },
});

export const EmptyResults = () => ({
  components: {
    TedCard,
  },
  template: emptyTemplate,
  props: {
    item: {
      default: {},
    },
    type: {
      default: text('Card Type', 'image'),
    },
    width: {
      default: number('Card Width', 350),
    },
  },
});
