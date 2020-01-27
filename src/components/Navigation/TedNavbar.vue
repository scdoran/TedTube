<template>
  <v-app-bar app color="#FFEBEE" dense>
    <v-app-bar-nav-icon @click.stop="handleClick"></v-app-bar-nav-icon>
    <router-link to="/">
      <div class="d-flex align-center logo">
        <v-img
          alt="TED Logo"
          class="shrink mr-2"
          contain
          src="@/assets/TED-logo.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title v-if="title">{{ title }}</v-toolbar-title>
      </div>
    </router-link>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
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
  methods: {
    handleClick() {
      this.drawer = true;
      this.$emit('clicked', this.drawer);
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
