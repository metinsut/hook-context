import React, { useReducer } from 'react';
import { InitialStateCount, ReducerCount } from './reducers/countReducer';
import { InitialStateTodos, ReducerTodos } from './reducers/todosReducer';
import { InitialStateYoutube, ReducerYoutube } from './reducers/youtubeReducer';

const GlobalContext = React.createContext();

const GlobalProvider = props => {
   const [stateCount, dispatchCount] = useReducer(ReducerCount, InitialStateCount);
   const [stateTodos, dispatchTodos] = useReducer(ReducerTodos, InitialStateTodos);
   const [stateYoutube, dispatchYoutube] = useReducer(ReducerYoutube, InitialStateYoutube);
   const counts = { stateCount, dispatchCount };
   const todos = { stateTodos, dispatchTodos };
   const youtube = { stateYoutube, dispatchYoutube };
   return <GlobalContext.Provider value={{ counts, todos, youtube }}>{props.children}</GlobalContext.Provider>;
};

export { GlobalProvider, GlobalContext };
