<script setup>
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL } from '../constants'
import { isButtonTypeValid } from '../validators'
defineProps({
  type: {
    default: BUTTON_TYPE_NEUTRAL,
    type: String,
    validator: isButtonTypeValid
  }
})

const typeClasses = {
  [BUTTON_TYPE_DANGER]: 'bg-gray-100 enabled:hover:bg-gray-200 text-white',
  [BUTTON_TYPE_NEUTRAL]: 'bg-red-500 enabled:hover:bg-red-600 '
}
</script>

<template>
  <button
    :class="`${typeClasses[type]}rounded p-3 disabled:cursor-not-allowed disabled:opacity-50`"
  >
    <slot></slot>
  </button>
</template>
