<template>
  <div class="nav">
  <LandingNav/>
  </div>

  <div class="mt-20 w-10/12 mx-auto">
    <h1 class="text-xl">IF YOU ARE SEEING THIS QR CODE IS WORKING AND WILL POINT TO: 
      <span class="text-blue-400 text-bold">{{text_to}}</span>
    </h1>
    <h2 class="text-3xl">{{ route.query.promo }}</h2>
    <h2 class="text-3xl">{{ route.query.ref }}</h2>
  </div>
  <!-- <Footer /> -->
</template>
<script setup>
import LandingNav from "@/components/landing/LandingNav.vue";
// import Footer from "@/components/layout/sections/Footer.vue";
import { onMounted, onBeforeMount, ref } from "vue";
// import Partners from "@/components/about/Partners.vue";
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const text_to = ref('')
console.log(route.query)

onBeforeMount(() => {
      const promoCode = 'mats2023';
      const queryParam = router.currentRoute.value.query.promo;

      if (queryParam === promoCode) {
        router.push('/beta'); // Replace '/new-route' with the desired route
      }
    });

onMounted(() => {
  if(route.query.ref == 'xa3'){
    text_to.value = 'Landing Page'
  }
})
</script>

<style scoped>
.nav{
  background-color: #3A59A7;
  padding: 3rem 1rem;
}
</style>
