import {expect} from 'chai';
import {getTask} from './../imports/api/tasks/methods/get';

describe('test', function() {
  it('should pass', () => {
    expect('plutio').to.eq('plutio');
  });
});

describe('test get method', () => {
  const tasks = getTask({status = 'incomplete', hasDescription = true});
  chai.expect(tasks).to.be.an('array');
});