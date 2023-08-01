import React from "react";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import Pencilsave from "@mui/icons-material/SaveAsOutlined";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="todo_icon">
        <Pencilsave onClick={() => editTodo(task.id)} />
        <DeleteSharpIcon
          className="trash"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
