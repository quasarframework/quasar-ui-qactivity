QActivity (@quasar/qactivity)
===

![official icon](https://img.shields.io/badge/Quasar%201.0-Official%20UI%20App%20Extension-blue.svg)
![npm (scoped)](https://img.shields.io/npm/v/@quasar/quasar-app-extension-qactivity.svg?style=plastic)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/quasarframework/app-extension-qactivity.svg)]()
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/quasarframework/app-extension-qactivity.svg)]()
[![npm](https://img.shields.io/npm/dt/@quasar/quasar-app-extension-qactivity.svg)](https://www.npmjs.com/package/@quasar/quasar-app-extension-qactivity)

QActivity is an `UI App Extension` for [Quasar Framework v1](https://v1.quasar-framework.org/). It will not work with legacy versions of Quasar Framework.

This work is currently in `beta` and there are expected changes while things get worked out. Your help with testing is greatly appreciated.

# Info
QActivity is the smaller sister to [QTimeline](https://v1.quasar-framework.org/vue-components/timeline) and can be used to create an activity list.

One of the most important actions is the ability to adjust the `QActivity` bar distance and the `QActivityItem` icon distance. This is needed when you adjust margins, padding or icon size to make everything line up properly. Therefore, when making an activity list, it is recommended to keep everything the same. If you do use different icon sizes, you will need to adjust the `icon-distance` property appropriately for each `QActivityItem`.

# Install
To add this App Extension to your Quasar application, run the following (in your Quasar app folder):
```
quasar ext add @quasar/qactivity
```

# Describe
You can use `quasar describe QActivity` or `quasar describe QActivityItem`

# Test Project
In **demo** folder of **app-extension-qactivity**.

# Demo
Can be found [here](https://quasarframework.github.io/app-extension-qactivity).

# Example Code
Be sure to check out the Test Project for more examples.
```
<q-activity
  dense
  bar-color="red"
  bar-width="1px"
  bar-distance="15px"
  class="bg-blue-grey-1"
>
  <q-activity-item
    icon="photo"
    icon-color="blue"
    icon-text-color="white"
    icon-size="1rem"
    icon-font-size="0.75rem"
    :icon-square="true"
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
    :icon-square="true"
    class="bg-blue-grey-11"
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
    v-for="(item, index) in data1"
    :key="index"
    :icon="item.icon"
    :icon-color="item.iconColor"
    :icon-text-color="item.iconTextColor"
    :icon-size="item.iconSize"
    :icon-font-size="item.iconFontSize"
    :icon-square="item.iconSquare"
    :icon-image="item.iconImage"
    :class="{'bg-blue-grey-11': index % 2 }"
  >
    <div class="inline-block vertical-middle middle-text">
      {{ item.text }}
    </div>
    <div class="inline-block vertical-middle side-text">
      {{ item.time }}
    </div>
  </q-activity-item>
</q-activity>
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
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).
