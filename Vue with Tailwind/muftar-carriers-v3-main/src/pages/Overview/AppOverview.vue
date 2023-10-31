<template>
  <div class="h-screen flex flex-col justify-between">
    <Map />
    <LoadTabs />
  </div>
</template>

<script setup>
import Map from '@/components/Overview/Map.vue'
import LoadTabs from '@/components/Loads/LoadTabs.vue'
</script>