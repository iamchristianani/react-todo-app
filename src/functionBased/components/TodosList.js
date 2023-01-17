import React from 'react';
// import component files
import TodoItem from './TodoItem';

const TodosList = (props) => (
  <ul>
    {/* eslint-disable-next-line */}
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        // eslint-disable-next-line
        handleChangeProps={props.handleChangeProps}
        // eslint-disable-next-line
        deleteTodoProps={props.deleteTodoProps}
        // eslint-disable-next-line
        setUpdate={props.setUpdate}
      />
    ))}
  </ul>
);

export default TodosList;
