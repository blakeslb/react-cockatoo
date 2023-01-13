import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function getTitle(title){
  return title;
}
function App() {
  return (
    <div>
      <h1>{getTitle("Todo List")}</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
