---
title: Using QActivity
desc: How to use QActivity
keys: developing
examples: QActivity
---

QActivity is a lightweight timeline primitive for ordered, status-driven content. It keeps the
structure simple, but gives you control over the marker, the vertical line above and below each
marker, optional horizontal connectors, and the content beside each event.

Use it when you need more visual meaning than a plain list, without taking on a heavy workflow or
stepper component. It works well for audit trails, notification streams, package tracking, release
notes, customer activity, order history, and process diagrams.

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

<MarkdownExample title="Small Icons" file="SmallIcons"/>

## Large Icons

Large markers make each activity feel more deliberate. Use this style when the timeline is the main
content on the page, or when the marker itself communicates status or category.

<MarkdownExample title="Large Icons" file="LargeIcons"/>

## Marker Shapes

Activity markers are round by default because they use Quasar's QAvatar shape. Use `icon-square`
for hard corners or `icon-rounded` for a rounded-square marker; an `icon-round` prop is not needed.

## Bar Caps

Use `bar-start` and `bar-end` when the default full-height line is too blunt for your layout. You
can keep the current square end, hide either end, add arrow caps for process-style timelines, use
round caps for circular endpoints, or use square and rounded-square caps for stronger endpoints.
Use `bar-distance` as the centerline for the vertical bar so it stays aligned with the activity
markers, even when the bar width or cap style changes.
Use `bar-cap-size` to keep visible caps proportional to the marker size in that layout.

<MarkdownExample title="Bar Caps" file="BarCaps"/>

## Dark Mode

When `bar-color` is not provided, QActivity follows Quasar dark mode for its default timeline bar
color. Use the switch in this example to force only this activity surface into dark mode while the
rest of the page stays unchanged.

<MarkdownExample title="Dark Mode" file="DarkMode"/>

## Quote

The icon slot can hold images, avatars, or your own marker content. This example uses an avatar-style
marker to anchor a testimonial quote.

<MarkdownExample title="Quote" file="Quote"/>

## Package Tracking

QActivity can also render familiar delivery, order, and fulfillment progress patterns. Use compact
markers, a narrow bar, and stacked text when the status and timestamp matter more than controls.

<MarkdownExample title="Package Tracking" file="PackageTracking"/>

## Process Connectors

Use item-level connectors when the marker is part of a larger process diagram. Each item can control
the line above the marker, the line below it, and the horizontal connector toward the content.

<MarkdownExample title="Process Connectors" file="ProcessConnectors"/>
