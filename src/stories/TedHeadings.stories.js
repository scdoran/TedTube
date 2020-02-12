import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import TedHeading from '../components/TedHeading';
import TedSubheading from '../components/TedSubheading';

export default {
  title: 'TedHeadings',
  components: [TedHeading, TedSubheading],
  decorators: [withA11y, withKnobs],
  excludeStories: /.*Data$/,
};

const headingTemplate = `<TedHeading :text="text" :uppercase="uppercase" />`;
const subheadingTemplate = `<TedSubheading :text="text" :uppercase="uppercase" />`;

export const headingData = {
  text: 'Heading',
  uppercase: false,
};

export const DefaultHeading = () => ({
  components: {
    TedHeading,
  },
  template: headingTemplate,
  props: {
    text: {
      default: text('Heading Text', headingData.text),
    },
    uppercase: {
      default: boolean('To Uppercase', headingData.uppercase),
    },
  },
});

export const DefaultSubheading = () => ({
  components: {
    TedSubheading,
  },
  template: subheadingTemplate,
  props: {
    text: {
      default: text('Subheading Text', headingData.text),
    },
    uppercase: {
      default: boolean('To Uppercase', headingData.uppercase),
    },
  },
});
