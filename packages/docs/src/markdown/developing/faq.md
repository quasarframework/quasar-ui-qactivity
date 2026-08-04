---
title: FAQ
desc: Frequently asked questions
keys: developing
---

:::details Q. Do I need to import QActivity CSS myself?

The App Extension adds the stylesheet for you.

If you install the UI package directly, import the stylesheet in your boot file or app entry:

```ts
import '@quasar/quasar-ui-qactivity/dist/index.css'
```

Quasar CLI projects can also centralize the stylesheet in `quasar.config.ts`:

```ts
// Note: using ~ tells Quasar the file resides in node_modules
css: [
  "app.scss",
  "~@quasar/quasar-ui-qactivity/dist/index.css",
],
```

:::

:::details Q. How do I type an App Extension-registered QActivity template ref?

Keep runtime component registration in the App Extension and import only the component instance type in `<script setup>`:

```ts
import { useTemplateRef } from 'vue'
import type { QActivity } from '@quasar/quasar-ui-qactivity'

const activityRef = useTemplateRef<QActivity>('activity')
```

A normal value import of `QActivity` creates a local component binding in `<script setup>` and takes precedence over the globally registered component. Use a normal import only when you intend to use the UI component directly, and follow the manual boot file installation path instead of registering it through both paths.

Because application source imports the type, add the UI package as a direct application dependency:

```bash
pnpm add @quasar/quasar-ui-qactivity
```

Applications that only use the globally registered component in templates do not need this extra direct dependency.

:::

:::details Q. Can I inspect the component API from the Quasar CLI?

Yes. After the App Extension is installed, run:

```bash
quasar describe QActivity
quasar describe QActivityItem
```

The same generated API is shown on the [Using QActivity](/developing/using-qactivity) page.

:::

:::details Q. When should I use QActivity instead of QTimeline?

Use QActivity when you want a compact, lightweight activity list with simple markers and flexible
row content. Use Quasar's built-in QTimeline when you need the fuller timeline API and layout.

:::

:::details Q. Can I use images or avatars for markers?

Yes. Use the `icon-image` prop for image markers, or use the `icon` slot when you need complete
control over the marker content.

:::

:::details Q. Does QActivity support dark mode?

Yes. If you do not provide `bar-color`, QActivity chooses a light or dark timeline bar color from
the current Quasar dark-mode state.
:::
