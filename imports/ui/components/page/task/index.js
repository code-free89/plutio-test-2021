import React from 'react';
import TaskBody from './body';
import TaskHead from './head';

const Task = ({task, isColorTag}) => {
  console.log(isColorTag);
  return (
    <div className="task">
      <a className={`task-link ${isColorTag ? "has-color-tag" : ""}`} href="#" style={{ borderColor: '#4e42c3' }}>
        <TaskHead title={task.title} defaultChecked={task.defaultChecked} />
        <TaskBody indicators={task.indicators} customFields={task.customFields} />
      </a>
    </div>
  );
};

export default Task;
