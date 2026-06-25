import { computed, defineComponent, h, type CSSProperties, type SlotsType, type VNode } from 'vue'
import { QAvatar } from 'quasar'

const cssSizeRegex = /^(-?(?:\d+|\d*\.\d+))([a-z%]+)$/i

function getHalfCssSize(value: string | undefined): string {
  const size = value?.trim()

  if (size === undefined || size.length === 0) {
    return '20px'
  }

  const match = size.match(cssSizeRegex)

  if (match !== null) {
    return `${Number(match[1]) / 2}${match[2]}`
  }

  return `calc((${size}) / 2)`
}

export interface QActivityItemSlots {
  /**
   * Anything can go into this slot.
   */
  default: () => VNode[]
  /**
   * Style your own icon.
   */
  icon: () => VNode[]
}

export default defineComponent({
  name: 'QActivityItem',

  props: {
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed.
     *
     * @category behavior
     * @example icon="list"
     * @example icon="fas fa-list"
     */
    icon: String,
    /**
     * Color name for the icon from the Quasar Color Palette.
     *
     * @category style
     * @example icon-color="blue-grey-8"
     * @example icon-color="white"
     */
    iconColor: String,
    /**
     * Color name for icon text from the Quasar Color Palette.
     *
     * @category style
     * @example icon-text-color="white"
     * @example icon-text-color="orange-6"
     */
    iconTextColor: String,
    /**
     * Icon size in CSS units, including unit name.
     *
     * @category style
     * @example icon-size="16px"
     * @example icon-size="1rem"
     */
    iconSize: String,
    /**
     * Icon font size in CSS units, including unit name.
     *
     * @category style
     * @example icon-font-size="16px"
     * @example icon-font-size="1rem"
     */
    iconFontSize: String,
    /**
     * Removes border radius so borders are squared.
     *
     * @category behavior
     */
    iconSquare: Boolean,
    /**
     * Applies a small standard border radius for a squared shape of the component.
     *
     * @category behavior
     */
    iconRounded: Boolean,
    /**
     * Path to image to use. If used, do not also use `icon`, `icon-color`, `icon-text-color` or `icon-font-size`.
     *
     * @category behavior
     * @example icon-image="https://cdn.quasar.dev/img/boy-avatar.png"
     */
    iconImage: String,
    /**
     * Offset in CSS units used to help center icons on the bar.
     *
     * @category style
     * @default '0'
     * @example icon-distance="-13px"
     * @example icon-distance="-0.5rem"
     */
    iconDistance: {
      type: String,
      default: '0',
    },
  },

  slots: Object as SlotsType<QActivityItemSlots>,

  setup(props, { slots }) {
    const iconStyle = computed<CSSProperties>(
      () =>
        ({
          left: props.iconDistance,
          '--qactivity-item-marker-half-size': getHalfCssSize(props.iconSize),
        }) as CSSProperties,
    )

    return () =>
      h(
        'li',
        {
          class: ['q-activity-item', 'row'],
        },
        [
          h(
            'div',
            {
              class: ['q-activity-item--icon', 'vertical-middle'],
              style: iconStyle.value,
            },
            [
              h(
                QAvatar,
                {
                  color: props.iconColor,
                  textColor: props.iconTextColor,
                  icon: props.icon,
                  size: props.iconSize,
                  fontSize: props.iconFontSize,
                  square: props.iconSquare,
                  rounded: props.iconRounded,
                },
                () =>
                  props.iconImage !== void 0
                    ? [
                        h('img', {
                          src: props.iconImage,
                        }),
                      ]
                    : [],
              ),
              slots.icon?.(),
            ],
          ),
          h(
            'div',
            {
              class: 'col q-activity-item--content',
            },
            slots.default?.(),
          ),
        ],
      )
  },
})
