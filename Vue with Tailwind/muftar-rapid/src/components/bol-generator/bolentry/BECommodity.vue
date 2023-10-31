<template>
    <div class="flex justify-between w-11/12 mx-auto mt-4">
        <h3 class="text-xl font-bold my-auto">Commodity</h3>
        <span class="font-medium bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            @click="addItem">Add</span>
    </div>
    <div class="relative shadow-md w-11/12 overflow-x-auto sm:rounded-lg mt-5  mx-auto">
        <table class="w-full overflow-x-auto text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="p-2">
                        Commodity
                    </th>
                    <th scope="col" class="p-2">
                        Description/ Reference
                    </th>
                    <th scope="col" class="p-2">
                        Pieces / Space
                    </th>
                    <th scope="col" class="p-2">
                        Weight
                    </th>

                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 overflow-y-auto"
                    v-for="(entry, idx) in commodity" :key="idx">
                    <th scope="row"
                        class="p-2 font-medium text-gray-900 flex items-center justify-center dark:text-white whitespace-nowrap">
                        <p class="text-blue-400 mr-2">{{ idx }}</p>
                        <input class="border-b border-gray-200" @input="updateCommodity" v-model="entry.item"
                            type="text" />
                    </th>
                    <td class="p-2">
                        <input class="border-b border-gray-200" @input="updateCommodity" v-model="entry.description"
                            type="text" />
                    </td>
                    <td class="p-2">
                        <input class="border-b border-gray-200" @input="updateCommodity" v-model="entry.pieces"
                            type="text" /> <br />
                        <input class="border-b border-gray-200" @input="updateCommodity" v-model="entry.spaces"
                            type="text" />
                    </td>
                    <td class="p-2">
                        <input class="border-b border-gray-200" @input="updateCommodity(idx)" v-model="entry.weight"
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
import { ref, defineProps, defineEmits, toRefs } from 'vue'


const emit = defineEmits(['updateCommodity'])


// const c_commodity = ref({ item: 'Frozen Foods', description: 'Frozen Tilapia', pieces: 1863, spaces: 40, weight: 42000 })

const commodity = ref([{ item: 'Frozen Foods', description: 'Frozen Tilapia', pieces: 1863, spaces: 40, weight: 42000 }])

const props = defineProps({
    bol_gen: Object,
})
const { bol_gen } = toRefs(props);



const addItem = () => {

    let new_commodity = { item: 'Frozen Foods', description: 'Frozen Tilapia', pieces: 1863, spaces: 40, weight: 42000 }

    commodity.value.push(new_commodity);
    
}


const updateCommodity = () => {
    emit('updateCommodity', commodity.value);
}

commodity.value = bol_gen.value.load.commodity;
const deleteRow = (idx) => {
    commodity.value.splice(idx, 1);
    emit('updateCommodity', commodity.value);
}

// updateCommodity();
</script>