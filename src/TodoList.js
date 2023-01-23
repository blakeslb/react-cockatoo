import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
    {
      title: "Create a memo",
      priority: "medium",
      min_per_task: 35,
      listID: 0,
      complete: false,
    },
    {
      title: "Respond to email",
      priority: "high",
      min_per_task: 10,
      listID: 1,
      complete: false,
    },
    {
      title: "Schedule meeting",
      priority: "low",
      min_per_task: 10,
      listID: 2,
      complete: false,
    },
  ];

const TodoList = (todo) => {
    return (
        <ul>
            {todoList.map((item) => {
                return <TodoListItem key = {item.objectID} item = {item} />;
            })}
        </ul>
    );
}

export default TodoList;

