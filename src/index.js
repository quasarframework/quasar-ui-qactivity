/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendQuasarConf = function (conf) {
  // make sure qactivity boot file is registered
  conf.boot.push('~@quasar/quasar-app-extension-qactivity/src/boot/qactivity.js')
  console.log(` App Extension (qactivity) Info: 'Adding qactivity boot reference to your quasar.conf.js'`)

  // make sure boot file & component transpiles
  conf.build.transpileDependencies.push(/quasar-app-extension-qactivity[\\/]src/)

  // make sure qactivity css goes through webpack to avoid ssr issues
  conf.css.push('~@quasar/quasar-app-extension-qactivity/src/component/activity.styl')
  console.log(` App Extension (qactivity) Info: 'Adding activity.styl css reference to your quasar.conf.js'`)
}

module.exports = function (api) {
  // quasar compatibility check
  api.compatibleWith('@quasar/app', '^1.0.0-beta.18')

  // register JSON api
  api.registerDescribeApi('QActivity', './component/QActivity.json')
  api.registerDescribeApi('QActivityItem', './component/QActivityItem.json')

  // extend quasar.conf
  api.extendQuasarConf(extendQuasarConf)
}
