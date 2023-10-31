<template>
  
    <div class="w-full p-3 bg-[#3A54B4] fixed z-50 top-0">
      <div class="bg-white top-0 fixed w-full left-0 p-2">
        <h1 class="sm:text-lg text-center">App in beta.
         <router-link to="/disclaimer" class="text-[#3A54B4]">Learn more.</router-link> 
        </h1>
      </div>
      <!-- <div v-if="loading" class="loader"></div> -->
      <div class="container flex justify-between items-center mx-auto lg:px-6 sm:py-4 mt-10 px-2">
        <!-- Desktop logo -->
        <div class="hidden lg:block">
          <router-link to="/">
            <img src="@/assets/images/logo.svg" alt="">
          </router-link>
        </div>
 
  <!-- Mobile logo (hidden by default) -->
        <div class="block lg:hidden">
          <router-link to="/">
            <img src="@/assets/images/mobilelogo.svg" alt="">
          </router-link>
        </div>

        <!-- Mobile menu (hidden by default) -->
    <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black opacity-50 z-40 transition-opacity"
        @click="toggleMenu">
    </div>
        <div :class="{
          'hidden': !isMenuOpen,
          'transform translate-x-full': !isMenuOpen,
          'transform translate-x-0': isMenuOpen
        }"
        class="fixed top-0 right-0 w-1/2 h-screen bg-white shadow-lg rounded-xl p-3 z-50 lg:w-auto lg:h-auto lg:static lg:bg-transparent transition-transform">
          <div class="flex flex-col justify-start h-full">
            <div class="flex flex-col space-y-4 p-3 mt-20">
            <a href="/solutions" class="text-[#3A54B4] font-bold text-xl" @click="toggleMenu">Solutions</a>
            <a href="/earn-with-us" class="text-[#3A54B4] font-bold text-xl" @click="toggleMenu">Earn With Us</a>
            <!-- <router-link  to="/media" class="text-[#3A54B4] font-bold" @click="toggleMenu">Media</router-link> -->
            <a href="/contact" class="text-[#3A54B4] font-bold text-xl" @click="toggleMenu">Meet Us</a>
            </div>
            <!-- Cancel Icon for closing the menu -->
            <button @click="toggleMenu" class="text-white absolute top-0 mt-5">
              <svg class="w-6 h-6 font-bold" fill="#3A54B4" stroke="#3A54B4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
  
        <div class="hidden lg:flex justify-between space-x-16 text-[white]">
          <div>
           <router-link to="/solutions">Solutions</router-link>
          </div>
          <div>
            <router-link to="/earn-with-us">
              Earn With Us
            </router-link>
          </div>
          <!-- <div>
            <router-link :to="{name: 'Media'}">Media</router-link>
          </div> -->
          <div>
            <router-link :to="{name: 'ContactUs'}">Meet Us</router-link>
          </div>
        </div>
        <div class="border-2 p-2 sm:px-5 rounded-lg text-[white] flex space-x-3 cursor-pointer" v-if="!userEmailInLocalStorage" @click.prevent="redirectToRegister">
          <div>
            Get Started
          </div>
        </div>        
       <div class="flex space-x-4 items-center">
        <!-- This is for logged In -->
        <div class="flex sm:space-x-5 space-x-3 items-center" v-if="userEmailInLocalStorage">
           <div>
        
              <div class="border-2 p-2 sm:px-5 rounded-lg text-[white] flex space-x-3 cursor-pointer" @click="redirectToAccount">
                <div>
                  My Account
                </div>
              </div>
           
           </div>
           <div>
                  <div class="border-2 border-[white] bg-[white] p-2 sm:px-5 rounded-lg text-[#3A54B4] flex space-x-3">
                    <a href="https://portal.muftar.com" target="_blank" class="font-[700]">Go to Portal</a>
                  </div>                 
           </div>
       
            <!-- bell icon -->
            <div class="relative rounded-lg text-[black] cursor-pointer">
              <div @click="toggleBellDropdown">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </div>
              <div v-if="isBellDropdownOpen" @mouseenter="isBellDropdownOpen = true" @mouseleave="isBellDropdownOpen = false" class="absolute bell -right-1 mt-2 bg-white shadow-lg rounded-lg w-40">
                <div class="py-2 px-4 cursor-pointer hover:bg-gray-100 rounded-lg">Notification 1</div>
                <div class="py-2 px-4 cursor-pointer hover:bg-gray-100">Notification 2</div>
                <div class="py-2 px-4 cursor-pointer hover:bg-gray-100">Notification 3</div>
                <div class="py-2 px-4 cursor-pointer hover:bg-gray-100">Notification 4</div>
                <div class="py-2 px-4 cursor-pointer hover:bg-gray-100 rounded-lg">Notification 5</div>
              </div>
            </div>
    
          </div>
        
            <!-- Mobile toggle menu button -->
            <div class="lg:hidden">
              <button @click="toggleMenu" class="text-white">
                <svg v-if="!isMenuOpen"  xmlns="http://www.w3.org/2000/svg" width="21.256" height="18.599" viewBox="0 0 21.256 18.599">
                    <path id="Icon_awesome-bars" data-name="Icon awesome-bars" d="M.759,7.635H20.5a.759.759,0,0,0,.759-.759v-1.9a.759.759,0,0,0-.759-.759H.759A.759.759,0,0,0,0,4.978v1.9A.759.759,0,0,0,.759,7.635Zm0,7.592H20.5a.759.759,0,0,0,.759-.759v-1.9a.759.759,0,0,0-.759-.759H.759A.759.759,0,0,0,0,12.569v1.9A.759.759,0,0,0,.759,15.227Zm0,7.592H20.5a.759.759,0,0,0,.759-.759v-1.9A.759.759,0,0,0,20.5,19.4H.759A.759.759,0,0,0,0,20.161v1.9A.759.759,0,0,0,.759,22.818Z" transform="translate(0 -4.219)" fill="#fff"/>
                </svg>                  
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
       </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
  import { useRouter } from 'vue-router';
  import getUser from '@/composables/getUser';
  const { user } = getUser();
  const router = useRouter();
  const redirectToAccount = () => {
    if(userEmailInLocalStorage) {
      router.push('/account')
    }
  }
  const redirectToRegister = () => {
  if (userEmailInLocalStorage) {
    router.push('/register');
  }
}
const isBellDropdownOpen = ref(false);

const toggleBellDropdown = () => {
  isBellDropdownOpen.value = !isBellDropdownOpen.value;
};
  
  const isMenuOpen = ref(false);
  const loading = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  const userEmailInLocalStorage = ref(localStorage.getItem('userEmail:') !== null);
  watch(() => localStorage.getItem('userEmail:'), (newEmail) => {
  console.log('Watcher called with newEmail:', newEmail);
  userEmailInLocalStorage.value = newEmail !== null;
});

  </script>
  
  <style scoped>

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
  }
  .hovered .absolute {
    display: block;
  }
  .hovered .absolute.right-0 {
    right: 0;
  }
  .hovered .absolute.mt-2 {
    top: 2rem; /* Adjust the value as needed */
  }
  .hovered .absolute.w-40 {
    width: 10rem; /* Adjust the value as needed */
  }
.bell::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 10px;
    width: 20px;
    height: 20px;
    background: white;
    transform: rotate(45deg);
    z-index: -2;
}
  /*.loader {
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }*/
  /* Add mobile responsiveness with media queries */
  @media (max-width: 767px) {
    .container {
      flex-wrap: wrap;
    }
    
    .hidden {
      display: none;
    }
  
    .lg:flex {
      display: block;
    }
  
    .lg:w-auto {
      width: auto;
    }
  
    .lg:h-auto {
      height: auto;
    }
  
    .lg:static {
      position: static;
    }
  
    .lg:bg-transparent {
      background-color: transparent;
    }
  }

</style>

  