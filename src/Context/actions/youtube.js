import YoutubeApi from '../../services/Youtube';

export const initYoutubeData = async youtube => {
   const api = await YoutubeApi(youtube);
   youtube.dispatchYoutube({ type: 'init', payload: api.data.items });
};

export const addYoutubeData = async youtube => {
   const api = await YoutubeApi(youtube);
   youtube.dispatchYoutube({ type: 'add', payload: api.data.items });
};
