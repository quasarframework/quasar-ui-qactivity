> For Quasar v1/Vue v2 support go to the [v1](https://github.com/quasarframework/quasar-ui-qactivity/tree/v1) branch.

QActivity (@quasar/qactivity)
===

![@quasar/quasar-ui-qactivity](https://img.shields.io/npm/v/@quasar/quasar-ui-qactivity?label=@quasar/quasar-ui-qactivity)
![@quasar/quasar-app-extension-qactivity](https://img.shields.io/npm/v/@quasar/quasar-app-extension-qactivity?label=@quasar/quasar-app-extension-qactivity)
[![npm](https://img.shields.io/npm/dt/@quasar/quasar-ui-qactivity.svg)](https://www.npmjs.com/package/@quasar/quasar-ui-qactivity)
![@quasar/quasar-app-extension-qactivity](https://img.shields.io/npm/dm/@quasar/quasar-ui-qactivity)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/quasarframework/quasar-ui-qactivity.svg)]()
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/quasarframework/quasar-ui-qactivity.svg)]()

QActivity is an `UI App Extension` for [Quasar Framework v2](https://quasar.dev/). It will not work with legacy versions of Quasar Framework.

# Info
QActivity is the smaller sister to [QTimeline](https://quasar.dev/vue-components/timeline) and can be used to create an activity list.

One of the most important actions is the ability to adjust the `QActivity` bar distance and the `QActivityItem` icon distance. This is needed when you adjust margins, padding or icon size to make everything line up properly. Therefore, when making an activity list, it is recommended to keep everything the same. If you do use different icon sizes, you will need to adjust the `icon-distance` property appropriately for each `QActivityItem`.

[Live Demo](https://qactivity.netlify.app/) - **live docs and examples**

# Install
To add this App Extension to your Quasar application, run the following (in your Quasar app folder):
```
quasar ext add @quasar/qactivity
```

# Describe
You can use `quasar describe QActivity` or `quasar describe QActivityItem`

# Example Code
Be sure to check out the docs for more examples.
```
<div class="q-pa-md q-gutter-sm">
  <q-card class="q-pa-sm" style="width: 100%;">
    <q-activity
      dense
      bar-color="red"
      bar-width="1px"
      bar-distance="15px"
      :class="itemClass"
    >
      <q-activity-item
        icon="photo"
        icon-color="blue"
        icon-text-color="white"
        icon-size="1rem"
        icon-font-size="0.75rem"
        icon-square
        style="padding-bottom:5px;padding-top:5px;"
      >
        <q-parallax
          :height="100"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-activity-item>
      <q-activity-item
        icon="list"
        icon-color="orange-8"
        icon-text-color="white"
        icon-size="1rem"
        icon-font-size="0.75rem"
        icon-square
        :class="itemClass"
        style="padding-bottom:5px;padding-top:5px;"
      >
        <q-item>
          <q-item-section>
            <q-item-label>QItem</q-item-label>
            <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
            <q-icon name="star" color="yellow" />
          </q-item-section>
        </q-item>
      </q-activity-item>
      <q-activity-item
        v-for="(item, index) in data"
        :key="index"
        :icon="item.icon"
        :icon-color="item.iconColor"
        :icon-text-color="item.iconTextColor"
        :icon-size="item.iconSize"
        :icon-font-size="item.iconFontSize"
        :icon-square="item.iconSquare"
        :icon-rounded="item.iconRounded"
        :icon-image="item.iconImage"
        :class="listClasses(index)"
      >
        <div class="full-width row justify-evenly">
          <div class="inline-block vertical-middle middle-text col">
            {{ item.text }}
          </div>
          <div class="inline-block vertical-middle side-text text-right q-pr-sm col col-shrink" style="min-width: 100px;">
            {{ item.time }}
          </div>
        </div>
      </q-activity-item>
    </q-activity>
  </q-card>
</div>
```

# QActivity Vue Properties
| Vue&nbsp;Property | Type	| Description |
|---|---|---|
| dense | Boolean | Dense mode; occupies less space |
| bar-color | String | CSS color (no Quasar colors allowed here) |
| bar-width | String | Size in CSS units, including unit name |
| bar-distance | String | Size in CSS units, including unit name |

QActivity has no events or methods. It has a single "default" slot. You can put anything into this slot, but QActivityItem is expected.

# QActivityItem Vue Properties
| Vue&nbsp;Property | Type	| Description |
|---|---|---|
| icon | Boolean | Icon name following Quasar convention; make sure you have the icon library installed |
| icon-color | String | Color name for icon from the Quasar Color Palette |
| icon-text-color | String | Color name for icon text from the Quasar Color Palette |
| icon-size | String | Size in CSS units, including unit name |
| icon-font-size | String | Size in CSS units, including unit name |
| icon-square | Boolean | Removes border-radius so borders are squared |
| icon-rounded | Boolean | Applies a small standard border-radius for a squared shape of the component |
| icon-image | String | Path to image to use. If used, do not also use `icon`, `icon-color`, `icon-text-color` or `icon-font-size` |
| icon-distance | String | Size in CSS units, including unit name. Used to help center icons on the bar |

QActivityItem has no events or methods. It has a single "default" slot. You can put anything into this slot.

# Donate
If you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).

# License
MIT (c) Jeff Galbraith <jeff@quasar.dev>
