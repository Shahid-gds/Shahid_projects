<template>
    <div id="MainMap">
        <!-- [current_driver.currentLocation.longitude, current_driver.currentLocation.latitude] -->
        <!-- [current_driver.currentLocation.longitude, current_driver.currentLocation.latitude] -->
        <MapboxMap style="height:700px; padding: 5px; border: 2px solid #cccfce;"
            :center="[typeof (current_driver?.currentLocation?.longitude) === 'number' ? current_driver?.currentLocation?.longitude : -83.988994283, typeof (current_driver?.currentLocation?.latitude) === 'number' ? current_driver?.currentLocation?.latitude : 33.9567159]"
            :zoom="8" :accessToken="accessToken" :mapStyle="mapStyle">
            <MapboxMarker
                :lngLat="[typeof (current_driver?.currentLocation?.longitude) === 'number' ? current_driver?.currentLocation?.longitude : -83.988994283, typeof (current_driver?.currentLocation?.latitude) === 'number' ? current_driver?.currentLocation?.latitude : 33.9567159]">
                <template #icon>
                    <img class="w-8" src="@/assets/icons/map/active-driver.svg">
                </template>

            </MapboxMarker>
        </MapboxMap>
    </div>
</template>

<script>
import enroute_drivers from "@/assets/json/enroute_drivers.json";
import { MapboxMap, MapboxMarker } from 'vue-mapbox-ts'
export default {
    name: "DriverMap",
    components: {
        MapboxMap,
        MapboxMarker
    },
    props: ['drivers_board', 'current_driver', 'focusOnDriver', 'focus_location'],
    data() {
        return {
            map: "",
            accessToken:
                "pk.eyJ1IjoibXVmdGFyZGlnaXRhbCIsImEiOiJja2t5bnQxaHYyYjlwMnhxbTM3MGRwdTJwIn0.HeK49l3qG9VGfL76XLTq2w", // your access token. Needed if you using Mapbox maps
            mapStyle: "mapbox://styles/muftardigital/ckkyptzj90v3717mtcrji6b55", // your map style
            // selected_location: [-82.988994283, 33.9567159],
            center: [-83.988994283, 33.9567159],
            // center: [this.current_driver.currentLocation.longitude, this.current_driver.currentLocation.latitude],
            drivers: enroute_drivers,
        };
    },
    methods: {
    },
    computed: {


        // filterList() {
        //     let chrono_list = this.drivers_board

        //     let filteredNoLocation = chrono_list.filter((x) => {
        //         let results = x.hasOwnProperty('currentLocation')
        //         return results
        //     })
        //     let full_user_list = [...filteredNoLocation]
        //     let uniq = [...new Set(full_user_list)];
        //     return uniq
        // },
        // focusedLocation:{
        //   get(){
        //     let focused_loc =   [Number(this.selected_location['longitude']),  Number(this.selected_location['latitude']) ]
        //     return focused_loc
        //   },
        //   set(val){
        //     return val
        //   }
        // },
    },
    created() {
        // this.focus_location = this.center
    }
};
</script>
  
<style scoped>

</style>
  