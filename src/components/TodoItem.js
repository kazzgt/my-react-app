import React from 'react';

const TodoItem = ({ todo, onDelete }) => (
  <div>
    <span>{todo.text}</span>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </div>
);

export default TodoItem;