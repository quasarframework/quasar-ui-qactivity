<template>
  <div class="tracking-stage">
    <q-card flat class="tracking-card">
      <q-activity
        dense
        bar-color="#67b75a"
        bar-width="2px"
        bar-distance="14px"
        bar-start="hidden"
        bar-end="hidden"
        bar-cap-size="6px"
        class="tracking-activity"
      >
        <q-activity-item
          v-for="item in trackingItems"
          :key="item.label"
          :icon-color="item.color"
          :icon-size="item.size"
          :bar-top-color="item.topColor"
          :bar-top-style="item.topStyle"
          :bar-bottom-color="item.bottomColor"
          :bar-bottom-style="item.bottomStyle"
          icon-distance="0"
          class="tracking-item"
        >
          <div class="tracking-copy">
            <div class="tracking-label">{{ item.label }}</div>
            <div class="tracking-time">{{ item.time }}</div>
          </div>
        </q-activity-item>
      </q-activity>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { QActivity, QActivityItem } from '@quasar/quasar-ui-qactivity'
import '@quasar/quasar-ui-qactivity/src/index.scss'

const trackingItems = [
  {
    label: 'Ordered',
    time: '9:15 AM, January 1, 2024',
    color: 'green-5',
    size: '12px',
    topStyle: 'hidden',
    topColor: '#67b75a',
    bottomStyle: 'solid',
    bottomColor: '#67b75a',
  },
  {
    label: 'Shipped',
    time: '12:20 PM, January 4, 2024',
    color: 'green-5',
    size: '12px',
    topStyle: 'solid',
    topColor: '#67b75a',
    bottomStyle: 'solid',
    bottomColor: '#67b75a',
  },
  {
    label: 'Out for delivery',
    time: '07:00 AM, January 8, 2024',
    color: 'blue-6',
    size: '18px',
    topStyle: 'solid',
    topColor: '#67b75a',
    bottomStyle: 'dotted',
    bottomColor: '#bfc5c8',
  },
  {
    label: 'Delivered',
    time: 'Estimated delivery by 09:20 AM',
    color: 'grey-4',
    size: '12px',
    topStyle: 'dotted',
    topColor: '#bfc5c8',
    bottomStyle: 'hidden',
    bottomColor: '#bfc5c8',
  },
] as const
</script>

<style lang="scss" scoped>
.tracking-stage {
  display: flex;
  justify-content: center;
  padding: 24px;
}

.tracking-card {
  width: 204px;
  min-height: 272px;
  padding: 21px 20px;
  border-radius: 8px;
  color: #555;
  background: #fff;
  box-shadow: 0 8px 24px rgb(0 0 0 / 12%);
}

.tracking-activity {
  margin: 0;
  color: inherit;
}

.tracking-item {
  min-height: 68px;
}

.tracking-item:last-child {
  min-height: 0;
}

.tracking-copy {
  padding: 0 0 22px 8px;
  line-height: 1.2;
}

.tracking-item:last-child .tracking-copy {
  padding-bottom: 0;
}

.tracking-label {
  font-size: 12px;
  font-weight: 700;
}

.tracking-time {
  max-width: 150px;
  margin-top: 1px;
  font-size: 12px;
  font-weight: 700;
}
</style>
