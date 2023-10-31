<template>
    <div class="overflow-x-auto  overflow-y-auto fixed shadow-lg inset-0 z-50 flex justify-center items-center">
        <div ref="modal" class="p-5   shadow-lg bg-white rounded-xl space-y-5">
            <div class="relative">
                <input
                    class="shadow appearance-none number_input border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    @input="searchAddress" type="text" placeholder="Type Address">
                <ul v-if="search_address.length > 0 && showMenu"
                    class="absolute  top-10 rounded-md shadow-lg border-2 bg-white z-40  w-full">
                    <li class="flex flex-col z-50 py-3 px-2 cursor-pointer hover:bg-gray-100"
                        v-for="(address, idx) in search_address" :key="idx"
                        @click="updateAddress(address.place_name, address.center)">
                        {{ address.place_name }}
                    </li>
                </ul>

            </div>
            <div class="flex  w-full rounded-md">
                <MapboxMap width="100vh" height="50vh" @click="setAddress($event)" class="w-screen h-screen"
                    :center="center" :zoom="3" :accessToken="access_token" :mapStyle="map_style">

                    <MapboxMarker :lngLat="center">
                        <template #icon>

                            <img class="w-8 mx-auto" src="@/assets/icons/qr-code/location-points.svg" />
                        </template>
                    </MapboxMarker>
                </MapboxMap>
            </div>

            <div v-if="address != null">
                {{ address }}
            </div>


        </div>

    </div>

    <div class="fixed  bg-black opacity-60 backdrop-blur-lg z-40 inset-0">
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import axios from 'axios';
import { debounce } from 'debounce'
import { MapboxMap, MapboxMarker } from 'vue-mapbox-ts'
import { onClickOutside } from '@vueuse/core'



const emit = defineEmits(['closeModal'])
const modal = ref(null);

const center = ref([-83.988994283, 33.9567159]);

const address = ref(null)
const access_token = ref('pk.eyJ1IjoibXVmdGFyZGlnaXRhbCIsImEiOiJja2t5bnQxaHYyYjlwMnhxbTM3MGRwdTJwIn0.HeK49l3qG9VGfL76XLTq2w');
const map_style = ref('mapbox://styles/muftardigital/ckkyptzj90v3717mtcrji6b55')
const search_address = ref('')
const showMenu = ref(false);


onClickOutside(modal, () => {
    emit('closeModal', false)
})


// https://api.mapbox.com/geocoding/v5/mapbox.places/3333%20Buford%20Dr%2C%20Buford%2C%20GA%2030519.json?types=place%2Cpostcode%2Caddress&access_token=YOUR_MAPBOX_ACCESS_TOKEN

const searchAddress = async (event) => {
    showMenu.value = true;
    try {
        // const res = axios.get(`https://api.mapbox.com/search/v1/suggest/${event.target.value}&access_token=pk.eyJ1IjoibXVmdGFyZGlnaXRhbCIsImEiOiJja2t5bnQxaHYyYjlwMnhxbTM3MGRwdTJwIn0.HeK49l3qG9VGfL76XLTq2w`)
        // const res = await axios.get("https://api.mapbox.com/search/v1/suggest/Empire%20State%20Building?language=en&limit=1&session_token=[GENERATED-UUID]&proximity=-75.38661,39.82049&country=US&access_token=pk.eyJ1IjoibXVmdGFyZGlnaXRhbCIsImEiOiJja2t5bnQxaHYyYjlwMnhxbTM3MGRwdTJwIn0.HeK49l3qG9VGfL76XLTq2w")
        const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=pk.eyJ1IjoibXVmdGFyZGlnaXRhbCIsImEiOiJja2t5bnQxaHYyYjlwMnhxbTM3MGRwdTJwIn0.HeK49l3qG9VGfL76XLTq2w`)
        console.log(res.data)
        search_address.value = res.data.features;
        console.log(search_address.value);

    } catch (error) {
        console.log(error);
    }


}

const updateAddress = (adrs, cntr) => {
    showMenu.value = false;
    center.value = cntr;
    address.value = adrs
}


const getAddress = async (long, lat) => {
    try {
        const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?types=place%2Cpostcode%2Caddress&limit=1&access_token=${access_token.value}`)
        address.value = res.data.features[0].place_name;
    } catch (error) {
        console.log(error);
    }
}


// getAddress();

//https://api.mapbox.com/geocoding/v5/mapbox.places/-77.03591285997219,38.898759181598564.json?types=place%2Cpostcode%2Caddress&limit=1&access_token=YOUR_MAPBOX_ACCESS_TOKEN

const setAddress = (e) => {
    // event_res.value = 
    // let long=JSON.stringify(e.lngLat.lng);
    // let long=JSON.stringify(e.lngLat.lat);
    center.value[0] = JSON.stringify(e.lngLat.lng);
    center.value[1] = JSON.stringify(e.lngLat.lat);
    getAddress(JSON.stringify(e.lngLat.lng), JSON.stringify(e.lngLat.lat))

}

</script>