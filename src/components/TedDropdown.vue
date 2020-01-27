<template>
  <v-select
    class="d-flex"
    :items="options"
    placeholder="Search by"
    @change="handleChange"
  ></v-select>
</template>

<script>
export default {
  name: 'TedDropdown',
  props: {
    options: {
      type: Array,
      default: () => [],
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
