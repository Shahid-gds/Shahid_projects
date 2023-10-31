<template>
  <div class="w-full flex">
    <div class="w-full bg-[#3A54B4] h-screen">
      <div class="p-6">
        <img class="w-[35%]" src="@/assets/images/Login/logo-White.svg" alt="">
      </div>
      <div class="mt-[15%] ">
        <img class="w-[100%]" src="@/assets/images/Login/login-img.svg" alt="">
      </div>
    </div>
    <div class="w-full p-16 rounded-lg mt-[8%] mx-56">
        <div class="w-full pb-5">
          <h1 class="sm:text-[28px] uppercase text-[#3A54B4] pb-3 text-2xl font-bold">Login</h1>
          <p class="text-[#75788D]">It is quick and easy to log in. Enter your email and password below.</p>
        </div>
      <form class="" action="">
        <div class="w-full">
          <div class="pb-3 w-full">
            <input class="border-2 w-full rounded-md p-4 px-4 outline-none"
              type="email" placeholder="Email" v-model="email">
          </div>
          <div class="relative mx-auto text-gray-600 w-full">
            <input class="border-2 w-full rounded-md p-4 px-4 outline-none"
              placeholder="Password" :type="passwordVisible ? 'text' : 'password'" v-model="password">
            <div class="absolute right-0 top-0 mt-5 mr-2 cursor-pointer" @click="togglepasswordVisible">
              <svg v-if="passwordVisible" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                width="25" height="20" viewBox="0 0 25 16.093">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093" fill="#3A54B4" />
                  </clipPath>
                </defs>
                <g id="Group_60" data-name="Group 60" transform="translate(0 0)">
                  <g id="Group_59" data-name="Group 59" transform="translate(0 0)" clip-path="url(#clip-path)">
                    <path id="Path_185" data-name="Path 185"
                      d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z"
                      transform="translate(-147.939 -70.217)" fill="#3A54B4" />
                    <path id="Path_186" data-name="Path 186"
                      d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874"
                      transform="translate(0)" fill="#3A54B4" />
                  </g>
                </g>
              </svg>
              <svg v-if="!passwordVisible" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                width="25" height="19.509" viewBox="0 0 25 19.509">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093" fill="#3A54B4" />
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
          <div class="">
            <div class="flex justify-end text-[#222741] py-2">
              <a href="">Forgot Password</a>
            </div>
          </div>
          <!-- <div class="text-lg text-[red] mt-3" v-if="error">
            {{ error }}
          </div> -->
        </div>

        <div class="">
          <div class="flex justify-center w-full">
            <button @click.prevent="loginUser()"
              class="login bg-[#3A54B4] text-[white] text-xl rounded-lg font-bold mt-3 text-center p-4 w-full">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
    <!-- <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-white opacity-80 z-50">
      <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500">
    </div>
    </div> -->
  </div>
</template>
<script setup>

import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const email = ref('')
const password = ref('')
// const isLoading = ref(false)

const router = useRouter();

const loginUser = () => {
  // isLoading.value = true
  router.replace('/dashboard');
};

</script>

<style scoped>


</style>