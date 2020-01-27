import Vue from 'vue';
import Vuex from 'vuex';

import { tedFavorites } from '../../shared/services/favorites-service';
import {
  ADD_FAVORITE,
  GET_FAVORITES,
  REMOVE_FAVORITE,
} from '../mutation-types';

Vue.use(Vuex);

const state = () => ({
  favorites: [],
});

const mutations = {
  [ADD_FAVORITE](state, favorite) {
    state.favorites.push(favorite); // mutable addition
  },
  [GET_FAVORITES](state, favorites) {
    state.favorites = favorites;
  },
  [REMOVE_FAVORITE](state, videoId) {
    state.favorites = [...state.favorites.filter(p => p.id !== videoId)];
  },
};

const actions = {
  async addFavoritesAction({ commit }, video) {
    const favorite = await tedFavorites.addFavorite(video);
    commit(ADD_FAVORITE, favorite);
  },
  async getFavoritesAction({ commit }) {
    const favorites = await tedFavorites.getFavorites();
    commit(GET_FAVORITES, favorites);
  },
  async removeFavoriteAction({ commit }, video) {
    const favorite = await tedFavorites.removeFavorite(video);
    commit(REMOVE_FAVORITE, favorite);
  },
};

const getters = {
  getFavoriteById: state => id => state.favorites.find(f => f.id === id),
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
