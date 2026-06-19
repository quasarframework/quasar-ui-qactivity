---
title: Installation Types
desc: How to install QActivity
keys: Getting Started
related:
  - /getting-started/introduction
  - /developing/using-qactivity
---

QActivity can be installed as a Quasar App Extension, as a Vue plugin, as a direct component import, or through the UMD bundle.

## Recommended Path

::: steps

## Use the App Extension in Quasar CLI apps

Choose the App Extension when you want Quasar to add the boot file and stylesheet for you.

## Use the Vue plugin for manual registration

Install the UI package directly when your app owns plugin registration or when you are not using the Quasar CLI App Extension flow.

## Import components directly for targeted bundles

Import `QActivity` and `QActivityItem` directly when you only want to register the components used by a specific page or feature.
:::

## Quasar CLI

### App Extension

To add QActivity to your Quasar application, run the following in your Quasar app folder:

```bash
quasar ext add @quasar/qactivity
```

The QActivity v3 App Extension targets Quasar CLI Vite 3 and requires `@quasar/app-vite` >=3.0.0-rc.2. It does not support webpack-based Quasar applications.

### Manual Boot File

If you do not install through the App Extension, install the UI package directly:

```tabs
<<| bash pnpm |>>
pnpm add @quasar/quasar-ui-qactivity
<<| bash bun |>>
bun add @quasar/quasar-ui-qactivity
<<| bash yarn |>>
yarn add @quasar/quasar-ui-qactivity
<<| bash npm |>>
npm install @quasar/quasar-ui-qactivity
```

Then create and register a boot file:

```js
import { defineBoot } from '#q-app'
import Plugin from '@quasar/quasar-ui-qactivity'
import '@quasar/quasar-ui-qactivity/dist/index.css'

export default defineBoot(({ app }) => {
  app.use(Plugin)
})
```

## Vue 3 Or Vite

```js
import { createApp } from 'vue'
import Plugin from '@quasar/quasar-ui-qactivity'
import '@quasar/quasar-ui-qactivity/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(Plugin)
app.mount('#app')
```

## Component Import

```html
<style src="@quasar/quasar-ui-qactivity/dist/index.css"></style>

<script setup lang="ts">
  import { QActivity, QActivityItem } from '@quasar/quasar-ui-qactivity'
</script>
```
