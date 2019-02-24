import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalProvider';
import * as Todo from '../../style/pages/todos';

const TodoItem = props => {
   const { todos } = useContext(GlobalContext);
   const checkedItem = id => todos.dispatchTodos({ type: 'completed', payload: id });
   const deleteItem = id => todos.dispatchTodos({ type: 'remove', payload: id });
   return (
      <Todo.TodoContainer>
         <Todo.TodoCount>{props.index + 1}</Todo.TodoCount>
         <Todo.TodoCompleted
            type="checkbox"
            defaultChecked={props.item.check}
            onChange={() => checkedItem(props.index)}
         />
         <Todo.TodoName check={props.item.check}>{props.item.name}</Todo.TodoName>
         <Todo.TodoDelete onClick={() => deleteItem(props.index)}>Delete</Todo.TodoDelete>
      </Todo.TodoContainer>
   );
};

export default TodoItem;
