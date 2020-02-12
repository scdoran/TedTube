<template>
  <v-list-tile @click="redirect(item.link)">
    <v-list-tile-action>
      <TedIcon :iconType="item.icon" />
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ item.title | formatText }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
import TedIcon from '@/components/TedIcon';

export default {
  name: 'TedNavDrawerItem',
  props: {
    item: {
      type: Object,
      default: () => '/',
    },
  },
  components: {
    TedIcon,
  },
  filters: {
    formatText: function(text) {
      return text.replace(text.charAt(0), text.charAt(0).toUpperCase());
    },
  },
  methods: {
    redirect(path) {
      this.$router.push(path);
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
