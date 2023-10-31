<template>
    <div class="overflow-x-auto  overflow-y-auto fixed shadow-lg inset-0 z-50 flex justify-center items-center">
        <div class="flex flex-col shadow-lg bg-white rounded-xl space-y-5 w-[600px] pb-2" ref="target">
            <div class="border-b py-4 space-y-3">
                <div class="flex justify-center space-x-2 p-6">
                    <img class="h-10 w-10 rounded-md" src="@/assets/icons/integration/muftar_logo.png" alt="Muftar Logo">
                    <img class="h-5 w-5 my-auto" src="@/assets/icons/integration/transfer.svg" alt="Transfer Logo">
                    <Icon class="h-10 w-10 rounded-md" :icon="icon" />

                </div>
                <h1 class="text-center font-bold text-xl">Connect Calendar to Muftar</h1>
                <p class="text-center w-96 mx-auto text-sm text-gray-400">Prioritize work based on customer needs and build
                    a tighter feedback
                    loop with your customers.</p>

                <div class="flex  space-x-5 justify-center">
                    <div class="py-2 border rouneded-md px-2 text-xl rounded-md">
                        app.untitledui.com/integration/intercorm
                    </div>
                    <button class="flex space-x-2 px-3 py-2 border rounded-md">
                        <img class="h-4 w-4 my-auto" src="@/assets/icons/integration/copy.svg" alt="COPY">
                        <span class="my-auto font-bold">Copy link</span>
                    </button>

                </div>
            </div>

            <div class="border-b pb-5">
                <div class="px-8 space-y-5">
                    <h1 class="text-xl font-bold">Untitled Would Like To</h1>
                    <div class="px-2 space-y-5">
                        <div class="flex space-x-2">
                            <img class="h-5 w-5 my-auto" src="@/assets/icons/integration/check.svg" alt="Check">
                            <p class="font-bold text-sm text-gray-500">Access basic company information and Details</p>
                        </div>

                        <div class="flex space-x-2">
                            <img class="h-5 w-5 my-auto" src="@/assets/icons/integration/check.svg" alt="Check">
                            <p class="font-bold text-sm text-gray-500">Access and edit bug reports and create new issues</p>
                        </div>

                        <div class="flex space-x-2">
                            <img class="h-5 w-5 my-auto" src="@/assets/icons/integration/check.svg" alt="Check">
                            <p class="font-bold text-sm text-gray-500">Change issue status and assignee of issues </p>
                        </div>

                        <div class="flex space-x-2">
                            <img class="h-5 w-5 my-auto" src="@/assets/icons/integration/check.svg" alt="Check">
                            <p class="font-bold text-sm text-gray-500">Open and resolve intercom conversations</p>
                        </div>

                        <div class="flex space-x-2">
                            <img class="h-5 w-5 my-auto" src="@/assets/icons/integration/check.svg" alt="Check">
                            <p class="font-bold text-sm text-gray-500">Add or remove users and change user roles</p>
                        </div>
                    </div>
                </div>
                <div class="px-8 mt-10 font-bold text-sm">
                    We care about your privacy in our <a href="#" class="underline">Privacy Policy.</a> by clicking Allow
                    access, you authorize
                    Untitled to access your information.
                </div>
            </div>

            <div class="flex justify-between px-8 py-2">
                <div>
                    <button class="border rounded-md flex space-x-2 px-4 py-2">
                        <img class="h-4 w-4 my-auto" src="@/assets/icons/integration/play.svg" alt="">
                        <span>How it Works</span>
                    </button>
                </div>

                <div class="flex space-x-2">
                    <button class="px-4 py-2 border rounded-md" @click="hideModal">Cancel</button>
                    <button class="px-4 py-2 border rounded-md text-white bg-primary" @click="hideModal">Allow
                        Access</button>
                </div>
            </div>

        </div>
    </div>
    <div class="fixed bg-black/70 backdrop-blur-sm z-40 inset-0">
    </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, toRefs } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const props = defineProps(['icon']);

const { icon } = toRefs(props)

const emit = defineEmits(['hideModal']);

const target = ref(null)

onClickOutside(target, () => {
    hideModal();
})

const hideModal = () => {
    emit('hideModal')
}
</script>