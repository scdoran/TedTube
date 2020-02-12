<template>
  <v-card-text>
    {{ text }}
    <slot></slot>
  </v-card-text>
</template>

<script>
export default {
  name: 'TedCardText',
  props: {
    text: {
      type: String,
      default: () => '',
    },
  },
};
</script>
