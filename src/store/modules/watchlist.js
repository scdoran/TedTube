import Vue from 'vue';
import Vuex from 'vuex';

import { tedWatchlist } from '../../shared/services/watchlist-service';
import {
  ADD_WATCHLIST,
  GET_WATCHLIST,
  REMOVE_WATCHLIST,
} from '../mutation-types';

Vue.use(Vuex);

const state = () => ({
  watchlist: [],
});

const mutations = {
  [ADD_WATCHLIST](state, item) {
    state.watchlist.push(item);
  },
  [GET_WATCHLIST](state, watchlist) {
    state.watchlist = watchlist;
  },
  [REMOVE_WATCHLIST](state, itemId) {
    state.watchlist = [...state.watchlist.filter(w => w.id !== itemId)];
  },
};

const actions = {
  async addWatchlistAction({ commit }, item) {
    const videoAdded = await tedWatchlist.addWatchlist(item);
    commit(ADD_WATCHLIST, videoAdded);
  },
  async getWatchlistAction({ commit }) {
    const list = await tedWatchlist.getWatchlist();
    commit(GET_WATCHLIST, list);
  },
  async removeWatchlistAction({ commit }, item) {
    const videoToRemove = await tedWatchlist.removeWatchlist(item);
    commit(REMOVE_WATCHLIST, videoToRemove);
  },
};

const getters = {
  getWatchlistById: state => id => state.watchlist.find(w => w.id === id),
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
