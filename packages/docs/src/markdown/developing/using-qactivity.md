---
title: Using QActivity
desc: How to use QActivity
keys: developing
examples: QActivity
---

QActivity gives you a compact activity-list pattern with a vertical timeline bar and customizable
activity markers. Use it for audit trails, notification streams, release notes, customer activity,
order history, or any content where the order of events matters.

## API

`QActivity` owns the timeline container and vertical bar. Each `QActivityItem` renders a marker and
content row, and the content can be plain text, Quasar components, media, or your own slot layout.

<script import>
import QActivityApi from '@quasar/quasar-ui-qactivity/dist/api/QActivity.json'
import QActivityItemApi from '@quasar/quasar-ui-qactivity/dist/api/QActivityItem.json'
</script>

<MarkdownApi :api="QActivityApi" name="QActivity"/>

<MarkdownApi :api="QActivityItemApi" name="QActivityItem"/>

## Small Icons

Small icons keep activity lists compact. This works well in side panels, dashboards, or dense
notification views where the content should remain easy to scan.

<MarkdownExample title="Small Icons" file="SmallIcons" no-edit/>

## Large Icons

Large markers make each activity feel more deliberate. Use this style when the timeline is the main
content on the page, or when the marker itself communicates status or category.

<MarkdownExample title="Large Icons" file="LargeIcons" no-edit/>

## Bar Caps

Use `bar-start` and `bar-end` when the default full-height line is too blunt for your layout. You
can keep the current square end, hide either end, add arrow caps for process-style timelines, or
choose round and softly rounded ends for thicker activity bars.

<MarkdownExample title="Bar Caps" file="BarCaps" no-edit/>

## Quote

The icon slot can hold images, avatars, or your own marker content. This example uses an avatar-style
marker to anchor a testimonial quote.

<MarkdownExample title="Quote" file="Quote" no-edit/>

## Dark Mode

When `bar-color` is not provided, QActivity automatically adapts the timeline bar for Quasar dark
mode. Toggle this site between light and dark mode to see the default behavior.

<MarkdownExample title="Dark Mode" file="DarkMode" no-edit/>
