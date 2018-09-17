import React from 'react';
import './AddTodo.css';

const AddTodo = (props) => {
  return (
    <div className="add-todo-wrapper"> 
      <p className="close-add-btn" onClick={ props.toggleShowForm }> x </p>
      <h3> What would you like to do? </h3>
      <form>
        <label htmlFor="title"> Title </label> <br />
        <input type="text" className="add-todo-title" id="title" /> <br />
        <label htmlFor="content"> Brief description </label> <br />
        <textarea type="text" className="add-todo-content" id="content" /> <br />
        <button className="add-todo-btn">Add Todo </button>
      </form>
    </div>
  );
}

export default AddTodo;
