import { describe, expect, it } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'

import QActivity from '../src/components/QActivity'
import QActivityItem from '../src/components/QActivityItem'
import Plugin, {
  install,
  QActivity as NamedQActivity,
  QActivityItem as NamedQActivityItem,
} from '../src'

function installSsrQuasarStub(app: ReturnType<typeof createSSRApp>): void {
  const $q = {
    config: {
      iconMapFn: () => undefined,
    },
    dark: { isActive: false },
    iconMapFn: null,
    platform: { is: { ios: false } },
  }

  app.provide('_q_', $q)
  app.config.globalProperties.$q = $q
}

describe('QActivity exports', () => {
  it('exports installable components', () => {
    expect(QActivity.name).toBe('QActivity')
    expect(QActivityItem.name).toBe('QActivityItem')
    expect(NamedQActivity).toBe(QActivity)
    expect(NamedQActivityItem).toBe(QActivityItem)
    expect(Plugin.install).toBe(install)
  })

  it('renders on the server without browser globals', async () => {
    const app = createSSRApp({
      render: () =>
        h(
          QActivity,
          {
            barColor: 'teal',
            barWidth: '4px',
          },
          {
            default: () =>
              h(
                QActivityItem,
                {
                  icon: 'check',
                  iconColor: 'positive',
                  iconTextColor: 'white',
                },
                {
                  default: () => 'SSR activity item',
                },
              ),
          },
        ),
    })

    installSsrQuasarStub(app)

    const html = await renderToString(app)

    expect(html).toContain('q-activity')
    expect(html).toContain('SSR activity item')
  })

  it('renders bar cap and bar style classes', async () => {
    const app = createSSRApp({
      render: () =>
        h(QActivity, {
          barStyle: 'dotted',
          barStart: 'round',
          barEnd: 'square',
        }),
    })

    installSsrQuasarStub(app)

    const html = await renderToString(app)

    expect(html).toContain('q-activity--bar-start-round')
    expect(html).toContain('q-activity--bar-end-square')
    expect(html).toContain('q-activity--bar-style-dotted')
  })

  it('can force the default bar color into dark mode', async () => {
    const app = createSSRApp({
      render: () =>
        h(QActivity, {
          dark: true,
        }),
    })

    installSsrQuasarStub(app)

    const html = await renderToString(app)

    expect(html).toContain('--qactivity-bar-color:#fff')
  })

  it('renders item segment and connector controls', async () => {
    const app = createSSRApp({
      render: () =>
        h(
          QActivity,
          {
            barColor: '#67b75a',
            barWidth: '2px',
          },
          {
            default: () =>
              h(
                QActivityItem,
                {
                  barTopStyle: 'solid',
                  barBottomStyle: 'dotted',
                  connector: true,
                  connectorStyle: 'dashed',
                  connectorLength: '64px',
                  connectorOffset: '14px',
                },
                {
                  default: () => 'Tracked activity item',
                },
              ),
          },
        ),
    })

    installSsrQuasarStub(app)

    const html = await renderToString(app)

    expect(html).toContain('q-activity-item--bar-top-solid')
    expect(html).toContain('q-activity-item--bar-bottom-dotted')
    expect(html).toContain('q-activity-item--connector-dashed')
    expect(html).toContain('--qactivity-item-connector-length:64px')
    expect(html).toContain('--qactivity-item-connector-offset:14px')
  })
})
