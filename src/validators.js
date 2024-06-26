import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHT_HOUR, BUTTON_TYPES } from "./constants"

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isButtonTypeValid(value) {
  return BUTTON_TYPES.includes(value)
}

export function isTimelineItemValid({ hour }) {
  return IsHourValid(hour)
}

export function IsHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function validateSelectOptions(options) {
  return options.every(isSelectedOptionValid)
}

export function isSelectedOptionValid({ value, label }) {
  return isNumber(value) && isNotEmptyString(label)
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}

export function isUndefinedOrNull(value) {
  return isNull(value) || isUndefined()
}

export function isNumberOrNull(value) {
  return isNull(value) || isNumber(value)
}

function isNull(value) {
  return value === null
}

function isUndefined(value) {
  return value === undefined
}

function isNumber(value) {
  return typeof value === 'number'
}

function isString(value) {
  return typeof value === 'string'
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

function isActivityValid(activity) {
  return isNotEmptyString(activity)
}
export function validateActivities(activities) {
  return activities.every(isActivityValid)
}
