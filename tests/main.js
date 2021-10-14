import {expect} from 'chai';
import {getTask} from './../imports/api/tasks/methods/get';
import {createTask} from './../imports/api/tasks/methods/create';

describe('test', function() {
  it('should pass', () => {
    expect('plutio').to.eq('plutio');
  });
});

describe('test get method', () => {
  const tasks = getTask();
  it('should return array', () => {
    expect(tasks).to.be.an('array');
  });
});

describe('test create method', () => {
  const taskId = createTask({title: "new Task", color: "#402131", status: "incomplete", createdAt: "2021-10-14T16:35:36.604Z", isPrivate: false});
  it('should return id', () => {
    expect(taskId).to.be.a('string');
  });
})