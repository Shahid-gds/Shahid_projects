<template>
  <landingNav/>
  <Home />
  <Footer/>
  </template>
  <script>
  import landingNav from "@/components/landing/landingNav.vue";
  import Home from "@/components/landing/Home.vue";
  import Footer from "@/components/layout/sections/Footer.vue";
  export default {
    components: {
      landingNav, 
      Home,
      Footer
    },
  };
  </script>
  
  <style>
  </style>
  