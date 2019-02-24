import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalProvider';
import TodoAdd from './TodoAdd';
import TodoItem from './TodoItem';
import * as Todo from '../../style/pages/todos';

const TodoList = () => {
   const { todos } = useContext(GlobalContext);
   return (
      <Todo.TodoRoot>
         <h1>Todos</h1>
         <Todo.TodoWrapper>
            <TodoAdd />
            {todos && todos.stateTodos.todos.map((item, key) => <TodoItem key={key} item={item} index={key}/>)}
         </Todo.TodoWrapper>
      </Todo.TodoRoot>
   );
};

export default TodoList;
