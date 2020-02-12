import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text } from '@storybook/addon-knobs';

import TedAccordionContainer from '../components/Accordion/TedAccordionContainer';
import TedAccordionContent from '../components/Accordion/TedAccordionContent';
import TedCardText from '../components/Card/TedCardText';

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
  title: 'TedAccordion',
  component: TedAccordionContainer,
  decorators: [withA11y, withKnobs],
  excludeStories: /.*Data$/,
};

const emptyTemplate = `<TedAccordionContainer />`;
const defaultTemplate = `<TedAccordionContainer :title="title"><TedAccordionContent><TedCardText :text="text" /></TedAccordionContent></TedAccordionContainer>`;

export const Default = () => ({
  components: {
    TedAccordionContainer,
    TedAccordionContent,
    TedCardText,
  },
  template: defaultTemplate,
  props: {
    title: {
      default: text('Accordion Title', videoData.name),
    },
    text: {
      default: text('Accordion Text', videoData.speaker.description),
    },
  },
});

export const Empty = () => ({
  components: {
    TedAccordionContainer,
    TedAccordionContent,
  },
  template: emptyTemplate,
});
