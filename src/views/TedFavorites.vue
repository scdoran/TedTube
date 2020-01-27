<template>
  <div>
    <TedHeading text="favorites" :uppercase="true" />
    <TedLoader :display="loading" type="list" />
    <TedList v-if="favorites && favorites.length" :results="favorites" />
  </div>
</template>

<script>
import TedHeading from '@/components/TedHeading';
import TedList from '@/components/TedList';
import TedLoader from '@/components/TedLoader';

import { mapActions, mapState } from 'vuex';
export default {
  name: 'TedFavorites',
  components: {
    TedHeading,
    TedList,
    TedLoader,
  },
  async created() {
    await this.getFavoritesAction();
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState('favorites', ['favorites']),
  },
  methods: {
    ...mapActions('favorites', ['getFavoritesAction']),
    async loadFavorites() {
      await this.getFavoritesAction();
    },
  },
};
</script>
