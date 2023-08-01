import React from "react";
import "./activity.css";

const Activity = () => {
  return (
    <div className="wrapperer">
      <div class="tasks">
        <div class="due_current">
          <div className="due_current"></div>
          <span className="pending">current task</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor
            iste quam vero minus eum rem tempore aspernatur fugiat quas. Ab, et
            non!
          </p>
          <button className="date">
            march <span className="btn-content">05</span>{" "}
          </button>
        </div>
        <div class="due_pending">
          <span className="pending">pending task</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor
            iste quam vero minus eum rem tempore aspernatur fugiat quas. Ab, et
            non!
          </p>
          <button className="date">
            march <span className="btn-content">05</span>{" "}
          </button>
        </div>
        <div class="days_left_due">
          <span className="pending">current task</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor
            iste quam vero minus eum rem tempore aspernatur fugiat quas. Ab, et
            non!
          </p>
          <button className="date">
            march <span className="btn-content">05</span>{" "}
          </button>
        </div>
        <div class="days_left_pending">
          <span className="pending">pending task</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor
            iste quam vero minus eum rem tempore aspernatur fugiat quas. Ab, et
            non!
          </p>
          <button className="date">
            march <span className="btn-content">05</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
