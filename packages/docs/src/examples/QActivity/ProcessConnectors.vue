<template>
  <div class="process-stage">
    <q-card flat class="process-card">
      <q-activity
        bar-color="#07871a"
        bar-width="3px"
        bar-distance="42px"
        bar-start="hidden"
        bar-end="hidden"
        class="process-activity"
      >
        <q-activity-item
          v-for="phase in phases"
          :key="phase.title"
          :icon="phase.icon"
          icon-color="green-8"
          icon-text-color="white"
          icon-size="58px"
          icon-font-size="30px"
          connector
          connector-color="#8a8a8a"
          connector-offset="14px"
          connector-style="dashed"
          connector-length="64px"
          class="process-row"
        >
          <q-card flat bordered class="phase-panel">
            <div class="phase-title">{{ phase.title }}</div>
            <ol>
              <li v-for="item in phase.items" :key="item">{{ item }}</li>
            </ol>
          </q-card>
        </q-activity-item>
      </q-activity>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { QActivity, QActivityItem } from '@quasar/quasar-ui-qactivity'
import '@quasar/quasar-ui-qactivity/src/index.scss'

const phases = [
  {
    icon: 'looks_one',
    title: 'Prepare',
    items: ['Collect requirements', 'Confirm scope', 'Assign owners'],
  },
  {
    icon: 'looks_two',
    title: 'Build',
    items: ['Ship the first slice', 'Review with users', 'Adjust the plan'],
  },
  {
    icon: 'looks_3',
    title: 'Launch',
    items: ['Publish release notes', 'Monitor feedback', 'Close the loop'],
  },
]
</script>

<style lang="scss" scoped>
.process-stage {
  display: flex;
  justify-content: center;
  padding: 24px;
  background: #f4f8fb;
}

.process-card {
  width: min(100%, 430px);
  padding: 24px 20px;
  border: 1px solid #d7e1e8;
  border-radius: 10px;
  background: #fff;
  color: #1f2b35;
}

.process-activity {
  margin: 0;
}

.process-row {
  min-height: 112px;
}

.process-row:last-child {
  min-height: 0;
}

.phase-panel {
  width: min(100%, 186px);
  margin-left: 64px;
  padding: 10px 14px;
  border-color: #919aa1;
  color: #111;
  background: #fff;
}

.phase-title {
  font-weight: 700;
}

.phase-panel ol {
  margin: 2px 0 0;
  padding-left: 18px;
}
</style>
