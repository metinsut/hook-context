export const InitialStateCount = {
   count: 0
};

export const ReducerCount = (state, action) => {
   switch (action.type) {
      case 'reset':
         return InitialStateCount;
      case 'increment':
         return { ...state, count: state.count + 1 };
      case 'decrement':
         return { ...state, count: state.count - 1 };
      default:
         return { ...state };
   }
};
