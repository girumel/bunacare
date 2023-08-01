import Todo from "../../Checklist/Todolist/Todo.js";
import React from "react";
import "./activity.css";

const Activity = () => {
  return (
    <div className="wrapperer">
      <div class="tasks">
        <div class="due_current">
          <span className="pending">current task</span>
          <p>Conduct a visual inspection of the crop for signs of BES.</p>
          <button className="date">
            march <span className="btn-content">05</span>{" "}
          </button>
        </div>
        <div class="due_pending">
          <span className="due-pending">pending task</span>
          <p>Schedule a disease management workshop for farmers.</p>
          <button className="date">
            march <span className="btn-content">05</span>{" "}
          </button>
        </div>
        <div class="days_left_due">
          <span className="days-pending">current task</span>
          <p>Record crop health observations in the system.</p>
          <button className="date">
            march <span className="btn-content">05</span>{" "}
          </button>
        </div>
        <div class="days_left_pending">
          <span className="days-left">pending task</span>
          <p>Purchase additional fungicides and bactericides.</p>
          <button className="date">
            march <span className="btn-content">05</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
