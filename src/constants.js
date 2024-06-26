import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'


export const BUTTON_TYPE_DANGER = 'danger'
export const BUTTON_TYPE_NEUTRAL = 'neutral'

export const BUTTON_TYPES = [
  BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL
]

export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'

export const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
}

export const HOURS_IN_DAY = 24
export const MIDNIGHT_HOUR = 0

export const PERIOD_SELECT_OPTIONS = [
  {
    value: 10,
    label: '0:10'
  },
  {
    value: 15,
    label: '0:15'
  },
  {
    value: 25,
    label: '0:25'
  }
]
