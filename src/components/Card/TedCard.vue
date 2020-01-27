<template>
  <v-card class="ma-4" hover :max-width="width" :height="height">
    <div v-if="type === 'list'">
      <TedCardMedia type="image" :media="item">
        <TedCardTitle :title="item.name" />
      </TedCardMedia>
    </div>
    <div v-if="type === 'video'">
      <TedCardMedia type="video" :media="item" />
    </div>
    <TedCardAction v-if="showAction">
      <TedButton
        :hideBackground="true"
        :className="'card - button'"
        :icon="true"
        @clicked="handleFavorite"
      >
        <TedIcon :color="favoriteColor" iconType="heart" />
      </TedButton>
      <TedButton
        :hideBackground="true"
        :className="'card-button'"
        :icon="true"
        @clicked="handleWatchlist"
      >
        <TedIcon :color="watchListColor" iconType="bookmark" />
      </TedButton>
    </TedCardAction>
    <slot></slot>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

import TedButton from '@/components/TedButton';
import TedCardAction from '@/components/Card/TedCardAction';
import TedCardMedia from '@/components/Card/TedCardMedia';
import TedCardTitle from '@/components/Card/TedCardTitle';
import TedIcon from '@/components/TedIcon';

export default {
  name: 'TedCard',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    width: {
      type: [Number, String],
      default: () => 'auto',
    },
    height: {
      type: Number,
      default: () => undefined,
    },
    isFavorite: {
      type: Boolean,
      default: () => false,
    },
    inMyWatchlist: {
      type: Boolean,
      default: () => false,
    },
    showAction: {
      type: Boolean,
      default: () => true,
    },
    type: {
      type: String,
      default: () => 'list',
    },
  },
  data() {
    return {
      inFavorites: this.isFavorite,
      favoriteColor: this.isFavorite ? 'red' : '',
      clonedItem: { ...this.item },
      inWatchlist: this.inMyWatchlist,
      watchListColor: this.inMyWatchlist ? 'blue' : '',
    };
  },
  components: {
    TedButton,
    TedCardAction,
    TedCardMedia,
    TedCardTitle,
    TedIcon,
  },
  methods: {
    ...mapActions('favorites', ['addFavoritesAction', 'removeFavoriteAction']),
    ...mapActions('watchlist', ['addWatchlistAction', 'removeWatchlistAction']),
    ...mapActions('search', ['updateVideoAction']),
    handleFavorite() {
      this.clonedItem.favorite = !this.inFavorites;
      if (this.inFavorites) {
        this.favoriteColor = '';
        this.removeFavoriteAction(this.clonedItem);
      } else {
        this.favoriteColor = 'red';
        this.addFavoritesAction(this.clonedItem);
      }
      this.updateVideo(this.clonedItem);
      this.inFavorites = !this.inFavorites;
    },
    handleWatchlist() {
      this.clonedItem.watchlist = !this.inWatchlist;
      if (this.inWatchlist) {
        this.watchListColor = '';
        this.removeWatchlistAction(this.clonedItem);
      } else {
        this.watchListColor = 'blue';
        this.addWatchlistAction(this.clonedItem);
      }
      this.updateVideo(this.clonedItem);
      this.inWatchlist = !this.inWatchlist;
    },
    updateVideo(video) {
      this.updateVideoAction(video);
    },
  },
};
</script>

<style lang="scss" scoped></style>
