import { PAGE_TIMELINE, PAGE_PROGRESS, PAGE_ACTIVITIES } from "./constants"

export function normalizePageHash() {
  const hash = window.location.hash.slice(1)
  if (Object.keys([PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE]).includes(hash)) {
    return hash
  }
  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}
