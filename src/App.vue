<template>
  <v-app>
    <TedNavbar @clicked="handleDrawer" />
    <TedNavDrawer :show="drawer" title="TedTube" @closed="handleDrawer" />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import TedNavbar from '@/components/Navigation/TedNavbar';
import TedNavDrawer from '@/components/Navigation/TedNavDrawer';

export default {
  name: 'App',
  data() {
    return {
      drawer: false,
    };
  },
  components: {
    TedNavbar,
    TedNavDrawer,
  },
  methods: {
    handleDrawer(show) {
      this.drawer = show;
    },
  },
};
</script>
