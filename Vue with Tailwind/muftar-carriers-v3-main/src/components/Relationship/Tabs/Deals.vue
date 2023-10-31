<template>
    <div class="w-full py-16 px-10 space-y-10">
        <div class="space-y-4">
            <h1 class="text-4xl font-bold text-primary">Billing & Invoices</h1>
            <p class="w-[30rem] text-gray-400">View all your invoices and receipts and make sure you pay your employees
                on time.</p>
            <div class="flex justify-end">
                <button class="py-2 px-4 bg-primary text-white rounded-md right-0">Use Factoring</button>
            </div>
        </div>

        <!-- TABS -->
        <div class="space-y-4">
            <div class="flex flex-row space-x-8 border-b">
                <div class="cursor-pointer text-xl font-bold pb-2" @click="setTab(3)"
                    :class="{ 'text-primary border-b-4 border-primary': current_tab === 3, 'text-gray-400': current_tab !== 3 }">
                    All Invoices
                </div>
                <div class="cursor-pointer text-xl font-bold pb-2" @click="setTab(1)"
                    :class="{ 'text-primary border-b-4 border-primary': current_tab === 1, 'text-gray-400': current_tab !== 1 }">
                    Open Invoices
                </div>

                <div class="cursor-pointer text-xl font-bold pb-2" @click="setTab(2)"
                    :class="{ 'text-primary border-b-4 border-primary': current_tab === 2, 'text-gray-400': current_tab !== 2 }">
                    Past Invoices
                </div>


            </div>

            <div>
                <OpenInvoices v-if="current_tab === 1" />
                <PastInvoices v-if="current_tab === 2" />
                <AllInvoices v-if="current_tab === 3" />
            </div>
        </div>


    </div>
</template>
  
<script setup>

import OpenInvoices from './SubTabs/OpenInvoices.vue'
import PastInvoices from './SubTabs/PastInvoices.vue'
import AllInvoices from './SubTabs/AllInvoices.vue'
import { ref } from 'vue'
const current_tab = ref(3)

const setTab = (tab) => {
    current_tab.value = tab;
}


</script>
  
<style>

</style>