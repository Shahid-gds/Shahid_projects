<template>
    <div class="flex flex-col ">
        <!-- <div v-if="test_loading">Loading...</div>
        <div v-if="!test_loading">
            {{ allLoads }}
        </div> -->
        <div v-if="loading" class="py-64">
            <span class="flex h-36 w-36 mx-auto items-center animate-bounce">
                <span class="animate-ping absolute inline-flex h-36 w-36 rounded-full bg-blue-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-36 w-36 bg-blue-500 opacity-80"></span>
            </span>
        </div>
        <div v-if="!loading" class="overflow-x-auto">
            <div class="m-2 flex flex-row justify-between px-2">
                <div>


                    <p class="my-auto flex space-x-1">
                        <span>Showing </span>
                        <span class="font-bold text-blue-500"> {{ min }}</span>
                        <span>result out of</span>
                        <span class="font-bold text-blue-500">{{ max }}</span>
                    </p>
                    <div v-if="!loading" class="flex space-x-5  py-2">
                        <div @click="getPaginatedData(currentPage - 1)">Prev</div>
                        <div v-for="item in maxPages" class="cursor-pointer px-2  rounded-md bg-blue-200"
                            :class="{ 'font-bold text-xl': item === currentPage }" :key="item"
                            @click="getPaginatedData(item)">
                            {{ item }}
                        </div>
                        <div @click="getPaginatedData(currentPage + 1)">Next</div>
                    </div>
                </div>
                <div>
                    <input class=" border p-2 rounded-md focus:ring-0 w-96" placeholder="Search Table.." type="text">

                </div>

            </div>
            <table class="px-8 text-sm  text-left mx-auto text-gray-500 dark:text-gray-400 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th v-for="header in tableHeaders" :key="header" scope="col" class="p-2">{{ header }}</th>
                    </tr>
                </thead>
                <tbody class="pb-10">
                    <tr class="bg-white relative" v-for="(load, idx) in sortedTableData" :key="idx">
                        <td class="">
                            <span
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer mx-auto"
                                @click="gotoLoadInfo(load.hashcode, idx)">View</span>
                        </td>
                        <td class="p-2">
                            <p class="flex items-center text-xs text-gray-500 -bottom-1">
                                {{ (load.hashcode).substring(0, 7) }}
                                <span class="text-xl font-bold">...</span>
                                {{ (load.hashcode).substring(load.hashcode.length - 5) }}
                            </p>
                        </td>
                        <td class="p-2">
                            <p class="flex items-center text-xs text-gray-500 -bottom-1">
                                {{ (load.party[0].id).substring(0, 7) }}
                                <span class="text-xl font-bold">...</span>
                                {{ (load.party[0].id).substring(load.party[0].id.length - 5) }}
                            </p>
                        </td>
                        <!-- <td class="p-2">partners only</td> -->
                        <td class="p-2">{{ $relativeDate(load.created) }} {{ $fmtDate(load.created) }}</td>
                        <td class="p-2">
                            <div>
                                <p> {{ load.destinations[0].timing.expected === 0 ? 'Unknown' :
                                    $fmtDate(load.destinations[0].timing.expected, true) }}</p>
                                <p>{{ load.destinations[0].address.line1 }}, {{ load.destinations[0].address.line2 }}
                                </p>
                                <p>{{ load.destinations[0].address.city }}, {{ load.destinations[0].address.state }} {{
                                    load.destinations[0].address.zip
                                }} </p>
                            </div>
                        </td>
                        <td class="p-2">
                            <p>{{ load.destinations[load.destinations.length - 1].timing.expected === 0 ? 'Unknown'
                                :
                                $fmtDate(load.destinations[load.destinations.length - 1].timing.expected,
                                    true)
                            }}
                            </p>
                            <p>{{ load.destinations[load.destinations.length - 1].address.line1 }}, {{
                                load.destinations[load.destinations.length - 1].address.line2
                            }}</p>
                            <p>{{ load.destinations[load.destinations.length - 1].address.city }}, {{
                                load.destinations[load.destinations.length - 1].address.state
                            }} {{
    load.destinations[load.destinations.length - 1].address.zip
}} </p>
                        </td>
                        <td class="p-2">{{ load.status }}</td>
                        <td class="p-2 font-bold">{{ $displayPrice(load.quote.price) }}</td>
                        <!-- <div class="absolute h-1 bg-gray-200 bottom-0 w-11/12"></div> -->
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="!loading" class="flex space-x-2 bg-gray-50 py-2 px-2">
            <div class="my-auto">
                <button>Prev</button>
            </div>
            <div v-for="item in maxPages" :key="item" class="flex space-x-2">
                <button class="cursor-pointer px-2  rounded-md bg-blue-200"
                    :class="{ 'font-bold text-xl': item === currentPage }" @click="getPaginatedData(item)">
                    {{ item }}
                </button>
            </div>

            <div class="my-auto">
                <button>Next</button>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios';
// import gql from 'graphql-tag'
// import { useLazyQuery } from '@vue/apollo-composable'

// const GET_ALL_LOADS = gql`

// const { result, load, loading: test_loading } = useLazyQuery(GET_ALL_LOADS)

// const allLoads = computed(() => result.value?.allLoads ?? [])

// load();

const tableData = ref([])
const maxPages = ref(null)
const currentPage = ref(null);
const loading = ref(false);
const min = ref(null);
const max = ref(null);
const tableHeaders = ['More Info', 'Post ID', 'Requester', 'Timestamp', 'From Address', 'To Address', 'Status', 'Rate ($)']


const getPaginatedData = async (page) => {

    currentPage.value = page;
    loading.value = true;
    try {
        const config = {
            headers: {
                api_key: '90t438hgreu0a-t4308wfy2wf9dfs-290rfoaenlq31148d5a'
            }
        }
        const res = await axios.get(`https://muftardigital.pythonanywhere.com/rapid/loads?page=${currentPage.value}`, config)

        tableData.value = res.data.result;
        maxPages.value = res.data.max_page;
        currentPage.value = res.data.page;
        min.value = res.data.count.page_total;
        max.value = res.data.count.max;

        console.log(res.data)
        loading.value = false;
    } catch (error) {
        loading.value = false;
        console.error(error)
    }

}



const sortedTableData = computed(() => {
    const table = tableData;
    return table.value.sort((a, b) => b.created - a.created)
})

const gotoLoadInfo = (hashcode) => {
    window.open(`/${hashcode}`)
}

onMounted(() => {
    getPaginatedData(1);
    // fetchTableData()
})

</script>
  
<style>
/* Add your Tailwind CSS styles here */
</style>
  