<script setup>
import { IsHourValid } from '@/validators'

const props = defineProps({
  hour: {
    required: true,
    type: Number,
    validator: IsHourValid
  }
})

const classes = [
  'text absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono',
  props.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
]

const formattedHour = `${props.hour.toString().padStart(2, 0)}`
</script>
<template>
  <a :class="classes" href="#"> {{ formattedHour }}:00 </a>
</template>
