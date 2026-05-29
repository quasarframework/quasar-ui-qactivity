<template>
  <div class="q-pa-md q-gutter-sm">
    <q-card class="q-pa-sm full-width">
      <q-activity dense bar-color="red" bar-width="1px" bar-distance="16px" :class="itemClass">
        <q-activity-item
          icon="photo"
          icon-color="blue"
          icon-text-color="white"
          icon-size="1rem"
          icon-font-size="0.75rem"
          icon-square
          class="activity-row"
        >
          <q-parallax :height="100" src="https://cdn.quasar.dev/img/parallax2.jpg" />
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
import { smallActivityData as activityData } from "./activity-data";

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
