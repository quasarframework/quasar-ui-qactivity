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

const barCapValues = ['default', 'hidden', 'arrow', 'round', 'rounded'] as const

type BarCap = (typeof barCapValues)[number]

function validateBarCap(value: string): value is BarCap {
  return barCapValues.includes(value as BarCap)
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
     * @values default | hidden | arrow | round | rounded
     * @default 'default'
     * @example bar-start="hidden"
     * @example bar-start="arrow"
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
     * @values default | hidden | arrow | round | rounded
     * @default 'default'
     * @example bar-end="hidden"
     * @example bar-end="arrow"
     * @example bar-end="round"
     * @example bar-end="rounded"
     */
    barEnd: {
      type: String as PropType<BarCap>,
      default: 'default',
      validator: validateBarCap,
    },
    /**
     * Size in CSS units for hidden bar offsets and arrow caps.
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

    const classes = computed(() => {
      return [
        `q-activity--${props.dense === true ? 'dense' : 'normal'}`,
        `q-activity--bar-start-${props.barStart}`,
        `q-activity--bar-end-${props.barEnd}`,
      ]
    })

    const styles = computed<CSSProperties>(() => {
      return {
        '--qactivity-bar-color': props.barColor ?? ($q.dark.isActive ? '#fff' : '#000'),
        '--qactivity-bar-width': props.barWidth,
        '--qactivity-bar-distance': props.barDistance,
        '--qactivity-bar-cap-size': props.barCapSize,
      } as CSSProperties
    })

    function getBarCaps(): VNode[] {
      const caps: VNode[] = []

      if (props.barStart === 'arrow') {
        caps.push(
          h('li', {
            'aria-hidden': 'true',
            class: ['q-activity__bar-cap', 'q-activity__bar-cap--start'],
            role: 'presentation',
          }),
        )
      }

      if (props.barEnd === 'arrow') {
        caps.push(
          h('li', {
            'aria-hidden': 'true',
            class: ['q-activity__bar-cap', 'q-activity__bar-cap--end'],
            role: 'presentation',
          }),
        )
      }

      return caps
    }

    return () =>
      h(
        'ul',
        {
          class: ['q-activity', classes.value],
          style: styles.value,
        },
        [...getBarCaps(), ...(slots.default?.() ?? [])],
      )
  },
})
