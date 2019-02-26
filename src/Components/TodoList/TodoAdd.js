import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalProvider';
import * as Todo from '../../style/pages/todos';

const TodoAdd = () => {
   const { todos } = useContext(GlobalContext);
   const [todo, setTodo] = useState('');
   const setTodoItem = e => setTodo(e.target.value);
   const addTodoItem = () => {
      todos.dispatchTodos({ type: 'add', payload: { name: todo, check: false } });
      setTodo('');
   };
   const sendWithEnter = e => {
      if (e.keyCode === 13) addTodoItem();
   };
   return (
      <Todo.TodoAdd>
         <Todo.TodoInput onChange={setTodoItem} onKeyUp={sendWithEnter} value={todo} />
         <Todo.TodoSend onClick={addTodoItem}>Add</Todo.TodoSend>
      </Todo.TodoAdd>
   );
};

export default TodoAdd;
