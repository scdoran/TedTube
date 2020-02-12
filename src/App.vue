<template>
  <v-app>
    <TedNavbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import TedNavbar from '@/components/Navigation/TedNavbar';

export default {
  name: 'App',
  components: {
    TedNavbar,
  },
};
</script>
