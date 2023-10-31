<template>
    <nav class="container mx-auto p-6">
        <div class="flex justify-between items-center">
            <div class="pt-6">
                <img src="@/assets/logo2.svg" class="w-5/12 md:w-1/2" alt="">
            </div>
            <button @click="toggleModal(true)" class=" text-xs md:block bg-theme text-white rounded sm:p-2 md:px-8 mt-6 w-72 p-2" >
                        Join Our Waitlist
            </button>
        </div>
    </nav>
</template>
<script setup>
import {defineEmits} from 'vue'
const emit = defineEmits(['toggleModal'])

const toggleModal = (bool) =>{
  console.log('header',bool)
    emit('toggleModal', bool)
}
</script>
<style scoped>
</style>
