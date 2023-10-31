
<template>
    <div class="flex ">
        <MapboxMap height="50vh" :center="center" :zoom="3" :accessToken="accessToken" :mapStyle="mapStyle">
            <MapboxMarker v-for="(driver, idx) in drivers_board" :key="idx"
                :lngLat="[typeof (driver?.currentLocation?.longitude) === 'number' ? driver?.currentLocation?.longitude : 0, typeof (driver?.currentLocation?.latitude) === 'number' ? driver?.currentLocation?.latitude : 0]">
                <template #icon>
                    <img class="w-8" src="@/assets/icons/map/active-driver.svg">
                </template>

            </MapboxMarker>
        </MapboxMap>
    </div>
</template>


<script setup>
import { MapboxMap, MapboxMarker } from 'vue-mapbox-ts'
import axios from 'axios'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useApi } from '@/composables/useApi'

const accessToken = ref('pk.eyJ1IjoibXVmdGFyZGlnaXRhbCIsImEiOiJja2t5bnQxaHYyYjlwMnhxbTM3MGRwdTJwIn0.HeK49l3qG9VGfL76XLTq2w')
const mapStyle = ref('mapbox://styles/muftardigital/ckkyptzj90v3717mtcrji6b55')
const center = ref([-101.29114529694438, 39.92256763648007]);

const drivers_board = ref([]);
const loading = ref(false);

const { api_path } = useApi();

const userID = computed(() => store.state.userID)
const orgID = computed(() => store.state.orgID)

const store = useStore();
const getData = async () => {
    loading.value = true;
    const config = {
        headers: {
            userID: userID.value,
            orgID: orgID.value
        }
    }

    try {
        const res = await axios.get(api_path.value + "/fleet/drivers/all", config);
        drivers_board.value = res.data.result;
        console.log(drivers_board.value)
        // drivers_board.value.forEach((driver) => {
        //     console.log(driver.currentLocation)
        // })
        loading.value = false;

    } catch (error) {
        console.log(error)
        loading.value = false;
    }

}



getData();


</script>
