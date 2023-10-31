<template>
    <div id="OrdersHistory">
        <h2 class="text-xl font-bold ml-10 m-0 text-primary mb-2"></h2>

        <div class="mx-10 mt-5 rounded">
            <div class="grid grid-cols-10 p-2 text-center rounded-t-md bg-primary text-white">

                <div v-for="header in headers" :key="header.col" @click="sortData(header.by, header.col)"
                    class="cursor-pointer rounded-md p-2 flex justify-center select-none space-x-2"
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

            <div v-if="!loading" class="h-screen overflow-y-auto pb-56">
                <div v-if="sortedLoads.length <= 0" class="text-center text-4xl font-bold py-56">
                    <img class="w-44  py-4 mx-auto " src="@/assets/icons/loads/paper.svg" />
                    <h1>No Loads Found!</h1>
                </div>
                <div v-else class="border last:rounded-b-md" v-for="(ld, idx) in sort ? sortedData.value : sortedLoads"
                    :key="idx">
                    <div class="grid gap-1 grid-cols-10 text-gray-500 p-2 my-auto ">
                        <div class="text-center my-auto">
                            <p class="text-xs my-auto -bottom-1 cursor-pointer select-none"
                                :class="{ 'text-primary font-bold  ': copiedId === ld.id, 'text-gray-500 ': copiedId !== ld.id }"
                                @click="copyId(ld.id)">{{
                                    (ld.id).substring(0, 7) }}<span class="text-xl font-bold">...</span>{{
        (ld.id).substring(ld.id.length - 5) }} <span v-if="copiedId == ld.id"
                                    class="text-3xl text-primary my-auto">.</span>
                            </p>
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
                            <div class="text-xs flex flex-col items-center justify-center text-gray-500">
                                <p>{{ $fmtDate(ld.created) }}</p>
                                <p class="text-sm">{{ $relativeDate(ld.created) }}</p>
                            </div>
                        </div>
                        <div class="my-auto mx-auto text-center">
                            <span class="bg-blue-50 text-blue-600 rounded p-2 mt-2">{{ ld.confirmationNumber }}</span>
                        </div>
                        <div class="my-auto mx-auto text-center">
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
                        <p class="text-xs  my-auto cursor-pointer text-center"
                            :class="{ 'text-primary font-bold  ': copiedId === ld.driverID, 'text-gray-500 ': copiedId !== ld.driverID }"
                            @click="copyId(ld.driverID)">{{ (ld.driverID).substring(0, 7) }}
                            <span class="text-xl font-bold">...</span>
                            {{ (ld.driverID).substring(ld.driverID.length - 5) }}
                        </p>
                        <div class="my-auto text-center">
                            <div>
                                <p>{{ renderAddress({ data: ld, idx: 0, key: 'city' }) }}</p>

                                <p>{{ renderAddress({ data: ld, idx: 0, key: 'state' }) }} {{
                                    renderAddress({
                                        data: ld, idx:
                                            0, key: 'zip'
                                    })
                                }}</p>
                            </div>
                            <div v-for="drp in ld.dropoffs" :key="drp[0]">
                                {{ drp.address.city }} {{ drp.address.state }} {{ drp.address.zip }}
                            </div>
                        </div>
                        <div class="my-auto text-center">
                            {{ renderAddress({ data: ld, idx: 1, key: 'city' }) }} {{
                                renderAddress({
                                    data: ld, idx: 1, key:
                                        'state'
                                })
                            }}
                            {{ renderAddress({ data: ld, idx: 1, key: 'zip' }) }}
                            <div v-for="pic in ld.pickups" :key="pic[0]">
                                <p>{{ pic.address.city }}</p>
                                <p>{{ pic.address.state }}</p>
                                <p>{{ pic.address.zip }}</p>
                            </div>
                        </div>
                        <div class="my-auto text-center">${{ (ld.quote.price / 100).toLocaleString() }}</div>
                        <div class="flex justify-center item-center">
                            <div class="mt-1">
                                <div v-if="ld.status === 'paid'" class="px-8 my-auto w-full py-2 border rounded-md">
                                    Paid
                                </div>
                                <button @click="showManageModal(ld)" v-if="ld.status == 'pending_confirmation'"
                                    class="px-3 w-full py-2 rounded-xl bg-gray-50 text-gray-600 border-gray-600 border">Check
                                    BOL</button>

                                <button v-if="ld.status === 'completed'"
                                    class=" px-3
                                                                                                                                    w-full py-2 rounded-md bg-green-600 text-white"
                                    @click="payDriver(ld.driverID, ld.id)">Pay Driver</button>
                            </div>
                        </div>
                        <div class="flex  justify-center item-center" v-if="!pay_processing.includes(ld.id)">
                            <button
                                class="flex items-center justify-evenly px-3 w-full py-2 rounded-xl h-[3rem] bg-[#304175] text-white"
                                @click="toggleModal3(ld.confirmationNumber)">
                                Summary
                                <img class="w-6 h-6" src="@/assets/icons/dispatch/rapid.svg">
                            </button>
                        </div>
                        <div class="text-italic text-gray-400" v-else>
                            Please wait...
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Teleport to="body">
            <ManageLoadModal v-if="showManageLoadModal" :current_load="current_load" @hideModal="hideModal" @reCallLoads="getLoadOrders" />
        </Teleport>
        <!-- COMPONENT REGISTERED GLOBALLY INSIDE main.js -->
        <GlobalLoader v-if="loading" />
        <Teleport to="body">
            <XyzTransition xyz="fade-100% up">
                <SnackBar v-if="isDriverPaid" :message="message" :status="status" />
            </XyzTransition>
        </Teleport>
    </div>
</template>
  
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex'
import axios from 'axios'
import { useApi } from '@/composables/useApi'
import { useSorted } from '@vueuse/core'
import ManageLoadModal from '@/components/Dispatch/Modals/ManageLoadModal.vue'



const store = useStore()

const { api_path } = useApi();


const loading = ref(false);
const showModal = ref(false);
const display_party = ref({ idx: null });
const activeLoadConfirmId = ref('');
const load_board = ref([]);
const pay_processing = ref([]);
const asc = ref(false);
const selectedCol = ref(null);
const sort = ref(false);
const sortedData = ref([])
const current_load = ref(null);
const showManageLoadModal = ref(false);

const status = ref('');
const message = ref('')
const isDriverPaid = ref(false);

const sortDirection = ref("asc");

const copiedId = ref('')

const column = ref(null)
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
        name: 'Fleet Manager',
        by: 'none'
    },
])



const orgID = computed(() => store.state.orgID)


const sortedLoads = computed(() => {
    let sorted_val = load_board.value
    return sorted_val.sort((a, b) => b.endTime - a.endTime);
})

const renderAddress = ({ data, idx, key }) => {
    return data && data.destinations && data.destinations[idx] && data.destinations[idx].address && data.destinations[idx].address[key];
}

function showManageModal(ld) {
    console.log(ld);
    current_load.value = ld;
    console.log(current_load.value);
    showManageLoadModal.value = true;
}

function hideModal() {
    showManageLoadModal.value = false;
}

const payDriver = async (drvr_id, load_id) => {
    console.log(sortedLoads.value);
    console.log('paying driver')
    pay_processing.value.push(load_id)
    const config = {
        headers: {
            orgID: orgID.value,
        }
    }
    const payload = {
        driverID: drvr_id,
        loadID: load_id
    }
    console.log(payload)
    try {
        const res = await axios.post(api_path.value + '/statements/pay_driver_for_load', payload, config)
        console.log(res.data);
        status.value = res.data.status;
        message.value = res.data.feedback;
        isDriverPaid.value = true
        setTimeout(() => {
            isDriverPaid.value = false
        }, 4000)
        pay_processing.value = pay_processing.value.filter((i) => i !== load_id)
        getLoadOrders()

    } catch (error) {
        isDriverPaid.value = true
        message.value = error.message;
        status.value = 'error';
        pay_processing.value = pay_processing.value.filter((i) => i !== load_id)
    }
}

const copyId = (id) => {
    navigator.clipboard.readText().then((value) => {
        copiedId.value = value
    })
    navigator.clipboard.writeText(id);
}

const showParty = (idx) => {

    if (display_party.value.idx == null) {
        display_party.value.idx = idx;
    } else {
        display_party.value.idx = null;
    }
}
const getName = ({ fname, lname, email }) => {
    if (fname || lname)
        return `${fname} ${lname}`
    return email;
}
const handleLoadDoc = (doc, loadID) => {
    console.log('show it', doc)
    if (doc == 'rapid') {
        window.open(`https://rapid.muftar.com/${loadID}?verification_code=mytest`)
    }
}
const getLoadOrders = async () => {
    loading.value = true;
    const config = {
        headers: {
            orgID: orgID.value,
        }
    }

    try {
        // /loads/all?filter=completed
        const res = await axios.get(api_path.value + "loads/all?stage=completed", config)
        load_board.value = res.data.result;
        console.log(res.data.result);
        console.log(load_board.value);
        loading.value = false;
    } catch (error) {
        console.log(error)
        loading.value = false
    }
}

const toggleModal3 = (id) => {
    showModal.value = !this.showModal;
    if (this.showModal.value)
        activeLoadConfirmId.value = id
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

onMounted(() => {
    getLoadOrders()
})

</script>
  
<style scoped></style>