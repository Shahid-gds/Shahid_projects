<template>   
    <div class="p-6 w-full xl:flex justify-center">
            <div class="2xl:w-[1000px] w-full md:p-12 p-6 mt-[5%] bg-[#F3F3F3] rounded-lg md:px-20">
                <h1 class="md:text-[39px] text-[25px] font-[700] text-[#00008E] mt-5">Looking for an organization?</h1>
                <p class="text-[#13131380]">Enter your email address</p>
                <div class="mt-10">
                    <h1 class="text-[#00008E] text-[30px] font-[700]">Email</h1>
                    <div class="">
                        <div class="relative">
                            <div class="xl:w-[590px] w-full">
                                <input type="text" class="border-2 outline-none p-3 w-full rounded-full px-6"
                                    placeholder="email address" @keyup.enter="">
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
                        <div class="flex justify-end py-10 2xl:px-48 ">
                            <button
                                class="bg-[#0F0FB1] p-3 px-16 flex text-[white] cursor-pointer">
                                Submit
                            </button>
                        </div>
                        <div class="border-t-2 py-10 text-[#13131380] xl:pb-28">
                            <h1 class="font-[900]">Do not worry!</h1>
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
</script>
<style scoped>
.main-container {
background-image: url('@/assets/images/mediapageBg.svg');
height: auto;
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
}
</style>