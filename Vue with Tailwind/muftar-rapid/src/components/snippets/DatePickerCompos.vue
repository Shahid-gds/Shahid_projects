<template>
    <div class="flex relative text-left">
        <div class="">
        <input v-model="date.value" type="date" id="date" class="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring-indigo-200 "/>
        <input v-model="time.value" type="time" id="time" class="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring-indigo-200"/>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'

// Create refs for the date and time values
const date = ref(new Date())
const time = ref(new Date())
const isOpen = ref(true)

// Create computed values for the formatted date and time
const dateFormatted = computed(() => {
    return date.value.toLocaleDateString()
})
const timeFormatted = computed(() => {
    return time.value.toLocaleTimeString()
})

</script>
  