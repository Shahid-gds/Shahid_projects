<template>
    <div class="flex justify-center">
        <Teleport to="body">
            <InviteBrokerModal v-if="show_broker_modal" @hideModal="hideBrokerModal" />
        </Teleport>
        <div class=" bg-gray-100 p-2" style="width:30%; height:100vh">

            <div class="relative">
                <div class="flex justify-between p-2">
                    <h2 class="text-xl font-bold m-0 text-primary mb-2">Brokers</h2>
                    <button class="button_gradient rounded-md text-white w-40 px-2"
                        @click="show_broker_modal = true">Invite Broker</button>
                </div>
                <div class="px-2 py-2 bg-white rounded-md m-3 shadow">
                    <div class="rounded-md flex bg-white space-x-2 mx-2  focus-within:ring-2 ring-primary">
                        <img class="h-5 w-5 my-auto opacity-50 m-1" src="@/assets/icons/dispatch/search.svg" alt="">
                        <input autocomplete="off"
                            class=" h-full text-left rounded-md text-md border-none focus:outline-none py-4 w-full "
                            name="search" placeholder="Search here" v-model="driver_search_query">
                    </div>
                </div>
            </div>
            <ul class="py-1 overflow-y-auto w-full pb-56 mt-2 h-screen overflow-x-hidden p-4" v-if="!loading">
                <li v-for="(broker, idx) in brokers" :key="idx" class="relative mb-2 p-4 w-full bg-white rounded-xl"
                    :class="{ 'border-blue-200 border-r-2 border-b-2 shadow-md': broker == current_broker }"
                    @click="setBroker(broker)">
                    <div class="flex items-center w-full select-none focus:outline-none relative">
                        <div class="flex w-full cursor-pointer  px-4 py-2">
                            <img class="w-10 h-10 mr-3 rounded-full my-auto" :src="broker.photo" />
                            <div class=" w-full">
                                <div class="flex flex-col justify-between space-y-1 items-start">
                                    <p class="text-lg m-0 font-bold" style="color: rgb(61, 90, 169);"> {{ broker.name }}
                                    </p>
                                    <p class="text-base text-gray-500">New Company </p>
                                    <p class="text-sm text-gray-500">{{ broker.email }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <!-- COMPONENT REGISTERED GLOBALLY IN MAIN.JS -->
            <GlobalLoader v-if="loading" />
        </div>
        <div style="width:70%; height:100vh">
            <div class="px-2">
                <div class="text-black flex  justify-between items-center shadow-md rounded-xl p-1">
                    <div class="flex justify-between items-center">
                        <div>
                            <img class="w-10 h-10 max-h-full max-w-full mr-2 rounded-full"
                                :src="current_broker.photo" />
                        </div>
                        <div>

                            <p class="text-md m-0 text-black">
                                {{ current_broker.name }}
                            </p>

                            <p class="text-sm m-0 heading_color">
                                {{ current_broker.email }} | {{ current_broker.phone }}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="flex space-x-10 px-3 ">
                            <div class="text-center flex flex-col  space-y-3 cursor-pointer    "
                                @click="gotoRoute(0, 'Summry')">
                                <p
                                    :class="{ 'text-primary border-b-4 border-primary': current_tab == 0, 'text-gray-500': current_tab !== 0 }">
                                    Summry
                                </p>
                                <!-- <div :class="{ 'invisible': current_tab !== 0 }" class="tab-border-bottom">
                                </div> -->
                            </div>

                            <div class="text-center flex flex-col space-y-3 cursor-pointer   "
                                @click="gotoRoute(1, 'AccountDetails')">
                                <p
                                    :class="{ 'text-primary border-b-4 border-primary': current_tab == 1, 'text-gray-500': current_tab !== 1 }">
                                    Account Detail
                                </p>
                                <!-- <div :class="{ 'invisible': current_tab !== 1 }" class="tab-border-bottom">
                                </div> -->
                            </div>
                            <div class="text-center flex flex-col space-y-3 cursor-pointer    text-gray-500"
                                @click="gotoRoute(2, 'Deals')">
                                <p
                                    :class="{ 'text-primary border-b-4 border-primary ': current_tab == 2, 'text-gray-500': current_tab !== 2 }">
                                    Deals
                                </p>
                                <!-- <div :class="{ 'invisible': current_tab !== 2 }" class="tab-border-bottom">
                                </div> -->
                            </div>
                            <div class="text-center flex flex-col space-y-3 cursor-pointer   text-gray-500 "
                                :class="{ 'selected-tab': current_tab == 3 }" @click="gotoRoute(3, 'Facilities')">
                                <p
                                    :class="{ 'text-primary border-b-4 border-primary': current_tab == 3, 'text-gray-500': current_tab !== 3 }">
                                    Facilities
                                </p>
                                <!-- <div :class="{ 'invisible': current_tab !== 3 }" class="tab-border-bottom">
                                </div> -->
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <router-view :current_broker="current_broker" :current_driver="current_driver" />
            </div>
        </div>
    </div>
</template>
  

<script setup>
import InviteBrokerModal from './Modal/InviteBrokerModal.vue';
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { useApi } from '@/composables/useApi'
import axios from 'axios'

const store = useStore();

const route = useRoute();
const router = useRouter();

const { api_path } = useApi();

const drivers_board = ref([]);
const brokers = ref([]);
const loading = ref(false);
const driver_search_query = ref('');
const current_broker = ref({});
const current_driver = ref({});
const show_broker_modal = ref(false);


const orgID = computed(() => store.state.orgID)

const current_tab = computed(() => {
    let ct = 0
    if (route.name == 'Summry') {
        ct = 0
    } else if (route.name == 'AccountDetails') {
        ct = 1
    }
    else if (route.name == 'Deals') {
        ct = 2
    }
    else if (route.name == 'Facilities') {
        ct = 3
    }
    return ct
})

const gotoRoute = (i, route) => {
    router.push({ name: route })
}

const setBroker = (broker) => {
    current_broker.value = broker
}

const hideBrokerModal = (value) => {
    show_broker_modal.value = value;
}

const getAllBrokers = async () => {
    const config = {
        headers: {
            orgID: orgID.value

        }
    }

    try {
        const res = await axios.get(api_path.value + 'carriers/relationships/brokers', config);
        brokers.value = res.data.result;
        current_broker.value = brokers.value[0];
        console.log(brokers.value)
    } catch (error) {
        console.log(error)
    }
}


getAllBrokers();

</script>


<style scoped>
.tab-border-bottom {
    display: block;
    position: relative;
    background: #194799;
    padding: 2px;
    border: 1px solid #194799;
    /* margin-top: 50px; */
}

.tab-border-bottom:before,
.tab-border-bottom:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 100%;
    width: 0;
    height: 0;
}

.tab-border-bottom:before {
    left: 60px;
    border: 11px solid transparent;
    border-bottom-color: #194799;
}

.tab-border-bottom:after {
    left: 60px;
    border: 10px solid transparent;
    border-bottom-color: #194799;
}
</style>