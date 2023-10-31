<template>
  <Nav2 />
    <section>
      <slot />
    </section>
  <Footer/>
</template>

<script setup>
  import Nav2 from '@/components/layout/sections/Nav2.vue'
  import Footer from '@/components/layout/sections/Footer.vue'

</script>
