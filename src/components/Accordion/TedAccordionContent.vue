<template>
  <v-card>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  name: 'TedAccordionContent',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
