import QActivity from './components/QActivity'
import QActivityItem from './components/QActivityItem'
import pkg from '../package.json'
const { version } = pkg

export {
  version,
  QActivity,
  QActivityItem
}

export default {
  version,
  QActivity,
  QActivityItem,

  install (Vue) {
    Vue.component(QActivity.name, QActivity)
    Vue.component(QActivityItem.name, QActivityItem)
  }
}
