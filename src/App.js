import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

// Deletion method starts at 51:24  I'm taking a break

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: '1000 headshots with the ACR',
        completed: false
      },
      {
        id: 2,
        title: '1001 headshots with the MP7',
        completed: false
      },
      {
        id: 3,
        title: 'Job as a programmer',
        completed: false
      }
    ]
  }
  // Toggle Complete
  markComplete = (id) => {
    // go into the state object and for each item in the todos, toggle the completed if it matches the id passed through from todos
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })  });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Random Number



  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: Math.floor(Math.random(0,1)*100),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete ={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
