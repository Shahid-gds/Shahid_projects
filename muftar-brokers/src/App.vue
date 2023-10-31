<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script>
import Default from './components/Layout/sections/Default.vue'
export default{
  components:{
   Default
  },
  data(){
    return{
    }
  },

  computed: {
    layout () {
      console.log(this.$route.meta.layout)
      return (this.$route.meta.layout || 'div')
    }
  },
}
</script>
<style scoped>
</style>
