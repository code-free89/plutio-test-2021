import React from 'react';
import {tasks} from '../constants/task';
import Header from './components/header';
import AddForm from './components/page/add-form';
import Task from './components/page/task';

const App = () => (
  <div className="page">
    <Header />
    <div className="main-tasks-page content list-view">
      <AddForm />
      <div className="groups-wrapper">
        <div className="group-container open">
          <div className="group-head">
            <p>Tasks</p>
          </div>
          <div className="group-content">
            {
              tasks.map((task, index) => <Task key={`task-${index}`} task={task} isColorTag={task.isColorTag} />)
            }
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
