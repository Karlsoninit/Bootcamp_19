import React from "react";
import { TodoList } from "../todoList/TodoList";

export const TodoCollection = ({ data, deleteNote }) => {
  console.log("props", data);
  return (
    <ul>
      {data.map((note) => (
        <TodoList key={note.id} deleteNote={deleteNote} note={note} />
      ))}
    </ul>
  );
};
