<template>
  <div>
    <TedHeading text="favorites" :uppercase="true" />
    <TedLoader :display="loading" type="list" />
    <TedList v-if="favorites && favorites.length" :results="favorites">
      <TedCard
        v-for="item in favorites"
        :key="item.id || 0"
        :item="item"
        :width="350"
      >
        <TedCardAction>
          <TedButton
            :hideBackground="true"
            :className="'card - button'"
            :icon="true"
            @clicked="handleFavorite"
          >
            <TedIcon
              :color="`${item.favorite ? 'red' : ''}`"
              iconType="favorite"
            />
          </TedButton>
        </TedCardAction>
      </TedCard>
    </TedList>
  </div>
</template>

<script>
import TedButton from '@/components/TedButton';
import TedCard from '@/components/Card/TedCard';
import TedCardAction from '@/components/Card/TedCardAction';
import TedHeading from '@/components/TedHeading';
import TedIcon from '@/components/TedIcon';
import TedList from '@/components/TedList';
import TedLoader from '@/components/TedLoader';

import { mapActions, mapGetters, mapState } from 'vuex';
export default {
  name: 'TedFavorites',
  components: {
    TedButton,
    TedCard,
    TedCardAction,
    TedHeading,
    TedIcon,
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
    ...mapGetters('favorites', ['getFavoriteById']),
    ...mapState('favorites', ['favorites']),
  },
  methods: {
    ...mapActions('favorites', ['getFavoritesAction']),
    ...mapActions('search', ['updateVideoAction']),
    async loadFavorites() {
      await this.getFavoritesAction();
    },
    inFavorites(id) {
      const favorite = { ...this.getFavoriteById(id) };
      return !!favorite;
    },
    handleFavorite(item) {
      item.favorite = !item.favorite;
      if (item.favorite && this.inFavorites(item.id)) {
        this.removeFavoriteAction(item);
      } else if (!this.inFavorites(item.id)) {
        this.addFavoritesAction(item);
      }
      this.updateVideo(item);
      item.favorite = !item.favorite;
    },
  },
};
</script>
