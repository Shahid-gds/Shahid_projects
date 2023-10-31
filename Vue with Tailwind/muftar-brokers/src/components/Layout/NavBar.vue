<template>
<div class="px-10 w-full bg-[#3c5aa8] pb-3 shadow-lg">
    <nav class="flex w-full items-center justify-between flex-wrap p-3">
        <div class="flex space-x-20 items-center justify-between lg:w-auto w-full lg:border-b-0  border-solid border-b-2">
            <div class="w-full">
                <img class="w-40" src="@/assets/images/white-logo.svg" alt="">
            </div>
            <div class="flex items-center flex-shrink-0 text-[#3C5AA8] border-2 w-36 p-2 rounded-sm px-6">
                <span class="font-semibold text-xl tracking-tight text-white">Chainhaul</span>
            </div>
           
        </div>
        <div class="menu w-full lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div class="text-md flex items-center space-x-4 font-bold text-[#3C5AA8] lg:flex-grow">
                <div class="relative" @click="closeDropdownClickOutside">
                    <div class="flex justify-between items-center">
                        <div class="w-full">
                            <button @click="toggleDropdown"
                                class="w-full text-left rounded-md px-10 text-white focus:outline-none">
                                {{ selectedclient || 'Clients' }}
                            </button>
                        </div>
                        <div class="absolute right-2 cursor-pointer" @click="toggleDropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline ml-2" fill="none"
                                viewBox="0 0 24 24" stroke="white"
                                :class="{ 'transform rotate-180': isOpen }">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    <ul v-if="isOpen"
                        class="absolute z-50 w-full bg-white border border-gray-300 mt-1 py-2 rounded-md shadow-lg">
                        <li v-for="client in clients" :key="client.id">
                            <a @click="selectclient(client)"
                                class="block px-4 py-2 cursor-pointer">
                                {{ client.name }}
                            </a>
                        </li>
                    </ul>
                </div>
               <div>
            <a href="/load-board"
                class="block lg:inline-block text-white rounded-lg mr-2">
                 Load Board
             </a>
               </div>
                <div>
                    <a href="/create-load"
                   class=" block mt-4 lg:inline-block lg:mt-0 text-[#3C5AA8] bg-[white] px-4 py-2 rounded-lg mr-2">
                     + Create Load
                </a>
            </div>
            <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>                      
            </div>
           <div class="flex items-center space-x-3">
            <div class="">
                <img class="w-10 h-10 rounded-full" src="@/assets/images/profile.jpg" alt="">
            </div>
            <div class="text-white">
                <p>Admin</p>
            </div>
           </div>
            </div>
            
        </div>
    </nav>
</div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
const isOpen = ref(false);
const selectedclient = ref(null);

const clients = reactive([
    { id: 1, name: 'Client One'},
    { id: 2, name: 'Client Two'},
    { id: 3, name: 'Client Three' },
]);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const selectclient = (client) => {
    selectedclient.value = client.name;
    isOpen.value = false;
};
const closeDropdownClickOutside = (event) => {
    if (isOpen.value) {
        const dropdownElement = document.querySelector('.relative');
        if (dropdownElement && !dropdownElement.contains(event.target)) {
            isOpen.value = false;
        }
    }
}
onMounted(() => {
    window.addEventListener('click', closeDropdownClickOutside)
});
onUnmounted(() => {
    window.removeEventListener('click', closeDropdownClickOutside);
});
</script>