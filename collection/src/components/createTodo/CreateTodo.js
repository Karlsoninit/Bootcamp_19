import React, { Component } from "react";
import shortid from "shortid";

const initialState = {
  todo: "",
};

export class CreateTodo extends Component {
  state = { ...initialState };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.props);

    const todo = {
      title: this.state.todo,
      id: shortid(),
      date: new Date().toDateString(),
    };

    this.props.getNote(todo);
    this.setState({ ...initialState });
  };

  render() {
    const { todo } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          name="todo"
          placeholder="create todo"
          value={todo}
        />
        <button type="submit">SEND</button>
      </form>
    );
  }
}
