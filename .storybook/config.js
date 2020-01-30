import Vue from "vue";
import Vuetify, {
  VApp
} from "vuetify/lib";
import {
  addParameters,
  configure
} from "@storybook/vue";
import {
  DocsPage,
  DocsContainer
} from '@storybook/addon-docs/blocks';

import "../src/plugins/vuetify";

Vue.use(Vuetify, {
  components: {
    VApp,
  }
});

const req = require.context("../src", true, /\.stories\.js$/);

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

configure(req, module);