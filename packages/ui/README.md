# QActivity UI

QActivity is a Quasar component for building compact activity lists and timelines.

## Install

```bash
pnpm add @quasar/quasar-ui-qactivity@beta
# or
bun add @quasar/quasar-ui-qactivity@beta
# or
yarn add @quasar/quasar-ui-qactivity@beta
# or
npm install @quasar/quasar-ui-qactivity@beta
# or, in a Quasar CLI app
quasar ext add @quasar/qactivity@beta
```

```ts
import { createApp } from "vue";
import QActivity from "@quasar/quasar-ui-qactivity";
import "@quasar/quasar-ui-qactivity/dist/index.css";

const app = createApp(App);

app.use(QActivity);
app.mount("#app");
```

You can also import the components directly:

```ts
import { QActivity, QActivityItem } from "@quasar/quasar-ui-qactivity";
import "@quasar/quasar-ui-qactivity/dist/index.css";
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
