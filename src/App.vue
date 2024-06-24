<script setup>
import { ref } from 'vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import TheNav from './components/TheNav.vue'
import TheHeader from './components/TheHeader.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'

const currentPage = ref(normalizePageHash())

function normalizePageHash() {
  const hash = window.location.hash.slice(1)
  if (Object.keys([PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE]).includes(hash)) {
    return hash
  }
  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @go-to-progress="goTo(PAGE_PROGRESS)" @go-to-timeline="goTo(PAGE_TIMELINE)" />
  <main class="flex-grow">
    <div v-show="currentPage === PAGE_TIMELINE"><TheTimeline /></div>
    <div v-show="currentPage === PAGE_ACTIVITIES"><TheActivities /></div>
    <div v-show="currentPage === PAGE_PROGRESS"><TheProgress /></div>
  </main>
  <TheNav @navigate="(page) => goTo(page)" :current-page="currentPage" />
</template>

<style scoped></style>
