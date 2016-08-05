'use strict'

const run = require('comandante')
const pump = require('pump')

module.exports = function () {
  return pump(
    run('dscl', ['.', '-read', `/Users/${process.env.USER}`, 'JPEGPhoto']),
    run('tail', ['-1']),
    run('xxd',  ['-r', '-p'])
  )
}
