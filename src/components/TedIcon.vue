<template>
  <v-icon :color="color">{{ iconType }}</v-icon>
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
      default: () => 'favorite',
    },
  },
};
</script>

<style lang="scss" scoped></style>
