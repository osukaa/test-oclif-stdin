const {Command, flags} = require('@oclif/command')
const {fork} = require('child_process')
const {input} = require('../../lib/input')

class HelloCommand extends Command {
  async run() {
    const {flags} = this.parse(HelloCommand)
    const entrypoint = flags.entrypoint || 'server.js'
    this.log(`hello ${entrypoint} from ./src/commands/hello.js`)

    const app = fork(process.cwd() + '/' + entrypoint)

    app.on('close', (code, signal) => {
      console.log('stdio is done', code, signal)
    })

    app.on('disconnect', () => {
      console.log('someone disconnected')
    })

    app.on('error', err => {
      console.log('child error:', err)
    })

    app.on('exit', (code, signal) => {
      console.log('child process is done', code, signal)
    })

    app.on('message', message => {
      console.log('message on parent', message)

      if (message && message.state && message.state === 'READY') {
        input()
        .on('data', obj => {
          console.log('data')
          if (Array.isArray(obj)) {
            obj.forEach(el => app.send(el))
          } else {
            app.send(obj)
          }
        })
        .on('error', err => {
          this.error(err)
          throw err
        })
      }
    })

    app.on('spawn', () => {
      console.log('spawn')
    })
  }
}

HelloCommand.description = `Describe the command here
...
Extra documentation goes here
`

HelloCommand.flags = {
  entrypoint: flags.string({char: 'e', description: 'entrypoint to run'}),
}

module.exports = HelloCommand
