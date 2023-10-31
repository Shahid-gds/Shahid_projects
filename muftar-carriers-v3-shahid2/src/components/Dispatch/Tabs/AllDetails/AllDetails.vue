<template>
    <div class="space-y-4">
        <div class="flex space-x-5 border-b mx-2">
            <div v-for="tab in tabs" class="text-xl pb-2 cursor-pointer  text-center font-bold" @click="setTab(tab.current_tab)"
                :key="tab" :class="{ 'text-primary border-b-4 border-b-primary ': selected_tab === tab.current_tab,'text-gray-500  ': selected_tab !== tab.current_tab  }">

                {{ tab.name }}
            </div>
        </div>


        <div class=" overflow-y-scroll">
            <Map :drivers_board="drivers_board" v-if="selected_tab === 0" />
            <Feed v-if="selected_tab === 1" />
            <LoadQueue v-if="selected_tab === 2" />
        </div>

        <!-- {{ drivers_board }} -->
    </div>
</template>

<script setup>

import Map from './tabs/Map.vue'
import Feed from './tabs/Feed.vue'
import LoadQueue from './tabs/LoadQueue.vue'

import { defineProps, defineEmits, ref, toRefs } from 'vue'

const props = defineProps(['drivers_board'])

const { drivers_board } = toRefs(props)

const selected_tab = ref(0);

const tabs = ref([{ current_tab: 0, name: 'Map' }, { current_tab: 1, name: 'Feed' }, { current_tab: 2, name: 'Queued Loads' }])


const setTab = (t) => {
    selected_tab.value = t;
}

</script>


<style scoped>
.tab-border-bottom {
    display: block;
    position: relative;
    background: #3D5AA9;
    padding: 2px;
    border: 1px solid #3D5AA9;
    margin-top: 20px;
}

.tab-border-bottom:before,
.tab-border-bottom:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 100%;
    width: 0;
    height: 0;
}

.tab-border-bottom:before {
    left: 70px;
    border: 11px solid transparent;
    border-bottom-color: #3D5AA9;
}

.tab-border-bottom:after {
    left: 70px;
    border: 10px solid transparent;
    border-bottom-color: #3D5AA9;
}
</style>