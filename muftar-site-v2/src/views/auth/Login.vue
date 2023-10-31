<template>       
    <div class="">
     <div class="custom-border-height absolute bottom-0">
     </div>
     <div class="container lg:flex mx-auto px-6 md:pb-56">
       <div class="lg:w-1/2 custom-border-height">
        <div class="mt-20">
         <!-- <div class="xl:ml-36">
           <img src="@/assets/img/muftarLogo.svg" alt="">
       </div> -->
       <div class="lg:mt-20 mt-10 mx-auto">
        <div class="lg:mt-20 mt-[10rem] xl:ml-40  lg:ml-[5rem]  md:w-[60%] w-[15rem] mx-auto px-6">
            <img src="@/assets/images/loginImg.svg" alt="" class="w-full">
        </div>
     </div>
        </div>
       </div>
       <div class="lg:w-1/2 lg:mt-28 md:mt-56 login-section">
        <form  action="">
          <div class="xl:ml-48 lg:ml-20 xl:w-[60%]">
            <div class="pb-5">
              <h1 class="sm:text-5xl text-2xl font-bold text-[#3C58A8]">Login</h1>
              <p class="text-[#666668]">Welcome back to Muftar</p>
            </div>
           <div class="">
            <div class="pb-3">
              <input class="border-2 w-full rounded-md p-2 px-4 outline-none" type="email" placeholder="Email" v-model="email">
            </div>
            <div class="relative mx-auto text-gray-600">
              <input class="border-2 w-full rounded-md p-2 px-4 outline-none"  placeholder="Password" :type="passwordVisible ? 'text' : 'password'" v-model="password">
              <div class="absolute right-0 top-0 mt-3 mr-2 cursor-pointer" @click="togglepasswordVisible">
                <svg v-if="passwordVisible" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="20" viewBox="0 0 25 16.093">
                  <defs>
                    <clipPath id="clip-path">
                      <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093" fill="#3D5AA9"/>
                    </clipPath>
                  </defs>
                  <g id="Group_60" data-name="Group 60" transform="translate(0 0)">
                    <g id="Group_59" data-name="Group 59" transform="translate(0 0)" clip-path="url(#clip-path)">
                      <path id="Path_185" data-name="Path 185" d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z" transform="translate(-147.939 -70.217)" fill="#3D5AA9"/>
                      <path id="Path_186" data-name="Path 186" d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874" transform="translate(0)" fill="#3D5AA9"/>
                    </g>
                  </g>
                </svg>
                <svg v-if="!passwordVisible" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="19.509" viewBox="0 0 25 19.509">
                  <defs>
                    <clipPath id="clip-path">
                      <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093" fill="#3D5AA9"/>
                    </clipPath>
                  </defs>
                  <g id="Group_1719" data-name="Group 1719" transform="translate(-451.156 -19.661)">
                    <g id="Group_60" data-name="Group 60" transform="translate(451.156 21.804)">
                      <g id="Group_59" data-name="Group 59" transform="translate(0 0)" clip-path="url(#clip-path)">
                        <path id="Path_185" data-name="Path 185" d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z" transform="translate(-147.939 -70.217)" fill="#3D5AA9"/>
                        <path id="Path_186" data-name="Path 186" d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874" transform="translate(0)" fill="#3D5AA9"/>
                      </g>
                    </g>
                    <path id="Path_14789" data-name="Path 14789" d="M3.71,2.673,22.259,20.749" transform="translate(450.5 17.705)" fill="none" stroke="#3D5AA9" stroke-width="2"/>
                  </g>
                </svg>
                                  
              </div>
          </div>
          <div class="text-lg text-[red] mt-3">
            {{ error }}
          </div>
           </div>
         </div>
         <div class="flex justify-center">
          <button @click.prevent="loginUser()" v-if="!processing" class="login bg-[#3C58A8] text-[white] mt-3 text-center px-10 p-2 rounded-md text-xl">
            Login 
           </button>
           <div class="italic text-[#3C58A8] mt-3 text-center px-10 border-2 p-2 rounded-md border-[#3C58A8]"  v-if="processing" >Please Wait...</div>
         </div>
         <!-- <div class="text-[red]">
          {{ getLoggedUserData }}
         </div> -->
         <!-- <div v-else class="italic text-gray-400">
           Please wait
         </div> -->
         <!-- <div class="flex items-center space-x-2 mt-10">
           <div class="w-full border-b-2"></div>
           <span class="">OR</span>
           <div class="w-full border-b-2"></div>
         </div> -->
         <div class="mt-8 flex justify-center border-t-2 py-5 border-b-2 space-x-1">
           <p>Don't you have an account?</p>
           <a href="/register" class="text-[#15A2FF]">
             Register
           </a>
         </div>
         </form>
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
import {firebase} from '@/_firebase/init.js'
import store from '@/_store/store';


const router = useRouter();
const loading = ref(false);
// const email = ref('');
// const password = ref('');
const mc = ref('');
const err_msg = ref('');
const passwordVisible = ref(false)
const processing = ref(false)

const togglepasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
}

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
  email: email.value
});
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://ecostructure-demo.muftar.com/login',
  headers: { 
    userID: userID, 
    'Content-Type': 'application/json'
  },
  data : data
};
  axios.request(config)
    .then((res) => {
      const user_id = res.data.data._id;
      localStorage.setItem('user_id:', user_id)
      localStorage.setItem('userID', userID);
      // store.SET_USERDATA(res.data.result.user); // Use store mutation
      // store.getUserId(res.data.result.userID); // Use store action
      router.replace('/account');
      loading.value = false;
    })
    .catch((err) => {
      console.log('Login error:', err);
      err_msg.value = err.message;
    });
};

</script>

<style scoped>
/* Set the background image */
/*.container-div {
 background-image: url('../../assets/img/loginBg.svg');
 height: 99vh;
 background-size: cover;
 background-position: center center;
 background-repeat: no-repeat;
}*/
.custom-border-height {
 border-right-width: 10px;
 border-right-style: solid;
 border-right-color: #3C58A8;
 height: 22rem;
}

@media only screen and (max-width: 1024px) {
 .custom-border-height {
   border-right-color: white;
   z-index: -999;
 }
 h1{
   text-align: center;
 }
 p{
   text-align: center;
 }

}
</style>