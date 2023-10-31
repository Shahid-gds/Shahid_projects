<template>
    <div class="lg:flex w-full">
     <div class="">
         <newHeader />
     </div>
       <section class="w-full">
         <slot />
       </section>
    </div>
   </template>
   
   <script setup>
    import newHeader from '@/components/layout/newHeader.vue'
   </script>