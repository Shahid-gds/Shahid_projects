<template>
  <div class="container mx-auto flex items-center justify-center lg:py-40 py-36 px-4 sm:px-6 lg:px-8 w-full">
    <div class="space-y-8 bg-slate-100 lg:p-20 p-8 rounded-xl shadow-xl lg:w-1/2 w-full">
      <div class="">
        <img class="mx-auto h-36 w-auto" src="../assets/images/chatwhitelogo.svg" alt="Your Company" />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-[#3D5AA9] uppercase">Login to Muftar GPT</h2>
      </div>
      <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div class="space-y-5 rounded-md shadow-sm w-full">
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
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-[#3D5AA9] focus:ring-[#3D5AA9]" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-[#3D5AA9] hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div>

        <div>
         <!-- <div class="text-[#DC143C]">{{ error }}</div> -->
          <button
            class="group relative flex w-full justify-center rounded-md bg-[#3D5AA9] py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <!-- <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <img src="src/assets/icons/lock.svg" class="w-10"/>
              </span> -->
            Log in
          </button>
          <div class="text-center mt-2 text-[#3D5AA9]  hover:text-indigo-500">
            <router-link :to="{'name' :'Register'}" >Don't Have an Account</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue'
export default {
    setup(){
        //refs
        const email = ref('')
        const password = ref('')

        const handleSubmit = () => {
            console.log(email.value, password.value)
        }

        return { email, password, handleSubmit }
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