<template>
    <div id="MainMap">
        <!-- <MglMap
        class="basemap"
        container="mapContainer"
        :accessToken="accessToken"
        :mapStyle="mapStyle"
        :center="center"
        :zoom="11"
        logoPosition="top-left"
      >
        <MglNavigationControl position="bottom-right" />
      </MglMap> -->
        <MglMap class="basemap" container="mapContainer" :accessToken="accessToken" :mapStyle="mapStyle"
            :center="focus_location" :zoom="11" logoPosition="top-left">
            <MglMarker v-for="(driver, idx) in filterList" :key="idx"
                :coordinates="[driver.currentLocation.longitude, driver.currentLocation.latitude]">
                <div slot="marker" class="map-icon" v-if="driver.currentLocation">
                    <img src="@/assets/icons/map/active-driver.svg" />
                </div>
            </MglMarker>
        </MglMap>

    </div>
</template>
  
<script>
import { mapGetters } from "vuex";
// import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";
import enroute_drivers from "@/assets/json/enroute_drivers.json";

export default {
    name: "MainMap",
    components: {
        MglMap,
        MglMarker,
    },
    props: ['drivers_board', 'selected_driver', 'focusOnDriver', 'focus_location'],
    data() {
        return {
            map: "",
            accessToken:
                "pk.eyJ1IjoibXVmdGFyZGlnaXRhbCIsImEiOiJja2t5bnQxaHYyYjlwMnhxbTM3MGRwdTJwIn0.HeK49l3qG9VGfL76XLTq2w", // your access token. Needed if you using Mapbox maps
            mapStyle: "mapbox://styles/muftardigital/ckkyptzj90v3717mtcrji6b55", // your map style
            selected_location: [-82.988994283, 33.9567159],
            center: [-83.988994283, 33.9567159],
            drivers: enroute_drivers
        };
    },
    computed: {
        filterList() {
            let chrono_list = this.drivers_board

            let filteredNoLocation = chrono_list.filter((x) => {
                let results = x.hasOwnProperty('currentLocation')
                return results
            })
            let full_user_list = [...filteredNoLocation]
            let uniq = [...new Set(full_user_list)];
            return uniq
        },
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
#MainMap {
    width: 100%;
    display: flex;
}

.basemap {
    height: 100%;
    min-width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    position: relative;
}

.map-icon img {
    width: 2rem;
}
</style>
  