<script setup>
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../constants'
import { isPageValid } from '../validators'

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid
  }
})

const emit = defineEmits({
  navigate: isPageValid
})
</script>
<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-between">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        @click="emit('navigate', page)"
        :href="`#${page}`"
        :key="page"
        :class="{ 'pointer-events-none bg-gray-200': page === currentPage }"
      >
        <component :is="icon" class="h-6 w-6" />

        {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
