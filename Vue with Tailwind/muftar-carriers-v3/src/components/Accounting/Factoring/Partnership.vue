<template>
    <div class="px-14 py-10 grid xl:grid-cols-2 md:grid-cols-1 gap-8 ">
        <!-- LEFT -->
        <section>
            <div class="flex justify-between pb-6 border-b" xyz="fade-100% left stagger-1">
                <div class="space-y-2 xyz-in">
                    <p class="p-2 w-fit text-sm rounded-md bg-gray-100 text-gray-400">15-500</p>
                    <div class="flex space-x-2">
                        <img class="h-11 w-11 rounded-full border my-auto mx-auto"
                            src="@/assets/icons/accounting/factoring/apex.png" alt="Apex Capital">
                        <h1 class="text-2xl font-bold my-auto">Apex Capital</h1>
                    </div>
                </div>

                <div class="flex space-x-2 xyz-in">
                    <div class="space-y-2">
                        <p class="text-sm text-gray-400">Total Completed & Stored</p>
                        <h1 class="float-right text-2xl font-bold">$6,000.00</h1>
                    </div>
                    <!-- <div class="my-auto">
                       <div class="p-5 rounded-full border-2 border-red-300">

                       </div>
                    </div> -->
                </div>
            </div>

            <div class="flex space-x-2 py-5" xyz="fade-100% left stagger-1">
                <img class="h-7  w-7 xyz-in my-auto bg-gray-200 rounded-md "
                    src="@/assets/icons/accounting/factoring/box.svg" alt="">
                <div class="xyz-in">
                    <p class="text-sm text-gray-400">Subcontractor</p>
                    <h1 class="font-bold">Acme Corp</h1>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-7" xyz="fade-100% left stagger-1">
                <div class="xyz-in">
                    <p class="font-bold text-sm text-gray-400">Original Contract Sum </p>
                    <p class="font-bold text">$10,000.00</p>
                </div>
                <div class="border-l-2 pl-4 xyz-in">
                    <p class="font-bold text-sm text-gray-400">Net Change Orders</p>
                    <p class="font-bold text">$0.00</p>
                </div>
                <div class="xyz-in">
                    <p class="font-bold text-sm text-gray-400">Current Contract </p>
                    <p class="font-bold text">$10,000.00</p>
                </div>
                <div class="border-l-2 pl-4 xyz-in">
                    <p class="font-bold text-sm text-gray-400">Previously Billed & Materials Stored to Date </p>
                    <p class="font-bold text">$2,000.00</p>
                </div>
                <div class="xyz-in">
                    <p class="font-bold text-sm text-gray-400">Retainage(10%) </p>
                    <p class="font-bold text">$10,000.00</p>
                </div>
                <div class="border-l-2 pl-4 xyz-in">
                    <p class="font-bold text-sm text-gray-400">Current Period Billed </p>
                    <p class="font-bold text">$3,000.00</p>
                </div>
                <div class="xyz-in">
                    <p class="font-bold text-sm text-gray-400">Remaining Balance </p>
                    <p class="font-bold text">$7,000.00</p>
                </div>
            </div>
        </section>
        <!-- RIGHT -->
        <section>
            <div class="flex border-b  space-x-4 select-none" xyz="fade-100% left stagger-1">
                <div v-for="tab in tabs" :key="tab.id" @click="setTab(tab.id)"
                    class="pb-4  font-bold  border-b-2 cursor-pointer xyz-in"
                    :class="{ 'border-primary text-primary': tab.id === selectedTab, 'border-gray-400 text-gray-400': tab.id !== selectedTab }">
                    {{ tab.name }}
                </div>
            </div>
            <div class="py-4">
                <Payments v-if="selectedTab === 0" />
                <StoredMaterials v-if="selectedTab === 1" />
                <Documents v-if="selectedTab === 2" />
                <Notes v-if="selectedTab === 3" />
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Payments from './PartnershipTabs/Payments.vue'
import StoredMaterials from './PartnershipTabs/StoredMaterials.vue'
import Documents from './PartnershipTabs/Documents.vue'
import Notes from './PartnershipTabs/Notes.vue'


const selectedTab = ref(0)

const tabs = ref([
    {
        id: 0,
        name: 'Payments'
    },
    {
        id: 1,
        name: 'Stored Materials'

    },
    {
        id: 2,
        name: 'Documents'
    },
    {
        id: 3,
        name: 'Notes'
    }
])

const setTab = (t) => {
    selectedTab.value = t;
}
</script>