<template>
    <div @click="openModal" class="flex flex-col justify-between ml-5 mr-5">
        <div class="flex flex-col">
            <div style="background: linear-gradient(to right, #FFFFFF , #C7DAF9);"
                class="px-5 rounded-2xl cursor-pointer ">
                <a href="#" class="w-20 h-16    flex justify-start items-center space-x-3">
                    <img class="w-9 h-9" src="@/assets/icons/login/support.svg" alt="">
                    <div>
                        <p class="login-color text-secondry text-sm ">Help & <br> <span
                                class="text-primary font-bold">Support</span></p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['openModal'])

const openModal = () => {
    emit('openModal');
}


</script>