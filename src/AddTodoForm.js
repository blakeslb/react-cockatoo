import React from 'react';

const AddTodoForm = (props) => {
//suck here iwth error
    const handleAddTodo = (event) =>{
        event.preventDefault()
       let todoTitle= event.target[0].value;
       console.log(todoTitle);
       setNewTodo(todoTitle);
       event.target.reset();

       props.onAddTodo(event);


    }


    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor='todoTitle'>Title: </label>
                <input id='todoTitle' type='text' name=''></input>
                <button type='submit' >Add</button>
            </form >
        </div>
    );
}
export default AddTodoForm;