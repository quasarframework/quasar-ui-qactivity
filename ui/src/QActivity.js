import QActivity from './components/QActivity'
import QActivityItem from './components/QActivityItem'

import { version } from './version'

export {
  version,
  QActivity,
  QActivityItem
}

export default {
  version,
  QActivity,
  QActivityItem,

  install (app) {
    app.component(QActivity.name, QActivity)
    app.component(QActivityItem.name, QActivityItem)
  }
}
