const workspaceOptions = [
  { name: 'run', description: 'Run a script in a single workspace' },
  { name: 'exec', description: 'Add a dependency to a single workspace' },
  { name: 'upgrade', description: 'Upgrade a dependency in a single workspace' },
];

const workspacesOptions = [
  { name: 'run', description: 'Run a script in every package' },
  { name: 'exec', description: 'Run a shell cmd in every package' },
  { name: 'upgrade', description: 'Upgrade a dependency from every package that depends on it' },
  { name: 'remove', description: 'Remove a dependency from every package that depends on it' },
];

const projectOptions = [
  { name: 'run', description: 'Run a script on the project package' },
  { name: 'add', description: 'Add a dependency to the project package' },
  { name: 'remove', description: 'Remove a dependency from the project package' },
  { name: 'upgrade', description: 'Upgrade a dependency on the project package' },
];

const generateOptions = [
  { name: 'license', description: '' },
];

const initOptions = [
  { name: '--yes', description: 'Skip the prompts and use defaults' },
];

const generalOptions = [
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

module.exports = {
  workspaceOptions,
  workspacesOptions,
  projectOptions,
  generateOptions,
  initOptions,
  generalOptions,
};
