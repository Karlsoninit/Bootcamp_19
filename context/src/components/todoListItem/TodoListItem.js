import React, { Component } from "react";

export class TodoListItem extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    const {
      deleteNote,
      note: { title, date, id },
    } = this.props;
    return (
      <li>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <button onClick={() => deleteNote(id)}>delete</button>
      </li>
    );
  }
}
