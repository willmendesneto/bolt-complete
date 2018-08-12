var tabtab = require('tabtab')({
  name: 'bolt'
});

var debug = require('tabtab/lib/debug')('bolt-complete');

// General handler
tabtab.on('bolt', function(err, data, done) {
  const generalCommands = [
    { name: 'help', description: 'View Bolt\'s help content' },
    { name: 'init', description: 'Create a new Bolt package in the current directory' },
    { name: 'install', description: 'Install all the dependencies for a project' },
    { name: 'add', description: 'Add a dependency' },
    { name: 'upgrade', description: 'Upgrade a dependency' },
    { name: 'remove', description: 'Remove a dependency' },
    { name: 'version', description: 'Updates the version of your package(s)' },
    { name: 'publish', description: 'Publish new version(s) of your package(s) to npm' },
    { name: 'publish-lock', description: 'Lock your package(s) on the npm registry' },
    { name: 'publish-unlock', description: 'Unlock your package(s) on the npm registry' },
    { name: 'run', description: 'Run a script in a package' },
    { name: 'build', description: 'Build your package(s) (Default: Babel)' },
    { name: 'test', description: 'Test your package(s) (Default: Jest)' },
    { name: 'format', description: 'Format the files in your package(s) (Default: Prettier)' },
    { name: 'lint', description: 'Lint your package(s) (Default: ESLint)' },
    { name: 'doc', description: 'Generate docs (Default: Documentation.js)' },
    { name: 'check', description: 'Type check your package(s) (Default: Flow)' },
    { name: 'bin', description: 'Print the folder where executable files for the package will be installed' },
    { name: 'workspaces', description: 'Run the following commands on a single workspace' },
    { name: 'project', description: 'Run the following commands on your project package' },
    { name: 'generate', description: 'Create files in your package using a generator' },
  ];
  debug(generalCommands);
  done(null, generalCommands);
});

const workspacesAutocompletion = function(err, data, done) {
  const workspacesCommands = [
    { name: 'run', description: '' },
    { name: 'exec', description: '' },
    { name: 'upgrade', description: '' },
  ];
  debug(workspacesCommands);
  done(null, workspacesCommands);
};
const projectAutocompletion = function(err, data, done) {
  const projectCommands = [
    { name: 'run', description: '' },
    { name: 'add', description: '' },
    { name: 'remove', description: '' },
    { name: 'upgrade', description: '' },
  ];
  debug(projectCommands);
  done(null, projectCommands);
};
const generateAutocompletion = function(err, data, done) {
  const generateCommands = [
    { name: 'license', description: '' },
  ];

  debug(generateCommands);
  done(null, generateCommands);
};

tabtab.on('init', function(err, data, done) {
  const initCommands = [
    { name: '--yes', description: '' },
  ];

  debug(initCommands);
  done(null, initCommands);
});

tabtab.on('workspaces', workspacesAutocompletion);
tabtab.on('w', workspacesAutocompletion);

tabtab.on('project', projectAutocompletion);
tabtab.on('p', projectAutocompletion);

tabtab.on('generate', generateAutocompletion);
tabtab.on('g', generateAutocompletion);

tabtab.start();