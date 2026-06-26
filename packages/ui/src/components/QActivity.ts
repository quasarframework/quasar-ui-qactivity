import {
  computed,
  defineComponent,
  h,
  type CSSProperties,
  type PropType,
  type SlotsType,
  type VNode,
} from 'vue'
import { useQuasar } from 'quasar'

const barCapValues = ['default', 'hidden', 'arrow', 'square', 'round', 'rounded'] as const
const barStyleValues = ['solid', 'dashed', 'dotted'] as const

type BarCap = (typeof barCapValues)[number]
type BarStyle = (typeof barStyleValues)[number]

function validateBarCap(value: string): value is BarCap {
  return barCapValues.includes(value as BarCap)
}

function validateBarStyle(value: string): value is BarStyle {
  return barStyleValues.includes(value as BarStyle)
}

export interface QActivitySlots {
  /**
   * Anything can go into this slot, but a QActivityItem component is expected.
   */
  default: () => VNode[]
}

export default defineComponent({
  name: 'QActivity',

  props: {
    /**
     * Dense mode; occupies less space.
     *
     * @category behavior
     */
    dense: Boolean,
    /**
     * Force QActivity to use dark or light default bar colors when bar-color is not provided.
     * When omitted, QActivity follows the global Quasar dark mode state.
     *
     * @category behavior
     * @example :dark="true"
     * @example :dark="false"
     */
    dark: {
      type: Boolean as PropType<boolean | null>,
      default: null,
    },
    /**
     * CSS color for the timeline bar. Quasar color palette names are not supported here; use a CSS color value.
     *
     * @category style
     * @example bar-color="blue"
     * @example bar-color="#0000FF"
     */
    barColor: String,
    /**
     * Width of the timeline bar in CSS units.
     *
     * @category style
     * @default '1px'
     * @example bar-width="2px"
     */
    barWidth: {
      type: String,
      default: '1px',
    },
    /**
     * CSS line style for the timeline bar.
     *
     * @category style
     * @values solid | dashed | dotted
     * @default 'solid'
     * @example bar-style="solid"
     * @example bar-style="dashed"
     * @example bar-style="dotted"
     */
    barStyle: {
      type: String as PropType<BarStyle>,
      default: 'solid',
      validator: validateBarStyle,
    },
    /**
     * Distance from the inline start edge to the center of the timeline bar.
     *
     * @category style
     * @default '2px'
     * @example bar-distance="16px"
     * @example bar-distance="1rem"
     */
    barDistance: {
      type: String,
      default: '2px',
    },
    /**
     * Controls the beginning of the timeline bar.
     *
     * @category style
     * @values default | hidden | arrow | square | round | rounded
     * @default 'default'
     * @example bar-start="hidden"
     * @example bar-start="arrow"
     * @example bar-start="square"
     * @example bar-start="round"
     * @example bar-start="rounded"
     */
    barStart: {
      type: String as PropType<BarCap>,
      default: 'default',
      validator: validateBarCap,
    },
    /**
     * Controls the end of the timeline bar.
     *
     * @category style
     * @values default | hidden | arrow | square | round | rounded
     * @default 'default'
     * @example bar-end="hidden"
     * @example bar-end="arrow"
     * @example bar-end="square"
     * @example bar-end="round"
     * @example bar-end="rounded"
     */
    barEnd: {
      type: String as PropType<BarCap>,
      default: 'default',
      validator: validateBarCap,
    },
    /**
     * Size in CSS units for hidden bar offsets, visible bar caps, and the space reserved for visible caps.
     *
     * @category style
     * @default '8px'
     * @example bar-cap-size="8px"
     * @example bar-cap-size="0.5rem"
     */
    barCapSize: {
      type: String,
      default: '8px',
    },
  },

  slots: Object as SlotsType<QActivitySlots>,

  setup(props, { slots }) {
    const $q = useQuasar()

    const isDark = computed(() => props.dark ?? $q.dark.isActive)

    const classes = computed(() => {
      return [
        `q-activity--${props.dense === true ? 'dense' : 'normal'}`,
        `q-activity--bar-style-${props.barStyle}`,
        `q-activity--bar-start-${props.barStart}`,
        `q-activity--bar-end-${props.barEnd}`,
      ]
    })

    const styles = computed<CSSProperties>(() => {
      return {
        '--qactivity-bar-color': props.barColor ?? (isDark.value ? '#fff' : '#000'),
        '--qactivity-bar-width': props.barWidth,
        '--qactivity-bar-style': props.barStyle,
        '--qactivity-bar-distance': props.barDistance,
        '--qactivity-bar-cap-size': props.barCapSize,
      } as CSSProperties
    })

    return () =>
      h(
        'ul',
        {
          class: ['q-activity', classes.value],
          style: styles.value,
        },
        slots.default?.(),
      )
  },
})
