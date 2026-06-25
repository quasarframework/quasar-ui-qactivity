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

  it('renders visible bar cap variants', async () => {
    const app = createSSRApp({
      render: () =>
        h(QActivity, {
          barStart: 'ball',
          barEnd: 'square',
        }),
    })

    installSsrQuasarStub(app)

    const html = await renderToString(app)

    expect(html).toContain('q-activity--bar-start-ball')
    expect(html).toContain('q-activity--bar-end-square')
    expect(html).toContain('q-activity__bar-cap--ball')
    expect(html).toContain('q-activity__bar-cap--square')
  })
})
