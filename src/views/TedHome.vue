<template>
  <div>
    <blockquote class="blockquote center">
      Welcome to TED Search! Start searching for TED talks by speaker name, talk
      name or talk description.
    </blockquote>
    <SearchBar @search="handleSearch" />
    <section v-if="recents && recents.length" class="content-container">
      <TedSubheading text="Recently Watched" />
      <TedCarouselGroup :list="recents" />
    </section>
    <section v-if="favorites && favorites.length" class="content-container">
      <TedSubheading text="In Your Favorites" />
      <TedCarouselGroup :list="favorites" />
    </section>
    <section v-if="watchlist && watchlist.length" class="content-container">
      <TedSubheading text="In Your Watchlist" />
      <TedCarouselGroup :list="watchlist" />
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import SearchBar from '@/components/Search/SearchBar.vue';
import TedCarouselGroup from '@/components/Carousel/TedCarouselGroup';
import TedSubheading from '@/components/TedSubheading';

export default {
  name: 'TedHome',
  components: {
    SearchBar,
    TedCarouselGroup,
    TedSubheading,
  },
  methods: {
    ...mapActions('favorites', ['getFavoritesAction']),
    ...mapActions('recents', ['getRecentsAction']),
    ...mapActions('watchlist', ['getWatchlistAction']),
    handleSearch(query) {
      this.$router.push({ name: 'search', params: { ...query } });
    },
    loadAllData() {
      this.getFavoritesAction();
      this.getRecentsAction();
      this.getWatchlistAction();
    },
  },
  computed: {
    ...mapState('favorites', ['favorites']),
    ...mapState('recents', ['recents']),
    ...mapState('watchlist', ['watchlist']),
  },
  async created() {
    await this.loadAllData();
  },
};
</script>

<style lang="scss" scoped>
.v-application .blockquote {
  padding-left: 0;
}

.blockquote.center {
  text-align: center;
}
</style>
