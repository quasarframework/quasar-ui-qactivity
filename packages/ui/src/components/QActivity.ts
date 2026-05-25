import { computed, defineComponent, h, type CSSProperties } from "vue";
import { useQuasar } from "quasar";

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
  },

  setup(props, { slots }) {
    const $q = useQuasar();

    const classes = computed(() => {
      return `q-activity--${props.dense === true ? "dense" : "normal"}`;
    });

    const styles = computed<CSSProperties>(() => {
      return {
        "--qactivity-bar-color": props.barColor ?? ($q.dark.isActive ? "#fff" : "#000"),
        "--qactivity-bar-width": props.barWidth,
        "--qactivity-bar-distance": props.barDistance,
      } as CSSProperties;
    });

    return () =>
      h(
        "ul",
        {
          class: ["q-activity", classes.value],
          style: styles.value,
        },
        slots.default?.() ?? [],
      );
  },
});
