import React, { useReducer } from 'react';
import { InitialStateCount, ReducerCount } from './reducers/countReducer';
import { InitialStateTodos, ReducerTodos } from './reducers/todosReducer';

const GlobalContext = React.createContext();

const GlobalProvider = props => {
   const [stateCount, dispatchCount] = useReducer(ReducerCount, InitialStateCount);
   const [stateTodos, dispatchTodos] = useReducer(ReducerTodos, InitialStateTodos);
   const counts = { stateCount, dispatchCount };
   const todos = { stateTodos, dispatchTodos };

   return <GlobalContext.Provider value={{ counts, todos }}>{props.children}</GlobalContext.Provider>;
};

export { GlobalProvider, GlobalContext };
