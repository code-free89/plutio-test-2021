// TODO: create task method
import {Tasks} from './../index';
export const createTask = (taskData) => {
  const result = Tasks.insert(taskData);
  return result;
}