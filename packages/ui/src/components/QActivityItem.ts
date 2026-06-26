import {
  computed,
  defineComponent,
  h,
  type CSSProperties,
  type PropType,
  type SlotsType,
  type VNode,
} from 'vue'
import { QAvatar } from 'quasar'

const cssSizeRegex = /^(-?(?:\d+|\d*\.\d+))([a-z%]+)$/i
const barStyleValues = ['hidden', 'solid', 'dashed', 'dotted'] as const

type BarStyle = (typeof barStyleValues)[number]

function validateBarStyle(value: string): value is BarStyle {
  return barStyleValues.includes(value as BarStyle)
}

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
     * Makes the activity marker square. Markers are round by default, so no icon-round prop is needed.
     *
     * @category behavior
     */
    iconSquare: Boolean,
    /**
     * Makes the activity marker a rounded square. Markers are round by default, so no icon-round prop is needed.
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
    /**
     * CSS color for the timeline bar segments above and below this activity marker. Quasar color palette names are not supported here; use a CSS color value.
     *
     * @category style
     * @example bar-color="#67b75a"
     */
    barColor: String,
    /**
     * Width of the timeline bar segments above and below this activity marker in CSS units.
     *
     * @category style
     * @example bar-width="2px"
     */
    barWidth: String,
    /**
     * CSS line style for the timeline bar segments above and below this activity marker.
     *
     * @category style
     * @values hidden | solid | dashed | dotted
     * @example bar-style="solid"
     * @example bar-style="dashed"
     * @example bar-style="dotted"
     * @example bar-style="hidden"
     */
    barStyle: {
      type: String as PropType<BarStyle>,
      validator: validateBarStyle,
    },
    /**
     * CSS color for the timeline bar segment above this activity marker.
     *
     * @category style
     * @example bar-top-color="#67b75a"
     */
    barTopColor: String,
    /**
     * Width of the timeline bar segment above this activity marker in CSS units.
     *
     * @category style
     * @example bar-top-width="2px"
     */
    barTopWidth: String,
    /**
     * CSS line style for the timeline bar segment above this activity marker.
     *
     * @category style
     * @values hidden | solid | dashed | dotted
     * @example bar-top-style="solid"
     * @example bar-top-style="dashed"
     * @example bar-top-style="dotted"
     * @example bar-top-style="hidden"
     */
    barTopStyle: {
      type: String as PropType<BarStyle>,
      validator: validateBarStyle,
    },
    /**
     * CSS color for the timeline bar segment below this activity marker.
     *
     * @category style
     * @example bar-bottom-color="#bfc5c8"
     */
    barBottomColor: String,
    /**
     * Width of the timeline bar segment below this activity marker in CSS units.
     *
     * @category style
     * @example bar-bottom-width="2px"
     */
    barBottomWidth: String,
    /**
     * CSS line style for the timeline bar segment below this activity marker.
     *
     * @category style
     * @values hidden | solid | dashed | dotted
     * @example bar-bottom-style="solid"
     * @example bar-bottom-style="dashed"
     * @example bar-bottom-style="dotted"
     * @example bar-bottom-style="hidden"
     */
    barBottomStyle: {
      type: String as PropType<BarStyle>,
      validator: validateBarStyle,
    },
    /**
     * Draws a horizontal connector from this activity marker toward the content.
     *
     * @category style
     */
    connector: Boolean,
    /**
     * CSS color for the horizontal connector. Quasar color palette names are not supported here; use a CSS color value.
     *
     * @category style
     * @example connector-color="#8a8a8a"
     */
    connectorColor: String,
    /**
     * Length of the horizontal connector in CSS units.
     *
     * @category style
     * @default '24px'
     * @example connector-length="64px"
     */
    connectorLength: {
      type: String,
      default: '24px',
    },
    /**
     * Vertical offset for the horizontal connector in CSS units. Use this when custom content
     * needs the connector to align with its visual center instead of the marker center.
     *
     * @category style
     * @default '0px'
     * @example connector-offset="8px"
     * @example connector-offset="-4px"
     */
    connectorOffset: {
      type: String,
      default: '0px',
    },
    /**
     * Width of the horizontal connector in CSS units.
     *
     * @category style
     * @example connector-width="2px"
     */
    connectorWidth: String,
    /**
     * CSS line style for the horizontal connector.
     *
     * @category style
     * @values solid | dashed | dotted
     * @default 'solid'
     * @example connector-style="solid"
     * @example connector-style="dashed"
     * @example connector-style="dotted"
     */
    connectorStyle: {
      type: String as PropType<Exclude<BarStyle, 'hidden'>>,
      default: 'solid',
      validator: (value: string) => value === 'solid' || value === 'dashed' || value === 'dotted',
    },
  },

  slots: Object as SlotsType<QActivityItemSlots>,

  setup(props, { slots }) {
    const markerHalfSize = computed(() => getHalfCssSize(props.iconSize))

    const topStyle = computed(() => props.barTopStyle ?? props.barStyle)
    const bottomStyle = computed(() => props.barBottomStyle ?? props.barStyle)

    const itemStyle = computed<CSSProperties>(() => {
      const style = {
        '--qactivity-item-marker-half-size': markerHalfSize.value,
      } as CSSProperties

      const topColor = props.barTopColor ?? props.barColor
      const topWidth = props.barTopWidth ?? props.barWidth
      const bottomColor = props.barBottomColor ?? props.barColor
      const bottomWidth = props.barBottomWidth ?? props.barWidth
      const connectorColor = props.connectorColor ?? bottomColor ?? topColor

      if (topColor !== void 0) {
        style['--qactivity-item-bar-top-color'] = topColor
      }

      if (topWidth !== void 0) {
        style['--qactivity-item-bar-top-width'] = topWidth
      }

      if (bottomColor !== void 0) {
        style['--qactivity-item-bar-bottom-color'] = bottomColor
      }

      if (bottomWidth !== void 0) {
        style['--qactivity-item-bar-bottom-width'] = bottomWidth
      }

      style['--qactivity-item-connector-length'] = props.connectorLength
      style['--qactivity-item-connector-offset'] = props.connectorOffset

      if (connectorColor !== void 0) {
        style['--qactivity-item-connector-color'] = connectorColor
      }

      if (props.connectorWidth !== void 0) {
        style['--qactivity-item-connector-width'] = props.connectorWidth
      }

      return style
    })

    const iconStyle = computed<CSSProperties>(
      () =>
        ({
          left: props.iconDistance,
          '--qactivity-item-marker-half-size': markerHalfSize.value,
        }) as CSSProperties,
    )

    const itemClasses = computed(() => [
      'q-activity-item',
      'row',
      topStyle.value !== void 0 ? `q-activity-item--bar-top-${topStyle.value}` : '',
      bottomStyle.value !== void 0 ? `q-activity-item--bar-bottom-${bottomStyle.value}` : '',
      props.connector === true ? 'q-activity-item--connector' : '',
      props.connector === true ? `q-activity-item--connector-${props.connectorStyle}` : '',
    ])

    return () =>
      h(
        'li',
        {
          class: itemClasses.value,
          style: itemStyle.value,
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
