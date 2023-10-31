<template>
    <div class="container mx-auto flex items-center justify-center lg:py-28 py-36 px-4 sm:px-6 lg:px-8 w-full">
      <div class="space-y-8 bg-slate-100 lg:p-20 p-8 rounded-xl shadow-xl lg:w-1/2 w-full">
        <div class="">
          <img class="mx-auto h-48 w-auto" src="../assets//images/MuftarChatbotLogo.svg" alt="Your Company" />
          <h2 class="mt-1 text-center text-xl font-bold tracking-tight uppercase text-[#3D5AA9]">Sign Up to muftar gpt</h2>
        </div>
        <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div class="space-y-5 rounded-md shadow-sm w-full">
           <div class="flex w-full sm:space-x-5 space-x-3">
            <div class="flex-1">
                <label for="first-name" class="sr-only">Frist Name</label>
                <input id="first-name" name="text" type="text" autocomplete="off" v-model="firstName" 
                  class="p-3 relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-0 ring-inset ring-gray-300 placeholder:text-gray-400"
                  placeholder="First Name"/>
              </div>
            <div class="flex-1">
                <label for="last-name" class="sr-only">Last Name</label>
                <input id="last-name" name="text" type="text" autocomplete="off" v-model="lastName"
                  class="p-3 relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-0 ring-inset ring-gray-300 placeholder:text-gray-400"
                  placeholder="Last Name"/>
              </div>
           </div>
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="off" v-model="email"
                class="p-3 relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-0 ring-inset ring-gray-300 placeholder:text-gray-400"
                placeholder="Email address"/>
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="off" v-model="password"
                class="p-3 relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 "
                placeholder="Password" />
            </div>
            <div class="text-lg text-[red]">
              {{ error }}
            </div>


          </div>
  
          <div>
           <!-- <div class="text-[#DC143C]">{{ error }}</div> -->
            <button
              class="group relative flex w-full justify-center rounded-md bg-[#3D5AA9] py-2 px-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
             Create Account
            </button>
            <div class="text-center mt-3 text-[#3D5AA9]  hover:text-indigo-500">
              <router-link :to="{'name' :'Login'}" >Back to Login</router-link>
            </div>
            <div class="flex justify-end mt-10 px-5">
              <div class="text-[#BEBEBE]">
                <h1>Mftar GPT 2.0 Version</h1>
            </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import {useRouter, useRoute} from 'vue-router'
import { ref } from 'vue'
  import useSignup from '../composables/useSignup'
  
  export default {
    setup() {
      const { error, signup } = useSignup()
  
      // refs
      const firstName = ref('')
      const lastName = ref('')
      const email = ref('')
      const password = ref('')
      const router = useRouter()
      const handleSubmit = async () => {
        await signup(firstName.value, lastName.value, email.value, password.value)
        if(!error.value){
        router.push({name: 'MuftarGPT'})
      }
      }
  
      return { firstName, lastName, email, password, handleSubmit, error }
    }
  }
  </script>
  


  <!-- <script>
  import {useRouter, useRoute} from 'vue-router'
  import { ref } from 'vue'
  import useLogin from '../composables/useLogin'
  
  export default {
  
    setup(props, context){
      const email = ref('')
      const password = ref('')
  
      const { error, login } = useLogin()
  
      const router = useRouter()
      
      const handleSubmit = async () => {
        await login(email.value, password.value)
        if(!error.value){
          router.push({name: 'MuftarGPT'})
        }
      }
      return { email, password, handleSubmit, error}
    }
    
  }
  
  </script> -->
  
  <!-- <script setup>
  
  
  import { useRouter, useRoute } from 'vue-router';
  import useLogin from '../composables/useLogin';
  
  const email = ref()
  const password = ref()
  
  const { error, login } = useLogin()
  
  const handleSubmit = async () => {
        await login(email.value, password.value)
        if(!error.value){
          console.log('User Loged In')
        }
      }
  return { email, password, handleSubmit }
  
  const router = useRouter()
  
  const login = () => {
    router.push({ name: 'Overview' })
  }
  
  </script> -->