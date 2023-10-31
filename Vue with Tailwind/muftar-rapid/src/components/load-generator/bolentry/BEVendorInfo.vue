<template>
  <div class="flex">
    <div class="mb-4 m-5 w-1/2">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Vendor Name
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Vendor Name" @input="updateVendor($event.target.value)" v-model="vendor.name">

      <label class="block text-gray-700 text-sm font-bold mb-2">
        Vendor Email
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Vendor Email" @input="updateVendor($event.target.value)" v-model="vendor.email">

      <label class="block text-gray-700 text-sm font-bold mb-2">
        Phone / Fax
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Phone" v-model="vendor.phone" @input="updateVendor($event.target.value)">

      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        @input="updateVendor($event.target.value)" type="text" placeholder="Fax" v-model="vendor.fax">

      <!-- <label class="block text-gray-700 text-sm font-bold mb-2">
           Logo
           <img :src="newImg" v-if="newImg != ''" class="w-20 h-20"/>
        </label>
        <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="logo"
        accept="image/jpeg, image/png, image/tiff" type="file" placeholder="" @change="uploadLogo"> -->
    </div>

    <div class="mb-4 m-5 w-1/2">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Vendor Address
      </label>

      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Street Name" @input="updateVendor($event.target.value)" v-model="vendor.address.line1">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Apt/Unit #" @input="updateVendor($event.target.value)" v-model="vendor.address.line2">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="City" @input="updateVendor($event.target.value)" v-model="vendor.address.city">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="State" @input="updateVendor($event.target.value)" v-model="vendor.address.state">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Zip" @input="updateVendor($event.target.value)" v-model="vendor.address.zip">
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, toRefs, defineEmits } from 'vue'

const emit = defineEmits(['updateVendor'])

const props = defineProps({
  vendor_data: Object,
})
const { vendor_data } = toRefs(props);

const vendor = ref({
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
const updateVendor = (value) => {
  // console.log(value)

  emit('updateVendor', vendor.value)
}
vendor.value = vendor_data.value
</script>