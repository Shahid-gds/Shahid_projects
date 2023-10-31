<template>
    <div class="">
        <Header />
    </div>
      <section class="mt-20">
        <slot />
      </section>
    <Footer/>
  </template>
  
  <script setup>
   import Header from '@/components/layout/Header.vue'
   import Footer from '@/components/layout/Footer.vue'
  </script>