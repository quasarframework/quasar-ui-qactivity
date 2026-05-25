import { computed, defineComponent, h, type CSSProperties } from "vue";
import { QAvatar } from "quasar";

export default defineComponent({
  name: "QActivityItem",

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
      default: "0",
    },
  },

  setup(props, { slots }) {
    const iconStyle = computed<CSSProperties>(() => ({
      left: props.iconDistance,
    }));

    return () =>
      h(
        "li",
        {
          class: ["q-activity-item", "row"],
        },
        [
          h(
            "div",
            {
              class: ["q-activity-item--icon", "vertical-middle"],
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
                        h("img", {
                          src: props.iconImage,
                        }),
                      ]
                    : [],
              ),
              slots.icon?.(),
            ],
          ),
          h(
            "div",
            {
              class: "col q-activity-item--content",
            },
            slots.default?.(),
          ),
        ],
      );
  },
});
