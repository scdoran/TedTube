import * as axios from 'axios';

import {
  parseItem,
  parseResponse,
} from '../response-formatting/response-handling';
import { mockApi } from '../config/service-config';

const addFavorite = async function(video) {
  try {
    const response = await axios.post(`${mockApi}/favorites`, video);
    const addedFavorite = parseItem(response, 201);
    return addedFavorite;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getFavorites = async function() {
  try {
    const response = await axios.get(`${mockApi}/favorites`);
    let data = parseResponse(response);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getFavorite = async function(id) {
  try {
    const response = await axios.get(`${mockApi}/favorites/${id}`);
    let data = parseItem(response, 200);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const removeFavorite = async function(video) {
  try {
    const response = await axios.delete(`${mockApi}/favorites/${video.id}`);
    parseItem(response, 200);
    return video.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const tedFavorites = {
  addFavorite,
  getFavorite,
  getFavorites,
  removeFavorite,
};
