<template>
    <div :class="{ 'hidden': isClosed, 'bg-green-100 text-green-700': status === 'success', 'bg-orange-100 text-orange-700': status === 'warning','bg-red-100 text-red-700': status === 'error' }"
        class="text-center inset-0 fixed flex justify-center items-center w-max h-14 z-5 px-7 mx-auto mt-5  shadow-lg rounded-md">
        <div class="flex space-x-2">
            <p>
                {{ message }}
            </p>
            <!-- <button @click="$emit('closeSnackBar')" class="text-black">X</button> -->
            <button @click="close" class="text-[#3D5AA9] font-bold ml-5">&#x2716;</button>
        </div>


    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const isClosed = ref(false);

function close() {
    isClosed.value = true;
}

defineProps({
    message: { type: String },
    status: { type: String, default: 'success' }
})

</script>