import * as axios from 'axios';

import {
  parseItem,
  parseResponse,
} from '../response-formatting/response-handling';
import { mockApi } from '../config/service-config';

const addRecent = async function(video) {
  try {
    const response = await axios.post(`${mockApi}/recents`, video);
    const addedRecents = parseItem(response, 201);
    return addedRecents;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getRecents = async function() {
  try {
    const response = await axios.get(`${mockApi}/recents`);
    let data = parseResponse(response);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getRecentItem = async function(id) {
  try {
    const response = await axios.get(`${mockApi}/recents/${id}`);
    let data = parseItem(response, 200);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const clearHistory = async function() {
  try {
    const response = await axios.delete(`${mockApi}/recents/`);
    parseItem(response, 200);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const tedRecents = {
  addRecent,
  clearHistory,
  getRecentItem,
  getRecents,
};
