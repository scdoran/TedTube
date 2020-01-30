<template>
  <div>
    <TedHeading text="Search" :uppercase="true" />
    <SearchBar @search="getVideos" />
    <TedLoader :display="loading" type="list" />
    <TedList
      v-if="videos.length"
      type="search"
      heading="Results"
      :results="videos"
    >
      <TedCard
        v-for="item in videos"
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
          </TedButton>
        </TedCardAction>
      </TedCard>
    </TedList>
    <TedHeading
      v-if="initialLoad && (!videos || !videos.length)"
      text="Oops, looks like there aren't any results based on the search criteria!"
      :uppercase="true"
    />
  </div>
</template>

<script>
// COMPONENTS
import SearchBar from '@/components/Search/SearchBar';
import TedButton from '@/components/TedButton';
import TedCard from '@/components/Card/TedCard';
import TedCardAction from '@/components/Card/TedCardAction';
import TedHeading from '@/components/TedHeading';
import TedIcon from '@/components/TedIcon';
import TedLoader from '@/components/TedLoader';
import TedList from '@/components/TedList';

// STORE
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'TedSearch',
  props: {
    queryType: {
      type: String,
      default: () => '',
    },
    text: {
      type: String,
      default: () => '',
    },
  },
  components: {
    SearchBar,
    TedButton,
    TedCard,
    TedCardAction,
    TedHeading,
    TedIcon,
    TedLoader,
    TedList,
  },
  data() {
    return {
      initialLoad: true,
      loading: false,
    };
  },
  computed: {
    ...mapGetters('favorites', ['getFavoritesById']),
    ...mapGetters('watchlist', ['getWatchlistById']),
    ...mapState('favorites', ['favorites']),
    ...mapState('search', ['videos']),
    ...mapState('watchlist', ['watchlist']),
  },
  async created() {
    await this.checkForQuery();
    this.initialLoad = false;
  },
  methods: {
    ...mapActions('favorites', ['addFavoritesAction', 'removeFavoriteAction']),
    ...mapActions('watchlist', ['addWatchlistAction', 'removeWatchlistAction']),
    ...mapActions('search', ['addVideosAction', 'getVideosAction']),
    checkForQuery() {
      if (this.queryType !== '' && this.text !== '') {
        const query = {
          queryType: this.queryType,
          text: this.text,
        };
        this.getVideos(query);
      }
    },
    inWatchlist(id) {
      const watchlist = { ...this.getWatchlistById(id) };
      return !!watchlist;
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
    async getVideos(query) {
      this.loading = true;
      this.results = await this.getVideosAction(query);
      this.loading = false;
    },
  },
};
</script>
