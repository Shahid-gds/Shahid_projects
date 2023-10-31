<template>
  <div class="ShareModal">
    <div class="modal-overlay" @click="hideModal()"></div>
    <div class="modal-body">
      <h1 class="text-3xl font-bold">Invite</h1>
      <p>Invite a user who needs access to this load</p>
      <p class="my-3 text-red-500">{{feedback}}</p>
      <DefaultDropdown @setOption="setOption" :options="options"/>
      <div class="input-group flex border w-9/12 justify-between mt-4">
        <input class="input-email" type="email" placeholder="sample@exmaple.com" v-model="email" />
        <button class="bg-blue-400 text-white p-2 rounded" @click="validate">Invite User</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
import DefaultDropdown from '@/components/snippets/DefaultDropdown.vue'
  export default{
    components:{
      DefaultDropdown
    },
    props:['load_id'],
    name: 'ShareModal',
    data(){
      return{
        feedback: '',
        selected_option: '',
        email: '',
        options: ['shipper_receiver', 'shipper_facility', 'driver', 'carrier', 'broker']
      }
    },
    methods:{
      validate(){
        if(this.email == '' || this.selected_option == ''){
          this.feedback = 'You must enter an email and role'
        }else{
          this.sendInvite()
        }
      },
      sendInvite(){

        const payload ={
          invitee: this.email,
          inviter: this.userdata.email,
          role: this.selected_option,
          loadID: this.load_id
        }
        axios.post("https://muftardigital.pythonanywhere.com/rapid/invite", payload
        ).then((res)=>{
          console.log(res.data)
          this.feedback = res.data.feedback
        }).catch((err)=>{
          console.log(err)
        })
      },
      setOption(val){
        this.selected_option = val
      },
      hideModal(){
        this.$emit('hideModal', false)
      },
    },
    computed:{
      ...mapState(['userdata'])
    }
  }
</script>
<style scoped>
#ShareModal{
  position: fixed;
  top:0;
  left:0;
  z-index: 50;
  width: 100%;
  height: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow: hidden;
  transition:1s;
}
.modal-overlay{
  position: absolute;
  z-index: 51;
  top: 0;
  left: 0;
  background-color: #222;
  cursor:pointer;
  width: 100%;
  height: 100%;
  opacity: .7;
}
.modal-body{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding: 1rem 2rem;
  width: 80%;
  min-height: 40vh;
  margin: auto;
  border-radius: 12px;
  background-color: #fff;
  z-index: 52;
  overflow: auto;
  transition:1s;
}
.input-group input{
  width: 90%;
}
.input-group button{
  width: 8rem;
}
</style>
