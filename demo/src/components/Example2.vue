<template>
  <div class="col-12 q-gutter-lg">
    <q-card class="q-pa-sm" style="width: 400px;">
      <q-card-section>
        <div class="text-h6">Large icons</div>
        <div class="text-subtitle2">Square, rounded, colors, bar color, bar width</div>
      </q-card-section>
      <q-activity
        bar-color="blue"
        bar-width="2px"
        bar-distance="32px"
        class="bg-blue-grey-1"
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
            src="https://cdn.quasar-framework.org/img/parallax2.jpg"
          />
        </q-activity-item>
        <q-activity-item
          icon="list"
          icon-color="orange-8"
          icon-text-color="white"
          icon-size="50px"
          icon-font-size="48px"
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
          v-for="(item, index) in data2"
          :key="index"
          :icon="item.icon"
          :iconColor="item.iconColor"
          :iconTextColor="item.iconTextColor"
          :iconSize="item.iconSize"
          :iconFontSize="item.iconFontSize"
          :iconSquare="item.iconSquare"
          :iconRounded="item.iconRounded"
          :iconImage="item.iconImage"
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
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      data2: [
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
          iconImage: 'https://cdn.quasar-framework.org/img/boy-avatar.png',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nesciunt architecto reprehenderit ea voluptate voluptates placeat minus corrupti consequatur quidem, ducimus, hic optio iure accusantium aperiam dolorum. Quidem, saepe dolores?',
          time: '1 day ago'
        }
      ]
    }
  }
}
</script>

<style>
.middle-text {
  max-width:70%;
  width: 100%;
  text-align: left;
  padding: 5px;
}
.side-text {
  max-width:30%;
  width: 100%;
  text-align: right;
  padding: 5px;
}
</style>
