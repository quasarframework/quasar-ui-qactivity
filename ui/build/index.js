process.env.NODE_ENV = 'production'

const parallel = require('os').cpus().length > 1
const runJob = parallel ? require('child_process').fork : require
const { createFolder } = require('./utils')
const { green, blue } = require('chalk')

console.log()

require('./script.app-ext.js').syncAppExt()
require('./script.clean.js')

console.log(` 📦 Building ${ green('v' + require('../package.json').version) }...${ parallel ? blue(' [multi-threaded]') : '' }\n`)

createFolder('dist')

require('./script.version.js')

require('./build.api.js')
require('./script.javascript')
require('./script.css')
// runJob(join(__dirname, './script.javascript.js'))
// runJob(join(__dirname, './script.css.js'))