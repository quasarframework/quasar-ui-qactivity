<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useMeta } from 'quasar'

import { provideMarkdownStore } from 'assets/markdown-store.js'
import getMeta from 'assets/get-meta.js'

export default defineComponent({
  name: 'App',

  setup () {
    useMeta({
      title: 'QActivity » simple timelines for your Quasar apps',
      titleTemplate: title => `${ title } » QActivity`,

      meta: getMeta(
        'QActivity - simple timelines for your Quasar apps',
        'QActivity allows simplified timelines for your Quasar apps.'
      )
    })

    provideMarkdownStore()
  }
})
</script>
