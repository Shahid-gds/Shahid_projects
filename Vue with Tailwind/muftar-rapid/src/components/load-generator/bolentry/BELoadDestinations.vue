<template>
  <h3 class="text-xl font-bold ">Load Destinations</h3>
  <!-- {{ destinations }} -->
  <div class="p-2 text-right w-full mx-auto">
    <span
      class="font-medium bg-blue-400 py-2 px-6 rounded-md text-white dark:text-blue-500 hover:bg-blue-500 hover:no-underline cursor-pointer"
      @click="addItem()">Add</span>
  </div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 mx-auto w-full">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-2">
            Stop
          </th>
          <th scope="col" class="p-2">
            Arrival Time
          </th>
          <th scope="col" class="p-2">
            Name
          </th>
          <th scope="col" class="p-2">
            Street Address / Unit #
          </th>
          <th scope="col" class="p-2">
            City / State/ Zip
          </th>
          <th scope="col" class="p-2">
            Contact
          </th>
        </tr>
      </thead>
      <tbody class="pb-10">
        <tr class="bg-white border-b py-4 dark:bg-gray-800 dark:border-gray-700 " v-for="(entry, idx) in destinations"
          :key="idx">
          <td scope="row" class="p-1 font-medium text-gray-900 flex items-center justify-center whitespace-nowrap">
            <p class="text-blue-400 mr-2">{{ idx }}</p>
            <select v-model="entry.locationType" id="type"
              class="block w-34 text-xs py-2 px-3 rounded-md bg-white border border-gray-300 appearance-none leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
              <option value="">Select One</option>
              <option v-for="st in stop_types" :key="st" :value="st">{{ st }}</option>
            </select>
          </td>
          <td class="p-2">
            <label>{{ $fmtDate(entry.timing.expected, true) }}</label>
            <!-- <input class="border-b border-gray-200" v-model="entry.timing.expected" type="text" /> -->
            <DatePicker :idx="idx" @setDateTime="setEpoch" />
          </td>
          <td class="p-2">
            <input class="border-b border-gray-200" v-model="entry.address.locationName" type="text" />
          </td>
          <td class="p-2 space-y-3">
            <input class="border-b border-gray-200" v-model="entry.address.line1" placeholder="Street Address"
              type="text" />
            <input class="border-b border-gray-200" v-model="entry.address.line2" placeholder="Unit #" type="text" />
            <p class="text-xs underline cursor-pointer" @click="showMapModal">
              Select by Map
            </p>
          </td>
          <td class="p-2">
            <input class="border-b border-gray-200" v-model="entry.address.city" placeholder="City" type="text" />
            <input class="border-b border-gray-200" v-model="entry.address.state" placeholder="State" type="text" />
            <input class="border-b border-gray-200" v-model="entry.address.zip" placeholder="Zip" type="text" />
          </td>
          <td class="p-2">
            <input class="border-b border-gray-200" v-model="entry.contact.name" placeholder="Name" type="text" />
            <input class="border-b border-gray-200" v-model="entry.contact.phone" placeholder="Phone" type="text" />
          </td>
          <td class="p-2 text-right" v-if="locations.length > 2">
            <span class="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
              @click="deleteRow(idx)">Delete</span>
          </td>
        </tr>
        <tr></tr>
      </tbody>
    </table>

    <Teleport to="body">
      <AddAddressMapModal @closeModal="closeModal" v-if="showModal" />
    </Teleport>

  </div>
</template>
<script setup>
import { ref, defineProps, toRefs, defineEmits } from 'vue'
import DatePicker from "@/components/snippets/DatePicker.vue"
import AddAddressMapModal from './modals/AddAddressMapModal.vue'


const emit = defineEmits(['updateDestinations'])
const showModal = ref(false);

const stop_types = ['pickup', 'dropoff']

const props = defineProps({
  destinations: Array,
})
const { destinations } = toRefs(props);

const locations = ref([
  {
    id: "0",
    locationType: 'pickup',
    address: {
    locationName: 'Best Deal Brokers',
      line1: "20 W 34th St.",
      line2: '',
      city: "New York",
      state: "NY",
      zip: "10001",
      country: 'US',
    },
    contact: { email: '', name: '', phone: '' },
    coordinates: { latitude: 29.53885, longitude: -95.44744 },
    metadata: { pu: "4445063" },
    status: "",
    notes: '',
    timing: {
      actual: null,
      expected: 1679947780,
      elapsed: 0
    }
  },
  {
    id: "1",
    locationType: 'dropoff',
    address: {
    locationName: 'Best Deal Brokers',
      line1: "1600 Pennsylvania Avenue NW",
      line2: '',
      city: "Washington",
      state: "DC",
      zip: "20500",
      country: 'US',

    },
    contact: { email: '', name: '', phone: '' },
    coordinates: { latitude: 29.53885, longitude: -95.44744 },
    metadata: { pu: "4445063" },
    status: "",
    notes: '',
    timing: {
      actual: 0,
      expected: 0, 
      elapsed: 0
    }
  },
])


const closeModal = (val) => {
  
  showModal.value = val
}

const showMapModal = () => {
  showModal.value = true;
}

const addItem = () => {
  let new_post = {
    id: "2",
    locationType: 'dropoff',
    start_date: '6/12/2022',
    end_date: '6/12/2022',
    name: 'Best Deal Brokers',
    address: {
      locationName: '',
      line1: '123 Main Street',
      line2: '',
      city: 'Anytown',
      state: 'ST',
      country: 'USA',
      zip: '30005'
    },
    contact: { name: '', phone: '' },
    coordinates: { latitude: 29.53885, longitude: -95.44744 },
    metadata: {},
    notes: '',
    timing: {
      actual: 0,
      expected: 0, 
      elapsed: 0
    }
  }
  new_post["id"] = locations.value.length
  locations.value.push(new_post)
  console.log(locations.value)
}
const deleteRow = (idx) => {
  locations.value.splice(idx, 1)
}

const updateDestinations = (value) => {
  // console.log(value)
  // console.log('new value', vendor.value)

  emit('updateDestinations', locations.value)
}
const setEpoch = (epoch, idx) => {
  locations.value[idx].timing.expected = epoch
  console.log('setted val', locations.value[idx])
  emit('updateDestinations', locations.value)
}

updateDestinations()

locations.value = destinations.value
</script>