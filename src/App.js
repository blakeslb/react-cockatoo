import React from 'react';

function getTitle(title){
  return title;
}
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

function App() {
  return (
    <div>
      <h1>{getTitle("Todo List")}</h1>
    
      <ul>
      {todoList.map(function (item) {
        return <li key={item.listID}>{item.title}</li>;
      })}
      </ul>
    </div>
  );
}

export default App;
