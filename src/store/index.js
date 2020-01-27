import Vue from 'vue';
import Vuex from 'vuex';

// MODULES
import favoritesModule from './modules/favorites';
import recentlyWatchedModule from './modules/recents';
import searchedModule from './modules/searched';
import watchlistModule from './modules/watchlist';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    favorites: favoritesModule,
    recents: recentlyWatchedModule,
    search: searchedModule,
    watchlist: watchlistModule,
  },
});
