<template>
  <json-api-viewer
    title="QActivityItem API"
    :json="json"
    starting-inner-tab="behavior"
    no-menu
  />
</template>

<script>
import { defineComponent } from 'vue'
import Api from '@quasar/quasar-ui-qactivity/dist/api/QActivityItem.json'

export default defineComponent({
  name: 'QActivityItemJsonApi',
  setup () {
    return {
      json: Api
    }
  }
})
</script>
