<template>
    <div id="LoadBoard" class="">
        <div class=" mx-10 flex justify-between space-x-10">
            <h2 class="text-xl font-bold m-0 text-primary my-auto"></h2>
            <a href="https://rapid.muftar.com/load-generator" target="_blank"
                class="bg-blue-400 text-white font-bold py-2 px-4">
                Create Load
            </a>
        </div>

        <!-- <div class="p-4 mb-4 my-4 container mx-auto text-sm" role="alert" v-if="feedback.status != ''" :class="{
            'text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800': feedback.status == 'success',
            'text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800': feedback.status == 'error',
            'text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800': feedback.status == 'warning',
        }">
            <span class="font-medium capitalize">{{ feedback.status }}!</span> {{ feedback.text }}
        </div> -->
        <!-- <p class="text-sm text-blue-200">These are load offers between you and your broker</p> -->
        <div class="mx-10 mt-5 rounded">
            <div class="grid grid-cols-7 p-2 text-center rounded-t-md bg-primary text-white">
                <div>Post Date</div>
                <div>Broker/Issuer</div>
                <div>Prerequisites</div>
                <div>Origin</div>
                <div>Origin</div>
                <div>Rate</div>
                <div>Decision</div>
            </div>

            <div v-if="!loading" class="h-screen overflow-y-auto">
                <div v-if="sortedLoads.length <= 0" class="text-center text-4xl font-bold py-56">
                    <img class="w-44  py-4 mx-auto " src="@/assets/icons/loads/paper.svg" />
                    <h1>No Loads Found!</h1>
                </div>
                <div v-else class="border last:rounded-b-md border-gray-300" v-for="(ld, idx) in sortedLoads" :key="idx">
                    <div class="grid gap-1 grid-cols-7  text-gray-500 p-2 text-center">
                        <div class="my-auto">
                            <p class="text-xs text-gray-500">{{ (ld.id).substring(0, 7) }}<span
                                    class="text-xl font-bold">...</span>{{ (ld.id).substring(ld.id.length - 5) }}</p>
                            <p>{{ $fmtDate(ld.created) }}</p>
                            <p class="text-sm">{{ $relativeDate(ld.created) }}</p>
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
                        <div class="my-auto">
                            <p v-for="(preq, idx) in ld.prerequisites" :key="idx">
                                {{ preq.trailer_type }}
                            </p>
                        </div>
                        <div class="my-auto">
                            <div>

                                {{ renderAddress({ data: ld, idx: 0, key: 'city' }) }} {{
                                    renderAddress({
                                        data: ld, idx: 0, key:
                                            'state'
                                    })
                                }}
                                {{ renderAddress({ data: ld, idx: 0, key: 'zip' }) }}
                            </div>
                            <div v-for="drp in ld.dropoffs" :key="drp[0]">
                                {{ drp.address.city }} {{ drp.address.state }} {{ drp.address.zip }}
                            </div>
                        </div>
                        <div class="my-auto">
                            {{ renderAddress({ data: ld, idx: 1, key: 'city' }) }} {{
                                renderAddress({
                                    data: ld, idx: 1, key:
                                        'state'
                                })
                            }}
                            {{ renderAddress({ data: ld, idx: 1, key: 'zip' }) }}
                            <div v-for="pic in ld.pickups" :key="pic[0]">
                                {{ pic.address.city }} {{ pic.address.state }} {{ pic.address.zip }}
                            </div>
                        </div>

                        <div class="my-auto">${{ (ld.quote.price / 100).toLocaleString() }}</div>
                        <div class="my-auto">
                            <div class="flex justify-around">
                                <button @click="manageLoad(ld, 'accept')"
                                    class="text-white p-1 bg-green-500 rounded-full w-24">Accept</button>
                                <button @click="manageLoad(ld, 'decline')"
                                    class="text-white p-1 bg-pink-500 rounded-full w-24">Decline</button>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- COMPONENT REGISTERED GLOBALLY INSIDE main.js -->
        <GlobalLoader v-if="loading" />
        <Teleport to="body">
            <XyzTransition xyz="fade-100% up">
                <SnackBar v-if="feedback.status == 'success'" :message="feedback.text" />
            </XyzTransition>
        </Teleport>
    </div>
</template>
  

<script setup>
import axios from 'axios'
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import { useApi } from '@/composables/useApi'

const store = useStore();

const load_board = ref([]);
const loading = ref(false);
const display_party = ref({ idx: null })
const feedback = ref({ text: '', status: '' });

const { api_path } = useApi();


const orgID = computed(() => store.state.orgID);
const sortedLoads = computed(() => {
    let sort_loads = load_board.value;
    return sort_loads.sort((a, b) => b.created - a.created);
})

const manageLoad = async (load, decision) => {
    let brokerID = ""
    console.log(load.party);
    for (let o in load.party) {
        console.log(o);
        if (load.party[o].role === 'broker') {
            brokerID = load.party[o].id


        }
    }

    console.log(load.id);
    console.log(decision);
    console.log(brokerID);


    const config = {
        headers: {
            orgID: orgID.value
        }
    }


    console.log("ORG ID", orgID.value)

    const payload = {
        decision: decision,
        brokerID: "",
        vendorID: "",
        loadID: load.id,
        new_price: null
    }

    try {
        const res = await axios.post(api_path.value + "carriers/loads/manage_offer", payload, config);
        if (res.data.status === 'success') {
            let value = load;
            let arr = load_board.value;
            load_board.value = arr.filter(item => item !== value);


        }
        feedback.value.text = res.data.feedback;
        feedback.value.status = res.data.status;

        setTimeout(() => {
            feedback.value.status = null
        }, 4000)
    } catch (error) {

        console.log(error)
    }
}

const handleLoadDoc = (doc, loadID) => {
    if (doc == 'rapid') {
        window.open(`https://rapid.muftar.com/${loadID}?verification_code=mytest`)
    }
}

const renderAddress = ({ data, idx, key }) => {
    return data && data.destinations && data.destinations[idx] && data.destinations[idx].address && data.destinations[idx].address[key]
}

const showParty = (idx) => {
    if (display_party.value.idx == null) {
        display_party.value.idx = idx;
    } else {
        display_party.value.idx = null;
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

        const res = await axios.get(api_path.value + "loads/all?stage=offered", config);
        load_board.value = res.data.result;
        console.log(load_board.value)
        loading.value = false;

    } catch (error) {
        loading.value = false;
        console.log(error)
    }
}

getAllLoads();

</script>


<style scoped></style>