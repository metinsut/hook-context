export const InitialStateYoutube = {
   list: []
};

export const ReducerYoutube = (state, action) => {
   switch (action.type) {
      case 'add':
         return {
            ...state,
            list: [...state.list, action.payload]
         };
      default:
         return state;
   }
};
