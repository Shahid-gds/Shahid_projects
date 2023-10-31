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
                  <h1 class="text-[#3C5AA8] text-4xl font-bold uppercase">Register</h1>
                                       
                    <div class="flex flex-col space-y-5 mt-5">
                        <form class="flex flex-col space-y-5 mt-5">
                            <div class="flex flex-row space-x-2 rounded-md bg-white py-1 px-2 border">
                                <input
                                    class="w-full p-2 border-none outline-none focus:ring-0 bg-transparent text-[#ACACAC] placeholder:text-[#ACACAC] text-[17px]"
                                    placeholder="First Name" type="text">
                            </div>
                            <div class="flex flex-row space-x-2 rounded-md bg-white py-1 px-2 border">
                                <input
                                    class="w-full p-2 border-none outline-none focus:ring-0 bg-transparent text-[#ACACAC] placeholder:text-[#ACACAC] text-[17px]"
                                    placeholder="Last Name" type="text">
                            </div>
                            <div class="flex flex-row space-x-2 rounded-md bg-white py-1 px-2 border">
                                <input
                                    class="w-full p-2 border-none outline-none focus:ring-0 bg-transparent text-[#ACACAC] placeholder:text-[#ACACAC] text-[17px]"
                                    placeholder="Email" type="email">
                            </div>
                            <div class="relative w-full">
                                <div class="w-full p-2 px-4 border-2 rounded-lg cursor-pointer text-left"
                                    @click="actiontoggleDropdown">
                                    <div class="flex justify-between">
                                        <div class="w-full">{{ selectedAction || 'Select Organization' }}</div>
                                        <div class="w-full flex justify-end">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                class="w-6 h-6 text-[#3C5AA8] transform transition-transform duration-300"
                                                :class="{ 'rotate-180': actionshowDropdown }">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="actionshowDropdown"
                                    class="absolute w-full border-2 px-4 rounded-lg mt-1 text-left bg-white border-[#E1E4EB] transition-transform duration-300 max-h-40 overflow-y-auto"
                                    :class="{ 'scale-y-100': actionshowDropdown, 'scale-y-0': !actionshowDropdown }">
                                    <option v-for="(action, index) in actions" :key="index"
                                        class="p-2 cursor-pointer hover:bg-gray-100" @click="selectAction(action)">
                                        {{ action }}
                                    </option>
                                </div>
                            </div>
                            <div class="flex flex-row space-x-2 rounded-md bg-white py-1 px-2 border">
                                <input
                                    class="w-full p-2 border-none outline-none focus:ring-0 bg-transparent text-[#ACACAC] placeholder:text-[#ACACAC] text-[17px]"
                                    placeholder="Password" type="password">
                            </div>

                            <div class="flex justify-between">
                                <div class="flex">
                                    <label class="text-[#838383] text-[17px] font-[500]">
                                        Already have an Account?
                                    </label>
                                </div>
                                <div>
                                    <router-link to="/" class="text-[#3C59A8] text-[17px] font-[500]">
                                        Login
                                    </router-link>
                                </div>
                            </div>
                       <router-link to="/">
                        <button  type="submit"
                        class="btn-color rounded-md flex justify-center py-3 text-xl space-x-4 text-white uppercase w-full">
                        <p>Register</p>
                    </button>
                       </router-link>
                        </form>

                    </div>
                    <p class="text-sm text-center  my-5" style="color: #ACACAC">
                        Copyright © 2022 <span class="font-bold">Muftar</span>. All Rights Reserved.
                    </p>
                </div>
            </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const actions = ['Vendor', 'Broker', 'Carrier'];
const selectedAction = ref(null);
const actionshowDropdown = ref(false);

const actiontoggleDropdown = () => {
    actionshowDropdown.value = !actionshowDropdown.value;
};

const selectAction = (action) => {
    selectedAction.value = action;
    actionshowDropdown.value = false;
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