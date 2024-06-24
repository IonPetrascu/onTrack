<script setup>
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
</script>

<template>
  <TheHeader />
  <main class="flex-grow"></main>
  <TheNav :items="navItems" />
</template>

<style scoped></style>
