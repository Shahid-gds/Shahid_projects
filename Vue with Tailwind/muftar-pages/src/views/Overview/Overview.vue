<template>
    <div class="w-full bg-[#F9F9F9]">
        <div>
            <Header />
        </div>
        <div class="flex w-[100%]">
            <div class="w-[90%] p-4">
                <Map />
            </div>
            <div class="w-full">
                <div class="px-2 mt-4 ">
                    <div class="flex space-x-2">
                        <div
                          v-for="(status, index) in statuses"
                          :key="index"
                          :class="{
                            'bg-[#EDEDF3]': true,
                            'bg-[#819AD0] text-[#3C5AA8] font-[900]': activeIndex === index,
                            'p-4': true,
                            'w-full': true,
                            'rounded-xl': true,
                            'text-center': true,
                            'cursor-pointer': true,
                          }"
                          @click="setActive(index)"
                        >
                          <h1 class="text-md font-[900] leading-tight">{{ status.count }}</h1>
                          <p class="text-xs font-[900]  leading-tight">{{ status.label }}</p>
                        </div>
                      </div>
                    <div class="p-2 px-4 rounded-xl flex justify-between items-center bg-[#EDEDF3] mt-2">
                        <div class="text-xs">
                            <span class="text-[#666668]">Latest</span> <span
                                class="text-[#3C5AA8] font-[900] text-sm">42</span> <span class="text-[#666668]">from a
                                total of</span> <span class="text-[#3C5AA8] font-[900] text-sm">42</span> <span
                                class="text-[#666668]">loads</span>
                        </div>
                        <div class="flex space-x-2">
                            <div @click="showGridView"  :class="{ 'bg-[#819AD0] p-1.5 rounded-md': isGridViewActive }"
                            class="cursor-pointer p-1.5 rounded-md">
                                <img src="@/assets/images/gridView.svg" alt="grid view">
                            </div>
                            <div @click="showListView"   :class="{ 'bg-[#819AD0] p-1.5 rounded-md': !isGridViewActive }"
                            class="cursor-pointer p-1.5 rounded-md">
                                <img src="@/assets/images/listView.svg" alt="list view">
                            </div>
                        </div>
                    </div>
                </div>
              
                <div class="overflow-y-auto w-[100%] pb-64 h-screen mt-3" v-if="currentView === 'grid'" >
                    <CardViews />
                </div>
                <div class="overflow-y-auto pb-64 h-screen mt-3" v-else-if="currentView === 'list'">
                    <ListView/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from './Header.vue';

import CardViews from './CardViews.vue';
import ListView from './ListView.vue';
import Map from './Map.vue';
import { ref, onMounted } from 'vue';

const statuses = [
  { count: 42, label: 'Unassigned' },
  { count: 21, label: 'En Route' },
  { count: 6, label: 'At Destination' },
  { count: 11, label: 'Pending Approval' },
  { count: 18, label: 'Complete Delivery' }
];

const activeIndex = ref(null);

const setActive = (index) => {
  activeIndex.value = index;
};
const isGridViewActive = ref(true);
const currentView = ref('grid');

const showGridView = () => {
  currentView.value = 'grid';
  isGridViewActive.value = true;
};

const showListView = () => {
  currentView.value = 'list';
  isGridViewActive.value = false;
};
onMounted(() => {

  const unassignedIndex = statuses.findIndex(status => status.label === 'Unassigned');
  if (unassignedIndex !== -1) {
    setActive(unassignedIndex);
  }
});
</script>

<style scoped>
::-webkit-scrollbar {
    width: 8px;
    background-color: #DEE1F8;
}


::-webkit-scrollbar-thumb {
    background-color: #A2A5D8;
    border-radius: 5px;
}
</style>