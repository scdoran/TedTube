import Vue from 'vue';
import Vuex from 'vuex';

import { ADD_TO_RECENTS, CLEAR_HISTORY, GET_RECENTS } from '../mutation-types';
import { tedRecents } from '../../shared/services/recents-service';

Vue.use(Vuex);

const state = () => ({
  recents: [],
});

const mutations = {
  [ADD_TO_RECENTS](state, video) {
    state.recents.push(video);
  },
  [CLEAR_HISTORY](state) {
    state.recents = [];
  },
  [GET_RECENTS](state, recents) {
    state.recents = recents;
  },
};

const actions = {
  async addToRecentsAction({ commit }, video) {
    const recentlyAdded = await tedRecents.addRecent(video);
    commit(ADD_TO_RECENTS, recentlyAdded);
  },
  async CLEAR_HISTORY({ commit }) {
    const recents = await tedRecents.clearHistory();
    commit(CLEAR_HISTORY, recents);
  },
  async getRecentsAction({ commit }) {
    const recents = await tedRecents.getRecents();
    commit(GET_RECENTS, recents);
  },
};

const getters = {
  getRecentById: state => id => state.recents.find(r => r.id === id),
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
