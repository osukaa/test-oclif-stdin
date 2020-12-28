const split2 = require('split2')
const StreamCache = require('stream-cache')

const cache = new StreamCache()

process.stdin.pipe(cache)

module.exports = {
  input() {
    return cache.pipe(split2(JSON.parse))
  },
}
