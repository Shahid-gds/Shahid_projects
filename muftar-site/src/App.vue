<template>
  <div id="app">
  <component :is="layout">
    <router-view :nonMobile="nonMobile"/>
  </component>
</div>
</template>
<script>
const noLayout = 'no-layout'
import NoLayout from '@/components/layout/NoLayout.vue'
import Default from '@/components/layout/Default.vue'

export default{
  components:{
    Default,
    NoLayout
  },
  data(){
    return{
      nonMobile: false,
      window:{},
      root:{style:{}},
      dark: false,
    }
  },
  methods:{
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
  watch:{
    window:{
      handler(nv){
        if(nv.width > 900){
          this.nonMobile = true
          // console.log(nv.width)
        }else{
          this.nonMobile = false
        }
      },
      deep: true
    },
  },
  computed: {
    layout () {
      console.log(this.$route.meta.layout)
      return (this.$route.meta.layout || noLayout)
    }
  },
  created() {
    this.window = {
      'width': window.innerWidth,
      'height': window.innerHeight
    }
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Altis", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
:root{
  --secondary: #175F7C;
}
.bg-secondary{
  background: var(--secondary);
}
.bg-theme{  background-color: #274694;}
.text-theme{  color: #274694;}
.overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(0,0,0);
  background: -moz-radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%);
  background: -webkit-radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%);
  background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
  top: 0;
  opacity: 70%;
  z-index: 0;
}
.glassmorph-nav {
  background: #5D8AC7;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.glassmorph{
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 3.5px );
  -webkit-backdrop-filter: blur( 3.5px );
  border-radius: 5px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>
