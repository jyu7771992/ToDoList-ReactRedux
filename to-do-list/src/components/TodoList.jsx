import React from 'react';
import TodoRow from './TodoRow';

const TodoList = () => {
  const todos = [];

  const renderListItems = todos.map((todo) => {
    return <TodoRow key={todo.id} todo={todo} />;
  });

  return <ul className='todo-list'>{renderListItems}</ul>;
};

export default TodoList;
