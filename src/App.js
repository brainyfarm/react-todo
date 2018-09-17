import React, { Component } from 'react';
import Todo from './components/Todo/Todos';
import AddTodo from './components/Todo/AddTodo/AddTodo';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: "xxRR",
        title: "Go Hunting",
        content: "Go do some hunting for supper",
      },
      {
        id: "mmuv",
        title: "Complete React Todo",
        content: "Lorem ipsum dolor sit amet, ea evertitur sadipscing cum. Cotidieque persequeris eu pro. Cum ei volumus accusam. Eu prima eirmod pro, no nec insolens laboramus, dicat viderer te mel. Dicant explicari ea eum, illum mollis omittam pri at.",
      }
    ],
    completed: [],
    showForm: true,
  }
  toggleShowFormHandler = () => {
    const showForm = !this.state.showForm;
    this.setState({ showForm });
  }
  completeTodoHandler(id) {
    console.log(`Completing TODO with id ${id}`);
    const completed = [...this.state.completed];
    if (!completed.includes(id)) {
      completed.push(id);
      this.setState({ completed });
    }
  }

  undoCompleteTodoHandler(id) {
    console.log(`Restarting TODO with id ${id}`);
    const completed = [...this.state.completed];
    const completedIDIndex = completed.findIndex(id => id === id);
    console.log(`completedIndex`, completed)
    if (completed.includes(id)) {
      completed.splice(completedIDIndex, 1);
      this.setState({ completed });
    }
  }

  deleteHandler(id) {
    const todos = [...this.state.todos];
    const itemIndex = todos.findIndex((todo) => {
      return todo.id === id;
    });
    todos.splice(itemIndex, 1);
    this.setState({ todos });
  }
  render() {
    return (
      <div className="todos-wrapper">
        
        { this.state.showForm ?
          <AddTodo 
            toggleShowForm={ this.toggleShowFormHandler.bind(this) }
          /> : null
        }
        <Todo 
          todos={ this.state.todos }
          delete={ this.deleteHandler.bind(this) }
          completed={ this.state.completed }
          complete={ this.completeTodoHandler.bind(this) }
          undo={ this.undoCompleteTodoHandler.bind(this) }
        />
      </div>
    );
  }
}

export default App;
