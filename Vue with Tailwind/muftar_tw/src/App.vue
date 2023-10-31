<template>
  <Header/>
  <div>
    <router-view></router-view>
  </div>
 
</template>

<script>
import Header from './components/layout/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

