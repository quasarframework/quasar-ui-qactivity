# QActivity

![@quasar/quasar-ui-qactivity](https://img.shields.io/npm/v/@quasar/quasar-ui-qactivity?label=@quasar/quasar-ui-qactivity)
![@quasar/quasar-app-extension-qactivity](https://img.shields.io/npm/v/@quasar/quasar-app-extension-qactivity?label=@quasar/quasar-app-extension-qactivity)
[![Netlify Status](https://api.netlify.com/api/v1/badges/557a5abf-eec4-47a2-8442-d099f43b5689/deploy-status)](https://app.netlify.com/projects/qactivity/deploys)
[![npm](https://img.shields.io/npm/dt/@quasar/quasar-ui-qactivity.svg)](https://www.npmjs.com/package/@quasar/quasar-ui-qactivity)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/quasarframework/quasar-ui-qactivity.svg)](https://github.com/quasarframework/quasar-ui-qactivity)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/quasarframework/quasar-ui-qactivity.svg)](https://github.com/quasarframework/quasar-ui-qactivity)

QActivity is a Quasar component and app extension for building compact activity lists and timelines.
It is a smaller, focused companion to Quasar's `QTimeline` component.

## Documentation

[Live docs and examples](https://qactivity.netlify.app/)

## Install

For Quasar CLI projects:

```bash
quasar ext add @quasar/qactivity
```

While v3 is in beta:

```bash
quasar ext add @quasar/qactivity@beta
```

For direct package usage:

```bash
pnpm add @quasar/quasar-ui-qactivity
```

```ts
import { createApp } from "vue";
import QActivity from "@quasar/quasar-ui-qactivity";
import "@quasar/quasar-ui-qactivity/dist/index.css";

const app = createApp(App);

app.use(QActivity);
app.mount("#app");
```

## Components

- `QActivity` provides the list container and vertical activity bar.
- `QActivityItem` provides each marker and content row.

Use `quasar describe QActivity` or `quasar describe QActivityItem` after installing the app
extension.

## Donate

If you appreciate the work that went into this, please consider donating to
[Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).

## License

MIT (c) Jeff Galbraith <jeff@quasar.dev>
