# bolt-complete

> Improving the dev experience using `bolt` in your CLI 😎

A [tabtab](https://github.com/mklabs/node-tabtab) plugin to implement bash / zsh / fish completion to [Bolt](https://boltpkg.com)


[![Build Status](https://circleci.com/gh/willmendesneto/bolt-complete.svg?style=shield)](https://circleci.com/gh/willmendesneto/bolt-complete)
[![Coverage Status](https://coveralls.io/repos/github/willmendesneto/bolt-complete/badge.svg?branch=master)](https://coveralls.io/github/willmendesneto/bolt-complete?branch=master)

[![MIT License](https://img.shields.io/badge/license-MIT%20License-blue.svg?style=flat-square)](https://github.com/willmendesneto/bolt-complete/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Watch on GitHub](https://img.shields.io/github/watchers/willmendesneto/bolt-complete.svg?style=social)](https://github.com/willmendesneto/bolt-complete/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/willmendesneto/bolt-complete.svg?style=social)](https://github.com/willmendesneto/bolt-complete/stargazers)


## Install

```bash
npm install bolt-complete -g
```

On install, you'll be prompted for an install location for the shell completion
script:

- Choose STDOUT to output the script to the console, without writing anything.

- Choose Shell configuration file for user specific completion: ~/.bashrc, ~/.zshrc or ~/.config/fish/config.fish

- Choose a system-wide directory for global installation: /etc/bash_completion.d, /usr/local/share/zsh/site-functions or ~/.config/fish/completions

Since it's based on `tabtab` NPM package, it will be installed automatically in your `bash`, `fish` or `zsh` 🎉

### NodeJS: Manual installation

Make sure that you are using the NodeJS version is the same as `.nvmrc` file version. If you don't have this version please use a version manager such as `nvm` or `n` to manage your local nodejs versions.

> Please make sure that you are using NodeJS version 6.10.2

Assuming that you are using `nvm`, please run the commands inside this folder:

```bash
$ nvm install $(cat .nvmrc); # install required nodejs version
$ nvm use $(cat .nvmrc); # use nodejs version
$ npm install
```

In Windows, please install NodeJS using one of these options:

Via `NVM Windows` package: Dowload via [this link](https://github.com/coreybutler/nvm-windows). After that, run the commands:

```bash
$ nvm install $(cat .nvmrc); # install required nodejs version
$ nvm use $(cat .nvmrc); # use nodejs version
$ npm install
```

Via Chocolatey:

```bash
$ choco install nodejs.install -version v8.11.1
```


## NPM Commands

- `npm run editorconfig-tools-check`: Checks the file configuration based on the `.editorconfig` configuration.
- `npm run lint`: Run lint using `ESLint` NPM package.
- `npm run coveralls`: Send unit code coverage values from Coveralls website.
- `npm run test`: Running unit tests using MochaJS. You can run the tests in watch mode running the command passing `-w`. EX: `npm run test -- -w`


## Publishing the package

This project is using `np` as publisher helper. So there are some automated tasks that will be triggered when `np` runs:

- Run the tests, lint and `.editorconfig` configuration and check if the code coverage are on the expected values;
- Check if the changelog has the required updates to automate the `CHANGELOG.md` file update;

For more information, please check [`np` documentation](https://github.com/sindresorhus/np#readme) to check all the NPM events that are triggered.


## Author

**Wilson Mendes (willmendesneto)**
+ <https://plus.google.com/+WilsonMendes>
+ <https://twitter.com/willmendesneto>
+ <http://github.com/willmendesneto>
