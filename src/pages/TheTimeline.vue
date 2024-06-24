<script setup>
import TimelineItem from '@/components/TimelineItem.vue'
defineProps({
  timelineItems: {
    required: true,
    type: Array
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
