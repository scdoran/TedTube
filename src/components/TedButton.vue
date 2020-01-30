<template>
  <v-btn
    :class="className"
    :color="color"
    :small="small"
    :flat="hideBackground"
    @click="handleClick"
  >
    <span v-if="!icon">{{ text }}</span>
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'TedButton',
  props: {
    className: {
      type: String,
      default: () => '',
    },
    color: {
      type: String,
      default: () => '',
    },
    hideBackground: {
      type: Boolean,
      default: () => false,
    },
    icon: {
      type: Boolean,
      default: () => false,
    },
    small: {
      type: Boolean,
      default: () => false,
    },
    text: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    handleClick() {
      this.$emit('clicked');
    },
  },
};
</script>

<style lang="scss" scoped></style>
