import Vue from 'vue';
import Vuex from 'vuex';

import { tedVideos } from '../../shared/services/ted-service';

import { ADD_VIDEOS, GET_VIDEOS, UPDATE_VIDEO } from '../mutation-types';

Vue.use(Vuex);

const state = () => ({
  videos: [],
});

const mutations = {
  [ADD_VIDEOS](state, videos) {
    state.videos.push(videos); // mutable addition
  },
  [GET_VIDEOS](state, videos) {
    state.videos = videos;
  },
  [UPDATE_VIDEO](state, video) {
    const videoToUpdate = state.videos.findIndex(id => video.id === id);
    state.videos.splice(videoToUpdate, 1, video);
    state.videos = [...state.videos];
  },
};

const actions = {
  async addVideosAction({ commit }, videos) {
    const videosToAdd = await tedVideos.addVideos(videos);
    commit(ADD_VIDEOS, videosToAdd);
  },
  async getVideoAction({ commit }, videoID) {
    const video = await tedVideos.getVideo(videoID);
    commit(ADD_VIDEOS, video);
  },
  async getVideosAction({ commit }, query) {
    const videos = await tedVideos.getVideos(query);
    commit(GET_VIDEOS, videos);
  },
  async updateVideoAction({ commit }, video) {
    commit(UPDATE_VIDEO, video);
  },
};

const getters = {
  getVideoById: state => id => {
    return state.videos.find(v => v.id === id);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
