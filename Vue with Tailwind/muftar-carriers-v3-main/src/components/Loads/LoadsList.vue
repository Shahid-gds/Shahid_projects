<template>
  <div id="LoadList" class="overflow-y-auto h-full relative px-10">
    <div class="flex justify-between">
      <h1 class="text-right pr-10 text-sm  text-white fixed right-5"
        v-if="(currentAllLoads.length > 0) || (currentAllClosedLoads.length > 0)">Latest <span
          class="text-blue-400 font-bold">{{
            current_tab == 4 ? currentAllClosedLoads.length : currentAllLoads.length }}</span> from a total of <span
          class="text-blue-400 font-bold">{{
            current_tab == 4 ? currentAllClosedLoads.length : currentAllLoads.length }}</span> loads</h1>

      <div class="flex space-x-1">
        <button @click="galleryView = false" class="p-2 hover:bg-gray-100/25 rounded-md"
          :class="{ 'bg-gray-100/25': !galleryView }">
          <img class="h-6 w-6" src="@/assets/icons/loads/grid-view.svg" alt="GRID VIEW IMAGE">
        </button>
        <button @click="galleryView = true" class="p-2 hover:bg-gray-100/25 rounded-md"
          :class="{ 'bg-gray-100/25': galleryView }">
          <img class="h-6 w-6" src="@/assets/icons/loads/list-view.svg" alt="LIST VIEW IMAGE">
        </button>


      </div>
    </div>

    <div v-if="loading" class="flex justify-center items-center h-[21rem]" role="status">
      <svg aria-hidden="true" class="mr-2 w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor" />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill" />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>

    <div v-if="galleryView">
      <div v-if="(currentAllLoads.length > 0) || (currentAllClosedLoads.length > 0)" class="pb-[600px] pt-8">

        <div class="grid grid-cols-7 text-center bg-primary p-4 rounded-t-lg text-xl font-bold">
          <div>Status</div>
          <div>Date</div>
          <div>Load Number</div>
          <div>Origin</div>
          <div>Destination</div>
          <div>Rate</div>
          <div></div>
        </div>

        <LoadsListView v-for="(load, idx) in  current_tab == 4 ? currentAllClosedLoads : currentAllLoads" :key="idx"
          :load="load" />
      </div>
    </div>

    <div v-if="!galleryView">
      <div v-if="(currentAllLoads.length > 0) || (currentAllClosedLoads.length > 0)"
        class="grid gap-3 pb-[600px] lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 pt-8">
        <LoadsCardView v-for="(load, idx) in  current_tab == 4 ? currentAllClosedLoads : currentAllLoads" :key="idx"
          :load="load" />
      </div>
    </div>

    <div class="w-full py-3 mx-auto flex flex-col items-center justify-center"
      v-else-if="!(currentAllLoads.length > 0) && !(currentAllClosedLoads.length > 0) && !loading"
      style="background-color: #1d1e29;">
      <img class="w-44  py-4 " src="@/assets/icons/loads/paper.svg" />
      <h2 class="text-2x w-11/12 text-center mx-auto" v-if="current_tab == 0">No Loads Unassigned </h2>
      <h2 class="text-2x w-11/12 text-center mx-auto" v-if="current_tab == 1">No Loads En Route</h2>
      <h2 class="text-2x w-11/12 text-center mx-auto" v-if="current_tab == 2">No Loads At Delivery</h2>
      <h2 class="text-2x w-11/12 text-center mx-auto" v-if="current_tab == 3">No Loads Pending </h2>
      <h2 class="text-2x w-11/12 text-center mx-auto" v-if="current_tab == 4">No Loads Complete</h2>
      <p class="text-white text-center w-10/12 mx-auto">
        You do not have any unassigned loads. You can add a new load in the Loads Page.
      </p>
      <router-link class="mx-auto py-4 text-center w-10/12" :to="{ name: 'Dispatch', query: { tab: 'loads' } }">
        <button class="bg-theme p-3 rounded text-white">Take Me to My Loads</button>
      </router-link>
    </div>

  </div>
</template>

<script setup>
import LoadsCardView from './LoadsView/LoadsCardView.vue'
import LoadsListView from './LoadsView/LoadsListView.vue'

import { defineProps, computed, ref } from 'vue'

const props = defineProps(['loads', 'count', 'current_tab', 'loading', 'closed_loads'])

const galleryView = ref(false);

const currentAllLoads = computed(() => {
  const new_loads = []
  props.loads.forEach((load) => {
    if (load.destinations != undefined) {
      if (props.current_tab === 0 && load.status === 'unassigned') {
        new_loads.push(load);
      }

      if (props.current_tab === 1 && (load.status === 'assigned' || load.status === 'en_route')) {
        new_loads.push(load);
      }

      if (props.current_tab === 2 && (load.status === 'awaiting_bol' || load.status === 'rejected_bol')) {
        new_loads.push(load);
      }

      if (props.current_tab === 3 && load.status === 'pending_confirmation') {
        new_loads.push(load);
      }
    }
  })
  return new_loads;
})

const currentAllClosedLoads = computed(() => {
  const new_loads = []
  props.closed_loads.forEach((load) => {
    if (props.current_tab === 4 && load.status === 'completed') {
      new_loads.push(load);
    }
  })
  return new_loads;
})


</script>

<style scoped>
#LoadList {
  width: 100%;
  height: 100%;
  min-height: 50vh;
  background-color: #1d1e29;
  z-index: 3;
  position: relative;
}
</style>
