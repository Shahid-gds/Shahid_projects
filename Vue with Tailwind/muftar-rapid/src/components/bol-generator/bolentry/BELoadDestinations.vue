<template>
  <div class=" flex w-11/12 mx-auto justify-between">
    <h3 class="text-xl font-bold my-auto">Load Destinations</h3>
    <span class="font-medium text-white bg-blue-400 hover:bg-blue-500 py-2 px-4 rounded-md   cursor-pointer"
      @click="addItem">Add</span>
  </div>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 w-11/12 mx-auto">

    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-2">
            Stop
          </th>
          <th scope="col" class="p-2">
            From
          </th>
          <th scope="col" class="p-2">
            To
          </th>
          <th scope="col" class="p-2">
            Name / Address
          </th>
          <th scope="col" class="p-2">
            City / Phone
          </th>
          <th scope="col" class="p-2">
            State / Zip
          </th>
          <th scope="col" class="p-2">
            Ref / Contact
          </th>
          <th scope="col" class="p-2">
            Appt / Appt Ref
          </th>

        </tr>
      </thead>
      <tbody class="pb-10">
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(entry, idx) in locations"
          :key="idx">
          <th scope="row"
            class="p-2 font-medium text-gray-900 flex items-center justify-center dark:text-white whitespace-nowrap">
            <p class="text-blue-400 mr-2">{{ idx }}</p>
            <input class="border-b border-gray-200" @input="updateLoadDestination" v-model="entry.stop_kind"
              type="text" />
          </th>
          <td class="p-2">
            <input class="border-b border-gray-200" @input="updateLoadDestination" v-model="entry.start_date"
              type="text" />
          </td>
          <td class="p-2">
            <input class="border-b border-gray-200" @input="updateLoadDestination" v-model="entry.end_date"
              type="text" />
          </td>
          <td class="p-2">
            <input class="border-b border-gray-200" @input="updateLoadDestination" v-model="entry.name" type="text" />
            <br />
            <input class="border-b border-gray-200" @input="updateLoadDestination" v-model="entry.address.line1"
              type="text" />
          </td>
          <td class="p-2">
            <input class="border-b border-gray-200" @input="updateLoadDestination" v-model="entry.address.city"
              type="text" />
            <input class="border-b border-gray-200" @input="updateLoadDestination" v-model="entry.phone" type="text" />
          </td>
          <td class="p-2">
            <input class="border-b border-gray-200" @input="updateLoadDestination" v-model="entry.address.state"
              type="text" />
            <input class="border-b border-gray-200" @input="updateLoadDestination" v-model="entry.address.zip"
              type="text" />
          </td>
          <td class="p-2">
            <input class="border-b border-gray-200" @input="updateLoadDestination" v-model="entry.ref_contact"
              type="text" />
          </td>
          <td class="p-2">
            <input class="border-b border-gray-200" @input="updateLoadDestination" v-model="entry.appt_ref"
              type="text" />
          </td>
          <td class="p-2 text-right">
            <span class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
              @click="deleteRow(idx)">Delete</span>
          </td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref, defineProps, toRefs, defineEmits } from 'vue'


const emit = defineEmits('updateLoadDestination')

const props = defineProps({
  bol_gen: Object
})

const { bol_gen } = toRefs(props)


const addItem = () => {

  let new_location = {
    stop_idx: 0,
    stop_kind: 'pickup',
    start_date: '6/12/2022',
    end_date: '6/12/2022',
    name: 'Best Deal Brokers',
    address: {
      line1: '123 Main Street',
      line2: '',
      city: 'Anytown',
      state: 'ST',
      country: 'USA',
      zip: '30005'
    },
    ref_contact: '',
    appt_ref: 'no',
    notes: 'Reefer\nContainer\nSeal\nSSL-CMD\nETA 6/15'
  };

  locations.value.push(new_location);
}

const deleteRow = (idx) => {
  locations.value.splice(idx, 1)
  emit('updateLoadDestination', locations.value)
}



const locations = ref([
  {
    stop_idx: 1,
    stop_kind: 'pickup',
    start_date: '6/12/2022',
    end_date: '6/12/2022',
    name: 'Best Deal Brokers',
    address: {
      line1: '123 Main Street',
      line2: '',
      city: 'Anytown',
      state: 'ST',
      country: 'USA',
      zip: '30005'
    },
    ref_contact: '',
    appt_ref: 'no',
    notes: 'Reefer\nContainer\nSeal\nSSL-CMD\nETA 6/15'
  },
  {
    stop_idx: 2,
    stop_kind: 'dropoff',
    start_date: '6/12/2022',
    end_date: '6/12/2022',
    name: 'Best Deal Brokers',
    address: {
      line1: '123 Main Street',
      line2: '',
      city: 'Anytown',
      state: 'ST',
      country: 'USA',
      zip: '30005'
    },
    ref_contact: '',
    appt_ref: 'no',
    notes: 'Reefer\nContainer\nSeal\nSSL-CMD\nETA 6/15'
  }
])


const updateLoadDestination = () => {
  emit('updateLoadDestination', locations.value)
}


locations.value = bol_gen.value.load.locations;
// updateLoadDestination();
</script>