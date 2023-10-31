<template>   
        <div class="p-6 w-full lg:flex justify-center">
                <div class="2xl:w-[1000px] w-full sm:p-12 p-4 mt-[5%] bg-[#F3F3F3] rounded-lg md:px-20">
                    <h1 class="md:text-[39px] text-[20px] font-[700] text-[#00008E] mt-5">Let’s lookup your organization</h1>
                    <p class="text-[#13131380]">Let’s start by finding your company with your USDOT number.</p>
                    <div class="mt-10">
                        <h1 class="text-[#00008E] text-[30px] font-[700]">US DOT</h1>
                        <div class="">
                            <div class="relative">
                                <div class="xl:w-[590px]">
                                    <input type="text" class="border-2 outline-none p-3 w-full sm:rounded-full rounded-lg px-6"
                                        placeholder="eg:1234567" v-model="searchDotNumber"
                                        @keyup.enter="searchOrganization">
                                </div>
                            </div>
                            <div>
                                <div v-if="errorMessage" class="text-red-500 text-xl">
                                    {{ errorMessage }}
                                </div>
                                    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-white opacity-80 z-50">
                                        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                                    </div>
                            </div>
                           <div class="lg:block hidden">
                            <div class="flex justify-end py-8 2xl:px-48 ">
                                <button @click.prevent="searchOrganization"
                                    class="bg-[#0F0FB1] p-3 px-16 flex text-[white] cursor-pointer">
                                    Search
                                </button>
                            </div>
                           </div>
                           <div class="lg:hidden">
                            <div class="w-full flex pb-6">
                              <button @click.prevent="searchOrganization"
                                class="bg-[#0F0FB1] text-[white] mt-3 w-full text-center p-4 text-xl">
                                Search
                              </button>
                              <button class="bg-[#00008E] mt-3 text-center w-[73px] p-4 text-xl flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>                
                              </button>
                              <div class="italic text-[#3C58A8] mt-3 text-center w-full border-2 p-4 border-[#0F0FB1]"  v-if="processing" >Please Wait...</div>
                            </div>
                          </div>
                            <div class="border-t-2 py-10 text-[#13131380] sm:pb-24">
                                <p>By submitting your information to us, you authorize us to communicate with you electronically or
                                    otherwise, including by email and/or text messages. Your provider’s message and data rates may
                                    apply.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';
const isLoading = ref(false)
const searchDotNumber = ref('');
const errorMessage = ref('');
const showCreateOrganizationButton = ref('');

const router = useRouter();
// const baseUrl = 'http://192.168.18.62:3000'
const baseUrl = 'https://ecostructure-demo.muftar.com'
const searchOrganization = () => {
    if (!searchDotNumber.value) {
        errorMessage.value = 'Please Enter a DOT Number..!';
        return;
    }
    errorMessage.value = '';
    isLoading.value = true;

    let config = {
        method: 'get',
        url: `${baseUrl}/org/verify`,
        headers: {
            dotNumber: searchDotNumber.value,
        },
    };
    axios
        .request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));

            localStorage.setItem('dotNumber', searchDotNumber.value);
            router.push({ name: 'TransportLlc' });
        })
        .catch((error) => {
            if (error.response && (error.response.status === 500 || error.response.status === 400)) {
                errorMessage.value = 'Organization not found';
                showCreateOrganizationButton.value = true;
                router.push('/seek-org')
            } else {
                console.log(error);
            }
        })
        .finally(() => {
            isLoading.value = false;
        });
};
</script>
<style scoped>
.main-container {
    background-image: url('@/assets/images/mediapageBg.svg');
    height: auto;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}</style>