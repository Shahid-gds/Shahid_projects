<template>
  <div class="flex">
    <div class="mb-4 m-5 w-1/2">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Broker Name
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Broker Name" @input="updateBroker($event.target.value)" v-model="broker.name">

      <label class="block text-gray-700 text-sm font-bold mb-2">
        Broker Email
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Broker Email" @input="updateBroker($event.target.value)" v-model="broker.email">

      <label class="block text-gray-700 text-sm font-bold mb-2">
        Phone / Fax
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Phone" v-model="broker.phone" @input="updateBroker($event.target.value)">

      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        @input="updateBroker($event.target.value)" type="text" placeholder="Fax" v-model="broker.fax">

      <!-- <label class="block text-gray-700 text-sm font-bold mb-2">
           Logo
           <img :src="newImg" v-if="newImg != ''" class="w-20 h-20"/>
        </label>
        <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="logo"
        accept="image/jpeg, image/png, image/tiff" type="file" placeholder="" @change="uploadLogo"> -->
    </div>

    <div class="mb-4 m-5 w-1/2">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Broker Address
      </label>

      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Street Name" @input="updateBroker($event.target.value)" v-model="broker.address.line1">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Apt/Unit #" @input="updateBroker($event.target.value)" v-model="broker.address.line2">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="City" @input="updateBroker($event.target.value)" v-model="broker.address.city">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="State" @input="updateBroker($event.target.value)" v-model="broker.address.state">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Zip" @input="updateBroker($event.target.value)" v-model="broker.address.zip">
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, toRefs, defineEmits } from 'vue'

const emit = defineEmits(['updateBroker'])

const props = defineProps({
  broker_data: Object,
})
const { broker_data } = toRefs(props);

const broker = ref({
  name: '',
  phone: '',
  fax: '',
  email: '',
  address: {
    city: '',
    country: '',
    country_code: '',
    line1: '',
    line2: '',
    state: '',
    state_code: '',
    zip: ''
  },
})
const updateBroker = (value) => {
  // console.log(value)

  emit('updateBroker', broker.value)
}
broker.value = broker_data.value
</script>