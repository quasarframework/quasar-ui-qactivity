import { defineBoot } from '#q-app'
import VuePlugin from '@quasar/quasar-ui-qactivity'
// @ts-expect-error SCSS side-effect imports do not have type declarations
import '@quasar/quasar-ui-qactivity/src/index.scss'

export default defineBoot(({ app }) => {
  app.use(VuePlugin)
})
