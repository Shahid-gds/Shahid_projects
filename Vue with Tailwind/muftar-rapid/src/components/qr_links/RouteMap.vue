<template>
  <div class="flex h-2/6 rounded-md">
    <MapboxMap height="50vh" :center="[destinations[0].coordinates.longitude, destinations[0].coordinates.latitude]"
      :zoom="3" :accessToken="accessToken" :mapStyle="mapStyle">
      <mapbox-popup v-for="(pnt, idx) in destinations" :key="idx"
        :lngLat="[pnt.coordinates.longitude, pnt.coordinates.latitude]" :offset="23" :renderless="true">
        <p class="text-xs font-bold z-10">{{ pnt.location_type === 'pickup' ? 'PICKUP' : 'DROPOFF' }}</p>
      </mapbox-popup>

      <MapboxMarker v-for="(pnt, idx) in destinations" :key="idx"
        :lngLat="[pnt.coordinates.longitude, pnt.coordinates.latitude]">
        <template #icon>
          <!-- <p v-if="pnt.location_type === 'pickup'" class="text-xs font-bold z-10">PICKUP</p>
          <p v-if="pnt.location_type === 'dropoff'" class="text-xs font-bold z-10">DROPOFF</p> -->
          <img class="w-8 mx-auto" src="@/assets/icons/qr-code/location-points.svg" />
        </template>
      </MapboxMarker>
    </MapboxMap>
  </div>
</template>

<script>
import axios from 'axios'
import { MapboxMap, MapboxMarker, } from 'vue-mapbox-ts'
import enroute_drivers from '@/assets/json/enroute_drivers.json'



export default {
  name: "MainMap",
  components: {
    MapboxMap, MapboxMarker
  },
  props: ['new_center', 'mode', 'destinations'],
  data() {
    return {
      map: "",
      accessToken:
        "pk.eyJ1IjoibXVmdGFyZGlnaXRhbCIsImEiOiJja2t5bnQxaHYyYjlwMnhxbTM3MGRwdTJwIn0.HeK49l3qG9VGfL76XLTq2w",
      mapStyle: "mapbox://styles/muftardigital/ckkyptzj90v3717mtcrji6b55", // your map style
      // mapStyle: "mapbox://styles/mapbox/dark-v10",
      center: [-83.988994283, 33.9567159],
      selected_location: [-83.988994283, 33.9567159],
      drivers: enroute_drivers
    };
  },
  methods: {
    getLoadData() {
      this.processing = true;
      const config = {
        headers: {
          userID: this.userID,
        },
      };
      axios
        .get(this.$api_path + "drivers/all", config)
        .then((res) => {
          this.drivers = res.data.result;
          console.log('FROM API ON MAP', this.drivers_board)
          this.processing = false;
        })
        .catch((err) => {
          console.log(err);
          this.processing = false;
        });
    },
  },
  computed: {

  },

};
</script>

<style scoped>
#MainMap {
  width: 100%;
  display: flex;
}

.basemap {
  max-height: 30vh;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  min-height: 35vh;
  border-radius: 20px;
  padding: 0;
}

.location-name {
  opacity: 1;
  transition: 1s;
  cursor: pointer;
  font-size: .7rem;
}

.map-icon {
  text-align: center;
}



.map-icon img {
  width: 2rem;
}

/* .map-icon img:hover .map-driver-name{
  opacity: 1;
} */
</style>
