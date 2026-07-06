# QActivity UI

[![npm version](https://img.shields.io/npm/v/@quasar/quasar-ui-qactivity?label=%40quasar%2Fquasar-ui-qactivity)](https://www.npmjs.com/package/@quasar/quasar-ui-qactivity)
[![npm downloads](https://img.shields.io/npm/dt/@quasar/quasar-ui-qactivity)](https://www.npmjs.com/package/@quasar/quasar-ui-qactivity)
[![npm monthly downloads](https://img.shields.io/npm/dm/@quasar/quasar-ui-qactivity)](https://www.npmjs.com/package/@quasar/quasar-ui-qactivity)
[![license](https://img.shields.io/npm/l/@quasar/quasar-ui-qactivity)](https://www.npmjs.com/package/@quasar/quasar-ui-qactivity)

<span class="badge-github-sponsors"><a href="https://github.com/sponsors/hawkeye64" title="Sponsor this project on GitHub"><img src="https://img.shields.io/badge/github-sponsors-ea4aaa.svg?logo=githubsponsors&logoColor=white" alt="GitHub Sponsors button" /></a></span>
<span class="badge-paypal"><a href="https://paypal.me/hawkeye64" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

[![Discord](https://img.shields.io/badge/discord-join%20server-738ADB?style=for-the-badge&logo=discord&logoColor=738ADB)](https://chat.quasar.dev)
[![X](https://img.shields.io/badge/follow-@jgalbraith64-1DA1F2?style=for-the-badge&logo=x&logoColor=1DA1F2)](https://twitter.com/jgalbraith64)

QActivity is a Quasar component for building compact activity lists and timelines.

## Install

```bash
pnpm add @quasar/quasar-ui-qactivity
# or
bun add @quasar/quasar-ui-qactivity
# or
yarn add @quasar/quasar-ui-qactivity
# or
npm install @quasar/quasar-ui-qactivity
# or, in a Quasar CLI app
quasar ext add @quasar/qactivity
```

```ts
import { createApp } from 'vue'
import QActivity from '@quasar/quasar-ui-qactivity'
import '@quasar/quasar-ui-qactivity/dist/index.css'

const app = createApp(App)

app.use(QActivity)
app.mount('#app')
```

You can also import the components directly:

```ts
import { QActivity, QActivityItem } from '@quasar/quasar-ui-qactivity'
import '@quasar/quasar-ui-qactivity/dist/index.css'
```

## Components

- `QActivity` provides the list container and vertical activity bar.
- `QActivityItem` provides each marker and content row.

## Documentation

[Live docs and examples](https://qactivity.netlify.app/)

## Support

If QActivity is useful in your workflow and you want to support ongoing maintenance:

- GitHub Sponsors: https://github.com/sponsors/hawkeye64
- PayPal: https://paypal.me/hawkeye64

## License

MIT (c) Jeff Galbraith <jeff@quasar.dev>
