<template>
  <section>
    <v-toolbar app color="#FFEBEE" dense>
      <v-toolbar-side-icon @click.stop="handleClick"></v-toolbar-side-icon>
      <router-link to="/">
        <div class="d-flex align-center logo">
          <v-img
            alt="TED Logo"
            class="shrink mr-2"
            contain
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/TED_three_letter_logo.svg/1200px-TED_three_letter_logo.svg.png"
            transition="scale-transition"
            width="40"
          />
          <v-toolbar-title v-if="title">{{ title }}</v-toolbar-title>
        </div>
      </router-link>
      <v-spacer></v-spacer>
    </v-toolbar>
    <TedNavDrawer :show="drawer" title="TedTube" @closed="handleDrawer" />
  </section>
</template>

<script>
import TedNavDrawer from './TedNavDrawer';
export default {
  name: 'TedNavbar',
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      drawer: false,
    };
  },
  components: {
    TedNavDrawer,
  },
  methods: {
    handleClick() {
      this.drawer = true;
    },
    handleDrawer(show) {
      this.drawer = show;
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
}
.v-application a {
  color: #000000;
  text-decoration: none;
}
</style>
