import { boot } from 'quasar/wrappers'
import VuePlugin from '@quasar/quasar-ui-qactivity'

export default boot(({ app }) => {
  app.use(VuePlugin)
})

