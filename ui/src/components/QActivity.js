import {h, defineComponent, computed} from 'vue'
import {useQuasar} from "quasar";

export default defineComponent({
  name: 'QActivity',
  props: {
    dense: {
      type: Boolean,
      default: false
    },
    barColor: {
      type: String
    },
    barWidth: {
      type: String,
      default: '1px'
    },
    barDistance: {
      type: String,
      default: '2px'
    }
  },
  setup(props, {slots}) {

    const $q = useQuasar()

    const __classes = computed(() => {
      return `q-activity--${props.dense === true ? 'dense' : 'normal'}`
    })

    const __styles = computed(() => {
      let style = {}
      if (props.barColor !== void 0) {
        style['--qactivity-bar-color'] = props.barColor
      } else {
        style['--qactivity-bar-color'] = $q.dark.isActive ?  '#FFF' : '#000'
      }
      if (props.barWidth !== void 0) {
        style['--qactivity-bar-width'] = props.barWidth
      }
      if (props.barDistance !== void 0) {
        style['--qactivity-bar-distance'] = props.barDistance
      }
      return style
    })

    console.log(props.barColor)
    const slot = slots.default
    return () =>  h('ul', {
      class: 'q-activity ' + __classes.value,
      style: __styles.value
    }, (slot && slot()) || [])
  }
})
