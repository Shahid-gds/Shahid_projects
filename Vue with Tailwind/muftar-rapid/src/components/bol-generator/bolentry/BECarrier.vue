<template>
  <div class="flex  space-x-2  justify-center ">
    <div class=" w-1/2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Carrier
      </label>
      <input
        class="shadow appearance-none border w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Carrier name" @input="updateCarrier" v-model="carrier.name">

      <label class="block text-gray-700 text-sm font-bold my-2" for="username">
        Phone
      </label>
      <input
        class="shadow appearance-none border w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Phone" @input="updateCarrier" v-model="carrier.phone">

      <label class="block text-gray-700 text-sm font-bold my-2" for="username">
        Fax
      </label>
      <input
        class="shadow appearance-none border w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Fax" @input="updateCarrier" v-model="carrier.fax">

      <label class="block text-gray-700 text-sm font-bold my-2" for="username">
        Trailer
      </label>
      <input
        class="shadow appearance-none border w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Fax" @input="updateCarrier" v-model="carrier.trailer">
    </div>
    <div class="w-1/2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Carrier MCID
      </label>
      <input
        class="shadow appearance-none border w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Carrier MCID" @input="updateCarrier" v-model="carrier.mc_number">

      <label class="block text-gray-700 text-sm font-bold my-2" for="username">
        Attn
      </label>
      <input
        class="shadow appearance-none border w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Attn" @input="updateCarrier" v-model="carrier.attn">

      <label class="block text-gray-700 text-sm font-bold my-2" for="username">
        Reference
      </label>
      <input
        class="shadow appearance-none border w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Reference" @input="updateCarrier" v-model="carrier.reference">

      <label class="block text-gray-700 text-sm font-bold my-2" for="username">
        Driver
      </label>
      <input
        class="shadow appearance-none border w-full rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Reference" @input="updateCarrier" v-model="carrier.driver.name">

    </div>
  </div>
</template>
<script setup>
import { defineProps, ref, defineEmits, toRefs } from 'vue'

const emit = defineEmits('updateCarrier')

const carrier = ref({
  id: '',
  name: 'Muftar Transport LLC',
  address: {
    line1: '123 Main Street',
    line2: '',
    city: 'Anytown',
    state: 'ST',
    country: 'USA',
    zip: '30005'
  },
  mc_number: '1234567890',
  phone: '(770) 555-5555',
  fax: '(770) 555-5555',
  email: 'test@email.com',
  attn: 'Amel',
  reference: 'Grand Digitals',
  trailer: 'Tesla',
  driver: {
    name: 'Josh Buggin',
    phone: '(678) 555-0000',
    truck: 'Tesla Semi 18'
  }
})

const props = defineProps({
  bol_gen: Object,
})
const { bol_gen } = toRefs(props);

const updateCarrier = () => {
  emit('updateCarrier', carrier.value)
}

carrier.value = bol_gen.value.carrier;

// const deleteRow = (val, idx) => {
//   console.log(val, idx)
// }
</script>