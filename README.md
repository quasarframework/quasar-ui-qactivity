# QActivity

![@quasar/quasar-ui-qactivity](https://img.shields.io/npm/v/@quasar/quasar-ui-qactivity?label=@quasar/quasar-ui-qactivity)
![@quasar/quasar-app-extension-qactivity](https://img.shields.io/npm/v/@quasar/quasar-app-extension-qactivity?label=@quasar/quasar-app-extension-qactivity)
[![Netlify Status](https://api.netlify.com/api/v1/badges/557a5abf-eec4-47a2-8442-d099f43b5689/deploy-status)](https://app.netlify.com/projects/qactivity/deploys)
[![npm](https://img.shields.io/npm/dt/@quasar/quasar-ui-qactivity.svg)](https://www.npmjs.com/package/@quasar/quasar-ui-qactivity)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/quasarframework/quasar-ui-qactivity.svg)](https://github.com/quasarframework/quasar-ui-qactivity)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/quasarframework/quasar-ui-qactivity.svg)](https://github.com/quasarframework/quasar-ui-qactivity)

QActivity is a Quasar component and app extension for building compact activity lists and timelines.
It is a smaller, focused companion to Quasar's `QTimeline` component.

# Structure

This is a pnpm workspace mono-repo. You cannot use npm for building.

- [/ui](packages/ui) - standalone npm package (go here for more information)
- [/app-extension](packages/app-extension) - Quasar app extension
- [/docs](packages/docs) - Q-Press documentation site with docs, demos, and examples
- [live demo](https://qactivity.netlify.app/) - **live Q-Press docs, demos, and examples**

## Install

For Quasar CLI projects:

```bash
quasar ext add @quasar/qactivity
```

For direct package usage:

```bash
pnpm add @quasar/quasar-ui-qactivity
# or
bun add @quasar/quasar-ui-qactivity
# or
yarn add @quasar/quasar-ui-qactivity
# or
npm install @quasar/quasar-ui-qactivity
```

```ts
import { createApp } from 'vue'
import QActivity from '@quasar/quasar-ui-qactivity'
import '@quasar/quasar-ui-qactivity/dist/index.css'

const app = createApp(App)

app.use(QActivity)
app.mount('#app')
```

## Components

- `QActivity` provides the list container and vertical activity bar.
- `QActivityItem` provides each marker and content row.

Use `quasar describe QActivity` or `quasar describe QActivityItem` after installing the app
extension.

## Support

If QActivity is useful in your workflow and you want to support ongoing maintenance:

- GitHub Sponsors: https://github.com/sponsors/hawkeye64
- PayPal: https://paypal.me/hawkeye64

## License

MIT (c) Jeff Galbraith <jeff@quasar.dev>
