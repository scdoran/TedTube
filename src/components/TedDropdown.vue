<template>
  <v-select
    class="d-flex"
    :items="options"
    :label="label"
    :placeholder="placeholder"
    @change="handleChange"
  ></v-select>
</template>

<script>
export default {
  name: 'TedDropdown',
  props: {
    label: {
      type: String,
      default: () => 'Search',
    },
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: () => 'Make a selection',
    },
  },
  methods: {
    handleChange(selection) {
      this.$emit('itemSelection', selection);
    },
  },
};
</script>

<style lang="scss" scoped></style>
