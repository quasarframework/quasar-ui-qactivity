export interface ActivityItem {
  icon?: string
  iconColor?: string
  iconTextColor?: string
  iconSize?: string
  iconFontSize?: string
  iconSquare?: boolean
  iconRounded?: boolean
  iconImage?: string
  text: string
  time: string
}

export const smallActivityData: ActivityItem[] = [
  {
    icon: 'favorite',
    iconColor: 'blue-grey-1',
    iconTextColor: 'red',
    iconSize: '1rem',
    iconFontSize: '0.75rem',
    iconSquare: true,
    text: '2 issues fixed',
    time: '1 min ago',
  },
  {
    icon: 'favorite_border',
    iconColor: 'blue-grey-11',
    iconTextColor: 'red',
    iconSize: '1rem',
    iconFontSize: '0.75rem',
    text: '21 new orders',
    time: '5 min ago',
  },
  {
    icon: 'bolt',
    iconColor: 'yellow',
    iconTextColor: 'red',
    iconSize: '1rem',
    iconFontSize: '0.95rem',
    iconSquare: true,
    text: '32 new customers',
    time: '20 min ago',
  },
  {
    icon: 'not_interested',
    iconColor: 'red',
    iconTextColor: 'white',
    iconSize: '1rem',
    iconFontSize: '0.75rem',
    text: '8 invoices sent',
    time: '1 hour ago',
  },
  {
    icon: 'loop',
    iconColor: 'green',
    iconTextColor: 'white',
    iconSize: '1rem',
    iconFontSize: '0.75rem',
    iconRounded: true,
    text: 'Long activity rows can include explanatory content without losing the timeline shape.',
    time: '1 day ago',
  },
  {
    iconSize: '1rem',
    iconImage: 'https://cdn.quasar.dev/img/boy-avatar.png',
    text: 'Avatar markers are useful for people-driven activity streams.',
    time: '1 day ago',
  },
]

export const largeActivityData: ActivityItem[] = smallActivityData.map((item) => ({
  ...item,
  iconSize: '50px',
  iconFontSize: item.iconFontSize === '0.95rem' ? '48px' : '42px',
}))
