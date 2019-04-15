/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendQuasarConf = function (api, conf) {
  // for brevity
  let boot = conf.boot

  // make sure qactivity boot file is registered
  const bootFile = '~@quasar/quasar-app-extension-qactivity/src/boot/qactivity.js'
  if (!boot.includes(bootFile)) {
    boot.push(bootFile)
    console.log(` App Extension (qactivity) Info: 'Adding qactivity boot reference to your quasar.conf.js'`)
  }

  // make sure boot file transpiles
  conf.build.transpileDependencies.push(/quasar-app-extension-qactivity[\\/]src/)

  // for brevity
  let css = conf.css

  // make sure qactivity css goes through webpack to avoid ssr issues
  const cssFile = '~@quasar/quasar-app-extension-qactivity/src/component/activity.styl'
  if (!css.includes(cssFile)) {
    css.push(cssFile)
    console.log(` App Extension (qactivity) Info: 'Adding activity.styl css reference to your quasar.conf.js'`)
  }
}

module.exports = function (api) {
  // quasar compatibility check
  api.compatibleWithQuasarApp('^1.0.0-beta.17')

  // register JSON api
  api.registerDescribeApi('QActivity', './component/QActivity.json')
  api.registerDescribeApi('QActivityItem', './component/QActivityItem.json')

  // extend quasar.conf
  api.extendQuasarConf((conf) => {
    extendQuasarConf(api, conf)
  })
}
