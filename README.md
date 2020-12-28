test-oclif-stdin
================

testing oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/test-oclif-stdin.svg)](https://npmjs.org/package/test-oclif-stdin)
[![Downloads/week](https://img.shields.io/npm/dw/test-oclif-stdin.svg)](https://npmjs.org/package/test-oclif-stdin)
[![License](https://img.shields.io/npm/l/test-oclif-stdin.svg)](https://github.com/osukaa/test-oclif-stdin/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g test-oclif-stdin
$ test COMMAND
running command...
$ test (-v|--version|version)
test-oclif-stdin/0.0.0 darwin-x64 node-v14.15.3
$ test --help [COMMAND]
USAGE
  $ test COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`test hello`](#test-hello)
* [`test help [COMMAND]`](#test-help-command)

## `test hello`

Describe the command here

```
USAGE
  $ test hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/osukaa/test-oclif-stdin/blob/v0.0.0/src/commands/hello.js)_

## `test help [COMMAND]`

display help for test

```
USAGE
  $ test help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_
<!-- commandsstop -->
