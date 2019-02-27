export const InitialStateYoutube = {
   list: [],
   config: {
      part: 'snippet, statistics',
      chart: 'mostPopular',
      regionCode: 'US',
      videoCategoryId: 10,
      maxResults: 24,
      key: 'AIzaSyDXrI2kpdmMM3hxH6HopK8N0K87xppNBf8',
      pageToken: ''
   }
};

export const ReducerYoutube = (state, action) => {
   switch (action.type) {
      case 'init':
         return {
            ...state,
            list: [...state.list, ...action.payload]
         };
      case 'add':
         return {
            ...state,
            list: [...action.payload]
         };
      default:
         return state;
   }
};
