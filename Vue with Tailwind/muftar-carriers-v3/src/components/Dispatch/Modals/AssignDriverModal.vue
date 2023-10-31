<template>
    <div>
        <div class="overflow-x-auto overflow-y-auto  fixed shadow-lg inset-0 z-50 flex justify-center items-center">
            <div class="relative mx-auto w-[60%] max-w-2xl">
                <div class="bg-white justify-center relative mx-auto shadow-lg rounded-xl">

                    <div class="bg-white   border-0 rounded-2xl shadow-lg p-5 space-y-7 relative flex flex-col  outline-none focus:outline-none"
                        style=" overflow-x: hidden; overflow-y: hidden;">
                        <!--header-->
                        <div class="flex items-start justify-between border-solid border-slate-200 rounded-t-xl">
                            <h3 class="w-full text-3xl font-semibold ml-7 text-black">
                                Assign load to driver
                            </h3>

                            <mdicon @click="hideModal()" class="my-auto cursor-pointer hover:bg-gray-200 rounded-md"
                                size="30" name="close" />
                        </div>
                        <p class="p-2 ml-5 text-black ">Load Number: {{ current_load.confirmationNumber }}</p>
                        <!-- <p>DISTANCE</p> -->
                        <!-- driver selected -->
                        <!-- {{current_driver}} -->
                        <section v-if="activeDriver == true">
                            <!-- {{current_driver.load_assignment}} -->
                            <p class="text-black my-2">{{ feedback.text }}</p>
                            <div class="flex items-center justify-between flex-wrap w-11/12 mx-auto p-2">
                                <div class="flex">
                                    <img class="w-12 h-12 mr-3 rounded-full" :src="current_driver.photo" />
                                    <div class="flex flex-col my-auto">
                                        <p class="text-black font-bold ">{{ getName(current_driver) }}</p>
                                        <p class="text-black text-xs">{{ current_driver._id }}</p>
                                        <!-- <p class="text-black text-sm">Last Load: {{
                                            current_driver.loadID
                                        }}</p> -->
                                    </div>
                                </div>
                                <div v-if="current_driver.status !== 'available'" class="flex flex-col space-y-1">
                                    <p class="text-xs text-gray-500 italic">
                                        {{ current_driver.loadID }}</p>
                                    <div class="flex flex-col space-y-2">
                                        <button
                                            class="border-blue-500 text-blue-500 bg-blue-100 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button" @click="assignLoadToQueue()">
                                            Assign To Queue
                                        </button>
                                        <button
                                            class="text-red-500 bg-red-100  border-red-500 bg-transparent  active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button" @click="unAssignLoadFromDriver(current_driver._id)">
                                            Unassign
                                        </button>
                                    </div>


                                </div>
                                <div v-else class="flex flex-col space-y-1">
                                    <p class="text-xs text-green-500  italic">{{ current_load.id }}
                                    </p>
                                    <button v-if="!loading"
                                        class="border-green-500 text-green-500 bg-green-100 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button" @click="assignLoadToDriver()">
                                        Assign To Load
                                    </button>

                                    <span v-else class="italic">Please wait...</span>
                                </div>

                                <!-- <div>
                                                <button v-if="!loading"
                                                    class="border-blue-500 text-blue-500 bg-blue-100 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button" @click="assignLoadToQueue()">
                                                    Assign To Queue
                                                </button>
                                            </div> -->
                            </div>
                            <span v-if="post === 'warning'" class="flex justify-center text-red-400">
                                This Driver has already been assigned to load
                            </span>
                        </section>


                        <!-- driver search -->
                        <div class="w-11/12 mx-auto">
                            <div class="grid">
                                <label class="col-span-12 text-2xl text-gray-500" for="">Search</label>
                                <div class="col-span-12 rounded-md border flex h-14">
                                    <mdicon class="my-auto ml-2 text-gray-400" name="magnify" />
                                    <input class="w-full border-none focus:ring-0 placeholder:text-gray-400 text-gray-500"
                                        placeholder="Search" v-model="search_driver" type="text">
                                    <button class="my-auto p-2 px-4 rounded-md bg-primary mx-2 text-white">Search</button>
                                </div>
                            </div>
                        </div>

                        <div class="w-11/12 mx-auto flex space-x-2">
                            <div class="border rounded-full px-4 py-1 cursor-pointer"
                                :class="{ 'bg-primary text-white': selectedFilter === filter }" v-for="filter in filters"
                                :key="filter" @click="setFilter(filter)">{{ filter }}</div>
                        </div>

                        <!--body-->
                        <div class="flex  mx-auto w-11/12 ">
                            <div class="mb-3 w-full mx-auto">
                                <ul class="overflow-hidden hover:overflow-auto w-full"
                                    v-if="!loading && all_drivers.length > 0" style="height:320px">
                                    <li v-for="(dr, idx) in all_drivers" :key="idx" class="border-b p-2"
                                        :class="{ 'bg-gray-200': dr == current_driver }" @click="setDriver(dr)">
                                        <div class="flex items-center w-full   select-none focus:outline-none relative">
                                            <div class="flex w-full cursor-pointer  px-4 py-2">
                                                <img class="w-12 h-12 mr-3 rounded-full" :src="dr.photo" />
                                                <div class="transform translate-y-0.5 w-full">
                                                    <div class="flex justify-between items-center w-60">
                                                        <p class="text-md m-0 text-black"> {{ getName(dr) }}</p>
                                                    </div>
                                                    <div class="flex justify-between items-center w-full">
                                                        <p class="driver-status text-sm m-0 text-green-400"
                                                            v-if="dr.status === 'available'">Active</p>
                                                        <p class="driver-status text-sm m-0 text-red-400 " v-else>On
                                                            Route
                                                            <span class="text-xs text-gray-600"
                                                                v-if="dr.loadID.length > 0">[{{
                                                                    dr.loadID
                                                                }}]</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div v-else style="height:320px">NO DRIVERS</div>
                            </div>
                        </div>
                        <!--footer-->
                        <div class="flex items-center justify-end p-3 rounded-b">
                            <button
                                class="text-red-500 hover:bg-red-500 hover:text-white bg-transparent border border-red-500  active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-75"
                                type="button" @click="hideModal()">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div @click="hideModal" class="fixed bg-black/70 backdrop-blur-sm z-40 inset-0">

        </div>
    </div>
</template>
      

<script setup>
import axios from 'axios'
import { ref, defineEmits, defineProps, computed } from 'vue';

import { useStore } from 'vuex'
import { useApi } from '@/composables/useApi'


const emit = defineEmits(['reCallLoads', 'hideModal', 'displaySnackbar'])

const { api_path } = useApi();
const store = useStore();
const props = defineProps(['current_load']);

const search_driver = ref('');
const loading = ref(false);
const feedback = ref({ status: '', text: '' })
const drivers_board = ref([]);
const current_driver = ref({});
const activeDriver = ref(false);
const post = ref('');

const filters = ref(['ALL', 'AVAILABLE', 'UNAVAILABLE'])
const selectedFilter = ref('ALL')


const checkDistance = () => {

    console.log(props.current_load)

    let lngFrom = props.current_load.destinations[0].coordinates;
    let latFrom = props.current_load.destinations[0].coordinates;

    let lngTo = props.current_load.destinations[0].coordinates;
    let latTo = props.current_load.destinations[0].coordinates;

    console.log(lngFrom, latFrom)

    // var from = point([-75.343, 39.984]);
    // var to = point([-75.534, 39.123]);
    // var options = { units: 'miles' };

    // var d = distance(from, to, options);
    // console.log(d);
}

checkDistance();

const orgID = computed(() => store.state.orgID)

const all_drivers = computed(() => {
    // if (search_driver.value.trim().length > 0) {
    //     return drivers_board.value.filter((driver) => driver.fname.toLowerCase().includes(search_driver.value.trim().toLocaleLowerCase()))
    // }
    if (search_driver.value.trim().length > 0) {
        return drivers_board.value.filter((driver) => {
            const fullName = driver.fname.toLowerCase() + ' ' + driver.lname.toLowerCase()
            return fullName.toLowerCase().includes(search_driver.value.trim().toLocaleLowerCase())
        })
    }

    if (selectedFilter.value === 'ALL') {
        return drivers_board.value;
    }

    if (selectedFilter.value === 'AVAILABLE') {
        return drivers_board.value.filter((driver) => driver.status === 'available');
    }

    if (selectedFilter.value === 'UNAVAILABLE') {
        return drivers_board.value.filter((driver) => driver.status === 'unavailable');
    }

    return drivers_board.value;
})


const setFilter = (f) => {
    selectedFilter.value = f;
}

const getAllDrivers = async () => {

    loading.value = true;

    const config = {
        headers: {
            orgID: orgID.value
        }
    }

    try {
        const res = await axios.get(api_path.value + "/fleet/drivers/all", config);
        drivers_board.value = res.data.result;
        console.log(drivers_board.value)
        loading.value = false;
    } catch (error) {
        console.log(error)
        loading.value = false;
    }
}
getAllDrivers();



const assignLoadToDriver = async () => {
    console.log('Load ID', props.current_load.id);
    console.log('DRIVER ID', current_driver.value._id);
    console.log('ORG ID', orgID.value);
    loading.value = true;
    const config = {
        headers: {
            orgID: orgID.value,
        }
    }

    const payload = {
        loadID: props.current_load.id,
        driverID: current_driver.value._id
    }
    try {
        const res = await axios.post(api_path.value + "/loads/assignment?to=assign", payload, config);
        console.log(res);
        if (res.data.status === "warning") {
            console.log('warning');
        } else {
            emit('reCallLoads');
            hideModal()
            displaySnackbar();
        }

        console.log(res.data);
        const data = res.data.status;
        post.value = data;

        loading.value = false;

    } catch (error) {
        console.log(error)
        loading.value = false;
    }
}
const unAssignLoadFromDriver = async () => {
    const config = {
        headers: {
            orgID: orgID.value,
        }
    }
    const payload = {
        loadID: current_driver.value.loadID,
        driverID: current_driver.value._id
    }
    try {
        const res = await axios.post(api_path.value + "loads/assignment?to=unassign", payload, config);

        console.log(res.data)
        if (res.data.status === 'warning') {

            feedback.value.status = res.data.status;
            feedback.value.text = res.data.feedback;
        } else {
            hideModal()
            emit('reCallLoads');
        }
    } catch (error) {
        console.log(error);

    }
}



const getName = ({ fname, lname, email }) => {
    if (fname || lname)
        return `${fname} ${lname}`
    return email;
}

const hideModal = () => {
    emit('hideModal', false)
}

const displaySnackbar = () => {
    emit('displaySnackbar');
}
const setDriver = (x) => {
    // console.log(props.current_load)
    // console.log(x);
    activeDriver.value = true
    current_driver.value = x
}

</script>
