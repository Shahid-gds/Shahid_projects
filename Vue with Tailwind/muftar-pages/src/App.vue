<template>
  <component :is="layout">
   <router-view>
   </router-view>
  </component>
</template>

<script>
import Default from '@/components/layout/sections/Default.vue'
import navDefault from '@/components/layout/sections/navDefault.vue'
export default{
components:{
Default,
navDefault
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

<style>
* {
box-sizing: border-box;
}
html {
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
 Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

</style>
