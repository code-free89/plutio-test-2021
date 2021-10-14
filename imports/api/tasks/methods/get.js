// TODO: tasks get method
import { Tasks } from './../index';
export const getTask = ({status = "incomplete", hasDescription = true}) => {
  const taskDatas = Tasks.find();
  let tasks = [];
  taskDatas.map((taskData) => tasks.push(taskData));
  tasks = tasks.filter((task) => task.status == status && task.isPrivate == false && task.hasDescription == hasDescription);
  return tasks; 
}