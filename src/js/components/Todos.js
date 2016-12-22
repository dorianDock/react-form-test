import React from 'react';
import Todo from './Todo';
import AddTodo from './add-todo';
import shortid from 'shortid';

import {
  toggleDone,
  addTodo,
  deleteTodo
} from './state-functions';

import {
  changeToDoColor
} from './todo-colors';

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: shortid.generate(), name: 'Write a blog post', done: false },
        { id: shortid.generate(), name: 'Try jest', done: false },
        { id: shortid.generate(), name: 'Have a beer', done: false },
      ],
      trout: {troutid: 1}
    }
  }

  changeColor(id){
    this.setState(changeToDoColor(this.state,id));
  }

  toggleDone(id) {
    this.setState(toggleDone(this.state, id));
  }

  incrementTroutId(){
    this.setState();
  }

  addTodo(todo) {
    this.setState(addTodo(this.state, todo));
  }

  deleteTodo(id) {
    this.setState(deleteTodo(this.state, id));
  }

  renderTodos() {
    return this.state.todos.map((todo) => {
      return (
        <li key={todo.id}>
          <Todo
            todo={todo}
            doneChange={(id) => this.toggleDone(id)}
            deleteTodo={(id) => this.deleteTodo(id)} />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <p>The <em>best</em> todo app out there.</p>
        <h1>Things to get done:</h1>
        <ul className="todos-list">{ this.renderTodos() }</ul>
        <AddTodo onNewTodo={(todo) => this.addTodo(todo)} />
      </div>
    )
  }
}
