import React, { Component } from "react";
import { CreateTodo } from "../createTodo/CreateTodo";
import { TodoCollection } from "../todoCollection/TodoCollection";
import { DefaultNote } from "../../ui/defaultNote/DefaultNote";

export class Todo extends Component {
  state = {
    todos: [],
    filterTodos: [],
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({ todos: JSON.parse(localStorage.getItem("todos")) || [] });
  }

  getNote = (note) => {
    this.setState((prevState) => {
      const addNote = [...prevState.todos, note];
      localStorage.setItem("todos", JSON.stringify(addNote));
      return { todos: addNote };
    });
  };

  deleteNote = (id) => {
    this.setState((prevState) => {
      const resultNotesFilter = prevState.todos.filter(
        (note) => note.id !== id
      );
      localStorage.setItem("todos", JSON.stringify(resultNotesFilter));

      return {
        todos: resultNotesFilter,
      };
    });
  };

  filterTodos = () => {
    const filter = JSON.parse(localStorage.getItem("todos")).filter(
      (note) => note.title === "react"
    );
    console.log("filter", filter);
    this.setState({ todos: filter });
  };

  render() {
    const { todos } = this.state;
    // localStorage.setItem("todos", JSON.stringify(todos));
    console.log("re-render");

    return (
      <>
        <button onClick={this.filterTodos}>filter</button>
        <CreateTodo getNote={this.getNote} />
        {todos.length ? (
          <TodoCollection data={todos} deleteNote={this.deleteNote} />
        ) : (
          <DefaultNote />
        )}
      </>
    );
  }
}
