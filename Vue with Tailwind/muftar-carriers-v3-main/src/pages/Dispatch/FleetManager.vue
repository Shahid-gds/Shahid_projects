<template>
    <div class="flex ">
        <div class=" bg-gray-100 p-2 rounded-r-lg" style="width:30%;">

            <div class="relative">
                <h2 class="text-xl font-bold m-0 text-primary mb-2">Fleet Manager</h2>
                <div class="px-2 py-2 bg-white rounded-md m-3 shadow">
                    <div class="rounded-md flex bg-white space-x-2 mx-2  focus-within:ring-2 ring-primary">
                        <img class="h-5 w-5 my-auto opacity-50 m-1" src="@/assets/icons/dispatch/search.svg" alt="">
                        <input autocomplete="off"
                            class=" h-full text-left rounded-md text-md border-none focus:outline-none py-4 w-full "
                            name="search" placeholder="Search here" v-model="driver_search_query">
                    </div>
                </div>

            </div>
            <ul class="py-1 overflow-y-auto w-full h-screen overflow-x-hidden p-4 pb-56" v-if="!loading">
                <li v-for="(dr, idx) in drivers_on_board" :key="idx" class="relative mb-2 p-4 w-full bg-white rounded-xl"
                    :class="{ 'border-blue-200 border-r-2 border-b-2 shadow-md': dr == current_driver }"
                    @click="setDriver(dr)">
                    <div class="flex items-center w-full select-none focus:outline-none relative">
                        <div class="flex w-full cursor-pointer  px-4 py-2">
                            <img class="w-10 h-10 mr-3 rounded-full" :src="dr.photo" />
                            <div class="transform translate-y-0.5 w-full">
                                <div class="flex flex-col justify-between items-start w-60">
                                    <p class="text-md m-0 font-bold" v-if="dr.fname != ''" style="color: rgb(61, 90, 169);">
                                        {{ dr.fname }} {{ dr.lname }}</p>
                                    <p class="text-md m-0 font-bold" style="color: rgb(61, 90, 169);" v-else>
                                        {{ getName(dr) }}</p>
                                    <p class="text-xs m-0 text-gray-400 italic">{{ dr.id }}</p>
                                </div>
                                <!-- <p class="text-xs m-0 text-gray-400 italic">{{dr.id}}</p> -->
                                <p class="text-xs m-0 text-gray-400 italic">
                                    ({{ Number(dr?.currentLocation?.latitude).toFixed(5) }},
                                    {{ Number(dr?.currentLocation?.longitude).toFixed(5) }})</p>
                                <div class="flex items-center gap-4">
                                    <div class="flex gap-1">
                                        <div v-if="dr.status === 'available'" class="flex space-x-2">
                                            <img class="w-5 h-5" src="@/assets/icons/compliance/view.svg" alt="">
                                            <p class="text-sm m-0 text-green-400">Available</p>
                                        </div>
                                        <div v-else>
                                            <!-- <p class="text-sm m-0 text-gray-400">{{ dr.load_assignment.load }}</p> -->
                                            {{ (dr.loadID).substring(0, 5) }}<span class="text-xl font-bold">...</span>{{
                                                (dr.loadID).substring(dr.loadID.length - 5)
                                            }}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <!-- COMPONENT REGISTERED GLOBALLY INSIDE main.js -->
            <GlobalLoader v-if="drivers_loading" />
        </div>
        <div style="width:70%; height:100vh" :class="{ 'invisible': loading }">
            <div>
                <router-view @closeDriver="closeDriver" :current_driver="current_driver" :drivers_board="drivers_board" />
            </div>
        </div>
    </div>
</template>'

<script setup>
import axios from 'axios'
import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useApi } from '@/composables/useApi'

import { useQuery } from '@vue/apollo-composable'
import { GET_ALL_DRIVERS } from '@/_graphql/queries'


const { result, loading: drivers_loading } = useQuery(GET_ALL_DRIVERS)


const drivers = computed(() => result.value?.allDrivers ?? []);

// const drivers = computed(() => result?.value.allDrivers ?? []);

watch(drivers, (newDrivers) => {
    console.log(newDrivers)
})

const { api_path } = useApi()

const store = useStore();
const drivers_board = ref([]);

const loading = ref(false);
const driver_search_query = ref('');
const current_driver = ref(null)

const userID = computed(() => store.state.userID);
const orgID = computed(() => store.state.orgID);

const drivers_on_board = computed(() => {
    if (driver_search_query.value.trim().length > 0) {
        return drivers_board.value.filter((driver) => driver.fname.toLowerCase().includes(driver_search_query.value.trim().toLocaleLowerCase()))
    }
    return drivers_board.value;
})

const getName = ({ fname, lname, email }) => {
    if (fname || lname)
        return `${fname} ${lname}`
    return email;
}


const setDriver = (driver) => {
    current_driver.value = driver;
}


const closeDriver = () => {
    current_driver.value = null;
}

const getAllDrivers = async () => {
    loading.value = true;
    const config = {
        headers: {
            userID: userID.value,
            orgID: orgID.value
        }
    }

    try {

        const res = await axios.get(api_path.value + "fleet/drivers/all", config);
        drivers_board.value = res.data.result;
        console.log(drivers_board.value)
        // drivers_board.value.forEach((driver) => {
        //     console.log(driver.currentLocation)
        // })
        // current_driver.value = res.data.result[0];
        loading.value = false;


    } catch (error) {

        loading.value = false;
        console.log(error)
    }
}

getAllDrivers();
</script>
  

<style scoped></style>