---
title: Installation Types
desc: How to install QActivity
keys: All about QActivity
related:
  - /all-about-qactivity/what-is-qactivity
  - /contributing/bugs-and-feature-requests
  - /contributing/sponsor
---
## Quasar CLI

### App Extension

#### Install

To add as an App Extension to your Quasar application, run the following (in your Quasar app folder):
```
$ quasar ext add @quasar/qactivity@next
```

#### Uninstall

To remove as an App Extension from your Quasar application, run the following (in your Quasar app folder):
```
$ quasar ext remove @quasar/qactivity
```

#### Describe
When installed as an App Extension, you can use `quasar describe QActivity`.


### Or install, create and register a boot file

```
$ yarn add @quasar/quasar-ui-qactivity@next
# or
$ npm install @quasar/quasar-ui-qactivity@next
```

Then

```js
import { boot } from 'quasar/wrappers'
import Plugin from '@quasar/quasar-ui-qactivity'
import '@quasar/quasar-ui-qactivity/dist/index.css'

export default boot(({ app }) => {
  app.use(Plugin)
})
```

or from sources

```js
import { boot } from 'quasar/wrappers'
import Plugin from '@quasar/quasar-ui-qactivity/src/QActivity.js'

export default boot(({ app }) => {
  app.use(Plugin)
})
```

Additionally, because you are accessing the sources this way, you will need to make sure your project will transpile the code.

In `quasar.conf.js` update the following:
```js
// Note: using ~ tells Quasar the file resides in node_modules
css: [
  'app.sass',
  '~quasar-ui-qactivity/src/QActivity.sass'
],

build: {
  transpile: true,
  transpileDependencies: [
    /quasar-ui-qactivity[\\/]src/
  ]
}
```

### Or target as a component import

:::
```html
<style src="@quasar/quasar-ui-qactivity/dist/QActivity.min.css"></style>

<script>
import { QActivity } from '@quasar/quasar-ui-qactivity/dist/QActivity.esm.js'

export default {
  components: {
    QActivity
  }
}
</script>
```
:::

## Vue CLI or Vite
### Vue project from src

:::
```js
import Plugin from '@quasar/quasar-ui-qactivity/src/QActivity.js'
import '@quasar/quasar-ui-qactivity/src/QActivity.sass'
import App from './App.vue'

const app = createApp(App)
  .use(Plugin)
```
:::

### Vue project from dist

:::
```js
import Plugin from '@quasar/quasar-ui-qactivity/dist/QActivity.esm.js'
import '@quasar/quasar-ui-qactivity/dist/QActivity.min.css'
import App from './App.vue'

const app = createApp(App)
  .use(Plugin)
```
:::

### Or component import

:::
```html
<style src="@quasar/quasar-ui-qactivity/dist/QActivity.min.css"></style>

<script>
import { QActivity } from '@quasar/quasar-ui-qactivity/dist/QActivity.esm.js'

export default {
  components: {
    QActivity
  }
}
</script>
```
:::

## UMD variant

Exports `window.QActivity` (`QActivity.QActivity` and `QActivity.QActivityItem`).

### Quasar install

Add the following tag(s) after the Quasar ones:

```html
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qactivity@next/dist/QActivity.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qactivity@next/dist/QActivity.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qactivity@next/dist/QActivity.rtl.min.css" rel="stylesheet" type="text/css">
```

### Vue install

```html
<head>
  <link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qactivity@next/dist/QActivity.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body: -->
  <script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qactivity@next/dist/QActivity.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qactivity@next/dist/QActivity.rtl.min.css" rel="stylesheet" type="text/css">
```

Your Vue source:
```js
const app = Vue.createApp({
  setup() {
    // ...your set up methods
  }
});

app.component("QActivity", QActivity.QActivity);
app.component("QActivityItem", QActivity.QActivityItem);
app.mount("#app");
```


## Testing on Codepen
[QActivity UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/WNOMGBL)

# Project source
Can be found [here](https://github.com/quasarframework/quasar-ui-qactivity/tree/next).
