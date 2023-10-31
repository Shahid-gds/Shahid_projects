<template>
  <LandingNav/>
  <Hero />
  <Testing />
  <Chain />
  <Footer />
</template>
<script setup>
import LandingNav from "@/components/landing/LandingNav.vue";
import Hero from "@/components/alpha-landing/Hero.vue";
import Chain from "@/components/alpha-landing/Chain.vue";
import Footer from "@/components/layout/sections/Footer.vue";
import Testing from "@/components/alpha-landing/Testing.vue";
import { onMounted, onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()


onBeforeMount(() => {
  router.push('/beta'); // Replace '/new-route' with the desired route
});
</script>

<style>
</style>
  