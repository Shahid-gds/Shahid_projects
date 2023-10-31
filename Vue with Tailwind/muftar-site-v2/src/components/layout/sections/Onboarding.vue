<template>
   <div class="lg:flex w-full">
    <div class="">
        <newHeader />
    </div>
      <section class="w-full">
        <slot />
        <div class="2xl:mt-12 w-full">
            <newFooter/>
        </div>
      </section>
   </div>
  </template>
  
  <script setup>
   import newHeader from '@/components/layout/newHeader.vue'
   import newFooter from '@/components/layout/newFooter.vue'
  </script>