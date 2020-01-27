import * as axios from 'axios';

import {
  parseItem,
  parseResponse,
} from '../response-formatting/response-handling';
import { formatting } from '../response-formatting/formatting';
import { tedApi, mockApi } from '../config/service-config';

const getConfig = params => {
  const config = {
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'bestapi-ted-v1.p.rapidapi.com',
      'x-rapidapi-key': 'b9eff9cb9fmshec03c4b8fa32ec3p19a21djsndc97db8f774f',
      accept: 'application/json',
    },
    params: getQueryObject(params),
  };
  console.log('getConfig ', config);
  return config;
};

const getQueryObject = query => {
  const queryObject =
    query.queryType === 'talksByName'
      ? {
          name: query.text,
        }
      : query.queryType === 'bySpeaker'
      ? {
          speaker: query.text,
        }
      : {
          description: query.text,
        };
  return queryObject;
};

const addVideos = async function(videos) {
  try {
    const response = await axios.post(`${mockApi}/videos`, videos);
    const videosToAdd = parseItem(response, 201);
    return videosToAdd;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// const getVideos = async function() {
//   const response = await axios.get(`${mockApi}/videos`);
//   let data = parseResponse(response);
//   const videos = data.map(video => {
//     video = new formatting.formattedVideo(video);
//     return video;
//   });
//   console.log('videos? ', videos);
//   return videos;
// };
const getVideos = async function(query) {
  try {
    const response = await axios.get(
      `${tedApi}${query.queryType}`,
      getConfig(query)
    );
    let data = parseResponse(response);
    const videos = data.map(video => {
      video = new formatting.formattedVideo(video);
      return video;
    });
    console.log('videos? ', videos);
    return videos;
  } catch (error) {
    console.error(error);
    return {
      error: error.response.status,
    };
  }
};

const getVideo = async function(videoId) {
  const response = await axios.get(`${mockApi}/videos/${videoId}`);
  let data = parseResponse(response);
  data.embeddedLink = data.embeddedLink.replace(/\\/g, '');
  data.speakerBio = data.speakerBio.replace(/\\/g, '');
  return data;
};

const updateVideo = async function(video) {
  try {
    const response = await axios.put(`${mockApi}/videos/${video.id}`, video);
    const videoToUpdate = parseItem(response, 201);
    return videoToUpdate;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const tedVideos = {
  addVideos,
  getVideo,
  getVideos,
  updateVideo,
};
