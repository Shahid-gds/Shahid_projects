<template>
  <div class="flex">
    <div class="mb-4 m-5 w-1/2">
      <label class="block text-gray-700  font-bold mb-2" for="username">
        Rate Confirmation #
      </label>

      <input
        class="shadow appearance-none number_input border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Rate Confirmation #" @input="updateLoadInfo($event.target.value)"
        v-model="load.confirmation_number">

      <!-- <input class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Type"  @input="updateLoadInfo($event.target.value)" v-model="load.load_type"> -->

      <input
        class="shadow appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text" placeholder="Trailer" @input="updateLoadInfo($event.target.value)" v-model="load.trailer">
    </div>
    <div class="flex">
      <!-- <div class="mb-4 m-5">
           <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
             Pay Codes
           </label>
           <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Pay Code"  @input="updateLoadInfo($event.target.value)" v-model="load.quote_table[0].pay_code">
         </div> -->

      <div class="mb-4 m-5">
        <label class="block text-gray-700  font-bold mb-2" for="username">
          Rates
        </label>
        <p class="text-xs italic text-gray-600">The number input should be entered as pennies</p>

        <!-- INSERT VALUE INPUT -->
        <input v-if="!display_input" @focusout="display_input = true"
          class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight text-right  focus:outline-none focus:shadow-outline"
          type="number" placeholder="$0.00" @input="updateLoadInfo($event.target.value)" v-model="load.quote.ask">


        <!-- DISPLAY VALUE INPUT -->
        <input v-if="display_input" @focus="display_input = false"
          class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight text-right  focus:outline-none focus:shadow-outline"
          type="text" placeholder="$0.00" @input="updateLoadInfo($event.target.value)"
          :value="$displayPrice(load.quote.ask)">



        <!-- <input v-model="formattedValue" @input="formatValue" class="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring-indigo-200" /> -->

        <div class="flex items-center justify-start text-sm">
          <span class="block text-gray-700 font-bold my-2">Total Rate:</span>
          <span class=" ml-3">{{ $displayPrice(load.quote.ask) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, toRefs, defineEmits, computed, watch } from 'vue'

const emit = defineEmits(['updateLoadInfo'])


const value = ref(0)

const display_input = ref(true);
const load = ref({
  confirmation_number: 'mobile-test1',
  load_type: 'Drayage',
  quote: { ask: 0 },
  trailer: '40\' IMDL Container',
})
// const price = ref(0);
const formattedPrice = computed({
  get() {
    if (load.value.quote.ask === 0) {
      return 0;
    }
    return parseFloat(load.value.quote.ask).toFixed(2);
  },
  set(newValue) {
    if (newValue === 0) {
      load.value.quote.ask = 0;
    } else {
      load.value.quote.ask = parseFloat(newValue).toFixed(2);
    }
  }
});

watch(load.value.quote.ask, (newValue) => {
  formattedValue.value = newValue;
});

// Computed value to format the value as currency
const formattedValue = computed(() => {
  return value.value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
})

const formatValue = (event) => {
  value.value = parseInt(event.target.value.replace(/[^\d]/g, ''))
}




const props = defineProps({
  load_info: Object,
})
const { load_info } = toRefs(props);
const updateLoadInfo = (value) => {
  // console.log(value)
  // console.log('new value', vendor.value)
  emit('updateLoadInfo', load.value)
}
// const { bol_gen } = toRefs(props);
load.value = load_info.value
</script>


<style scoped>
/* Chrome, Safari, Edge, Opera */

/* STYLE TO REMOVE ARROWS from input type of  numbe */
.number_input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.number_input[type=number] {
  -moz-appearance: textfield;
}
</style>