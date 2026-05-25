<template>
  <json-api-viewer
    title="QActivity API"
    :json="json"
    starting-inner-tab="behavior"
    no-menu
  />
</template>

<script>
import { defineComponent } from 'vue'
import Api from '@quasar/quasar-ui-qactivity/dist/api/QActivity.json'

export default defineComponent({
  name: 'QActivityJsonApi',
  setup () {
    return {
      json: Api
    }
  }
})
</script>
