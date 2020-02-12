import { mapActions, mapGetters, mapState } from 'vuex';

export const favoritesAndWatchlists = {
  async created() {
    await this.getFavoritesAction();
    await this.getWatchlistAction();
  },
  computed: {
    ...mapGetters('favorites', ['getFavoriteById']),
    ...mapGetters('watchlist', ['getWatchlistById']),
    ...mapState('favorites', ['favorites']),
    ...mapState('watchlist', ['watchlist']),
  },
  methods: {
    ...mapActions('favorites', [
      'addFavoritesAction',
      'getFavoritesAction',
      'removeFavoriteAction',
    ]),
    ...mapActions('search', [
      'addVideosAction',
      'getVideosAction',
      'updateVideoAction',
    ]),
    ...mapActions('watchlist', [
      'addWatchlistAction',
      'getWatchlistAction',
      'removeWatchlistAction',
    ]),
    inFavorites(id) {
      const favorite = { ...this.getFavoriteById(id) };
      return !!favorite;
    },
    inWatchlist(id) {
      const watchlist = { ...this.getWatchlistById(id) };
      return !!watchlist;
    },
    handleFavorite(item) {
      const itemClone = { ...item };
      if (itemClone.favorite && this.inFavorites(item.id)) {
        this.removeFavoriteAction(itemClone);
      } else {
        this.addFavoritesAction(itemClone);
      }
      itemClone.favorite = !item.favorite;
      this.updateVideoAction(itemClone);
    },
    handleWatchlist(item) {
      const itemClone = { ...item };
      if (itemClone.watchlist && this.inWatchlist(item.id)) {
        this.removeWatchlistAction(itemClone);
      } else {
        this.addWatchlistAction(itemClone);
      }
      itemClone.watchlist = !item.watchlist;
      this.updateVideoAction(itemClone);
    },
  },
};
