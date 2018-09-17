import React from 'react';
import './Todos.css';

const Todos = props => {
  const strikeThrough = { textDecoration: 'line-through' };
  const active = { textDecoration: 'none' };

  const todos = props.todos && props.todos.length ? props.todos.map(todo => 
    <li key={ todo.id }>
      <div className="todo-wrapper">
        <h2 className="todo-title" style={ props.completed.includes(todo.id) ? strikeThrough : active }> { todo.title } </h2>
        <hr className="divider" />
        <p className="todo-content" style={ props.completed.includes(todo.id) ? strikeThrough : active }> { todo.content } </p>
        <div className="action-btns">
          {
            props.completed.includes(todo.id) ? 
              <button onClick={ () => props.undo(todo.id) } className="todo-undo-btn"> Restart </button>
              : <button onClick={ () => props.complete(todo.id) } className="todo-complete-btn"> Complete </button>
          }
          <button onClick={ () => props.delete(todo.id) } className="todo-del-btn"> Delete </button>
        </div>
      </div>
    </li>
  ) : <div className="empty"> You gat nothing to do? </div>
  return (
      <ul className="plain-list"> { todos } </ul>
  );
};

export default Todos;


