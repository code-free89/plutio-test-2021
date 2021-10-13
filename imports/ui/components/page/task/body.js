import React from 'react';

const TaskBody = ({indicators, customFields}) => {
  return (
    <div className="task-link-body">
      <div className="indicators">
        {
          indicators && indicators.length && indicators.map((indicator, index) => (
            <span key={`indicator-${index}`} className="icon-indicator">
              <i className={indicator} />
            </span>
          ))
        }
        {
          customFields && customFields.length && (
            <div className="custom-fields">
              {
                customFields.map((customField, index) => (
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
