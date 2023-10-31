<template>
    <div class="flex">
      <div class="mb-4 m-5 w-1/2">
        <label class="block text-gray-700 text-sm font-bold my-2" for="username">
          Driver's Info
        </label>
        <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Driver Name" v-model="carrier.driver.name">
        <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Driver Truck" v-model="carrier.driver.truck">
        <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Driver Cell" v-model="carrier.driver.phone">
    </div>
    <div class="mb-4 m-5 w-1/2">
      <label class="block text-gray-700 text-sm font-bold my-2" for="username">
        Trailer
      </label>
      <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Trailer" v-model="carrier.trailer">
    </div>
  </div>
</template>
<script setup>
import {defineProps, reactive} from 'vue'

const driver = reactive({
  driver: {
    name: "Bob Smith",
    truck: "ABC-123",
    phone: "555-555-1214"
  }
})

const props = defineProps({
    bol_gen: Object,
})
// const { bol_gen } = toRefs(props);

const deleteRow = (val, idx) => {
    console.log(val, idx)
}
</script>