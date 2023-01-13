import React from 'react';

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

const TodoList = () => {
    return (
        <ul>
            {todoList.map(function (item) {
                return <li key={item.listID}>{item.title}</li>;
            })}
        </ul>
    );
}

export default TodoList;

