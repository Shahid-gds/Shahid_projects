<template>
  <div class="flex space-x-2">
    <div class="space-y-2">
      <label class="block text-gray-700 text-sm font-bold " for="username">
        Load Info
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Pieces" @input="updateLoadInfo" v-model="stats.pieces">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Spaces" @input="updateLoadInfo" v-model="stats.spaces">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Act Wgt" @input="updateLoadInfo" v-model="stats.act_wgt">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="As Wgt" @input="updateLoadInfo" v-model="stats.as_wgt">
    </div>

    <div class="space-y-2">
      <label class="block text-gray-700 text-sm font-bold mt-5" for="username">

      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Miles" @input="updateLoadInfo" v-model="stats.miles">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Pallet" @input="updateLoadInfo" v-model="stats.pallets">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Type" @input="updateLoadInfo" v-model="stats.load_type">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Trailer" @input="updateLoadInfo" v-model="stats.trailer">
    </div>
  </div>
  <!-- fifth -->
  <div class="flex space-x-2 ">
    <div class="space-y-2">
      <label class="block text-gray-700 text-sm font-bold " for="username">
        Pay Codes
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Load" @input="updateLoadInfo" v-model="stats.table[0].pay_code">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Spaces" @input="updateLoadInfo" v-model="stats.table[1].pay_code">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="Act Wgt" @input="updateLoadInfo" v-model="stats.table[2].pay_code">
    </div>

    <div class="space-y-2">
      <label class="block text-gray-700 text-sm font-bold " for="username">
        Rates
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="$0.00" @input="updateLoadInfo" v-model="stats.table[0].rate">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="$0.00" @input="updateLoadInfo" v-model="stats.table[1].rate">
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text" placeholder="$0.00" @input="updateLoadInfo" v-model="stats.table[2].rate">
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref, toRefs, defineEmits } from 'vue'

const emit = defineEmits('updateLoadInfo');

const stats = ref({
  pieces: 1888,
  miles: 260,
  spaces: 40,
  pallets: 0,
  act_wgt: 42000,
  as_wgt: 42000,
  load_type: 'Drayage',
  trailer: '40\' IMDL Container',
  table: [
    { pay_code: 'Load', pay_type: 'Flat', rate: 2300, total: 2300 },
    { pay_code: 'Overweight', pay_type: '', rate: 100, total: 100 },
    { pay_code: 'Detention', pay_type: '', rate: 150, total: 150 },
  ],
}
)


const updateLoadInfo = () => {
  emit('updateLoadInfo', stats.value);
}

const props = defineProps({
  bol_gen: Object,
})
const { bol_gen } = toRefs(props);
stats.value = bol_gen.value.load.stats;
</script>