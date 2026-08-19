<!--
Release drafting notes:
- Lead with changes QActivity users feel in their apps: component behavior, app-extension behavior, public API, styling, compatibility, install, and migration notes.
- Include docs, CodePen, build tooling, dependency, or release-process changes only when they affect package consumers.
- Fixes should include the short commit id.
- Keep the summary short and concrete.
-->

# QActivity v3.0.1

Release date: 2026-08-19

## Summary

QActivity v3.0.1 improves Quasar CLI Vite integration by keeping the UI package out of
Vite dependency optimization. This ensures its Quasar imports use the application's runtime
instance.

## What's Changed

**Features:**

- None.

**Fixes:**

- `499fa5e` Exclude the QActivity UI package from Vite dependency optimization when installed
  through the App Extension, preventing a separately optimized Quasar runtime.

**Maintenance:**

- `398a0d6` Refresh dependencies and the QPress documentation runtime.

## Breaking Changes

- None.

## Compatibility

- Node.js: `>=22.13`
- Quasar: `^2.25.1`
- Quasar App Vite target: `@quasar/app-vite@3.7.0`
- npm dist-tag: `latest`

## Installation

```bash
pnpm add @quasar/quasar-ui-qactivity
# or
bun add @quasar/quasar-ui-qactivity
# or
yarn add @quasar/quasar-ui-qactivity
# or
npm install @quasar/quasar-ui-qactivity
# or
quasar ext add @quasar/qactivity
```

## Documentation

- Docs: https://qactivity.netlify.app/
- Installation: https://qactivity.netlify.app/getting-started/installation-types
- Upgrade Guide: https://qactivity.netlify.app/other/upgrade-guide

## Full Changelog

https://github.com/quasarframework/quasar-ui-qactivity/compare/v3.0.0...v3.0.1

## Donations

If QActivity is useful in your workflow and you want to support ongoing maintenance:

- GitHub Sponsors: https://github.com/sponsors/hawkeye64
- PayPal: https://paypal.me/hawkeye64
