<template>
    <div>
        <div v-if="loading">
            <p class="text-center">loading</p>
        </div>

        <div v-if="!loading">
            <div class="h-screen " v-if="load_queue.length > 0">
                <div class="border bg-white rounded-md w-96 my-4 shadow">
                    <input class="border-none rounded-md w-full focus:ring-0 placeholder:text-gray-400 text-gray-400"
                        placeholder="Search Queued Loads" type="text">
                </div>
                <div class="grid grid-cols-2 pb-64 gap-3 mx-4">
                    <div class=" bg-white p-4  mt-1  rounded-md text-gray-500 shadow-sm shadow-primary"
                        v-for="driver_load in load_queue" :key="driver_load.id">
                        <div class="flex flex-col">
                            <div class="flex justify-between">
                                <p class="text-center text-blue-400 font-bold">
                                    {{ driver_load.confirmation_number }}
                                </p>
                                <p class="text-center text-gray-400 font-bold">

                                    {{ driver_load.status }}
                                </p>
                            </div>
                            <div class="text-xs italic text-gray-300">
                                {{ driver_load.id }}
                            </div>
                            <div class="text-gray-400 font-bold">
                                {{ $relativeDate(driver_load.created) }}
                            </div>

                            <div class="flex flex-row justify-between">
                                <!-- CARD LEFT SIDE WITH ICONS -->
                                <div class="flex flex-row">
                                    <div class="flex flex-col my-auto text-gray-400">
                                        <mdicon name="map-marker-outline" />
                                        <p class="text-center text-xl font-extrabold -mt-2">|</p>
                                        <p class="text-center text-xl  -mt-2">o</p>
                                        <p class="text-center text-xl font-extrabold -mt-4">|</p>
                                        <mdicon name="truck-outline" />
                                    </div>
                                    <!-- CARD RIGHT SIDE WITH TEXT -->
                                    <div class="flex flex-col my-auto space-y-1 ml-3 text-gray-400 font-medium">
                                        <p>{{ driver_load.destinations[0].location_name }}</p>
                                        <p>{{ driver_load.destinations[0].address.city }},{{
                                            driver_load.destinations[0].address.state
                                        }},{{ driver_load.destinations[0].address.zip }}</p>
                                        <hr class="my-8 h-px bg-blue-200 border-0 dark:bg-gray-700">
                                        <p>{{ driver_load.destinations[1].location_name }}</p>
                                        <p>{{ driver_load.destinations[1].address.city }},{{
                                            driver_load.destinations[1].address.state
                                        }},{{ driver_load.destinations[1].address.zip }}</p>
                                    </div>
                                </div>
                                <!-- CARD PRICE -->
                                <div class="flex flex-col space-y-2 mt-20">

                                    <div class="flex flex-row justify-center">
                                        <mdicon name="currency-usd" class="text-blue-400" />
                                        <p class="text-lg font-bold text-gray-400">{{
                                            $displayPrice(driver_load.quote.price)
                                        }}
                                        </p>
                                    </div>
                                    <a :href="`https://rapid.muftar.com/${driver_load.id}`" target="_blank"
                                        class="p-2 w-36 text-center bg-primary mx-auto rounded-md text-white uppercase">View
                                        Load</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center h-[85vh]" v-if="load_queue.length <= 0">
                <p class="text-2xl">You do not have any future loads booked</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios';


import { useApi } from '@/composables/useApi'

const { api_path } = useApi();
const store = useStore();

const load_queue = ref([])
const loading = ref(false);


const orgID = computed(() => store.state.orgID);

const getAllLoadQueue = async () => {
    loading.value = true;
    const config = {
        headers: {
            orgID: orgID.value
        }
    }

    try {
        const res = await axios.get(api_path.value + 'driver/load/queue/all', config);
        load_queue.value = res.data.result;
        console.log(load_queue.value)
        loading.value = false;

    } catch (error) {
        loading.value = false;
        console.log(error)
    }
}


getAllLoadQueue();

</script>