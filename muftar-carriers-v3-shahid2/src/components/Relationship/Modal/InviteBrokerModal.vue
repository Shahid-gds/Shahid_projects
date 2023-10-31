<template>
    <div>
        <div class="overflow-x-auto overflow-y-auto fixed shadow-lg inset-0 z-50 flex justify-center items-center">
            <div class="relative mx-auto w-[60%] max-w-2xl">
                <div class="bg-white justify-center mx-auto shadow-lg rounded-xl" ref="backDrop">
                    <div class="flex flex-col p-10 space-y-6 relative">
                        <!-- CLOSE BUTTON -->
                        <div class="absolute right-4 top-4">
                            <img class="w-9 h-9 cursor-pointer" @click="hideModal"
                                src="@/assets/icons/members/cross-small.svg" alt="">
                        </div>
                        <!-- HEADER -->
                        <div>
                            <h1 class="text-primary text-4xl">Invite Broker</h1>
                        </div>
                        <!-- FORM INPUT -->
                        <div class="flex flex-col space-y-5">
                            <div class="flex flex-row  rounded-md border border-gray-50 shadow px-4  bg-white">
                                <mdicon class="my-auto text-[#A8B1CA]" name="account" />
                                <input placeholder="Email"
                                    class="w-full border-none focus:ring-0 placeholder:text-lg placeholder:text-gray-400 text-gray-400 text-lg bg-transparent"
                                    type="text">
                            </div>
                        </div>


                        <!-- CUSTOM MESSAGE -->
                        <div class="flex flex-col space-y-2">
                            <div class="flex flex-row space-x-6">
                                <h1 class="text-gray-600 my-auto">Message</h1>
                                <p class="text-xs my-auto text-gray-300">(Optional)</p>
                            </div>
                            <div class="flex flex-row px-2 border border-gray-50 shadow rounded-md">
                                <textarea
                                    class="w-full border-none focus:ring-0 text-gray-400 placeholder:text-gray-400"
                                    placeholder="Provide a custom message here" style="resize: none;" rows="4">
                                </textarea>
                            </div>

                        </div>

                        <!-- BUTTONS -->
                        <div class="flex flex-row justify-end space-x-5">
                            <button class="rounded-md px-8 py-2 flex space-x-2 text-gray-500 border bg-[#fefdff]"
                                @click="hideModal">
                                <span>
                                    Cancel
                                </span>
                            </button>
                            <button class="rounded-md px-8 py-2 flex space-x-2 bg-primary text-white"
                                @click="hideModal">
                                <span>
                                    Invite Broker
                                </span>
                            </button>


                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div @click="hideModal" class="fixed bg-black/70 backdrop-blur-sm z-40 inset-0">

        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { onClickOutside } from '@vueuse/core'

const backDrop = ref(null);

const emit = defineEmits(['hideModal'])

onClickOutside(backDrop, () => {
    hideModal();
})



const hideModal = () => {
    emit('hideModal', false);
}

</script>


