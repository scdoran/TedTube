<template>
  <v-sheet
    v-if="display"
    color="grey lighten-4"
    class="d-flex flex-wrap px-3 pt-3 pb-3 justify-center"
  >
    <v-skeleton-loader
      v-for="n in number"
      :key="n"
      class="px-3 pt-3 pb-3"
      min-width="300"
      type="card"
    ></v-skeleton-loader>
  </v-sheet>
</template>

<script>
export default {
  name: 'TedLoader',
  props: {
    display: {
      type: Boolean,
      default: () => false,
    },
    type: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      number: 0,
    };
  },
  created() {
    this.number = this.type === 'list' ? 6 : 1;
  },
};
</script>

<style lang="scss" scoped></style>
