---
title: Upgrade Guide
desc: Upgrade to QActivity v3
keys: other
related:
  - /getting-started/installation-types
  - /developing/using-qactivity
---

QActivity v3 modernizes the package for Vue 3, Quasar v2, `@quasar/app-vite` v3, and ESM-first
tooling.

## Requirements

- Vue 3 and Quasar v2.
- Quasar CLI Vite with `@quasar/app-vite` >=3.0.0-beta.39 for the App Extension.
- Node.js 22.13 or newer.
- pnpm 11.4 or newer when working in this repository.

## Update Packages

For Quasar App Extension installs:

```bash
quasar ext add @quasar/qactivity@beta
```

For direct UI package installs:

```tabs
<<| bash pnpm |>>
pnpm add @quasar/quasar-ui-qactivity@beta
<<| bash bun |>>
bun add @quasar/quasar-ui-qactivity@beta
<<| bash yarn |>>
yarn add @quasar/quasar-ui-qactivity@beta
<<| bash npm |>>
npm install @quasar/quasar-ui-qactivity@beta
```

## Import Changes

Use the package entrypoint instead of old source-file imports:

```ts [twoslash]
import { QActivity, QActivityItem } from "@quasar/quasar-ui-qactivity";

QActivityItem;
// ^?
```

Import the component stylesheet alongside the components:

```ts
import "@quasar/quasar-ui-qactivity/dist/index.css";
```

Do not import legacy source paths such as `src/index.sass` or component implementation files. Those
paths belonged to the old package layout and may change without warning.

## Build Output

QActivity v3 publishes ESM and UMD builds. CommonJS entrypoints have been removed to match the
modern Quasar and Vite ecosystem.

## Bar Caps

The v3 beta also includes timeline bar cap controls (`bar-start`, `bar-end`, and `bar-cap-size`) so
you can hide, round, soften, or arrow either end of the vertical timeline bar. The `bar-distance`
prop is measured to the center of the bar, which keeps thicker bars and caps aligned with activity
markers.
