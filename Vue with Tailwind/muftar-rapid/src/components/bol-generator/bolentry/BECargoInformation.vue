<template>
    <div class="relative overflow-x-auto shadow-md space-y-2 ">
        <div class="flex flex-row justify-between">
            <h1 class="font-bold text-2xl my-auto"> Cargo Information</h1>
            <span class="font-medium px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md cursor-pointer"
                @click="addItem">Add</span>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-md">
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

                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(entry, idx) in stock_info"
                    :key="idx">
                    <th scope="row" class="p-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        <input class="border-b  border-gray-200" @input="updateCargo" v-model="entry.pkgs"
                            type="text" />
                    </th>
                    <td class="p-2">
                        <input class="border-b w-full border-gray-200" @input="updateCargo" v-model="entry.description"
                            type="text" />
                    </td>
                    <td class="p-2">
                        <input class="border-b border-gray-200" @input="updateCargo" v-model="entry.weight"
                            type="text" />
                    </td>
                    <td class="p-2 text-right">
                        <span class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                            @click="deleteRow(idx)">Delete</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { defineProps, ref, toRefs, defineEmits } from 'vue'


const emit = defineEmits('updateCargo')

const stock_info = ref([{
    pkgs: 0,
    description: ``,
    weight: 0,
}])

const props = defineProps({
    bol_gen: Object,
})
const { bol_gen } = toRefs(props);
stock_info.value = bol_gen.value.order.stock_info


const updateCargo = () => {
    emit('updateCargo', stock_info.value)
}

const addItem = () => {
    let new_stock = {
        pkgs: 0,
        description: `Frozen Tilapia`,
        weight: 0,
    }
    stock_info.value.push(new_stock);
}


const deleteRow = (idx) => {
    stock_info.value.splice(idx, 1);
    emit('updateCargo', stock_info.value)
}
</script>