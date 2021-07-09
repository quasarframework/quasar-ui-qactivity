import { slot } from 'quasar/src/utils/slot.js'

import { QAvatar } from 'quasar'

export default {
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

  computed: {
    iconStyle () {
      if (this.iconDistance !== void 0) {
        return { left: this.iconDistance }
      }
      return ''
    }
  },

  methods: {
    __getImageContent (h) {
      if (this.iconImage !== void 0) {
        return [
          h('img', {
            domProps: {
              src: this.iconImage
            }
          })
        ]
      }
    },

    __getIconContent (h) {
      const iconSlot = slot(this, 'icon')

      return h('div', {
        staticClass: 'q-activity-item--icon vertical-middle',
        style: this.iconStyle
      }, iconSlot !== void 0 ? iconSlot : [].concat(
        h(QAvatar, {
          props: {
            color: this.iconColor,
            textColor: this.iconTextColor,
            icon: this.icon,
            size: this.iconSize,
            fontSize: this.iconFontSize,
            square: this.iconSquare,
            rounded: this.iconRounded
          }
        }, this.__getImageContent(h))
      ))
    }
  },

  render  (h) {
    return h('li', {
      staticClass: 'q-activity-item row'
    }, [
      this.__getIconContent(h),
      h('div', { staticClass: 'col q-activity-item--content' }, slot(this, 'default'))
    ])
  }
}
