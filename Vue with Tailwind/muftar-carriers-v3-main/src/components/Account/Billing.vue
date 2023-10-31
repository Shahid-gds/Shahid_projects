<template>
    <div>
        <div class="flex flex-row justify-items-stretch  mt-10 w-[70%]">
            <!-- heading -->
            <div class="flex flex-row my-auto space-x-3 text-primary uppercase">
                <div class="flex my-auto">
                    <mdicon size="30" name="clipboard-text" />
                    <h1 class="text-2xl">Billing</h1>
                </div>

                <div class="flex flex-row space-x-2">
                    <div class="py-2 px-4 cursor-pointer rounded-md" @click="setTab(0)"
                        :class="{ 'bg-primary text-white ': current_tab === 0, 'bg-gray-100 text-gray-500': current_tab != 0 }">
                        Analytics
                    </div>

                    <div class="py-2 px-4 cursor-pointer rounded-md" @click="setTab(1)"
                        :class="{ 'bg-primary text-white': current_tab === 1, 'bg-gray-100 text-gray-500': current_tab != 1 }">
                        Invoice
                    </div>
                </div>
            </div>
        </div>



        <div class="flex h-screen flex-row w-full justify-start">
            <BillingAnalytics v-if="(current_tab == 0)" />

            <BillingPayment v-if="(current_tab == 1)" />
        </div>

    </div>
</template>


<script setup>
import BillingAnalytics from './BillingTabs/BillingAnalytics.vue'
import BillingPayment from './BillingTabs/BillingPayment.vue'

import { ref } from 'vue'

const current_tab = ref(0)

const setTab = (tab) => {
    if (tab == 0) {
        current_tab.value = 0;
    }
    if (tab == 1) {
        current_tab.value = 1;
    }
}

</script>


<style scoped>
.cell-color:nth-child(odd) {
    background-color: #F8F7F7;
}
</style>