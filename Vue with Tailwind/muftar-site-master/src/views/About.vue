<template>
  <div>
    <Hero />
    <!-- <Partners/> -->
    <OurSolutions />
    <Footer />
  </div>
</template>
<script>
import Hero from "@/components/about/Hero.vue";
// import Partners from "@/components/about/Partners.vue";
import OurSolutions from '@/components/about/OurSolutions.vue'
export default {
  components: { Hero, OurSolutions},
};
</script>

<style>
</style>
