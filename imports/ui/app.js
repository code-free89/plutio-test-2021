import React, {useState, useEffect} from 'react';
import {tasks} from '../constants/task';
import Header from './components/header';
import AddForm from './components/page/add-form';
import Task from './components/page/task';

const App = () => {
  const [taskDatas, setTaskDatas] = useState(tasks);
  useEffect(() => {
    Meteor.call('getTask', {hasDescription: false}, function (error, result) {
      if (error) console.log(error);
      else setTaskDatas(result);
    });
  }, []);

  const createTask = (taskData) => {
    Meteor.call('insertTask', taskData, function (error, result) {
      if (error) console.log(error);
      else {
        Meteor.call('getTask', {hasDescription: false}, function (error, result) {
          if (error) console.log(error);
          else setTaskDatas(result);
        });
      };
    });
  }

  return (
    <div className="page">
      <Header />
      <div className="main-tasks-page content list-view">
        <AddForm createTask={createTask} />
        <div className="groups-wrapper">
          <div className="group-container open">
            <div className="group-head">
              <p>Tasks</p>
            </div>
            <div className="group-content">
              {
                taskDatas && taskDatas.length && taskDatas.map((task, index) => <Task key={`task-${index}`} task={task} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
