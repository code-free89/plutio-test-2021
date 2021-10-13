import React from 'react'

const TaskHead = ({title, defaultChecked}) => {
  return (
    <div className="task-link-head">
      <div className="task-checkbox">
        <label className="checkbox">
          <input type="checkbox" defaultChecked={defaultChecked} />
          <span className="checkbox-toggle">
            <i className="checkbox-icon icon-check" />
          </span>
        </label>
      </div>
      <div className="task-title">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default TaskHead;
