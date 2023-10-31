<template>
<div class="timeline">
  <div class="line">
    <div class="bar" :style="barStyles"></div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Timeline',
  props:['stepNumber', 'max'],
  data(){
    return{
      barStyles: {
        'width': '20%',
      }
    }
  },
  watch:{
    stepNumber(nv,ov){
      this.getTimepoint()
      console.log(`${nv} | ${ov}`)
    }
  },
  methods:{
    getTimepoint(){
      let calNum = 0
      if(this.stepNumber == this.max){
        calNum = 100
      }else{
        calNum = (this.stepNumber * (100/Number(this.max) ))
      }
      this.barStyles['width'] = `${calNum}%`
    }
  },
  created(){
    this.getTimepoint()
  }
}
</script>
<style scoped>
.timeline{
  width: 100%;
  margin: 0 ;
}
.line{
  width: 100%;
  height: 10px;
  border-radius: 20px;
  background-color: #BCBCBC;
  position:relative;
}
.bar{
  background: rgb(178,83,239);
  background: -moz-linear-gradient(90deg, rgba(178,83,239,1) 0%, rgba(87,61,244,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(178,83,239,1) 0%, rgba(87,61,244,1) 100%);
  background: linear-gradient(90deg, rgba(178,83,239,1) 0%, rgba(87,61,244,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#b253ef",endColorstr="#573df4",GradientType=1);
  height: 100%;
  border-radius: 20px ;
  transition:1s;
}
.on-slide{
  color: #0F4690;
  font-weight: bold;
  transition:1s;
}
.step-menu{
  width: 100%;
  display:flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
}
.step-menu span{
  margin: 0 1rem;
  text-transform: uppercase;
  transition:1s;
}
@media only screen and (max-width: 600px) {
  .step-menu span{
    font-size: .5rem;
  }

}
</style>
