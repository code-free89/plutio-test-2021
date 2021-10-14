import React from 'react';

const TaskBody = ({task}) => {
  return (
    <div className="task-link-body">
      <div className="indicators">
        {
          task.hasDescription ? <span className="icon-indicator">
            <i className={"icon-description"} />
          </span> : <></>
        }
        {
          task.commentsCount ? <span className="icon-indicator">
            <i className={"icon-chat"} />
          </span> : <></>
        }
        {
          task.filesCount ? <span className="icon-indicator">
            <i className={"icon-file"} />
          </span> : <></>
        }
        {
          task["icon-timer"] ? <span className="icon-indicator">
            <i className={"icon-timer"} />
          </span> : <></>
        }
        {
          task.customFields && task.customFields.length && (
            <div className="custom-fields">
              {
                task.customFields.map((customField, index) => (
                  <div key={`custom-field-${index}`} className="custom-field custom-field-single">
                    {customField}
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default TaskBody;
