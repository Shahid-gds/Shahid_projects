<template>
    <div>
        <!-- HEADER -->
        <section class="bg-gray-100 flex py-8 px-14  rounded-md justify-between ">
            <div class="flex space-x-7">
                <div class="space-y-4">
                    <div class="border bg-white w-48 text-center  rounded-md relative py-2 cursor-pointer "
                        @click="openMenu">
                        <div class="flex space-x-2 justify-center">
                            <img class="h-5 w-5 my-auto" src="@/assets/icons/factoring/clock.svg" alt="">

                            <span>
                                {{ selectedItem }}
                            </span>
                        </div>
                        <div v-if="menu" ref="el">
                            <div class="absolute w-full top-10 z-50 shadow rounded-md">
                                <ul class="bg-white  rounded-md">
                                    <li v-for="item in menuItems" class="my-2 p-2 hover:bg-gray-100"
                                        @click="selectItem(item)" :key="item">{{ item }}</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="flex space-x-2 text-gray-500">
                        <h1 class="text-5xl my-auto font-semibold">$4,500,000</h1>
                        <p class="mt-5">of</p>
                        <p class="mt-5">$5,000,000</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-400">Your Available Credit</p>
                    </div>

                    <div class="w-[28rem] h-2 rounded-md bg-gray-300 relative">
                        <div class="absolute bg-primary  h-2 rounded-md" :style="{ width: width + '%' }">
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-200 space-y-2 rounded-md my-auto p-7">
                <div class="flex space-x-2 my-auto">
                    <img class="h-11 w-11 rounded-full border " src="@/assets/icons/accounting/factoring/apex.png"
                        alt="Apex Capital">
                    <h1 class="text-2xl font-bold my-auto">Apex Capital</h1>
                </div>
                <div>
                    <p class="text-sm font-bold text-gray-500">Next Invoice amount of $4,231 is due in 3 days</p>
                    <p class="text-sm font-bold text-primary">See Invoice now</p>
                </div>
            </div>
        </section>

        <!-- TABS -->
        <section class="flex justify-between px-14 border-b">
            <div class="flex my-auto space-x-4 mt-8">
                <div v-for="tab in tabs" :key="tab.id" @click="setTab(tab.id)"
                    class="cursor-pointer border-b-4  pb-4 font-bold"
                    :class="{ 'border-primary text-primary': tab.id === selectedTab, 'border-gray-400 text-gray-400': tab.id !== selectedTab }">
                    {{ tab.name }}
                </div>
            </div>

            <div class="my-auto ">
                <button @click="showInvoiceModal = true"
                    class="border-primary font-bold border-2 hover:text-white hover:bg-primary text-primary rounded-md px-4 py-2">Add
                    Invoice</button>
            </div>
        </section>

        <Teleport to="body">
            <InvoiceModal v-if="showInvoiceModal" @hideModal="hideModal" />
        </Teleport>
        <!-- TABS CONTENT -->
        <section>
            <InvoicesList v-if="selectedTab === 0" />
            <Advancess v-if="selectedTab === 1" />
            <Partnership v-if="selectedTab === 2" />
        </section>


    </div>
</template>


<script setup>
import { ref } from 'vue'
import InvoicesList from '@/components/Accounting/Factoring/InvoicesList.vue';
import Advancess from '@/components/Accounting/Factoring/Advancess.vue';
import Partnership from '@/components/Accounting/Factoring/Partnership.vue';
import InvoiceModal from '@/components/Accounting/Factoring/Invoices/InvoiceModal.vue'
import { onClickOutside } from '@vueuse/core'

const width = ref(70)
const menu = ref(false)
const el = ref(null);
const selectedItem = ref('Select Timeframe')

const openMenu = () => {
    menu.value = true;
}

onClickOutside(el, () => {
    hideMenu();
})

const hideMenu = () => {
    menu.value = false;
}

const selectItem = (item) => {
    selectedItem.value = item;
    hideMenu();
}

const menuItems = ref(['This Week', 'This Month', 'This Quarter', 'This Year'])

const showInvoiceModal = ref(false);


const hideModal = () => {
    showInvoiceModal.value = false;
}

const selectedTab = ref(0);

const tabs = [
    {
        id: 0,
        name: 'Invoices'
    },
    {
        id: 1,
        name: 'Advancess'

    },
    {
        id: 2,
        name: 'Partnership'
    }
]

const setTab = (t) => {
    selectedTab.value = t;
}

</script>