/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendWithActivity = function (api, conf) {
  // for brevity
  let boot = conf.boot

  // make sure qactivity boot file is registered
  if (!boot.includes('~@quasar/quasar-app-extension-qactivity/src/boot/qactivity.js')) {
    boot.push('~@quasar/quasar-app-extension-qactivity/src/boot/qactivity.js')
    // make sure boot file transpiles
    conf.build.transpileDependencies.push(/quasar-app-extension-qactivity[\\/]src[\\/]boot/)
    console.log(` App Extension (qactivity) Info: 'Adding qactivity boot reference to your quasar.conf.js'`)
  }

  // for brevity
  let css = conf.css

  // make sure qactivity css goes through webpack to avoid ssr issues
  if (!css.includes('~@quasar/quasar-app-extension-qactivity/src/component/activity.styl')) {
    css.push('~@quasar/quasar-app-extension-qactivity/src/component/activity.styl')
    console.log(` App Extension (qactivity) Info: 'Adding activity.styl css reference to your quasar.conf.js'`)
  }
}

module.exports = function (api) {
  // register JSON api
  api.registerDescribeApi('QActivity', './component/QActivity.json')
  api.registerDescribeApi('QActivityItem', './component/QActivityItem.json')

  // extend quasar.conf
  api.extendQuasarConf((conf) => {
    extendWithActivity(api, conf)
  })
}
