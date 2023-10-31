<template>
    <div>
      <Header />
       <router-view></router-view>
  </div>
  <div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<style>
/* html,
body{
  overflow: hidden;
} */
* {
  box-sizing: border-box;
}
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

</style>
