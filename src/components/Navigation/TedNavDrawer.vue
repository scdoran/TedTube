<template>
  <v-navigation-drawer :value="show" absolute left temporary>
    <v-list nav dense>
      <v-list-item-content>
        <v-list-item-title>{{ title }}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-group
        v-model="group"
        active-class="deep-red--text text--accent-4"
      >
        <TedNavDrawerItem v-for="(link, i) in links" :key="i" :item="link">
          <TedIcon :iconType="link.icon" />
        </TedNavDrawerItem>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import TedIcon from '@/components/TedIcon';
import TedNavDrawerItem from '@/components/Navigation/TedNavDrawerItem';
export default {
  name: 'TedNavDrawer',
  components: {
    TedIcon,
    TedNavDrawerItem,
  },
  props: {
    show: {
      type: Boolean,
      default: () => false,
    },
    title: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      group: null,
      links: [
        {
          icon: 'help-outline',
          link: '/about',
          title: 'About',
        },
        {
          icon: 'bookmark',
          link: '/watchlist',
          title: 'Watchlist',
        },
        {
          icon: 'heart',
          link: '/favorites',
          title: 'Favorites',
        },
        {
          icon: 'magnify',
          link: '/search',
          title: 'Search',
        },
      ],
      showDrawer: this.show,
    };
  },
  methods: {
    emitClosed() {
      this.$emit('closed', this.showDrawer);
    },
    handleDrawer() {
      this.showDrawer = false;
      this.emitClosed();
    },
  },
  watch: {
    group() {
      this.showDrawer = false;
      this.emitClosed();
    },
  },
};
</script>

<style lang="scss" scoped></style>
