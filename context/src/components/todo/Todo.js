import React, { Component } from "react";
import { CreateTodo } from "../createTodo/CreateTodo";
import { TodoList } from "../todoList/TodoList";
import { DefaultNote } from "../../ui/defaultNote/DefaultNote";

export class Todo extends Component {
  state = {
    todos: [],
  };

  getNote = (note) => {
    this.setState((prevState) => {
      return { todos: [...prevState.todos, note] };
    });
  };

  deleteNote = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((note) => note.id !== id),
      };
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <>
        <CreateTodo getNote={this.getNote} />
        {todos.length ? (
          <TodoList data={todos} deleteNote={this.deleteNote} />
        ) : (
          <DefaultNote />
        )}
      </>
    );
  }
}
