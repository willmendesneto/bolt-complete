# bolt-complete

A [tabtab]() plugin to implement bash / zsh / fish completion to [Bolt][]

## Install

```bash
npm install bolt-complete -g
```

On install, you'll be prompted for an install location for the shell completion
script:

- Choose STDOUT to output the script to the console, without writing anything.

- Choose Shell configuration file for user specific completion: ~/.bashrc, ~/.zshrc or ~/.config/fish/config.fish

- Choose a system-wide directory for global installation: /etc/bash_completion.d, /usr/local/share/zsh/site-functions or ~/.config/fish/completions

Depending on your shell:

**bash**
![bash][]

**fish**
![fish][]

**zsh**
![zsh][]

[bolt]: http://boltpkg.com
[tabtab]: https://github.com/mklabs/node-tabtab

---

