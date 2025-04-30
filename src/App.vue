<script setup lang="ts">
  import { Analytics } from '@vercel/analytics/vue';
</script>
<template>
  <Analytics />
  <router-view></router-view>
</template>
<style>
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
}

#app {
  height: 100%;
}
</style>