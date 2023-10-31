<template>
    <div class="overflow-x-auto  overflow-y-auto fixed shadow-lg inset-0 z-50 flex justify-center items-center">
        <div class="p-10  flex flex-col shadow-lg bg-white rounded-xl space-y-5" ref="target">
            <!-- HEADEING AND TEXT -->
            <div class="flex flex-col ">
                <h1 class="text-3xl text-primary">Remove User</h1>
                <p>You are about to remove a user which will revoke their access to all the features within your
                    organization.</p>
            </div>

            <div class="border-b border-gray-400">
            </div>

            <!-- MESSAGE -->
            <div class="flex flex-col">
                <h1 class="text-gray-400">Message <small>(Optional)</small></h1>
                <div class="flex shadow-lg rounded-md py-2 px-4">
                    <textarea placeholder="This is for Internal record and the User will not see it"
                        class="text focus:ring-0 rounded-md w-full placeholder:text-gray-400  border-none resize-none"
                        rows="6"></textarea>
                </div>
            </div>

            <!-- ACTIONS -->

            <div class="flex justify-end space-x-2 text-white">
                <button @click="hideModal" class="rounded-md bg-primary py-2 px-4 flex space-x-2">
                    <mdicon name="account" />
                    <span>
                        Keep User
                    </span>
                </button>
                <button @click="hideModal" class="bg-[#A71A1A] py-2 px-4 rounded-md flex space-x-2">
                    <mdicon name="delete" />
                    <span>
                        Remove User
                    </span>
                </button>
            </div>

        </div>

    </div>
    <div class="fixed bg-black/70 backdrop-blur-sm z-40 inset-0">
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { onClickOutside } from '@vueuse/core'
const emit = defineEmits(['hideModal'])

const target = ref(null)


onClickOutside(target, () => {
    hideModal();
})

const hideModal = () => {
    emit('hideModal', false);
}

</script>