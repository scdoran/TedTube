import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import {
  addParameters,
  configure
} from '@storybook/vue';
import {
  DocsPage,
  DocsContainer
} from '@storybook/addon-docs/blocks';
import '../src/plugins/vuetify';

Vue.use(Vuetify);

const req = require.context('../src', true, /\.stories\.js$/);

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

configure(req, module);