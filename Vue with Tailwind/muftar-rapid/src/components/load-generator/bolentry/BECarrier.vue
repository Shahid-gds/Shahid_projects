<template>
  <div class="flex">
    <div class="mb-4 m-5 w-1/2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Carrier
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Carrier name" v-model="carrier.name">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Carrier Email
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Carrier Email" v-model="carrier.email">

      <label class="block text-gray-700 text-sm font-bold my-2" for="username">
        Phone/Fax
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Phone" v-model="carrier.phone">

      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Fax" v-model="carrier.fax">
    </div>
    <div class="mb-4 m-5 w-1/2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Carrier MCID
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Carrier MCID" v-model="carrier.mc_number">

      <label class="block text-gray-700 text-sm font-bold my-2" for="username">
        Reference
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Reference" v-model="carrier.reference">

    </div>
  </div>
</template>
<script setup>
import { defineProps, toRefs, defineEmits, ref } from 'vue'

const emit = defineEmits(['updateCarrier'])

const carrier = ref({
  name: "Acme Trucking Co.",
  phone: "555-555-1212",
  fax: "555-555-1213",
  mc_number: "1234567",
  reference: "Invoice #123456",
  address: {
    location_name: "",
    line1: "45 Eisenhower Dr",
    line2: "",
    city: "Atlant Paramus",
    state: "NJ",
    country: "USA",
    zip: "07652-1416",
  }
})

const props = defineProps({
  carrier_data: Object,
})
const { carrier_data } = toRefs(props);

const updateCarrier = (value) => {
  // console.log(value)
  // console.log('new value', carrier_data.value)
  emit('updateCarrier', carrier_data)
}


const deleteRow = (val, idx) => {
  console.log(val, idx)
}
carrier.value = carrier_data.value
</script>