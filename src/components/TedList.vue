<template>
  <section class="ted-result-list">
    <div v-if="results && results.length">
      <slot></slot>
    </div>
    <div v-if="!results">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TedList',
  props: {
    results: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.ted-result-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
</style>
