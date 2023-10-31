<template>
    <!-- Navigation Bar -->
    <nav class="relative container mx-auto p-6">
        <div class="flex justify-between items-center">
            <!-- logo -->
            <div class="pt-6">
                <img src="../../assets/images/logo.svg" alt="">
            </div>
            <!-- button -->
            <button class=" bg-[#3C58A8] text-white md:px-6 md:p-2 md:text-lg rounded text-sm p-2 px-2 mt-6" @click="toggleModal">Join Our Waitlist</button>
        </div>
        <div>
        <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
            <h1 class="text-[#000] uppercase md:text-xl text-center font-bold mb-5 mt-6 border-b-2">Enter information to join the waitlist</h1>
        <div class="md:flex md:space-x-12">
            <div class="flex-col">
            <label for="" class="text-[#000]">Company Name:</label> <br>
            <input type="text" class="border-[#6668] border-2 md:w-80 w-80 p-2 px-4 rounded-md mt-2" placeholder="Muftar..">
            </div>
            <div class="flex-col">
            <label for="" class="text-[#000]">Company Website:</label> <br>
            <input type="text" class="border-[#6668] border-2 md:w-80 w-80 p-2 px-4 rounded-md mt-2" placeholder="http://example.com">
            </div>
        </div>
        <div class="md:flex md:space-x-12 mt-3">
            <div class="flex-col">
            <label for="" class="text-[#000]">Name:</label> <br>
            <input type="text" class="border-[#6668] border-2 md:w-80 w-80 p-2 px-4 rounded-md mt-2" placeholder="abc">
            </div>
            <div class="flex-col">
            <label for="" class="text-[#000]">Email:</label> <br>
            <input type="text" class="border-[#6668] border-2 md:w-80 w-80 p-2 px-4 rounded-md mt-2" placeholder="example@gmail.com">
            </div>
        </div>
        <div class="md:flex md:space-x-12 mt-4">
            <div class="flex-col">
            <label for="" class="text-[#000]">Phone Number:</label> <br>
            <input type="tel" >
            <div class="flex">
                <span class="inline-flex items-center px-3 p-2.5 text-sm absolute border-2 border-r-2 border-l-0 border-t-0 border-b-0  rounded-l-md border-[#6668]">
                  +1
                </span>
                <input type="phone" class="md:w-80 w-80 p-2 px-12 rounded bg-gray-50  text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 text-sm border-[#6668] border-2    dark:text-[#000] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456789">
              </div>
            </div>
        </div>
        <h1 class="text-[#000] text-xl mt-7 border-b-2">Social Media</h1>
        <div class="md:flex md:space-x-12 mt-4">
            <div class="flex-col">
            <label for="" class="text-[#000]">Desired social media:</label> <br>
            <select class="border-[#6668] border-2 md:w-64 w-80 p-2 px-4 rounded-md mt-2">
                <option value="">-Add social media-</option>
                <option value="">Facebook</option>
                <option value="">Instagram</option>
                <option value="">Twitter</option>
                <option value="">LinkedIn</option>
                <option value="">Other</option>
            </select>
            </div>
            <div class="flex-col">
            <label for="" class="text-[#000]"></label> <br>
            <input type="text" class="border-[#6668] border-2 md:w-96 w-80 p-2 px-4 rounded-md mt-2" placeholder="Insert link or username">
            </div>
        </div>
        </BaseModal>
    </div>
    </nav>
</template>

<script setup>
import BaseModal from '../ui/BaseModal.vue';
import {ref} from 'vue';
    const modalActive = ref(null)
    const toggleModal = () => {
        modalActive.value = !modalActive.value
    }
</script>


