---
title: FAQ
desc: Frequently asked questions
keys: developing
---

## When should I use QActivity instead of QTimeline?

Use QActivity when you want a compact, lightweight activity list with simple markers and flexible
row content. Use Quasar's built-in QTimeline when you need the fuller timeline API and layout.

## Can I use images or avatars for markers?

Yes. Use the `icon-image` prop for image markers, or use the `icon` slot when you need complete
control over the marker content.

## Does QActivity support dark mode?

Yes. If you do not provide `bar-color`, QActivity chooses a light or dark timeline bar color from
the current Quasar dark-mode state.
