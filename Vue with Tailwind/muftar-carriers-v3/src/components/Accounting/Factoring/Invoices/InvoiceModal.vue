<template>
    <div class="overflow-x-auto  overflow-y-auto fixed shadow-lg inset-0 z-50 flex justify-center items-center">
        <div class="flex flex-col shadow-lg bg-white rounded-xl space-y-5 w-[600px] pb-4" ref="target">
            <h1 class="text-2xl py-6 border-b px-4 font-bold">Create New Invoice</h1>
            <div class="px-4 flex justify-between">
                <h1 class="text-xl font-bold"> <span>Invoice</span> <span class="text-gray-300">#</span><span
                        class="text-blue-500">8FB28438-0001</span></h1>

                <div class="flex space-x-2 cursor-pointer select-none">
                    <img class="h-5 w-5 my-auto" src="@/assets/icons/accounting/factoring/link.svg" alt="">
                    <p class="text-gray-400 my-auto text-xl">Copy Link</p>
                </div>
            </div>

            <div class="border rounded-md px-2 mx-4 py-4 space-y-1 bg-gray-100">
                <h1 class="font-bold">Recipient Email</h1>
                <div class="border rounded-md  bg-white">
                    <input class="border-none bg-transparent focus:ring-0 w-full" placeholder="Email" type="text">
                </div>
            </div>


            <div class="px-2 mx-4">
                <h1 class="text-gray-400 font-bold">Project Description</h1>
                <div class="border rounded-md">
                    <input placeholder="Project Description"
                        class="w-full placeholder:text-gray-400 rounded-md border-none focus:ring-0" type="text">
                </div>
            </div>

            <div class="px-2 mx-4 grid grid-cols-2 gap-4">
                <div>
                    <h1 class="text-gray-400 font-bold">Issued On</h1>
                    <div class="border rounded-md">
                        <input class="w-full text-gray-400 placeholder:text-gray-400 rounded-md border-none focus:ring-0"
                            type="date">
                    </div>
                </div>

                <div>
                    <h1 class="text-gray-400 font-bold">Due On</h1>
                    <div class="border rounded-md">
                        <input class="w-full text-gray-400 placeholder:text-gray-400 rounded-md border-none focus:ring-0"
                            type="date">
                    </div>
                </div>
            </div>

            <div class="flex px-2 mx-4 space-x-2 col-span-12">
                <input class="my-auto p-2 rounded-md cursor-pointer" type="checkbox">
                <p class="my-auto text-sm">This is a recurring invoice (Monthly)</p>
            </div>

            <div class="px-2 mx-4 grid grid-cols-12 gap-2">
                <div class="col-span-5">
                    <h1 class="text-gray-400 font-bold">Item</h1>
                    <div class="border rounded-md">
                        <input placeholder="Item"
                            class="w-full text-gray-400 placeholder:text-gray-400 rounded-md border-none focus:ring-0"
                            type="text">
                    </div>
                </div>

                <div class="col-span-2">
                    <h1 class="text-gray-400 font-bold">Price</h1>
                    <div class="border rounded-md">
                        <input placeholder="0"
                            class="w-full text-gray-400 placeholder:text-gray-400 rounded-md border-none focus:ring-0"
                            type="text">
                    </div>
                </div>


                <div class="col-span-2">
                    <h1 class="text-gray-400 font-bold">Qty</h1>
                    <div class="border rounded-md">
                        <input placeholder="0"
                            class="w-full text-gray-400 placeholder:text-gray-400 rounded-md border-none focus:ring-0"
                            type="text">
                    </div>
                </div>

                <div class="col-span-2">
                    <h1 class="text-gray-400 font-bold">Total Price</h1>
                    <div class="border rounded-md">
                        <input placeholder="0"
                            class="w-full text-gray-400 placeholder:text-gray-400 rounded-md border-none focus:ring-0"
                            type="text">
                    </div>
                </div>

                <div class="col-span-1 flex justify-center">
                    <img class=" h-6 w-6 mt-8 cursor-pointer" src="@/assets/icons/accounting/factoring/dots.svg" alt="">
                </div>
            </div>

            <div class="flex px-2 mx-4 justify-between">
                <button class="text-primary py-2 px-4 font-bold"> <span class="my-auto">Add Item</span>
                </button>

                <div class="flex space-x-8 my-auto m-10">
                    <span class="text-gray-400 text-xl">Total Amount</span>
                    <span class="text-xl font-bold">$0</span>
                </div>
            </div>

            <div class="px-2 mx-4">
                <h1 class="font-bold text-gray-400">Additional Notes</h1>
                <div class="border rounded-md">
                    <textarea class="w-full border-none rounded-md focus:ring-0" id="" rows="3"
                        style="resize: none;"></textarea>
                </div>
            </div>


            <div class="flex border-t justify-end  py-3 ">
                <div class="flex space-x-4 mx-4">
                    <button class="py-2 px-4 border rounded-md">Save as Draft</button>
                    <button class="py-2 px-4 rounded-md bg-primary text-white">Send</button>
                </div>
            </div>


        </div>

    </div>
    <div class="fixed bg-black/70 backdrop-blur-sm z-40 inset-0">
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { onClickOutside } from '@vueuse/core'

const emit = defineEmits(['hideModal']);

const target = ref(null)

onClickOutside(target, () => {
    hideModal();
})

const hideModal = () => {
    emit('hideModal')
}

</script>


<style scoped></style>