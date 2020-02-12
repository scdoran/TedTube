<template>
  <v-flex xs12>
    <v-progress-circular v-if="loading" indeterminate color="red">
    </v-progress-circular>
    <div v-if="!loading">
      <slot></slot>
    </div>
  </v-flex>
</template>

<script>
export default {
  name: 'TedLoader',
  props: {
    loading: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
