<template>
    <div id="AdminRemote" :class="{'collaspe': showRemote == false}">
      <div class="flex justify-between items-center">
        <section class="text-center mx-auto">
          <div class="text-center mx-auto">
            <h1 class="text-xl text-center w-full">Admin Remote</h1>
            <p class="text-red-300 text-sm text-center" @click="toggleRemote(false)" v-if="showRemote">Press to Close</p>
            <p class="text-sm text-center" v-if="showRemote">( click to simulate an action)</p>
          </div>
  
          <div class="" v-if="showRemote">
            <hr />
            <button @click="createRandomLoad()" class="text-blue-600">Create Random Load</button>
          </div>
        </section>
        <button v-if="showRemote == false"
        class="bg-green-600 p-3 text-lg text-white" @click="toggleRemote(true)">+</button>
      </div>
  
    </div>
  </template>
  <script>
  import axios from 'axios'
  // import CreateLoad from'@/components/layout/remote-sections/CreateLoad.vue'
  export default {
    name: 'AdminRemote',
    props: {
    },
    data(){
      return {
        // processing: false,
        showRemote: false,
      }
    },
    methods:{
      toggleRemote(bool){
        this.showRemote = bool
        console.log(bool)
      },
      createRandomLoad(){
        this.toggleRemote(false)
        axios.get(this.$api_path + "/faker/create_load",).then((res)=>{
          console.log(res.data)
        this.toggleRemote(true)
        }).catch((err)=>{
          console.log(err)
          this.toggleRemote(true)
        })
      }
    }
  };
  </script>
  <style scoped>
  #AdminRemote{
    width: 20rem;
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 0;
    height: 50rem;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 5px;
    z-index: 12;
    margin: .5rem;
    box-shadow: 17px 17px 33px -19px rgba(0,0,0,0.75);
    -webkit-box-shadow: 17px 17px 33px -19px rgba(0,0,0,0.75);
    -moz-box-shadow: 17px 17px 33px -19px rgba(0,0,0,0.75);
  }
  .collaspe{
    height: auto !important;
    padding: 0;
    margin: 0;
  }
  .collaspe h1{
    padding: 0;
    margin: .5rem  1rem;
    text-align: left !important;
  }
  .collaspe p{
    padding: 0;
    margin: 0;
    text-align: left;
  }
  </style>
  