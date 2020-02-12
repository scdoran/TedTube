<template>
  <TedContainer>
    <v-flex xs12>
      <TedHeading
        text="Welcome to TED Search! Start searching for TED talks by speaker name, talk
        name or talk description."
      />
      <SearchBar @search="handleSearch" />
    </v-flex>
    <v-content v-if="recents && recents.length" text-xs-center>
      <TedSubheading text="Recently Watched" />
      <TedList :results="recents">
        <TedCard
          v-for="(item, i) in recents"
          :key="i"
          :item="item"
          type="image"
          :height="200"
          :width="200"
          size="x-small"
        />
      </TedList>
    </v-content>
    <v-content v-if="favorites && favorites.length" text-xs-center>
      <TedSubheading text="In Your Favorites" />
      <TedList :results="favorites">
        <TedCard
          v-for="(item, i) in favorites"
          :key="i"
          :item="item"
          type="image"
          :height="200"
          :width="200"
        />
      </TedList>
    </v-content>
    <v-content v-if="watchlist && watchlist.length" text-xs-center>
      <TedSubheading text="In Your Watchlist" />
      <TedList :results="watchlist">
        <TedCard
          v-for="(item, i) in watchlist"
          :key="i"
          :item="item"
          type="image"
          :height="200"
          :width="200"
        />
      </TedList>
    </v-content>
  </TedContainer>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import SearchBar from '@/components/Search/SearchBar.vue';
import TedCard from '@/components/Card/TedCard';
import TedContainer from '@/components/TedContainer';
import TedHeading from '@/components/TedHeading';
import TedList from '@/components/TedList';
import TedSubheading from '@/components/TedSubheading';

export default {
  name: 'TedHome',
  components: {
    SearchBar,
    TedCard,
    TedContainer,
    TedHeading,
    TedList,
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
