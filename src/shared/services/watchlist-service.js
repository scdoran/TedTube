import * as axios from 'axios';

import {
  parseItem,
  parseResponse,
} from '../response-formatting/response-handling';
import { mockApi } from '../config/service-config';

const addWatchlist = async function(video) {
  try {
    const response = await axios.post(`${mockApi}/watchlist`, video);
    const addedWatchlistItem = parseItem(response, 201);
    return addedWatchlistItem;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getWatchlist = async function() {
  try {
    const response = await axios.get(`${mockApi}/watchlist`);
    let data = parseResponse(response, 200);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getWatchlistById = async function(id) {
  try {
    const response = await axios.get(`${mockApi}/watchlist/${id}`);
    let data = parseItem(response, 200);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const removeWatchlist = async function(video) {
  try {
    const response = await axios.delete(`${mockApi}/watchlist/${video.id}`);
    parseItem(response, 200);
    return video.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const tedWatchlist = {
  addWatchlist,
  getWatchlist,
  getWatchlistById,
  removeWatchlist,
};
