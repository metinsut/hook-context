import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalProvider';
import * as Todo from '../../style/pages/todos';

const TodoAdd = () => {
   const { todos } = useContext(GlobalContext);
   const [todo, setTodo] = useState();
   const setTodoItem = (e) => setTodo(e.target.value);
   const addTodoItem = () => todos.dispatchTodos({ type: 'add', payload: { name: todo, check: false } });
   return (
      <Todo.TodoAdd>
         <Todo.TodoInput onChange={setTodoItem} />
         <Todo.TodoSend onClick={addTodoItem}>Add</Todo.TodoSend>
      </Todo.TodoAdd>
   );
};

export default TodoAdd;
