<template>
  <router-link :to="item.link">
    <v-list-tile>
      <v-list-tile-content>
        <slot></slot>
        <v-list-tile-title>{{ item.title | formatText }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
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
