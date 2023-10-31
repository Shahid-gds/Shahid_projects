<template>
    <div class="mt-5">
        <div class="flex px-8">
            <div class="mr-2 py-2 px-4 cursor-pointer rounded-md" @click="toggleTab(0), goToRoute(0, 'Statements')"
                :class="{ 'text-blue-400 bg-blue-100': tab_num == 0 }">Dynamic View</div>
            <div class="ml-2 py-2 px-4 cursor-pointer rounded-md" @click="toggleTab(1), goToRoute(1, 'Table')"
                :class="{ 'text-blue-400 bg-blue-100': tab_num == 1 }">Table View</div>
        </div>
        <StatementDynamicView v-if="tab_num == 0" />
        <div v-else>
            <router-view></router-view>
        </div>

    </div>
</template>

<script setup>
import StatementDynamicView from '@/components/Accounting/Statements/StatementDynamicView.vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
const tab_num = ref(0);

const router = useRouter();

const goToRoute = (i, route) => {

    if (route === 'Table') {
        router.push({ name: route, query: { view: 'table' } })
    } else {
        router.push({ name: route });
    }

}

const toggleTab = (tab) => {
    tab_num.value = tab;
}
</script>
