import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function getTitle(title){
  return title;
}
function App() {

  const [newTodo, setNewTodo] = React.useState('');

  return (
    <div>
      <h1>{getTitle("Todo List")}</h1>
      <AddTodoForm setNewTodo={setNewTodo} />
      {/* This is what I previously had and got stuck on in instructions:
      <AddTodoForm onAddtodo={setNewTodo} /> */}

      <p>
        {newTodo}
      </p>
      <TodoList />
    </div>
  );
}

export default App;
