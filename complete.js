const boltComplete = require('tabtab')({ name: 'bolt' });
const debug = require('tabtab/lib/debug')('bolt-complete');

const {
  workspaceOptions,
  workspacesOptions,
  projectOptions,
  generateOptions,
  initOptions,
  generalOptions,
} = require('./constants');

// General handler
boltComplete.on('bolt', function(data, done) {

  const cliArg = (
    data.args.join(' ').split('bolt')[1] || ''
  ).trim();

  let command = [];
  switch (cliArg) {
    case 'workspaces':
    case 'ws':
      command = workspacesOptions;
      break;
    case 'workspace':
    case 'w':
      command = workspaceOptions;
      break;
    case 'project':
    case 'p':
      command = projectOptions;
      break;
    case 'generate':
    case 'g':
      command = generateOptions;
      break;
    case 'init':
      command = initOptions;
      break;
    default:
      command = generalOptions;
      break;
  }

  debug(command);
  done(null, command);
});

module.exports = boltComplete;
