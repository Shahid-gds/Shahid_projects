<template>
    <div class="fixed inset-0 block  backdrop-blur-sm bg-black/70">

    </div>
    <div class="fixed h-[800px] bg-white z-50 top-14 left-[30%]  rounded-xl shadow  w-[708px] " ref="el">

        <!-- CLOSE BUTTON -->
        <div @click="closeModal"
            class="bg-primary cursor-pointer text-white text-center absolute -top-4 -right-4 p-3 h-10 w-10  rounded-full">
            <img class="mx-auto my-auto" src="@/assets/icons/support/close.svg" alt="Close">
        </div>
        <div class="flex flex-col justify-between h-full overflow-y-auto">
            <div class="mt-4">
                <div v-for="item in 5" :key="item" class="pl-5 py-4" :class="{ 'bg-gray-100 border-t border-b': item % 2 === 0 }">
                    <div v-if="item % 2 === 1">
                        <div class="flex space-x-2">
                            <img src="@/assets/icons/support/icon-1.svg" alt="">
                            <div class="space-y-1">
                                <h1>Muftar GPT</h1>
                                <p class="text-sm">Lorem ipsum dolor sit amet </p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="flex space-x-2">
                            <img src="@/assets/icons/support/icon-2.svg" alt="">
                            <div class="space-y-1">
                                <h1>Smith Andrewson</h1>
                                <p class="text-sm">Lorem ipsum dolor sit amet </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="space-y-2 p-6">
                <div class="rounded-md border bg-gray-50 h-14 flex">
                    <input
                        class="w-full border-none h-14 placeholder:text-gray-400 text-gray-400 bg-transparent rounded-md focus:ring-0"
                        placeholder="Ask Muftar GPT" type="text">
                    <img class="h-7 w-7 my-auto mr-3" src="@/assets/icons/support/send.svg" alt="">
                </div>
                <div class="flex justify-end ">
                    <button class="bg-[#EEF2FE] border border-[#CBD7F6] rounded-full text-[#3D5AA9] px-2 py-1">Quick
                        Action</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { onClickOutside } from '@vueuse/core'

const emit = defineEmits(['closeModal'])

const el = ref(null)
onClickOutside(el, () => {
    closeModal();
})


const closeModal = () => {
    emit('closeModal');
}

</script>

<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    background: white;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
}
</style>