<template>
  <TedContainer>
    <TedHeading text="WATCHLIST" :uppercase="true" />
    <TedList v-if="watchlist && watchlist.length" :results="watchlist">
      <TedCard
        v-for="item in watchlist"
        :key="item.id || 0"
        :width="350"
        :item="item"
        type="image"
      >
        <TedCardAction>
          <TedButton
            :hideBackground="true"
            :className="'card - button'"
            :icon="true"
            @clicked="handleFavorite(item)"
          >
            <TedIcon
              :color="`${item.favorite ? 'red' : ''}`"
              iconType="favorite"
            />
          </TedButton>
          <TedButton
            :hideBackground="true"
            :className="'card-button'"
            :icon="true"
            @clicked="handleWatchlist(item)"
          >
            <TedIcon
              :color="`${item.watchlist ? 'blue' : ''}`"
              iconType="bookmark"
            />
          </TedButton>
        </TedCardAction>
      </TedCard>
    </TedList>
  </TedContainer>
</template>

<script>
import TedButton from '@/components/TedButton';
import TedCard from '@/components/Card/TedCard';
import TedCardAction from '@/components/Card/TedCardAction';
import TedContainer from '@/components/TedContainer';
import TedHeading from '@/components/TedHeading';
import TedIcon from '@/components/TedIcon';
import TedList from '@/components/TedList';

import { favoritesAndWatchlists } from '../shared/mixins/favoritesAndWatchlist';

export default {
  name: 'TedWatchList',
  components: {
    TedButton,
    TedCard,
    TedCardAction,
    TedContainer,
    TedHeading,
    TedIcon,
    TedList,
  },
  mixins: [favoritesAndWatchlists],
  async created() {
    await this.getWatchlistAction();
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>
