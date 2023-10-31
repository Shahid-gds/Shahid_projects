<template>
  <div class="flex space-x-2 justify-center">
    <div class=" w-1/2">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Vendor Name
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" @input="updateVendor" placeholder="Vendor Name" v-model="vendor.name">

      <label class="block text-gray-700 text-sm font-bold mb-2">
        Vendor Email
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" @input="updateVendor" placeholder="Vendor Email" v-model="vendor.email">

      <label class="block text-gray-700 text-sm font-bold mb-2">
        Phone
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" @input="updateVendor" placeholder="Phone" v-model="vendor.phone">

      <label class="block text-gray-700 text-sm font-bold mb-2">
        Fax
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" @input="updateVendor" placeholder="Fax" v-model="vendor.fax">

      <!-- <label class="block text-gray-700 text-sm font-bold mb-2">
           Logo
           <img :src="newImg" v-if="newImg != ''" class="w-20 h-20"/>
        </label>
        <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="logo"
        accept="image/jpeg, image/png, image/tiff" type="file" placeholder="" @change="uploadLogo"> -->
    </div>

    <div class="w-1/2 flex flex-col space-y-3">
      <label class="block text-gray-700 text-sm font-bold ">
        Vendor Address
      </label>

      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" @input="updateVendor" placeholder="Street Name" v-model="vendor.address.line1">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" @input="updateVendor" placeholder="Apt/Unit #" v-model="vendor.address.line2">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" @input="updateVendor" placeholder="City" v-model="vendor.address.city">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" @input="updateVendor" placeholder="State" v-model="vendor.address.state">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" @input="updateVendor" placeholder="Zip" v-model="vendor.address.zip">
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, toRefs, defineEmits } from 'vue'

const emit = defineEmits(['updateVendor'])

const props = defineProps({
  bol_gen: Object,
})
const { bol_gen } = toRefs(props);

const vendor = ref({
  name: '',
  phone: '',
  fax: '',
  address: {
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  }
})
const updateVendor = (value) => {
  console.log(value)
  console.log('new value', vendor.value)
  emit('updateVendor', vendor.value)
}
vendor.value = bol_gen.value.vendor
</script>