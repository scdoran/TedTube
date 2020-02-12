<template>
  <v-expansion-panel focusable>
    <v-expansion-panel-content>
      <template v-slot:header>
        <div>{{ title }}</div>
      </template>
      <slot></slot>
      <TedAccordionContent v-if="title === 'Title Required!'">
        <TedCardText
          text="A title is required for the Ted Accordion component!"
        />
      </TedAccordionContent>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import TedCardText from '../Card/TedCardText';
import TedAccordionContent from './TedAccordionContent';
export default {
  name: 'TedAccordionContainer',
  props: {
    title: {
      type: String,
      default: 'Title Required!',
    },
  },
  components: {
    TedAccordionContent,
    TedCardText,
  },
};
</script>
