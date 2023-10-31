<template>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="p-2">
                        No. OF PKGS
                    </th>
                    <th scope="col" class="p-2">
                        Description Of Articles, Special Marks & Exceptions
                    </th>
                    <th scope="col" class="p-2">
                        Weight
                    </th>
                    <th scope="col" class="p-2">
                    </th>
                   <td class="p-2 text-right">
                        <span  class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" @click="addItem('stock_info')">Add</span>
                    </td>
                </tr>
            </thead>
            <tbody >
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(entry, idx) in cargo" :key="idx">
                    <th scope="row" class="p-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        <input class="border-b border-gray-200" v-model=" entry.count"   type="text" />
                    </th>
                    <td class="p-2">
                      <input class="border-b border-gray-200" v-model=" entry.item"   type="text" />
                    </td>
                    <td class="p-2">
                      <input class="border-b border-gray-200" v-model=" entry.weight"   type="text" />
                    </td>
                    <td class="p-2 text-right">
                        <span class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" @click="deleteRow('stock_info', idx)">Delete</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import {ref, defineProps, toRefs, defineEmits} from 'vue'

const emit = defineEmits(['updateCargo'])

const cargo = ref([
            {
            count: 5000,
            item: "Frozen Salmon",
            weight: 1000
        }
        ])

const props = defineProps({
    bol_gen: Object,
})
// const { bol_gen } = toRefs(props);

const deleteRow = (val, idx) => {
    console.log(val, idx)
}


const updateCargo = (value) =>{
  // console.log(value)
  // console.log('new value', vendor.value)

  emit('updateCargo', cargo.value)
}
</script>