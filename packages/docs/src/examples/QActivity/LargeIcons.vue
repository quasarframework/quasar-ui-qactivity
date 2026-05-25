<template>
  <div class="q-pa-md q-gutter-sm">
    <q-card class="q-pa-sm full-width">
      <q-activity bar-color="blue" bar-width="2px" bar-distance="32px" :class="itemClass">
        <q-activity-item
          icon="list"
          icon-color="orange-8"
          icon-text-color="white"
          icon-size="50px"
          icon-font-size="48px"
          icon-square
          class="activity-row"
        >
          <q-item>
            <q-item-section>
              <q-item-label>QItem content</q-item-label>
              <q-item-label caption lines="2">
                Activity rows can contain regular Quasar components.
              </q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>5 min ago</q-item-label>
              <q-icon name="star" color="yellow" />
            </q-item-section>
          </q-item>
        </q-activity-item>

        <q-activity-item
          v-for="(item, index) in activityData"
          :key="`${item.time}-${index}`"
          v-bind="item"
          :class="listClasses(index)"
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
import { computed } from "vue";
import { useQuasar } from "quasar";
import { QActivity, QActivityItem } from "@quasar/quasar-ui-qactivity";
import "@quasar/quasar-ui-qactivity/src/index.scss";
import { largeActivityData as activityData } from "./activity-data";

const $q = useQuasar();

function listClasses(index: number): string {
  return index % 2 === 0 ? ($q.dark.isActive ? "bg-grey-10" : "bg-blue-grey-11") : "";
}

const itemClass = computed(() => ($q.dark.isActive ? "bg-grey-8" : "bg-blue-grey-1"));
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
