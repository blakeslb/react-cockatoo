import React from 'react';


const AddTodoForm = (props) => {
    const handleAddTodo = (event) =>{
        event.preventDefault()
       let todoTitle= event.target.title.value;
       console.log(event);
       props.onAddTodo(todoTitle);
       event.target.reset();

    }

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor='todoTitle'>Title: </label>
                <input id='todoTitle' type='text' name='title'></input>
                <button type='submit' >Add</button>
            </form >
        </div>
    );
}
export default AddTodoForm;