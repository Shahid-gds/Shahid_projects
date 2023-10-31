<template>
    <div class="p-4">
        <div class="flex gap-2 items-center">
            <img class="w-6 h-6" src="@/assets/icons/compliance/fuel.svg" alt="" />
            <p class="mt-3 font-bold" style="color: #3d5aa9">FUEL</p>
        </div>
        <div v-if="fuelInfo.length > 0">
            <div class=" rounded-t-lg mt-2" style="background-color: #3D5AA9;">
                <div class="grid gap-1 grid-cols-8 text-white p-2 text-center">
                    <div>Date</div>
                    <div>Driver Name</div>
                    <div>Unit Number</div>
                    <div>Fuel for 'Load'</div>
                    <div>Fuel Station</div>
                    <div>Address</div>
                    <div>Amount</div>
                    <div>Payer</div>
                </div>
            </div>
            <div class="w-full text-center my-4" v-for="(fuelData, index) in fuelInfo" :key="index">
                <div class="grid gap-1 grid-cols-8 text-center  text-gray-400">
                    <div class="my-auto">{{ $fmtDate(fuelData.created) }}</div>
                    <div class="my-auto">{{ fuelData.driver.fname }} {{ fuelData.driver.lname }}</div>
                    <div class="my-auto">{{ fuelData.unit_number }}</div>
                    <div class="my-auto">
                        Fuel for 'Load'
                    </div>
                    <div class="my-auto">{{ fuelData.fuel_station }}</div>

                    <div class="my-auto">

                        <p>{{ fuelData.address.line1 }} {{ fuelData.address.line2 }}</p>
                        <p>{{ fuelData.address.city }} {{ fuelData.address.state }}</p>
                        <p>{{ fuelData.address.country }} {{ fuelData.address.zip }}</p>
                    </div>
                    <div class="my-auto">
                        {{ $displayPrice(fuelData.amount) }}
                    </div>
                    <div class="my-auto">
                        <span class="px-4 py-2 border rounded-md w-min">John Doe</span>
                    </div>
                </div>
            </div>
        </div>
        <GlobalLoader v-if="loading" />
        <div class="h-screen flex justify-center items-center" v-if="fuelInfo.length === 0 && !loading">
            <p class="-mt-40 text-5xl text-gray-400">
                OOPS<span class="text-red-500">!</span> NO REPORTS FOUND.
            </p>
        </div>
    </div>
</template>
  

<script setup>
import axios from 'axios'
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import { useApi } from '@/composables/useApi'
const store = useStore();

const { api_path } = useApi()
const fuelInfo = ref([])
const loading = ref(false);

const orgID = computed(() => store.state.orgID)


const getFuelInfo = async () => {
    loading.value = true;
    const config = {
        headers: {
            orgID: orgID.value
        }
    }

    try {

        const res = await axios.get(api_path.value + "safety/fuel", config)
        fuelInfo.value = res.data.result;
        loading.value = false;

    } catch (error) {
        console.log(error)
        loading.value = false;
    }
}

getFuelInfo();

</script>

<style scoped></style>