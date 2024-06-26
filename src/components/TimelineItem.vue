<script setup>
import BaseSelect from './BaseSelect.vue'
import { isTimelineItemValid } from '../validators'
import { ref } from 'vue'
import TimelineHours from './TimelineOur.vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  },
  activitySelectOptions: {
    required: true,
    type: Array
  }
})

const selectedActivityId = ref(0)
</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHours :hour="timelineItem.hour" />
    <BaseSelect
      @select="selectedActivityId = $event"
      :selected="selectedActivityId"
      :options="activitySelectOptions"
      placeholder="Rest"
    />
  </li>
</template>
<style scoped></style>
