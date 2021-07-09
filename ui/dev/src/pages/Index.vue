<template>
  <q-page padding class="row justify-center">

      <q-card class="q-pa-sm" style="width: 300px;">
        <q-card-section>
          <div class="text-h6">Small icons</div>
          <div class="text-subtitle2">Square, rounded, colors, dense</div>
        </q-card-section>
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
            :icon-rounded="item.iconRounded"
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
      </q-card>

    <q-card class="q-pa-sm" style="width: 500px;">
      <q-card-section>
        <div class="text-h6">Used as a quote</div>
        <div class="text-subtitle2">bar-distance, icon-distance, icon-image</div>
      </q-card-section>
      <q-activity
        bar-color="lightblue"
        bar-width="3px"
        bar-distance="15px"
      >
        <q-activity-item
          icon-size="40px"
          icon-distance="-13px"
          icon-image="https://cdn.quasar.dev/img/avatar2.jpg"
          style="padding-bottom:5px;padding-top:5px;"
        >
          <div class="testimonial-quote group">
            <div class="quote-container">
              <blockquote>
                <p>Overall, fantastic! I'd recommend them to anyone looking for a creative, thoughtful, and professional team.”</p>
              </blockquote>
              <cite><span>Kristi Pezeli</span><br>
                Social Media Specialist<br>
                American College of Family Physicians
              </cite>
            </div>
          </div>
        </q-activity-item>
      </q-activity>
    </q-card>

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
  </q-page>
</template>

<script>
export default {
  setup () {
    const data2 = [
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
    const data1 = [
      {
        icon: 'favorite',
        iconColor: 'blue-grey-1',
        iconTextColor: 'red',
        iconSize: '1rem',
        iconFontSize: '0.75rem',
        iconSquare: true,
        text: '2 issues fixed',
        time: '1 min ago'
      },
      {
        icon: 'favorite_border',
        iconColor: 'blue-grey-11',
        iconTextColor: 'red',
        iconSize: '1rem',
        iconFontSize: '0.75rem',
        iconSquare: false,
        text: '21 new orders',
        time: '5 min ago'
      },
      {
        icon: 'bolt',
        iconColor: 'yellow',
        iconTextColor: 'red',
        iconSize: '1rem',
        iconFontSize: '0.95rem',
        iconSquare: true,
        text: '32 new customers',
        time: '20 min ago'
      },
      {
        icon: 'not_interested',
        iconColor: 'red',
        iconTextColor: 'white',
        iconSize: '1rem',
        iconFontSize: '0.75rem',
        iconSquare: false,
        text: '8 Invoices sent',
        time: '1 hour ago'
      },
      {
        icon: 'loop',
        iconColor: 'green',
        iconTextColor: 'white',
        iconSize: '1rem',
        iconFontSize: '0.75rem',
        iconSquare: false,
        iconRounded: true,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nesciunt architecto reprehenderit ea voluptate voluptates placeat minus corrupti consequatur quidem, ducimus, hic optio iure accusantium aperiam dolorum. Quidem, saepe dolores?',
        time: '1 day ago'
      },
      {
        iconSize: '1rem',
        iconSquare: false,
        iconImage: 'https://cdn.quasar.dev/img/boy-avatar.png',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nesciunt architecto reprehenderit ea voluptate voluptates placeat minus corrupti consequatur quidem, ducimus, hic optio iure accusantium aperiam dolorum. Quidem, saepe dolores?',
        time: '1 day ago'
      }
    ]

    return {
      data1,
      data2
    }
  }
}
</script>

<style>
.testimonial-quote {
  font-size: 16px;
}

.testimonial-quote blockquote {
  border: 0;
  margin: 0;
  padding: 0;
  background: none;
  color: gray;
  font-family: Georgia, serif;
  font-size: 1.5em;
  font-style: italic;
  line-height: 1.4 !important;
  margin: 0;
  position: relative;
  text-shadow: 0 1px white;
  z-index: 600;
}

.testimonial-quote blockquote * {
  box-sizing: border-box;
}

.testimonial-quote blockquote p {
  color: #75808a;
  line-height: 1.4 !important;
}

.testimonial-quote blockquote p:first-child:before {
  content: '\201C';
  color: #81bedb;
  font-size: 7.5em;
  font-weight: 700;
  opacity: .3;
  position: absolute;
  top: -.4em;
  left: -.2em;
  text-shadow: none;
  z-index: -300;
}

.testimonial-quote cite {
  color: gray;
  display: block;
  font-size: .8em;
}

.testimonial-quote cite span {
  color: #5e5e5e;
  font-size: 1em;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: 0 1px white;
}

.testimonial-quote {
  position: relative;
}

.testimonial-quote .quote-container {
  padding-left: 10px;
}

.testimonial-quote.right .quote-container {
  padding-left: 0;
  padding-right: 10px;
}

.testimonial-quote.right cite {
  text-align: right;
}
</style>
