<template>
  <div>
    <Hero />
    <ServicesList/>

  </div>
</template>
<script>
import Hero from "@/components/services/Hero.vue";
import ServicesList from "@/components/services/ServicesList.vue";

export default {
  components: { Hero,  ServicesList},
};
</script>

<style>
</style>
