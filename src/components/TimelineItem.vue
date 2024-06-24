<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps(['timelineItem'])

const hourLinkClasses = [
  'text absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono',
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
]

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' }
]
</script>
<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <a :class="hourLinkClasses" href="#"> {{ timelineItem.hour }}:00 </a>
    <div class="flex gap-2">
      <button
        class="rounded bg-gray-100 p-3 enabled:hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <XMarkIcon class="h-8" />
      </button>
      <select class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl" name="" id="">
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ label }}
        </option>
      </select>
    </div>
  </li>
</template>
<style scoped></style>
