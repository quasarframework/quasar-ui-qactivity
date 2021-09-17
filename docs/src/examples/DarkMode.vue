<template>
  <div class="q-pa-md q-gutter-sm">
    <q-card class="q-pa-sm" style="width: 100%;">
      <q-activity
        bar-width="4px"
        bar-distance="32px"
      >
        <q-activity-item
          icon="photo"
          icon-color="blue"
          icon-text-color="white"
          icon-size="50px"
          icon-font-size="48px"
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
          icon-size="50px"
          icon-font-size="48px"
          :icon-square="true"
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
          v-for="(item, index) in qActivityData"
          :key="index"
          :icon="item.icon"
          :iconColor="item.iconColor"
          :iconTextColor="item.iconTextColor"
          :iconSize="item.iconSize"
          :iconFontSize="item.iconFontSize"
          :iconSquare="item.iconSquare"
          :iconRounded="item.iconRounded"
          :iconImage="item.iconImage"
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
</template>

<script>
import { defineComponent } from 'vue'
import { QActivity, QActivityItem } from '@quasar/quasar-ui-qactivity/src/QActivity.js'
import '@quasar/quasar-ui-qactivity/src/QActivity.sass'

const qActivityData = [
  {
    icon: 'favorite',
    iconColor: 'blue-grey-1',
    iconTextColor: 'red',
    iconSize: '50px',
    iconFontSize: '48px',
    iconSquare: true,
    text: '2 issues fixed',
    time: '1 min ago'
  },
  {
    icon: 'favorite_border',
    iconColor: 'blue-grey-11',
    iconTextColor: 'red',
    iconSize: '50px',
    iconFontSize: '42px',
    iconSquare: false,
    text: '21 new orders',
    time: '5 min ago'
  },
  {
    icon: 'bolt',
    iconColor: 'yellow',
    iconTextColor: 'red',
    iconSize: '50px',
    iconFontSize: '48px',
    iconSquare: true,
    text: '32 new customers',
    time: '20 min ago'
  },
  {
    icon: 'not_interested',
    iconColor: 'red',
    iconTextColor: 'white',
    iconSize: '50px',
    iconFontSize: '48px',
    iconSquare: false,
    text: '8 Invoices sent',
    time: '1 hour ago'
  },
  {
    icon: 'loop',
    iconColor: 'green',
    iconTextColor: 'white',
    iconSize: '50px',
    iconFontSize: '48px',
    iconSquare: false,
    iconRounded: true,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nesciunt architecto reprehenderit ea voluptate voluptates placeat minus corrupti consequatur quidem, ducimus, hic optio iure accusantium aperiam dolorum. Quidem, saepe dolores?',
    time: '1 day ago'
  },
  {
    iconSize: '50px',
    iconSquare: false,
    iconImage: 'https://cdn.quasar.dev/img/boy-avatar.png',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nesciunt architecto reprehenderit ea voluptate voluptates placeat minus corrupti consequatur quidem, ducimus, hic optio iure accusantium aperiam dolorum. Quidem, saepe dolores?',
    time: '1 day ago'
  }
]

export default defineComponent({
  name: 'Dense',
  components: {
    QActivity,
    QActivityItem
  },

  setup() {
    return {
      qActivityData
    }
  }
})
</script>
