<template>
  <div class="sign-grid">
    <div class="flex flex-col">
      <div class="input-group">
        <input class="w-full" type="text" placeholder="Signature" v-model="sig1"/>
      </div>
      <div class="sign-line"></div>
      <p>Party 1</p>
    </div>
    <div class="flex flex-col">
      <div class="input-group">
        <input class="w-full" type="text" placeholder="Date"/>
      </div>
      <div class="sign-line"></div>
      <p>Date</p>
    </div>
    <div class="flex flex-col">
      <div class="input-group">
        <input class="w-full" type="text" placeholder="Signature" v-model="sig2"/>
      </div>
      <div class="sign-line"></div>
      <p>Party 2</p>
    </div>
    <div class="flex flex-col">
      <div class="input-group">
        <input class="w-full" type="text" placeholder="Date" />
      </div>
      <div class="sign-line"></div>
      <p>Date</p>
    </div>
  </div>
</template>
<script>
export default{
  name: 'BolDisclaimer',
  data(){
    return{
      sig1: '',
      sig2: ''
    }
  }
}
</script>
<style>
.sign-grid{
  display: grid;
  grid-template-columns: 5fr 1fr 5fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
}
.sign-line{
  border-bottom: 3px solid #000;
  margin: .4rem 0;
}
.input-group{
  border: 3px solid #dfdfdf;
  border-radius: 3px;
}
</style>
