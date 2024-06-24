<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { isTimelineItemValid } from '@/validators'

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator(timelineItems) {
      return timelineItems.every(isTimelineItemValid)
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
