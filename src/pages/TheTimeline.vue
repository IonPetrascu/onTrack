<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
import { validateTimelineItems, validateSelectOptions } from '@/validators'

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})
</script>
<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activity-select-options="activitySelectOptions"
        v-for="timelineItem in timelineItems"
      >
      </TimelineItem>
    </ul>
  </div>
</template>
<style scoped></style>
