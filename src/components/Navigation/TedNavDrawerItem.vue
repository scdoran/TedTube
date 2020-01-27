<template>
  <router-link :to="item.link">
    <v-list-item>
      <slot></slot>
      <v-list-item-title>{{ item.title | formatText }}</v-list-item-title>
    </v-list-item>
  </router-link>
</template>

<script>
export default {
  name: 'TedNavDrawerItem',
  props: {
    item: {
      type: Object,
      default: () => '/',
    },
  },
  filters: {
    formatText: function(text) {
      return text.replace(text.charAt(0), text.charAt(0).toUpperCase());
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
