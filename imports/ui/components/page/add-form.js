import React from 'react'

const AddForm = () => {
  return (
    <form className="add-task" noValidate="">
      <div>
        <div className="fieldset add-task-input fieldset-stripped">
          <div className="fieldset-content">
            <label className="fieldset-label">
              <span className="fieldset-label-content has-icon">
                <i className="icon-plus" />
              </span>
              <input
                className=""
                name="title"
                placeholder="Add new task"
                type="text"
                autoComplete="off"
                value=""
                onChange={() => { }}
              />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddForm;
