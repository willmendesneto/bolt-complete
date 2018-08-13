const assert = require('assert');
const proxyquire = require('proxyquire');
const sandbox = require('sinon').createSandbox();

const complete = { start: sandbox.stub() };

describe('Bot complete: index.js', () => {

  afterEach(() => sandbox.reset());

  after(() => sandbox.restore());

  it('should install the autocomplete via CLI', () => {
    proxyquire('./../index', {
      './complete': complete,
    });
    assert.equal(complete.start.callCount, 1);
  });
});
