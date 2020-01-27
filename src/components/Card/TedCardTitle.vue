<template>
  <v-card-title>{{ title }}</v-card-title>
</template>

<script>
export default {
  name: 'TedCardTitle',
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
