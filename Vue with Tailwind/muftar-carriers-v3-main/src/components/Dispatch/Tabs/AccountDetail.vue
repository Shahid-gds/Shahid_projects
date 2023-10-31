<template>
    <div class="px-5" v-if="!current_driver">
        <AllDetails :drivers_board="drivers_board" />
    </div>
    <div class="px-5" v-if=current_driver>
        <div class="flex justify-between items-center">
            <div class="flex justify-center">
                <div class="flex gap-2 justify-center items-center my-auto">
                    <img class="w-6 h-6 my-auto" src="@/assets/icons/dispatch/acnt-icon.svg" alt="" />
                    <p class="mt-3 font-bold my-auto" style="color: #3d5aa9">ACCOUNT DETAILS</p>
                </div>
            </div>
            <button @click="$emit('closeDriver')" class="hover:bg-gray-100 p-2 rounded-md">
                <img class="h-6 w-6" src="@/assets/icons/dispatch/close.svg" alt="">
            </button>
        </div>

        <div class="text-black flex  justify-between items-center">
            <div class="flex">
                <div>
                    <img class="w-10 h-10 mr-3 rounded-full" :src="current_driver.photo" />
                </div>
                <div>
                    <p class="text-md m-0 text-black" v-if="current_driver.fname != ''">
                        {{ current_driver.fname }} {{ current_driver.lname }}
                    </p>
                    <p class="m-0 text-black italic text-sm" v-else>no name</p>
                    <p class="text-xs m-0 text-gray-400 italic">
                        {{ current_driver.id }}
                    </p>
                </div>
            </div>
        </div>

        <section>
            <!-- micro tabs -->

            <div class="flex justify-start gap-20 items-center">
                <div class="tab cursor-pointer m-3 text-lg"
                    :class="{ ' text-primary border-b-4 border-b-primary': current_tab == 0, 'text-gray-500': current_tab != 0 }"
                    @click="setTab(0)">
                    Map
                </div>
                <div class="tab cursor-pointer m-3  text-lg "
                    :class="{ ' text-primary border-b-4 border-b-primary': current_tab == 1, 'text-gray-500': current_tab != 1 }"
                    @click="setTab(1)">
                    Details
                    <!-- from Rapid  -->
                </div>
                <div class="tab cursor-pointer m-3  text-lg "
                    :class="{ ' text-primary border-b-4 border-b-primary': current_tab == 2, 'text-gray-500': current_tab != 2 }"
                    @click="setTab(2)">
                    Feed
                </div>
                <div class="tab cursor-pointer m-3  text-lg "
                    :class="{ ' text-primary border-b-4 border-b-primary': current_tab == 3, 'text-gray-500': current_tab != 3 }"
                    @click="setTab(3)">
                    Queued Loads
                </div>
            </div>




            <div class=" overflow-y-scroll">
                <DriverMap v-if="current_tab == 0" :drivers_board="drivers_board" :current_driver="current_driver"
                    :focus_location="focus_location" />
                <DriverDetails v-if="current_tab == 1" :current_driver="current_driver" />
                <DriverFeed v-if="current_tab == 2" :current_driver="current_driver" />
                <DriverQueue v-if="current_tab == 3" :current_driver="current_driver" />
            </div>
        </section>

    </div>
</template>


<script setup>
import DriverMap from '@/components/Dispatch/Tabs/driver-details-tab/DriverMap.vue'
import DriverDetails from '@/components/Dispatch/Tabs/driver-details-tab/DriverDetails.vue'
import DriverFeed from '@/components/Dispatch/Tabs/driver-details-tab/DriverFeed.vue'
import DriverQueue from '@/components/Dispatch/Tabs/driver-details-tab/DriverQueue.vue'
import AllDetails from './AllDetails/AllDetails.vue'

import { toRefs, defineProps, ref } from 'vue'


const props = defineProps(['current_driver', 'drivers_board'])


const { current_driver, drivers_board } = toRefs(props)

const current_tab = ref(0);
const focus_location = [-83.988994283, 33.9567159];

const setTab = (x) => {
    current_tab.value = x;
}




</script>


<style scoped>
.heading-color {
    color: #3D5AA9 !important;
    font-weight: bolder;
}

.intransit-color {
    color: #5EDE6E !important;
    font-weight: bolder;
}
</style>