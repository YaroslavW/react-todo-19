import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Study React',
        completed: false
      },
      {
        id: 2,
        title: 'Create an application',
        completed: false
      },
      {
        id: 3,
        title: 'Find a job React - developer',
        completed: false
      },
    ]
  }
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {
      if ( todo.id === id ) {
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

  render() {
   
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
