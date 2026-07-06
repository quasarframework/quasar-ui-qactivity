import { defineBoot } from '#q-app'
import VuePlugin from '@quasar/quasar-ui-qactivity'

export default defineBoot(({ app }) => {
  app.use(VuePlugin)
})
