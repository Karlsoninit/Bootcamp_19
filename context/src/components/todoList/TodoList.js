import React from "react";
import { TodoListItem } from "../todoListItem/TodoListItem";

export const TodoList = ({ data, deleteNote }) => {
  console.log("props", data);
  return (
    <ul>
      {data.map((note) => (
        <TodoListItem key={note.id} deleteNote={deleteNote} note={note} />
      ))}
    </ul>
  );
};
