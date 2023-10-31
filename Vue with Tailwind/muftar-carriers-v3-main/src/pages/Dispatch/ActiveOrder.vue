<template>
    <div class="w-full ">

        <div class="flex justify-between">
            <div class="my-auto">
                <h2 class="text-xl font-bold m-0 ml-11 my-auto text-primary mb-2">Active Orders</h2>
            </div>
            <form @submit.prevent="searchLoads">
                <div class="border flex justify-between rounded-md w-96  mx-10">
                    <input class="w-full border-none focus:ring-0 rounded-md" v-model="searchText" type="text"
                        placeholder="Search Loads">
                    <button class="my-auto mr-3" type="submit">
                        <Icon class="w-5 h-5 text-gray-400" icon="octicon:search-16" />
                    </button>
                </div>
            </form>
        </div>
        <div class="mx-10 mt-5 rounded ">
            <div class="grid grid-cols-10 p-3 select-none text-center rounded-t-md bg-primary text-white">
                <div v-for="header in headers" :key="header.col" @click="sortData(header.by, header.col)"
                    class="cursor-pointer rounded-md p-2 flex justify-center space-x-2"
                    :class="{ 'bg-[#4a6ecf]': selectedCol === header.by }">
                    <span class="my-auto">{{ header.name }}</span>
                    <div :class="{ 'hidden': header.by === 'none' }" class="my-auto space-y-1"
                        v-if="column === null || column !== header.col">
                        <img class="h-2 w-2" src="@/assets/icons/dispatch/arrow-up.svg" alt="Arrow Up">
                        <img class="h-2 w-2" src="@/assets/icons/dispatch/arrow-down.svg" alt="Arrow Down">
                    </div>
                    <div v-else class="my-auto space-y-1" :class="{ 'hidden': header.by === 'none' }">
                        <img v-if="sortDirection === 'asc' && column === header.col" class="h-2 w-2"
                            src="@/assets/icons/dispatch/arrow-up.svg" alt="Arrow Up">
                        <img v-if="sortDirection === 'desc' && column === header.col" class="h-2 w-2"
                            src="@/assets/icons/dispatch/arrow-down.svg" alt="Arrow Down">
                    </div>

                </div>
            </div>

            <div v-if="!loading" class="text-center h-screen overflow-y-auto pb-56">
                <div v-if="sortLoads.length <= 0" class="text-center text-4xl font-bold py-56">
                    <img class="w-44  py-4 mx-auto " src="@/assets/icons/loads/paper.svg" />
                    <h1>No Active Loads Found!</h1>
                </div>
                <div v-else class="border last:rounded-b-md" v-for="(ld, idx) in sort ? sortedData.value : sortLoads"
                    :key="idx">
                    <div class="grid gap-1 grid-cols-10 text-gray-500 p-2 ">
                        <div class="text-center my-auto">
                            <p class="text-xs text-gray-500 -bottom-1">{{ (ld.id).substring(0, 7) }}<span
                                    class="text-xl font-bold">...</span>{{ (ld.id).substring(ld.id.length - 5) }}</p>
                            <p class=" font-bold" :class="{
                                'text-yellow-400': ld.status == 'pending_confirmation',
                                'text-green-400': ld.status == 'completed',
                                'text-red-400': ld.status == 'unassigned'
                            }">
                                {{ ld.status == 'pending_confirmation' ? 'pending' : ld.status }}
                            </p>


                            <!-- <p class="text-sm">{{$fmtDate(ld.created)}} - {{$relativeDate(ld.created)}}</p> -->
                        </div>
                        <div class="my-auto">
                            <p>
                                {{ $fmtDate(ld.created) }}
                            </p>
                            <p>
                                {{ $relativeDate(ld.created) }}
                            </p>

                        </div>
                        <div class="my-auto"><span class="text-blue-600 rounded p-2 mt-2">{{
                            ld.confirmationNumber
                        }}</span>
                        </div>
                        <div class="my-auto">
                            <button class="bg-blue-100 text-blue-700 py-2 px-3 rounded" @click="showParty(idx)">
                                <span v-if="display_party.idx == idx">Hide</span>
                                <span v-else>Show</span>
                            </button>
                            <div v-if="display_party.idx == idx">
                                <p class="text-xs" v-for="(pty, idx) in extractParty(ld.party)" :key="idx">
                                    {{ pty.role }}: {{ pty.id }}
                                </p>
                            </div>
                        </div>
                        <p class="text-xs text-gray-500 my-auto">{{ (ld.driverID).substring(0, 7) }}
                            <span class="text-xl font-bold">...</span>
                            {{ (ld.driverID).substring(ld.driverID.length - 5) }}
                        </p>
                        <div class="my-auto">
                            <div>
                                {{ ld.destinations[0].address.city }} {{ ld.destinations[0].address.state }}
                                {{ ld.destinations[0].address.zip }}
                                <!-- <br>
                                <br>
                                <br>
                                <br>
                                {{ renderAddress({ data: ld, idx: 0, key: 'city' }) }} {{
                                    renderAddress({
                                        data: ld, idx: 0,
                                        key: 'state'
                                                            })
                                }}
                                {{ renderAddress({ data: ld, idx: 0, key: 'zip' }) }} -->
                            </div>
                        </div>
                        <div class="relative flex space-x-2 my-auto">
                            <div v-if="ld.destinations.length > 2"
                                class="absolute -left-3 top-5 bg-gray-300 rounded-md text-gray-600 px-3 p-1">

                                {{ ld.destinations.length }}
                            </div>
                            {{ ld.destinations[1].address.city }} {{ ld.destinations[1].address.state }}
                            {{ ld.destinations[1].address.zip }}
                            <!-- {{ renderAddress({ data: ld, idx: 1, key: 'city' }) }} {{
                                renderAddress({
                                    data: ld, idx: 1, key:
                                                    'state'
                                                    })
                            }}
                            {{ renderAddress({ data: ld, idx: 1, key: 'zip' }) }} -->
                        </div>
                        <div class="my-auto">${{ (ld.quote.price / 100).toLocaleString() }}</div>
                        <div class="flex justify-center items-start my-auto">
                            <!-- <button @click="toggleModal()" class="mx-1"> -->
                            <button class="mx-1" :class="{ 'opacity-30': ld.load_pdf == '' }"
                                @click="handlePDF(ld.load_pdf)">
                                <img class="w-12 h-12" src="@/assets/icons/dispatch/pdf.svg">
                            </button>
                            <button @click="handleLoadDoc('rapid', ld.id)" class="mx-1">
                                <img class="w-12 h-12" src="@/assets/icons/dispatch/rapid.svg">
                            </button>
                        </div>
                        <div class="my-auto">
                            <button class="px-3 py-2 rounded-md w-28  " @click="toggleModal(ld)" :class="{
                                'bg-theme text-white': ld.status != 'unassigned',
                                'bg-green-100 text-green-700': ld.status == 'unassigned'
                            }">
                                <span v-if="ld.status != 'unassigned'" class="">Manage</span>
                                <span v-else class="">Assign</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- COMPONENT REGISTERED GLOBALLY INSIDE main.js -->
        <GlobalLoader v-if="loading" />

        <Teleport to="body">
            <XyzTransition xyz="fade-100% up">
                <SnackBar v-if="showSnackbar"  message="The driver has been assigned to this load." />
            </XyzTransition>
        </Teleport>

        <AssignDriverModal v-if="showDriverModal" @displaySnackbar="displaySnackbar" @hideModal="hideModal"
            @reCallLoads="getAllLoads" :current_load="current_load" />

        <ManageLoadModal v-if="showLoadManageModal" @hideModal="hideModal" @reCallLoads="getAllLoads"
            :current_load="current_load" />

    </div>
</template>

<script setup>
import axios from 'axios'
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import { useApi } from '@/composables/useApi'
import { useSorted } from '@vueuse/core'
import AssignDriverModal from '@/components/Dispatch/Modals/AssignDriverModal.vue'
import ManageLoadModal from '@/components/Dispatch/Modals/ManageLoadModal.vue'
import { Icon } from '@iconify/vue'

const { api_path } = useApi();

const store = useStore();





const loading = ref(false);
const display_party = ref({ idx: null });
const load_board = ref([]);
const showDriverModal = ref(false);
const showLoadManageModal = ref(false);
const sort = ref(false);
const current_load = ref(null);
const sortedData = ref([])
const selectedCol = ref(null);
const showSnackbar = ref(false);
const searchText = ref('');
const column = ref(null)

// const asc = ref(false);

const sortDirection = ref("asc");


const headers = ref([
    {
        col: 1,
        name: 'Status',
        by: 'status'
    },
    {
        col: 2,
        name: 'Date',
        by: 'date'
    },
    {
        col: 3,
        name: 'Load Number',
        by: 'load_number'
    },
    {
        col: 4,
        name: 'Party',
        by: 'none'
    },
    {
        col: 5,
        name: 'Driver',
        by: 'driver'
    },
    {
        col: 6,
        name: 'Origin',
        by: 'origin'
    },
    {
        col: 7,
        name: 'Destination',
        by: 'destination'
    },
    {
        col: 8,
        name: 'Rate',
        by: 'rate'
    },
    {
        col: 9,
        name: 'Confirmation',
        by: 'none'
    },
    {
        col: 10,
        name: 'Manage',
        by: 'none'
    },
])


const showParty = (idx) => {
    if (display_party.value.idx == null) {
        display_party.value.idx = idx;
    } else {
        display_party.value.idx = null;
    }
}

const orgID = computed(() => store.state.orgID)

const sortLoads = computed(() => {
    let fullySortedArray = []
    let loads = load_board.value;
    if (loads.length > 0) {
        let unassigned_loads = loads.filter((value) => value.status === 'unassigned').sort((a, b) => b.created - a.created);
        let pending_confirmation = loads.filter((value) => value.status === 'pending_confirmation').sort((a, b) => b.created - a.created);
        let en_route = loads.filter((value) => value.status === 'en_route').sort((a, b) => b.created - a.created);
        let awaiting_bol = loads.filter((value) => value.status === 'awaiting_bol').sort((a, b) => b.created - a.created);
        let assigned = loads.filter((value) => value.status === 'assigned').sort((a, b) => b.created - a.created);
        fullySortedArray = unassigned_loads.concat(pending_confirmation, en_route, awaiting_bol, assigned);
    }

    // if (searchText.value.trim().length > 0) {
    //     return fullySortedArray.filter((load) => {
    //         return load.status.toLowerCase().startsWith(searchText.value.trim().toLocaleLowerCase()) || load.confirmationNumber.toLowerCase().startsWith(searchText.value.trim().toLocaleLowerCase()) || load.driverID.toLowerCase().startsWith(searchText.value.trim().toLocaleLowerCase());
    //     })
    // }

    return fullySortedArray;
})


const searchedLoads = computed(() => {
    let loads = load_board.value
    return loads
})

const searchLoads = async () => {
    if (searchText.value < 0) {
        getAllLoads();
    }
    selectedCol.value = null;
    loading.value = true;
    const config = {
        headers: {
            orgID: orgID.value
        }
    }
    try {

        const res = await axios.get(api_path.value + `loads/all?stage=active&q=${searchText.value}`, config)
        load_board.value = res.data.result;
        console.log(load_board.value)
        loading.value = false;
    } catch (err) {
        loading.value = false;
        console.log(err);
    }

}

const getAllLoads = async () => {
    loading.value = true;
    const config = {
        headers: {
            orgID: orgID.value
        }
    }

    try {
        const res = await axios.get(api_path.value + "/loads/all?stage=active", config);
        load_board.value = res.data.result;
        console.log(load_board.value)
        // load_board.value.forEach((load) => {
        //     console.log(load.assignment.status); 
        // })
        loading.value = false;


    } catch (error) {
        console.log(error)
        loading.value = false;
    }
}

const renderAddress = ({ data, idx, key }) => {
    return data && data.destinations && data.destinations[idx] && data.destinations[idx].address && data.destinations[idx].address[key]
}

const handleLoadDoc = (doc, loadID) => {
    console.log('show it', doc)
    if (doc == 'rapid') {
        window.open(`https://rapid.muftar.com/${loadID}?verification_code=mytest`)
    }
}

const handlePDF = (pdf) => {
    console.log(this.sortLoads);
    if (pdf != '') {
        window.open(pdf)
    }
}


const toggleModal = (load_info) => {
    hideModal()
    current_load.value = load_info
    if (load_info.driverID != '') {
        showLoadManageModal.value = true
    } else {
        showDriverModal.value = true
    }
}

const hideModal = () => {
    showDriverModal.value = false
    showLoadManageModal.value = false

}

const displaySnackbar = () => {
    showSnackbar.value = true;
    setTimeout(() => {
        showSnackbar.value = false;
    }, 4000)
}


const extractParty = (party) => {
    let fmt_party = []
    for (let o in party) {
        fmt_party.push({ 'role': party[o].role, 'id': party[o].id })
    }
    return fmt_party
}





const sortData = (type, col) => {
    if (type === 'none') {
        return;
    }
    column.value = col;
    sort.value = true;
    // asc.value = !asc.value;
    sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
    selectedCol.value = type;
    if (type === 'status') {
        if (sortDirection.value === 'asc') {
            sortedData.value = useSorted(load_board, (a, b) => {
                if (a.status < b.status) {
                    return -1;
                }

                if (a.status > b.status) {
                    return 1;
                }
                return 0
            })
        } else {
            sortedData.value = useSorted(load_board, (a, b) => {
                if (b.status < a.status) {
                    return -1;
                }

                if (b.status > a.status) {
                    return 1;
                }
                return 0
            })
        }
    }

    if (type === 'date') {
        if (sortDirection.value === 'asc') {
            sortedData.value = useSorted(load_board, (a, b) => a.created - b.created)
        } else {
            sortedData.value = useSorted(load_board, (a, b) => b.created - a.created)
        }
    }

    if (type === 'load_number') {
        if (sortDirection.value === 'asc') {
            sortedData.value = useSorted(load_board, (a, b) => {
                if (a.confirmationNumber < b.confirmationNumber) {
                    return -1
                }

                if (a.confirmationNumber > b.confirmationNumber) {
                    return 1;
                }
            })
        } else {
            sortedData.value = useSorted(load_board, (a, b) => {
                if (b.confirmationNumber < a.confirmationNumber) {
                    return -1
                }

                if (b.confirmationNumber > a.confirmationNumber) {
                    return 1;
                }
            })
        }
    }

    if (type === 'driver') {
        if (sortDirection.value === 'asc') {
            sortedData.value = useSorted(load_board, (a, b) => {
                if (a.driverID < b.driverID) {
                    return -1
                }

                if (a.driverID > b.driverID) {
                    return 1;
                }
            })
            // b.assignment.driver - a.assignment.driver
        } else {
            sortedData.value = useSorted(load_board, (a, b) => {
                if (b.driverID < a.driverID) {
                    return -1
                }

                if (b.driverID > a.driverID) {
                    return 1;
                }
            })
        }
    }



    if (type === 'destination' || type === 'origin') {
        if (sortDirection.value === 'asc') {
            sortedData.value = useSorted(load_board, (a, b) => {
                if (a.destinations[0].address.line1 < b.destinations[0].address.line1) {
                    return -1;
                }

                if (a.destinations[0].address.line1 > b.destinations[0].address.line1) {
                    return 1;
                }
                return 0;
            })
        } else {
            sortedData.value = useSorted(load_board, (a, b) => {
                if (b.destinations[0].address.line1 < a.destinations[0].address.line1) {
                    return -1;
                }

                if (b.destinations[0].address.line1 > a.destinations[0].address.line1) {
                    return 1;
                }
                return 0;
            })
        }

    }

    if (type === 'rate') {
        if (sortDirection.value === 'asc') {
            sortedData.value = useSorted(load_board, (a, b) => a.quote.price - b.quote.price)
        } else {
            sortedData.value = useSorted(load_board, (a, b) => b.quote.price - a.quote.price)
        }

    }

}


getAllLoads();

</script>
  
  
<style scoped></style>