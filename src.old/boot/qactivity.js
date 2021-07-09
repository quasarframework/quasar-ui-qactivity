import QActivity from '@quasar/quasar-app-extension-qactivity/src/component/QActivity'
import QActivityItem from '@quasar/quasar-app-extension-qactivity/src/component/QActivityItem'

export default ({ Vue }) => {
  Vue.component('q-activity', QActivity)
  Vue.component('q-activity-item', QActivityItem)
}
