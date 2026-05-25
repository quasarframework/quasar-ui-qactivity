import {h, defineComponent, computed} from 'vue'
import { QAvatar } from "quasar";

export default defineComponent({
  name: 'QActivityItem',
  props: {
    icon: String,
    iconColor: String,
    iconTextColor: String,
    iconSize: String,
    iconFontSize: String,
    iconSquare: Boolean,
    iconRounded: Boolean,
    iconImage: String,
    iconDistance: {
      type: String,
      default: '0'
    }
  },
  setup(props, {slots}) {
    const __iconStyle = computed(() => {
      if (props.iconDistance !== void 0) {
        return {
          left: props.iconDistance
        }
      }
      return ''
    })

    function __getImageContent() {
      if (props.iconImage !== void 0) {
        return () => h('img', {
          src: props.iconImage
        })
      } else {
        return () => []
      }
    }

    function __getIconContent() {
      const avatar = h(QAvatar,
         {
          color: props.iconColor,
          textColor: props.iconTextColor,
          icon: props.icon,
          size: props.iconSize,
          fontSize: props.iconFontSize,
          square: props.iconSquare,
          rounded: props.iconRounded
      }, __getImageContent())

      return h('div', {
        class: ['q-activity-item--icon', 'vertical-middle'],
        style: __iconStyle.value
      }, [avatar, (slots.icon && slots.icon())])
    }

    return () => h('li', {
      class: ['q-activity-item', 'row']
    }, [
      __getIconContent(),
      h('div', {
          class: 'col q-activity-item--content'
        },
        (slots.default && slots.default()))
    ])
  }
})
