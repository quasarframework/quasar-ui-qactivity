<template>
  <div class="q-pa-md column q-gutter-y-md">
    <div class="row q-col-gutter-md">
      <q-select
        v-model="barStart"
        class="col-12 col-sm-6"
        dense
        emit-value
        label="Bar start"
        map-options
        outlined
        :options="capOptions"
      />
      <q-select
        v-model="barEnd"
        class="col-12 col-sm-6"
        dense
        emit-value
        label="Bar end"
        map-options
        outlined
        :options="capOptions"
      />
      <div class="col-12">
        <div class="text-caption q-mb-xs">Cap size: {{ barCapSize }}px</div>
        <q-slider v-model="barCapSize" color="teal" label :max="28" :min="6" :step="1" />
      </div>
    </div>

    <q-card class="q-pa-md full-width">
      <q-activity
        :bar-cap-size="barCapSizeCss"
        bar-color="teal"
        bar-distance="25px"
        :bar-end="barEnd"
        :bar-start="barStart"
        bar-width="6px"
        :class="itemClass"
      >
        <q-activity-item
          v-for="item in activityItems"
          :key="item.time"
          icon-size="34px"
          icon-text-color="white"
          class="bar-cap-row"
          v-bind="item"
        >
          <div class="full-width row items-center justify-between q-gutter-sm">
            <div>
              {{ item.text }}
            </div>
            <div class="text-caption text-grey-7">
              {{ item.time }}
            </div>
          </div>
        </q-activity-item>
      </q-activity>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import { QActivity, QActivityItem } from '@quasar/quasar-ui-qactivity'
import '@quasar/quasar-ui-qactivity/src/index.scss'

type BarCap = 'default' | 'hidden' | 'arrow' | 'ball' | 'square' | 'round' | 'rounded'

const $q = useQuasar()

const capOptions = [
  { label: 'Default', value: 'default' },
  { label: 'Hidden', value: 'hidden' },
  { label: 'Arrow', value: 'arrow' },
  { label: 'Ball', value: 'ball' },
  { label: 'Square', value: 'square' },
  { label: 'Round', value: 'round' },
  { label: 'Rounded', value: 'rounded' },
]

const barStart = ref<BarCap>('ball')
const barEnd = ref<BarCap>('ball')
const barCapSize = ref(18)

const activityItems = [
  {
    icon: 'flag',
    iconColor: 'teal',
    text: 'Campaign started',
    time: '9:00 AM',
  },
  {
    icon: 'edit',
    iconColor: 'orange',
    text: 'Creative copy updated',
    time: '10:30 AM',
  },
  {
    icon: 'check',
    iconColor: 'positive',
    text: 'Review approved',
    time: '11:45 AM',
  },
]

const barCapSizeCss = computed(() => `${barCapSize.value}px`)
const itemClass = computed(() => ($q.dark.isActive ? 'bg-grey-8' : 'bg-blue-grey-1'))
</script>

<style lang="scss" scoped>
.bar-cap-row {
  min-height: 62px;
}
</style>
