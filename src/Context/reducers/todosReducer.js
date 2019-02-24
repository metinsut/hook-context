export const InitialStateTodos = {
   todos: []
};

export const ReducerTodos = (state, action) => {
   switch (action.type) {
      case 'add':
         return {
            ...state,
            todos: [...state.todos, action.payload]
         };
      case 'remove':
         return {
            ...state,
            todos: [...state.todos.filter((item, key) => key !== action.payload)]
         };
      case 'completed':
         return {
            ...state,
            ...(state.todos.find((item, key) => key === action.payload).check = !state.todos.find(
               (item, key) => key === action.payload
            ).check)
         };
      default:
         return state;
   }
};
