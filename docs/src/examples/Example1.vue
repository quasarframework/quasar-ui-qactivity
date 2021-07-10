<template>
  <div class="q-pa-md q-gutter-sm">
  </div>
</template>

<script>
import { defineComponent, onBeforeUnmount, reactive, toRefs } from 'vue'
import { QActivity } from '@quasar/quasar-ui-qactivity/src/QActivity.js'
import '@quasar/quasar-ui-qactivity/src/QActivity.sass'

export default defineComponent({
  name: 'Example1',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    QActivity
  },

  setup() {
    return {
    }
  }
})
</script>
