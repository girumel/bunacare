import React from "react";
import "./Checklist.css";

import { TodoWrapper } from "./Todolist/TodoWrapper";

const Checklist = () => {
  return (
    <div className="check">
      <div className="title">
        <h2>check list</h2>
      </div>
      <div className="main">
        <TodoWrapper />
      </div>
    </div>
  );
};

export default Checklist;
