<template>
  <v-navigation-drawer :value="show" absolute temporary>
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="../../../public/TED-favicon.jpg" />
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>TedTube</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <TedNavDrawerItem v-for="(link, i) in links" :key="i" :item="link">
        <TedIcon :iconType="link.icon" />
      </TedNavDrawerItem>
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
          icon: 'help',
          link: '/about',
          title: 'About',
        },
        {
          icon: 'bookmark',
          link: '/watchlist',
          title: 'Watchlist',
        },
        {
          icon: 'favorite',
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
