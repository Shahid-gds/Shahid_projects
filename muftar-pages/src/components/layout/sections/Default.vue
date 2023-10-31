<template>
      <section class="flex">
        <div class="">
            <SideMenu />
        </div>
        
        <slot />
      </section>

  </template>
  
  <script setup>
   import SideMenu from '@/components/layout/SideMenu.vue'
  </script>