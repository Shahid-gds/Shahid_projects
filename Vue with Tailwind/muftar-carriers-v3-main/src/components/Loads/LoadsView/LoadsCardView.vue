<template>
  <div v-if="load.destinations != undefined"
    class=" justify-center  p-6 w-full  bg-white rounded-md text-gray-500 shadow-md shadow-primary my-3">
    <div class="flex flex-col justify-between h-fit ">
      <!-- CARD HEADER -->
      <div class="flex flex-row justify-between">
        <div class="flex flex-col space-y-1">
          <p class="font-bold text-blue-400">{{ load.confirmation_number }}</p>
          <p class="font-light text-xs text-gray-400 italic">{{ load.id }}</p>
          <p class="font-bold text-gray-400">{{ $relativeDate(load.created) }}</p>
        </div>
        <!-- LOAD STATUS -->
        <div class="font-bold text-gray-400">
          {{ load_status }}
        </div>
      </div>
      <!-- CARD CONTENT -->
      <div class="flex flex-row justify-between">
        <!-- CARD LEFT SIDE WITH ICONS -->
        <div class="flex flex-row">
          <div class="flex flex-col text-gray-400">
            <mdicon name="map-marker-outline" />
            <p class="text-center text-xl font-extrabold -mt-2">|</p>
            <p class="text-center text-xl  -mt-2">o</p>
            <p class="text-center text-xl font-extrabold -mt-4">|</p>
            <mdicon name="truck-outline" />
          </div>
          <!-- CARD RIGHT SIDE WITH TEXT -->
          <div class="flex flex-col my-auto space-y-1 ml-3 text-gray-400 font-medium">
            <p>{{ load.destinations[0].location_name }}</p>
            <p>{{ load.destinations[0].address.city }},{{ load.destinations[0].address.state }},{{
              load.destinations[0].address.zip
            }}</p>
            <hr class="my-8 h-px bg-blue-200 border-0 dark:bg-gray-700">
            <p>{{ load.destinations[1].location_name }}</p>
            <p>{{ load.destinations[1].address.city }},{{
              load.destinations[1].address.state
            }},{{ load.destinations[1].address.zip }}</p>
          </div>
        </div>
        <!-- CARD PRICE -->
        <div class="flex flex-col space-y-2 mt-20">

          <div class="flex flex-row justify-center">
            <mdicon name="currency-usd" class="text-blue-400" />
            <p class="text-lg font-bold text-gray-400">{{ $displayPrice(load.quote.price) }}</p>
          </div>
          <a :href="`https://rapid.muftar.com/${load.id}`" target="_blank"
            class="p-2 w-36 text-center bg-primary mx-auto rounded-md text-white uppercase">View Load</a>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps(["load"]);


const load_status = computed(() => {
  let load_status = ""
  if (props.load.status === "unassigned") {
    load_status = "Unassigned"
  }

  if (props.load.status === 'assigned' || props.load.status === 'en_route') {
    load_status = "Assigned"
  }

  if (props.load.status === 'awaiting_bol' || props.load.status === 'rejected_bol') {
    load_status = "At Destination";
  }

  if (props.load.status === 'pending_confirmation') {
    load_status = "Pending Approvel"
  }

  if (props.load.status === 'completed') {
    load_status = "Completed"
  }
  return load_status
})

</script>


<style scoped>
.select-load {
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 5px;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
}

.active-driver {
  font-size: 10px;
}

/* .load-card {
  min-width: 10rem;
  width: 90%;
  height: 90%;
  border: 1px solid var(--primary);
  padding: 2rem;
  border-radius: 5px;
  background: rgb(219, 224, 222);
  box-shadow: 10px 10px 20px #2a3142, -10px -10px 20px #1d1e29;
} */

.driver-id {
  font-family: Arial;
}

.no-driver {
  color: #ff4444;
}

.load-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-items: start;
  align-items: stretch;
}
</style>
