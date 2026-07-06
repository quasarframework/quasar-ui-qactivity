<template>
  <div class="q-pa-md q-gutter-y-md">
    <div class="row items-center">
      <q-toggle v-model="forceDark" color="orange" label="Force dark surface" />
    </div>

    <q-card
      class="q-pa-sm full-width activity-surface"
      :class="forceDark ? 'bg-grey-10 text-white' : 'bg-white text-dark'"
      :dark="forceDark"
    >
      <q-activity :dark="forceDark" bar-width="4px" bar-distance="33px">
        <q-activity-item
          icon="photo"
          icon-color="blue"
          icon-text-color="white"
          icon-size="50px"
          icon-font-size="48px"
          icon-square
          class="activity-row"
        >
          <q-parallax :height="100" src="https://cdn.quasar.dev/img/parallax2.jpg" />
        </q-activity-item>

        <q-activity-item
          v-for="(item, index) in activityData"
          :key="`${item.time}-${index}`"
          v-bind="item"
        >
          <div class="full-width row justify-evenly">
            <div class="inline-block vertical-middle col">
              {{ item.text }}
            </div>
            <div class="inline-block vertical-middle text-right q-pr-sm col col-shrink time-label">
              {{ item.time }}
            </div>
          </div>
        </q-activity-item>
      </q-activity>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QActivity, QActivityItem } from '@quasar/quasar-ui-qactivity'
import '@quasar/quasar-ui-qactivity/src/index.scss'
import { largeActivityData as activityData } from './activity-data'

const forceDark = ref(false)
</script>

<style lang="scss" scoped>
.activity-surface {
  transition:
    background-color 0.18s ease,
    color 0.18s ease;
}

.activity-row {
  padding-bottom: 5px;
  padding-top: 5px;
}

.time-label {
  min-width: 100px;
}
</style>
