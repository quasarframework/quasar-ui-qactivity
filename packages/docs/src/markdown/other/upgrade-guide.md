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
- Quasar CLI Vite with `@quasar/app-vite` v3 beta for the App Extension.
- Node.js 22.13 or newer.
- pnpm 11.4 or newer when working in this repository.

## Update Packages

For Quasar App Extension installs:

```bash
quasar ext add @quasar/qactivity@beta
```

For direct UI package installs:

```bash
pnpm add @quasar/quasar-ui-qactivity@beta
# or
bun add @quasar/quasar-ui-qactivity@beta
# or
yarn add @quasar/quasar-ui-qactivity@beta
# or
npm install @quasar/quasar-ui-qactivity@beta
```

## Import Changes

Use the package entrypoint instead of old source-file imports:

```ts
import { QActivity, QActivityItem } from "@quasar/quasar-ui-qactivity";
import "@quasar/quasar-ui-qactivity/dist/index.css";
```

Do not import legacy source paths such as `src/index.sass` or component implementation files. Those
paths belonged to the old package layout and may change without warning.

## Build Output

QActivity v3 publishes ESM and UMD builds. CommonJS entrypoints have been removed to match the
modern Quasar and Vite ecosystem.

## Bar Caps

The v3 beta also includes timeline bar cap controls (`bar-start`, `bar-end`, and `bar-cap-size`) so
you can hide, round, soften, or arrow either end of the vertical timeline bar.
