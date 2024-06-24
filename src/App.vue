<script setup>
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import { ref } from 'vue'
import TheNav from './components/TheNav.vue'
import TheHeader from './components/TheHeader.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import { normalizePageHash } from './functions'

const currentPage = ref(normalizePageHash())

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
