<script setup>
import { generateTimelineItem } from '@/functions'
const timelineItems = generateTimelineItem()
</script>
<template>
  <div class="mt-7">
    <ul>
      <li
        class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10"
        :key="hour"
        v-for="{ hour } in timelineItems"
      >
        <a
          class="text absolute -top-4 left-1/2 -translate-x-1/2 rounded bg-gray-100 px-2 font-mono text-gray-500"
          href="#"
        >
          {{ hour }}:00</a
        >
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
