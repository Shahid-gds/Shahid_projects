<template>
    <div class="flex ">
        <MapboxMap height="85vh" :center="center" :zoom="3" :accessToken="accessToken" :mapStyle="mapStyle">
            <MapboxMarker v-for="(driver, idx) in filteredDrivers" :key="idx"
                :lngLat="[driver.currentLocation.longitude, driver.currentLocation.latitude]">
                <template #icon>
                    <p>{{ driver.fname }}</p>
                    <img class="w-8" src="@/assets/icons/map/active-driver.svg">
                </template>

            </MapboxMarker>
        </MapboxMap>
    </div>
</template>

<script setup>
import { MapboxMap, MapboxMarker } from 'vue-mapbox-ts'
import { ref, toRefs, defineProps, computed } from 'vue'

// :lngLat="[typeof (driver?.current_location?.longitude) === 'number' ? driver?.current_location?.longitude : 0, typeof (driver?.current_location?.latitude) === 'number' ? driver?.current_location?.latitude : 0]">


const accessToken = ref('pk.eyJ1IjoibXVmdGFyZGlnaXRhbCIsImEiOiJja2t5bnQxaHYyYjlwMnhxbTM3MGRwdTJwIn0.HeK49l3qG9VGfL76XLTq2w')
const mapStyle = ref('mapbox://styles/muftardigital/ckkyptzj90v3717mtcrji6b55')
const center = ref([-101.29114529694438, 39.92256763648007]);

const props = defineProps(['drivers_board'])



const { drivers_board } = toRefs(props)

const filteredDrivers = computed(() => {
    return drivers_board.value.filter((driver) => {
        return (driver.currentLocation.longitude !== null && driver.currentLocation.latitude !== null) && (driver.currentLocation.longitude !== 0 && driver.currentLocation.latitude !== 0)
    })

    // return drivers_board.value;
})


const check = () => {
    console.log(filteredDrivers.value);
}


// console.log(drivers_board.value)
</script>