<template>
    <div>
        <div class="flex flex-col ">

            <div class="overflow-x-auto overflow-y-auto fixed shadow-lg inset-0 z-50 flex justify-center items-center">
                <div ref="el" class="relative mx-auto  max-w-2xl bg-white py-8 px-24 rounded-md shadow-md">
                    <div class="space-y-7">
                        <h1 class="text-3xl font-bold text-center">Delete Account</h1>
                        <p class="text-center text-sm">Are you sure you want to delete your account?</p>
                        <div class="flex space-x-5 justify-center">
                            <button class="px-4 py-2 rounded-md border  bg-white text-black"
                                @click="deleteAccount">Cancel</button>
                            <button class="px-4 py-2 rounded-md bg-red-500 text-white"
                                @click="deleteAccount">Delete</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="fixed bg-black/50 backdrop-blur-sm z-40 inset-0">

        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { onClickOutside } from '@vueuse/core'

const emit = defineEmits(['deleteAccount']);

const el = ref(null);

onClickOutside(el, () => {
    deleteAccount();
})



const deleteAccount = () => {
    emit('deleteAccount');
}

</script>