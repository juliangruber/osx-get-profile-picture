'use strict'

const getProfilePicture = require('.')
const fs = require('fs')

const dst = `${process.env.HOME}/Desktop/pic.jpg`

getProfilePicture()
.pipe(fs.createWriteStream(dst))
.on('close', function () {
  console.log(`open ${dst}`)
})
