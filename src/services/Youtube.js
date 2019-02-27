import axios from 'axios';

const YoutubeApi = (config) => {
   const url = 'https://www.googleapis.com/youtube/v3/videos';
   const options = {
      method: 'GET',
      params: config.stateYoutube.config,
      url
   };
   return axios(options);
};

export default YoutubeApi;
