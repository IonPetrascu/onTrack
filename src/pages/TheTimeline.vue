<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { HOURS_IN_DAY } from '@/constants'

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator(timelineItems) {
      return timelineItems.every(
        ({ hour }) => typeof hour === 'number' && hour >= 0 && hour < HOURS_IN_DAY
      )
    }
  }
})
</script>
<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        v-for="timelineItem in timelineItems"
      >
      </TimelineItem>
    </ul>
  </div>
</template>
<style scoped></style>
