import { slot } from 'quasar/src/utils/private/slot.js'

export default {
  name: 'QActivity',

  props: {
    dense: Boolean,
    barColor: String,
    barWidth: String,
    barDistance: String
  },

  computed: {

    styles () {
      let style = {}
      if (this.barColor !== void 0) {
        style['--qactivity-bar-color'] = this.barColor
      }
      if (this.barWidth !== void 0) {
        style['--qactivity-bar-width'] = this.barWidth
      }
      if (this.barDistance !== void 0) {
        style['--qactivity-bar-distance'] = this.barDistance
      }
      return style
    },

    classes () {
      return `q-activity--${this.dense === true ? 'dense' : 'normal'}`
    }
  },

  render (h) {
    return h('ul', {
      staticClass: 'q-activity',
      class: this.classes,
      style: this.styles
    }, slot(this, 'default'))
  }
}
