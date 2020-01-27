<template>
  <div>
    <TedHeading text="WATCHLIST" :uppercase="true" />
    <TedLoader :display="loading" type="list" />
    <TedList v-if="watchlist && watchlist.length" :results="watchlist" />
  </div>
</template>

<script>
import TedHeading from '@/components/TedHeading';
import TedList from '@/components/TedList';
import TedLoader from '@/components/TedLoader';

import { mapActions, mapState } from 'vuex';

export default {
  name: 'TedWatchList',
  components: {
    TedHeading,
    TedList,
    TedLoader,
  },
  async created() {
    await this.getWatchlistAction();
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState('watchlist', ['watchlist']),
  },
  methods: {
    ...mapActions('watchlist', ['getWatchlistAction']),
  },
};
</script>
