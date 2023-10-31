<template>
    <nav class="container mx-auto relative p-6">
        <div class="flex items-center justify-between">
            <div class="pt-6">
                <img src="@/assets/images/logo.svg" class="w-1/2 md:w-full" alt="">
            </div>
            <div>
                <button @click="toggleModal(true)" class="text-xs md:text-xl md:block bg-[#3C58A8] text-white rounded sm:p-2 md:px-8 mt-6 p-2">Join Our Waitlist</button>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['toggleModal'])

const toggleModal = (bool) => {
    emit('toggleModal', bool)
}
</script>