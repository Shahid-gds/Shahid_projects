<template>
    <h3 class="text-xl mt-5 font-bold">Commodity</h3>
    <div class="p-2 text-right w-full mx-auto">
        <span
            class="font-medium bg-blue-400 py-2 px-6 rounded-md text-white dark:text-blue-500 hover:bg-blue-500 hover:no-underline cursor-pointer"
            @click="addItem()">Add</span>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 w-11/12 mx-auto">
        <table class="w-full overflow-x-auto text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="p-2">
                        Commodity
                    </th>
                    <th scope="col" class="p-2">
                        Quantity
                    </th>
                    <th scope="col" class="p-2">
                        Weight
                    </th>
                    <th class="p-2 text-right">
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(entry, idx) in cargo"
                    :key="idx">
                    <th scope="row"
                        class="p-2 font-medium text-gray-900 flex items-center justify-center dark:text-white whitespace-nowrap">
                        <p class="text-blue-400 mr-2">{{ idx }}</p>
                        <input class="border-b border-gray-200" @input="updateCargo($event.target.value)"
                            v-model="entry.item" type="text" />
                    </th>
                    <td class="p-2">
                        <input class="border-b border-gray-200" @input="updateCargo($event.target.value)"
                            v-model="entry.count" type="text" />
                    </td>
                    <td class="p-2">
                        <input class="border-b border-gray-200" @input="updateCargo($event.target.value)"
                            v-model="entry.weight" type="text" />
                    </td>
                    <td class="p-2 text-right">
                        <span class="font-medium text-red-600 dark:text-blue-500 hover:underline cursor-pointer"
                            @click="deleteRow(idx)">Delete</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { ref, defineProps, toRefs, defineEmits } from 'vue'

const emit = defineEmits(['updateCargo'])

const cargo = ref([{ count: 5000, item: "Frozen Salmon", status: "", weight: 1000, stock_id: "2424" }])

// const props = defineProps({
// bol_gen: Object,
// })
// const { bol_gen } = toRefs(props);

const addItem = () => {
    console.log(cargo.value)
    let new_post = { count: 5000, item: "Frozen Salmon", weight: 1000 }
    new_post["stock_id"] = cargo.value.length
    cargo.value.push(new_post)
}
const deleteRow = (idx) => {
    cargo.value.splice(idx, 1)
}
const updateCargo = (value) => {
    // console.log(value)
    // console.log('new value', vendor.value)

    emit('updateCargo', cargo.value)
}
updateCargo()
</script>