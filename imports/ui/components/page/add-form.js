import React, {useState} from 'react'

const AddForm = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const newTask = (title, status, color) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const taskData = {
      title: title,
      color: color,
      status: status,
      createdAt: date,
      isPrivate: false,
    };
    createTask(taskData);
  }
  return (
    <form className="add-task" noValidate="">
      <div>
        <div className="fieldset add-task-input fieldset-stripped">
          <div className="fieldset-content">
            <label className="fieldset-label">
              <span className="fieldset-label-content has-icon" onClick={() => {newTask(title, 'incomplete', '#4e42c3');}} style={{ cursor: "pointer" }}>
                <i className="icon-plus" />
              </span>
              <input
                className=""
                name="title"
                placeholder="Add new task"
                type="text"
                autoComplete="off"
                value={title}
                onChange={(event) => {setTitle(event.target.value);}}
              />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddForm;
