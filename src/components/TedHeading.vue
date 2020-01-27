<template>
  <h3 class="headline text-center pa-6">{{ text | toUpperCase(uppercase) }}</h3>
</template>

<script>
export default {
  name: 'TedHeading',
  props: {
    text: {
      type: String,
      default: () => '',
    },
    uppercase: {
      type: Boolean,
      default: () => false,
    },
  },
  filters: {
    toUpperCase: function(text, uppercase) {
      if (!text) return '';
      return uppercase ? text.toUpperCase() : text;
    },
  },
};
</script>

<style lang="scss" scoped></style>
