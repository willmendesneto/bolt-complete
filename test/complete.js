const assert = require('assert');
const sandbox = require('sinon').createSandbox();

const boltComplete = require('./../complete');
const {
  workspaceOptions,
  workspacesOptions,
  projectOptions,
  generateOptions,
  initOptions,
  generalOptions,
} = require('./../constants');

const done = sandbox.stub();

const args = ['complete', '--', 'bolt'];

describe('Bot complete: complete.js', () => {

  afterEach(() => sandbox.reset());

  after(() => sandbox.restore());

  it('should return the default options for workspaces if commands receives `bolt workspaces`', () => {
    boltComplete.emit('bolt', { args: [...args, '', 'workspaces'] }, done);
    const [error, options] = done.firstCall.args;

    assert.equal(done.callCount, 1);
    assert.equal(error, null);
    assert.equal(options, workspacesOptions);
  });

  it('should return the default options for workspace if commands receives `bolt workspace`', () => {
    boltComplete.emit('bolt', { args: [...args, '', 'workspace'] }, done);
    const [error, options] = done.firstCall.args;

    assert.equal(done.callCount, 1);
    assert.equal(error, null);
    assert.equal(options, workspaceOptions);
  });

  it('should return the default options for project if commands receives  `bolt project`', () => {
    boltComplete.emit('bolt', { args: [...args, '', 'project'] }, done);
    const [error, options] = done.firstCall.args;

    assert.equal(done.callCount, 1);
    assert.equal(error, null);
    assert.equal(options, projectOptions);
  });

  it('should return the default options for generate if commands receives `bolt generate`', () => {
    boltComplete.emit('bolt', { args: [...args, '', 'generate'] }, done);
    const [error, options] = done.firstCall.args;

    assert.equal(done.callCount, 1);
    assert.equal(error, null);
    assert.equal(options, generateOptions);
  });

  it('should return the default options for init if commands receives `bolt init`', () => {
    boltComplete.emit('bolt', { args: [...args, '', 'init'] }, done);
    const [error, options] = done.firstCall.args;

    assert.equal(done.callCount, 1);
    assert.equal(error, null);
    assert.equal(options, initOptions);
  });

  it('should return the default options for the main command if receives the default option', () => {
    boltComplete.emit('bolt', { args }, done);
    const [error, options] = done.firstCall.args;

    assert.equal(done.callCount, 1);
    assert.equal(error, null);
    assert.equal(options, generalOptions);
  });

  it('should return the default options for the main command if receives an invalid option', () => {
    boltComplete.emit('bolt', { args: [...args, '', 'invalid-option'] }, done);
    const [error, options] = done.firstCall.args;

    assert.equal(done.callCount, 1);
    assert.equal(error, null);
    assert.equal(options, generalOptions);
  });

});
