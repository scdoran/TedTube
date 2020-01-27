<template>
  <v-icon :color="color">mdi-{{ iconType }}</v-icon>
</template>

<script>
export default {
  name: 'TedIcon',
  props: {
    color: {
      type: String,
      default: () => '',
    },
    iconType: {
      type: String,
      default: () => 'heart',
    },
  },
};
</script>

<style lang="scss" scoped></style>
