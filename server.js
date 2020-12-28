'use strict'

const Hapi = require('@hapi/hapi')

if (process.channel) {
  console.log('I am a child')
  setTimeout(() => {
    console.log('timeout')
    process.on('message', obj => {
      console.log('got message:', obj)
    })

    process.send({state: 'READY'})
  }, 2000)
}

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

setTimeout(() => {
  process.exit(1)
}, 5000)

init()
