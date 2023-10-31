<template>
    <div class="bg-[url('@/assets/images/bg.svg')] bg-cover h-screen flex justify-center items-center text-center">
            <div>
                <div class="w-[350px]">
                  <div class="flex">
                    <div class="w-36">
                    </div>
                    <div class="logo-image">
                        <img src="@/assets/images/logo.svg" alt="Login Logo" />
                    </div>
                    <div class="w-36">
                    </div>
                  </div>
                  <p class="text-[black] font-semibold uppercase">Welcome to Muftar Portals</p>
                  <h1 class="text-[#3C5AA8] text-4xl font-bold uppercase">Login</h1>
                                       
                    <div class="flex flex-col space-y-5 mt-5">
                        <form class="flex flex-col space-y-5 mt-5">
                                <div class="flex flex-row space-x-2 rounded-md bg-white py-1 px-2 border">
                                <input
                                    class="w-full p-2 border-none outline-none focus:ring-0 bg-transparent text-[#ACACAC] placeholder:text-[#ACACAC] text-[17px]"
                                    placeholder="Muftar ID or Email" type="text" v-model="email">
                            </div>
                            <div class="flex flex-row space-x-2 rounded-md bg-white py-1 px-2 border">
                                <input
                                    class="w-full p-2 border-none outline-none focus:ring-0 bg-transparent text-[#ACACAC] placeholder:text-[#ACACAC] text-[17px]"
                                    placeholder="Password" type="password" v-model="password">
                            </div>

                            <div class="flex justify-between">
                                <div class="flex">

                                    <input
                                        class="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox">
                                    <label class="text-[#838383] text-[17px] font-[500]">
                                        Remember Me
                                    </label>
                                </div>
                                <div>
                                    <router-link to="" class="text-[#838383] text-[17px] font-[500]">
                                        Forget Password ?
                                    </router-link>
                                </div>
                            </div>
                    <div>
                      <div class="text-lg text-[red] pb-3">
                        {{ error }}
                      </div>
                    <button  type="submit" @click.prevent="loginUser" v-if="!processing"
                        class="btn-color rounded-md flex justify-center py-3 text-xl space-x-4 text-white uppercase w-full">
                        <p>Login</p>
                    </button>
                    <div class="italic text-[#3C58A8] mt-3 text-center px-10 border-2 p-2 rounded-md border-[#3C58A8]"  v-if="processing" >Please Wait...</div>
                       </div>
                       <!-- <div class="text-[#3C59A8]">
                        <a href="/register">Don't Have An Account?</a>
                       </div> -->
                        </form>

                    </div>
                    <p class="text-sm text-center  my-5" style="color: #ACACAC">
                        Copyright © 2023 <span class="font-bold">Muftar</span>. All Rights Reserved.
                    </p>
                </div>
            </div>
    </div>
</template>
<script setup>

// import { useRouter, useRoute } from 'vue-router'
// import { ref } from 'vue'
import useLogin from '@/composables/useLogin'

const email = ref('')
const password = ref('')

const { error, login } = useLogin()

// const router = useRouter()

// const handleSubmit = async () => {
//   await login(email.value, password.value)
//   if (!error.value) {
//     router.push({ name: '' })
//   }
// }

import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);
// const email = ref('');
// const password = ref('');
const mc = ref('');
const err_msg = ref('');
const passwordVisible = ref(false)
const processing = ref(false)

// const togglepasswordVisible = () => {
//   passwordVisible.value = !passwordVisible.value
// }
const baseUrl = 'http://192.168.18.62:3000'
// const baseUrl = 'https://ecostructure-demo.muftar.com'
const loginUser = () => {
  processing.value = true;
  setTimeout(() => {
    console.log('email', email.value);
    login(email.value, password.value)
      .then((res) => {
        console.log('Login response:', res);

        if (res && res.user) {
          getLoggedUserData(res.user.uid);
        } else {
          console.error('Invalid response structure. Missing user property.');
        }
      })
      .finally(() => {
        processing.value = false;
      });
  }, 2000);
};

const getLoggedUserData = (userID) => {
  console.log(userID);
  console.log('logging in user by email');
let data = JSON.stringify({
  email: email.value,
});
let config = {
  method: 'post',
  url: `${baseUrl}/login`,
  headers: { 
    userID: userID, 
    'Content-Type': 'application/json'
  },
  data : data
};
  axios.request(config)
    .then((res) => {
      const user_id = res.data.data._id;
      localStorage.setItem('Broker ID:', user_id)
      router.replace('/home');
      loading.value = false;
    })
    .catch((err) => {
      console.log('Login error:', err);
      err_msg.value = err.message;
    });
};

</script>
<style scoped>
h1 {
    font-family: 'Avenir', sans-serif;
}
.btn-color {
    background: linear-gradient(to top, #3C59A8 0%, #1E2D54 100%);
}
</style>