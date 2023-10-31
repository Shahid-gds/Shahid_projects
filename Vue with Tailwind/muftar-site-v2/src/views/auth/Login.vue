<template>
  <div class="w-full sm:mt-[10%] flex justify-center pb-20">
    <div class="2xl:w-1/2 w-full md:px-20 px-10">
      <div class="pb-5 w-full lg:block hidden">
        <h1 class="sm:text-[24px] text-2xl font-bold">Login</h1>
      </div>
      <div class="pb-5 w-full lg:hidden">
        <h1 class="sm:text-[24px] text-2xl font-bold">Login</h1>
        <p class="text-[#75788D]">It is quick and easy to log in. Enter your email and password below.</p>
      </div>
      <form class="sm:mt-24" action="">
        <div class="w-full">
          <div class="pb-3 w-full">
            <input class="border-2 w-full rounded-md p-4 px-4 outline-none" :class="{ 'border-red-500': error }"
              type="email" placeholder="Email" v-model="email">
          </div>
          <div class="relative mx-auto text-gray-600 w-full">
            <input class="border-2 w-full rounded-md p-4 px-4 outline-none" :class="{ 'border-red-500': error }"
              placeholder="Password" :type="passwordVisible ? 'text' : 'password'" v-model="password">
            <div class="absolute right-0 top-0 mt-5 mr-2 cursor-pointer" @click="togglepasswordVisible">
              <svg v-if="passwordVisible" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                width="25" height="20" viewBox="0 0 25 16.093">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093" fill="#3D5AA9" />
                  </clipPath>
                </defs>
                <g id="Group_60" data-name="Group 60" transform="translate(0 0)">
                  <g id="Group_59" data-name="Group 59" transform="translate(0 0)" clip-path="url(#clip-path)">
                    <path id="Path_185" data-name="Path 185"
                      d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z"
                      transform="translate(-147.939 -70.217)" fill="#3D5AA9" />
                    <path id="Path_186" data-name="Path 186"
                      d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874"
                      transform="translate(0)" fill="#3D5AA9" />
                  </g>
                </g>
              </svg>
              <svg v-if="!passwordVisible" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                width="25" height="19.509" viewBox="0 0 25 19.509">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093" fill="#3D5AA9" />
                  </clipPath>
                </defs>
                <g id="Group_1719" data-name="Group 1719" transform="translate(-451.156 -19.661)">
                  <g id="Group_60" data-name="Group 60" transform="translate(451.156 21.804)">
                    <g id="Group_59" data-name="Group 59" transform="translate(0 0)" clip-path="url(#clip-path)">
                      <path id="Path_185" data-name="Path 185"
                        d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z"
                        transform="translate(-147.939 -70.217)" fill="#3D5AA9" />
                      <path id="Path_186" data-name="Path 186"
                        d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874"
                        transform="translate(0)" fill="#3D5AA9" />
                    </g>
                  </g>
                  <path id="Path_14789" data-name="Path 14789" d="M3.71,2.673,22.259,20.749"
                    transform="translate(450.5 17.705)" fill="none" stroke="#3D5AA9" stroke-width="2" />
                </g>
              </svg>

            </div>
          </div>
          <div class="lg:hidden">
            <div class="flex justify-end text-[#222741] py-2">
              <a href="">Forgot Password</a>
            </div>
          </div>
          <div class="text-lg text-[red] mt-3" v-if="error">
            {{ error }}
          </div>
        </div>

        <div class="lg:block hidden">
          <div class="flex justify-center w-full">
            <button @click.prevent="loginUser()" v-if="!processing"
              class="login bg-[#0F0FB1] text-[white] font-bold mt-3 text-center p-4 w-full">
              Login
            </button>
            <div class="italic text-[#3C58A8] mt-3 text-center w-full border-2 p-4 border-[#0F0FB1]" v-if="processing">
              Please Wait...</div>
          </div>
        </div>
        <div class="lg:block hidden">
          <div class="mt-8 w-full flex justify-center border-t-2 py-5 space-x-1">
            <p>Don't you have an account?</p>
            <a href="/register" class="text-[#0F0FB1] font-[600]">
              Sign Up
            </a>
          </div>
        </div>
        <div class="lg:hidden">
          <div class="mt-16">
            <div class="mt-8 w-full flex justify-center py-5 space-x-1">
              <a href="/register" class="text-[#0F0FB1] font-[600]">
                Don't you have an account?
              </a>
            </div>
            <div class="flex justify-center w-full">
              <button @click.prevent="loginUser()" v-if="!processing"
                class="login bg-[#0F0FB1] rounded-lg text-[white] font-bold mt-3 text-center p-4 w-full">
                Login
              </button>
              <div class="italic text-[#3C58A8] mt-3 text-center w-full border-2 p-4 border-[#0F0FB1]" v-if="processing">
                Please Wait...</div>
            </div>
          </div>
        </div>

      </form>
    </div>
    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-white opacity-80 z-50">
      <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500">
      </div>
    </div>
    <!-- <div v-if="showPopup" class="popup-modal">
          <div class="popup-content">
            <p>Logged in successfully!</p>
            <button @click="closePopup">Close</button>
          </div>
        </div> -->
  </div>
</template>
<script setup>

// import { useRouter, useRoute } from 'vue-router'
// import { ref } from 'vue'
import useLogin from '@/composables/useLogin'

const email = ref('')
const password = ref('')
const isLoading = ref(false)

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
import { firebase } from '@/_firebase/init.js'
import store from '@/_store/store';


const router = useRouter();
const loading = ref(false);
// const email = ref('');
// const password = ref('');
const mc = ref('');
const err_msg = ref('');
const passwordVisible = ref(false)
const processing = ref(false)
const showPopup = ref(false)
const togglepasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
}
// const baseUrl = 'http://192.168.18.62:3000'
const baseUrl = 'https://ecostructure-demo.muftar.com'
const loginUser = () => {
  processing.value = true;
  isLoading.value = true
  error.value = null
  if (!email.value || !password.value) {
    error.value = "Please fill in the both the email and password fields"
    processing.value = false;
    isLoading.value = false
    return;
  }
  setTimeout(() => {
    console.log('email', email.value);
    login(email.value, password.value)
      .then((res) => {
        console.log('Login response:', res);
        if (res && res.user) {
          getLoggedUserData(res.user.uid);
        }
      })
      .finally(() => {
        isLoading.value = false;
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
    url: `${baseUrl}/login`,
    headers: {
      userID: userID,
      'Content-Type': 'application/json'
    },
    data: data
  };
  axios.request(config)
    .then((res) => {
      const user_id = res.data.data._id;
      localStorage.setItem('user_id:', user_id)
      localStorage.setItem('userEmail:', email.value)
      localStorage.setItem('userID', userID);
      // store.SET_USERDATA(res.data.result.user); // Use store mutation
      // store.getUserId(res.data.result.userID); // Use store action
      router.replace('/account');
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
}</style>