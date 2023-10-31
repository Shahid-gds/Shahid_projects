<template>
    <div>
        <div class="flex flex-col ">

            <div class="overflow-x-auto overflow-y-auto fixed shadow-lg inset-0 z-50 flex justify-center items-center">
                <div ref="el" class="relative mx-auto  max-w-2xl bg-white py-8 px-24 rounded-md shadow-md">
                    <div class="space-y-7">
                        <h1 class="text-3xl font-bold text-center">Leave Organization</h1>
                        <p class="text-center text-sm">Are you sure you want to leave organization?</p>
                        <div class="flex space-x-5 justify-center">
                            <button class="px-4 py-2 rounded-md border  bg-white text-black"
                                @click="leaveOrg">Cancel</button>
                            <button class="px-4 py-2 rounded-md bg-red-500 text-white" @click="leaveOrg">Leave</button>
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

const el = ref(null);
const emit = defineEmits(['leaveOrg'])

onClickOutside(el, () => {
    leaveOrg();
})

const leaveOrg = () => {
    emit('leaveOrg');
}

</script>