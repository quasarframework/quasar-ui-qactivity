<template>
  <div class="q-pa-md q-gutter-sm">
    <q-card class="q-pa-sm full-width">
      <q-activity bar-width="4px" bar-distance="33px">
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
import { QActivity, QActivityItem } from "@quasar/quasar-ui-qactivity";
import "@quasar/quasar-ui-qactivity/src/index.scss";
import { largeActivityData as activityData } from "./activity-data";
</script>

<style lang="scss" scoped>
.activity-row {
  padding-bottom: 5px;
  padding-top: 5px;
}

.time-label {
  min-width: 100px;
}
</style>
