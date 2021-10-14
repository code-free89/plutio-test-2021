import React from 'react';
import TaskBody from './body';
import TaskHead from './head';

const Task = ({task}) => {
  return (
    <div className="task">
      <a className={`task-link ${task.color ? "has-color-tag" : ""}`} href="#" style={{ borderColor: task.color ? '#4e42c3': "" }}>
        <TaskHead title={task.title} defaultChecked={task.status === "complete" ? true : false} />
        <TaskBody task={task} />
      </a>
    </div>
  );
};

export default Task;
