import { computed, defineComponent, h, type CSSProperties, type PropType, type VNode } from "vue";
import { useQuasar } from "quasar";

const barCapValues = ["default", "hidden", "arrow", "round", "rounded"] as const;

type BarCap = (typeof barCapValues)[number];

function validateBarCap(value: string): value is BarCap {
  return barCapValues.includes(value as BarCap);
}

export default defineComponent({
  name: "QActivity",

  props: {
    dense: Boolean,
    barColor: String,
    barWidth: {
      type: String,
      default: "1px",
    },
    barDistance: {
      type: String,
      default: "2px",
    },
    barStart: {
      type: String as PropType<BarCap>,
      default: "default",
      validator: validateBarCap,
    },
    barEnd: {
      type: String as PropType<BarCap>,
      default: "default",
      validator: validateBarCap,
    },
    barCapSize: {
      type: String,
      default: "8px",
    },
  },

  setup(props, { slots }) {
    const $q = useQuasar();

    const classes = computed(() => {
      return [
        `q-activity--${props.dense === true ? "dense" : "normal"}`,
        `q-activity--bar-start-${props.barStart}`,
        `q-activity--bar-end-${props.barEnd}`,
      ];
    });

    const styles = computed<CSSProperties>(() => {
      return {
        "--qactivity-bar-color": props.barColor ?? ($q.dark.isActive ? "#fff" : "#000"),
        "--qactivity-bar-width": props.barWidth,
        "--qactivity-bar-distance": props.barDistance,
        "--qactivity-bar-cap-size": props.barCapSize,
      } as CSSProperties;
    });

    function getBarCaps(): VNode[] {
      const caps: VNode[] = [];

      if (props.barStart === "arrow") {
        caps.push(
          h("li", {
            "aria-hidden": "true",
            class: ["q-activity__bar-cap", "q-activity__bar-cap--start"],
            role: "presentation",
          }),
        );
      }

      if (props.barEnd === "arrow") {
        caps.push(
          h("li", {
            "aria-hidden": "true",
            class: ["q-activity__bar-cap", "q-activity__bar-cap--end"],
            role: "presentation",
          }),
        );
      }

      return caps;
    }

    return () =>
      h(
        "ul",
        {
          class: ["q-activity", classes.value],
          style: styles.value,
        },
        [...getBarCaps(), ...(slots.default?.() ?? [])],
      );
  },
});
