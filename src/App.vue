<script setup>
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import { generateTimelineItem, normalizePageHash, generateActivitySelectOptions } from './functions'
import { ref } from 'vue'
import TheNav from './components/TheNav.vue'
import TheHeader from './components/TheHeader.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'

const currentPage = ref(normalizePageHash())
const timelineItems = generateTimelineItem()

const activities = ['Coding', 'Reading', 'Training']

const activitySelectoptions = generateActivitySelectOptions(activities)

function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @navigate="(page) => goTo(page)" />
  <main class="flex-grow">
    <div v-show="currentPage === PAGE_TIMELINE">
      <TheTimeline
        :activity-select-options="activitySelectoptions"
        :timeline-items="timelineItems"
      />
    </div>
    <div v-show="currentPage === PAGE_ACTIVITIES">
      <TheActivities :activities="activities" />
    </div>
    <div v-show="currentPage === PAGE_PROGRESS">
      <TheProgress />
    </div>
  </main>
  <TheNav @navigate="(page) => goTo(page)" :current-page="currentPage" />
</template>

<style scoped></style>
