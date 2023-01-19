import React from "react";

function Task({task}) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="label">{task.text}</div>
      <div className="text"></div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
