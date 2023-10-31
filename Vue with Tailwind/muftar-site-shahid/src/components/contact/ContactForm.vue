<template>
  <div  style="background:#34487D">
    <div class="flex justify-around items-center pt-24 flex-wrap pl-5 pr-5">
      <div class="flex flex-col bg-white p-10 mb-20">
        <div class="flex items-center mb-14 addresBorder">
        <div><img class="mr-5" src="@/assets/icons/contact/address.png" alt=""></div>
        <div>
          <h1 class="text-2xl p-2">Address</h1>
          <p class="p-2">2133 Lawrenceville-Suwanee Rd, Suite 12-431, <br> Suwanee, GA 30024</p>
        </div>
      </div>
      </div>
      <div class="relative pb-10" v-if="!processing">
        <div class="flex flex-col flex-wrap">
          <h1 class="text-2xl text-white ml-5 font-bold">SEND US A MESSAGE</h1>
          <p class="mt-10 mb-10 ml-5 text-white">For general questions about Muftar, fill out the form below and we will <br> reach back out to you as soon as possible:</p>
        </div>
        <p class="text-white font-bold">{{feedback}}</p>
        <div class="flex justify-around mb-10 flex-wrap">
          <input class="p-5 border-2 border-white mb-10 text-white" type="text" placeholder="Name" v-model="name">
          <input class="p-5 border-2 border-white mb-10 text-white" type="text" placeholder="Email" v-model="email">
        </div>
        <div class="flex justify-around flex-wrap">
          <input class="p-5 border-2 border-white mb-10 text-white" type="text" placeholder="Phone" v-model="phone">
          <input class="p-5 border-2 border-white mb-10 text-white" type="text" placeholder="Topic" v-model="topic">
        </div>
        <div class="flex justify-center ml-6 flex-wrap">
          <textarea class="p-5 mt-10 rounded-lg text-white border-2 border-white bg-transparent" style="width:100%;" placeholder="Message" v-model="message"></textarea>
        </div>
        <div class="flex ml-6 flex-wrap">
          <a class="submitColor w-40 mt-10 p-4 md:flex items-center justify-center text-black md:px-5 py-1 glassmorph-nav text-center cursor-pointer" @click="sendContact()">Submit</a>
        </div>
      </div>
      <div v-else>
        <p class="italic">Please Wait...</p>
      </div>
    </div>
    <div class="flex justify-center p-10">
      <img src="@/assets/backgrounds/contact/map.png" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ContactForm",
  data(){
    return{
      processing: false,
      feedback: '',
      name:'',
      email:'',
      phone: '',
      topic:'',
      message: ''
    }
  },
  methods:{
    sendContact(){
      this.processing = true
      const payload = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        topic: this.topic,
        message:this.message
      }
      axios.post('https://muftardigital.pythonanywhere.com/contact', payload
      ).then((res)=>{
        this.processing = false
        this.feedback = res.data.feedback
        console.log(res.data)
        this.processing = false
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
};
</script>

<style scoped>
.submitColor{
  background: #ffffff;
}
.addresBorder{
  position: relative;
}
.addresBorder::after{
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, #ffffff, #5D8AC7, #ffffff);
  border-radius: 35px;
  width: 100%;
  height: 5px;
  bottom: 0;
  left: 0;
}
.callnow {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.career-overlay {
  background: rgba(0, 0, 0, 0.4);
}
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: rgb(255, 255, 255);
}
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
.applyForm {
  width: 100%;
  min-height: 60vh;
  overflow: hidden;
  position: relative;
  /* Set a specific height */
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (max-width: 900px) {
  .contactSecond {
    flex-direction: column !important;
  }
}
</style>
