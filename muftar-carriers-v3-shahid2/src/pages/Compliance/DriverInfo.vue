<template>
    <div class="flex sm:flex-col lg:flex-row justify-start">
        <!-- DRIVER INFO SEARCH -->
        <div class=" bg-gray-100  h-screen lg:w-[30%] sm:w-full">
            <div class="p-3 ">
                <h2 class="text-xl font-bold m-0 text-primary mb-2">Driver Information</h2>
                <div class="px-2 py-2 bg-white rounded-md m-3 shadow">
                    <div class="rounded-md flex bg-white space-x-2 mx-2  focus-within:ring-2 ring-primary">
                        <img class="h-5 w-5 my-auto opacity-50 m-1" src="@/assets/icons/dispatch/search.svg" alt="">
                        <input autocomplete="off"
                            class=" h-full text-left rounded-md text-md border-none focus:outline-none py-4 w-full "
                            name="search" placeholder="Search here" v-model="driver_search_query">
                    </div>
                </div>
            </div>
            <ul class="py-1 overflow-y-auto w-full h-screen overflow-x-hidden p-4" v-if="!loading">
                <li v-for="(dr, idx) in drivers_on_board" :key="idx"
                    class="relative mb-2 p-4 w-full bg-white rounded-xl"
                    :class="{ 'border-blue-200 border-r-2 border-b-2 shadow-md': dr == current_driver }"
                    @click="setDriver(dr)">
                    <div class="flex flex-col  w-full select-none focus:outline-none relative">
                        <div class="flex w-full cursor-pointer  px-4 py-2">
                            <img class="w-10 h-10 mr-3 rounded-full" :src="dr.photo" />
                            <div class="transform translate-y-0.5 w-full">
                                <div class="flex flex-col justify-between items-start w-60">
                                    <p class="text-md m-0 font-bold" v-if="dr.fname != ''"
                                        style="color: rgb(61, 90, 169);"> {{ dr.fname }} {{ dr.lname }}</p>
                                    <p class="text-md m-0 font-bold" style="color: rgb(61, 90, 169);" v-else>
                                        {{ getName(dr) }}</p>
                                    <p class="text-xs m-0 text-gray-400 italic">{{ dr.id }}</p>
                                </div>
                                <!-- <p class="text-xs m-0 text-gray-400 italic">{{dr.id}}</p> -->
                                <p class="text-xs m-0 text-gray-400 italic">
                                    ({{ Number(dr?.currentLocation?.latitude).toFixed(5) }},
                                    {{ Number(dr?.currentLocation?.latitude).toFixed(5) }})</p>
                                <div class="flex items-center gap-4">
                                    <p class="text-blue-500">360 | 63 mph |</p>
                                    <div class="flex gap-1">
                                        <img class="w-5 h-5" src="@/assets/icons/compliance/view.svg" alt="">
                                        <p class="text-sm m-0 text-green-400">Active</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="flex flex-row  justify-end">
                            <router-link class="py-2 px-4 bg-primary rounded-3xl" :to="{ name: 'DriverInfoTab' }">
                                <button>
                                    DRIVER INFO
                                </button>
                            </router-link>

                            <router-link class="py-2 px-4 bg-primary rounded-3xl" :to="{ name: 'Documents' }">
                                <button>
                                DOCUMENTS
                                </button>
                            </router-link>

                        </div> -->
                    </div>
                </li>
            </ul>

            <!-- COMPONENT REGISTERED GLOBALLY INSIDE main.js -->
            <GlobalLoader v-if="loading" />
        </div>
        <div style="width:70%; height:100vh" :class="{ 'invisible': loading }">
            <router-view :current_driver="current_driver" />
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: 'DriverInfo',
    data() {
        return {
            route: this.$route.name,
            drivers_board: [],
            loading: false,
            driver_search_query: '',
            current_driver: {},
            current_driver_stats: {},
        }
    },
    methods: {
        gotoRoute(i, route) {
            this.$router.push({ name: route })
        },
        searchDriver() {
            console.log(this.driver_search_query)
        },
        setDriver(driver) {
            this.current_driver = driver
        },
        getName({ fname, lname, email }) {
            if (fname || lname)
                return `${fname} ${lname}`
            return email;
        },
        async getAllDrivers() {
            this.loading = true;
            const config = {
                headers: {
                    userID: this.userID,
                    orgID: this.orgID
                }
            }
            try {
                const response = await axios.get(this.$api_path + "fleet/drivers/all", config);
                this.drivers_board = response.data.result;
                this.current_driver = response.data.result[0];

                this.current_driver_stats = response.data.result[0].stats;
                this.loading = false;

            } catch (error) {
                this.loading = false;
                console.log(error);
            }

        },
    },
    computed: {
        ...mapState(['orgID']),
        current_tab() {
            let ct = 0
            if (this.$route.name == 'Status') {
                ct = 0
            } else if (this.$route.name == 'AccountDetail') {
                ct = 1
            }
            return ct
        },
        drivers_on_board() {
            if (this.driver_search_query.trim().length > 0) {
                return this.drivers_board.filter((driver) => driver.fname.toLowerCase().includes(this.driver_search_query.trim().toLocaleLowerCase()))
            }
            return this.drivers_board;

        }
    },
    created() {
        this.getAllDrivers()
    },
};
</script>
<style scoped>

</style>