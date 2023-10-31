<template>
      <div class="flex">
    <div class="mb-4 m-5 w-1/2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Carrier Name
      </label>
      <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Vendor Name" v-model="order.carrier.name">

      <label class="block text-gray-700 text-sm font-bold my-2" for="username">
        Location
      </label>
      <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Location" v-model="order.location">

      <label class="block text-gray-700 text-sm font-bold my-2" for="username">
        Port
      </label>
      <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="MC Number" v-model="order.port">

      <label class="block text-gray-700 text-sm font-bold my-2" for="username">
        B/L OR AWB NO
      </label>
      <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="MC Number" v-model="order.awb_no">

      <label class="block text-gray-700 text-sm font-bold my-2" for="username">
        Arrival Date
      </label>
      <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="MC Number" v-model="order.arrive_date">

      <label class="block text-gray-700 text-sm font-bold my-2" for="username">
        Local Delivery or Transfer By Delivery Order Issued To
      </label>
      <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="MC Number" v-model="order.issued_by">
      </div>

      <div class="mb-4 m-5 w-1/2">

        <label class="block text-gray-700 text-sm font-bold my-2" for="username">
          Entry-B/L No.
        </label>
        <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="MC Number" v-model="order.entry_no">

        <label class="block text-gray-700 text-sm font-bold my-2" for="username">
          Customer Reference No
        </label>
        <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="MC Number" v-model="order.customer_ref">

        <div class="mb-4 m-5">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Delivery To
          </label>

          <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Location Name" v-model="order.shipto.location_name">
          <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Street Name"
            v-model="order.shipto.address.line1"
            >
          <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Apt/Unit #"
            v-model="order.shipto.address.line2"
            >
          <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="City"
            v-model="order.shipto.address.city"
            >
          <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="State"
               v-model="order.shipto.address.state"
               >
          <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Zip"
               v-model="order.shipto.address.zip"
               >
        </div>

      </div>
    </div>
</template>
<script setup>
import {defineProps, toRefs, reactive} from 'vue'

const order = reactive({
    carrier:{name:''},
    location: '',
    issued_by: '',
    arrive_date: '',
    awb_no: '',
    port: '',
    entry_no: '',
    customer_ref: '',
    shipto:{
        location_name: '',
        address: {
            line1: '',
            line2: '',
            city: '',
            state: '',
            zip: '',
            country: ''
        }
    }
})

const props = defineProps({
    bol_gen: Object,
})
// const { bol_gen } = toRefs(props);
</script>