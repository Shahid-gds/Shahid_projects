<template>
    <div @click="openModal" class="flex flex-col justify-between space-y-28 ml-5 mr-5">
        <div class="flex flex-col">
            <div style="background: linear-gradient(to right, #FFFFFF , #C7DAF9);" class="px-5 rounded-2xl cursor-pointer ">
                <a href="#" class="w-20 h-16    flex justify-start items-center space-x-3">
                    <img class="w-10 h-10" src="@/assets/icons/support/muftar-gpt.svg" alt="Muftar GPT">
                    <div>
                        <p class="login-color text-primary text-sm font-bold">MuftarGPT </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue'
import axios from 'axios';

const emit = defineEmits(['openModal'])

const  openModal = () => {
    emit('openModal');
    try {
                const response = axios.post('http://127.0.0.1:8000/end', {
                    orgID: '',
                    userID: '',
                });
                // The counter if the API call is successful
                if (response.status === 200) {
                    console.log(response.data)
                   this.chatMessages = []
                }

            } catch (error) {
                console.log('Error:', error);
            }
}

</script>