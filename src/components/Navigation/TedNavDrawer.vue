<template>
  <v-navigation-drawer v-model="showDrawer" absolute temporary>
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
      <TedNavDrawerItem v-for="(link, i) in links" :key="i" :item="link" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import TedNavDrawerItem from '@/components/Navigation/TedNavDrawerItem';
export default {
  name: 'TedNavDrawer',
  components: {
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
          icon: 'favorite',
          link: '/favorites',
          title: 'Favorites',
        },
        {
          icon: 'bookmark',
          link: '/watchlist',
          title: 'Watchlist',
        },
        {
          icon: 'search',
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
  },
  watch: {
    show: {
      immediate: true,
      deep: false,
      handler(newValue) {
        this.showDrawer = newValue;
      },
    },
    showDrawer: {
      immediate: true,
      deep: false,
      handler() {
        if (!this.showDrawer) {
          this.emitClosed();
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
