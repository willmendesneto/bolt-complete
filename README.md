# bolt-complete

> Improving the dev experience using `bolt` in your CLI 😎

A [tabtab](https://github.com/mklabs/node-tabtab) plugin to implement bash / zsh / fish completion to [Bolt](https://boltpkg.com)


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


## Author

**Wilson Mendes (willmendesneto)**
+ <https://plus.google.com/+WilsonMendes>
+ <https://twitter.com/willmendesneto>
+ <http://github.com/willmendesneto>
