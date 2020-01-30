<template>
  <div>
    <TedHeading text="WATCHLIST" :uppercase="true" />
    <TedLoader :display="loading" type="list" />
    <TedList v-if="watchlist && watchlist.length" :results="watchlist">
      <TedCard
        v-for="item in watchlist"
        :key="item.id || 0"
        :item="item"
        :width="350"
      >
        <TedCardAction>
          <TedButton
            :hideBackground="true"
            :className="'card-button'"
            :icon="true"
            @clicked="handleWatchlist"
          >
            <TedIcon
              :color="`${item.watchlist ? 'blue' : ''}`"
              iconType="bookmark"
            />
          </TedButton> </TedCardAction
      ></TedCard>
    </TedList>
  </div>
</template>

<script>
import TedButton from '@/components/TedButton';
import TedCard from '@/components/Card/TedCard';
import TedCardAction from '@/components/Card/TedCardAction';
import TedHeading from '@/components/TedHeading';
import TedList from '@/components/TedList';
import TedLoader from '@/components/TedLoader';

import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'TedWatchList',
  components: {
    TedButton,
    TedCard,
    TedCardAction,
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
    ...mapGetters('watchlist', ['getWatchlistById']),
    ...mapState('watchlist', ['watchlist']),
  },
  methods: {
    ...mapActions('search', ['updateVideoAction']),
    ...mapActions('watchlist', [
      'addWatchlistAction',
      'getWatchlistAction',
      'removeWatchlistAction',
    ]),
    inWatchlist(id) {
      const watchlist = { ...this.getWatchlistById(id) };
      return !!watchlist;
    },
    handleWatchlist(item) {
      item.watchlist = !item.watchlist;
      if (item.watchlist && this.inWatchlist(item.id)) {
        this.removeWatchlistAction(item);
      } else if (!this.inWatchlist(item.id)) {
        this.addWatchlistAction(item);
      }
      this.updateVideo(item);
      item.watchlist = !item.watchlist;
    },
    updateVideo(video) {
      this.updateVideoAction(video);
    },
  },
};
</script>
