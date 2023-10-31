<template>
    <div>
        <NavBar />
    </div>
      <section>
        <slot />
      </section>
    <Footer/>
  </template>
  
  <script setup>
   import NavBar from '@/components/Layout/Navbar.vue'
  </script>
  