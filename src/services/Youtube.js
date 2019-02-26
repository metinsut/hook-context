import axios from 'axios';

const YoutubeApi = () => {
   const url = 'https://www.googleapis.com/youtube/v3/videos';
   const config = {
      part: 'snippet',
      chart: 'mostPopular',
      defaultRegion: 'US',
      defaultCategoryId: 10,
      maxVideosToLoad: 24,
      key: 'AIzaSyDXrI2kpdmMM3hxH6HopK8N0K87xppNBf8',
      pageToken: ''
   };
   const options = {
      method: 'GET',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      // data: qs.stringify(data),
      params: config,
      url
   };
   return axios(options);
};

export default YoutubeApi;
