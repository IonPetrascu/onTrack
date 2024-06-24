<script>
export default {
  inheritAttrs: false
}
</script>
<template>
  <li>
    <a v-bind="$attrs" class="flex flex-col items-center p-2 text-xs capitalize">
      <slot></slot>
      ></a
    >
  </li>
</template>
<style scoped></style>
