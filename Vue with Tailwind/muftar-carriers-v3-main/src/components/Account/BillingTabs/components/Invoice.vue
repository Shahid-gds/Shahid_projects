<template>
    <!-- INVOICE -->
    <div  class="flex flex-col space-y-6 w-full">
        <!-- FIRST SECTION -->
        <div class=" space-y-4 bg-primary p-6 rounded-xl">
            <div class="flex flex-row justify-between text-white ">
                <div class="space-y-2">
                    <h1 class="text-3xl">Business PRO+ Trial </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>

                <div>
                    <p class="text-lg">21 Days remaining</p>
                </div>

            </div>

            <div class="flex flex-row justify-between rounded-xl mx-1 p-4 bg-[#4d71d3]">
                <div class="flex space-x-4">
                    <img class="h-12 w-12" src="@/assets/icons/account/visa.svg" alt="">
                    <div class="text-white space-y-1">
                        <h1 class="text-lg">Visa ending in 1234</h1>
                        <p class="text-xs">Expiry 06/2026</p>
                        <p class="text-xs">Billing@billing.com</p>
                    </div>
                </div>

                <div>
                    <h1 class="text-white cursor-pointer hover:underline">Edit</h1>
                </div>
            </div>
        </div>

        <!-- SECOND SECTION -->
        <div class="space-y-5 ">
            <!-- BILLING HEADER -->
            <div class="flex flex-row justify-between">
                <div class="space-y-1">
                    <h1 class="text-xl">Billing History</h1>
                    <p class="text-xs">Download previous invoices.</p>
                </div>

                <div class="my-auto">
                    <button class="bg-primary py-2 space-x-2 px-4  rounded-lg text-white flex ">

                        <img class="h-5 w-5 my-auto" src="@/assets/icons/account/download-white.svg" alt="">
                        <p>
                            Download All
                        </p>
                    </button>
                </div>
            </div>


            <!-- BILLING TABLE -->
            <div class="">
                <!-- <div class="h-[34rem] overflow-y-auto "> -->
                <div class="grid grid-cols-12 border-b text-lg font-bold text-primary mx-1 py-2 sticky top-0 z-30 bg-white">

                    <div class="col-span-2 flex space-x-4">
                        <p>
                            Invoice ID
                        </p>
                    </div>

                    <div class="col-span-2">
                        Billing Admin
                    </div>

                    <div class="col-span-2 flex">
                        <p>
                            Billing Date
                        </p>
                        <img class="h-5 w-5 my-auto" src="@/assets/icons/account/arrow-down.svg" alt="">
                    </div>

                    <div>
                        Amount
                    </div>
                    <div>
                        Status
                    </div>

                    <div>
                        Users
                    </div>
                    <div class="col-span-3">

                    </div>
                </div>

                <div class="grid grid-cols-12 py-4 my-auto border-b mx-1 " v-for="item in data" :key="item">

                    <div class="col-span-2 flex space-x-4">

                        <h1 class="my-auto font-bold text-lg">#{{ item.id + 1 }}12341324</h1>
                    </div>

                    <div class="col-span-2 flex space-x-2">
                        <img class="h-8 w-8 my-auto" src="@/assets/icons/account/person.svg" alt="Person">
                        <div>
                            <h1>{{ item.name }}</h1>
                            <p class="text-xs">cesare5@eragan.com</p>
                        </div>
                    </div>

                    <div class="my-auto col-span-2">
                        <p class="text-sm">
                            Dec 1, 2024
                        </p>
                    </div>

                    <div class="my-auto">
                        <p class="text-sm">
                            USD $10.00
                        </p>
                    </div>

                    <div class="text-xs my-auto font-bold">
                        <span v-if="item % 2 === 0" class="text-green-500 bg-green-100  px-4 py-1  rounded-full">Paid</span>
                        <span v-else class="text-red-500 bg-red-100 px-4 py-1  rounded-full">Unpaid</span>
                    </div>

                    <div class="my-auto">
                        <p class="text-sm">
                            10 Users
                        </p>
                    </div>


                    <div class="flex col-span-3  justify-center space-x-2 relative">
                        <button
                            class="flex rounded-md bg-white border justify-center items-center space-x-1 text-black px-5">
                            <img class="h-5 w-5" src="@/assets/icons/account/pdf.svg" alt="Download Icon">
                            <p>View Invoice</p>
                        </button>

                        <img @click="openMenu(item)" class="h-5 w-5 my-auto cursor-pointer"
                            src="@/assets/icons/account/dots.svg" alt="Dots">

                        <div ref="target" v-if="selected_item === item"
                            class="absolute bg-white top-8 z-50 w-32  right-7 rounded-md shadow-lg border text-center">
                            <p class="p-2 hover:bg-gray-100 cursor-pointer" @click="download">Download</p>
                            <p class="p-2 hover:bg-gray-100 cursor-pointer" @click="report">Report</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="my-4 flex space-x-1 justify-end ">
            <button :disabled="isFirstPage" @click="prev"
                class="flex space-x-2 text-black px-3 hover:bg-gray-100 py-1 rounded-md">
                <img class="h-4 w-4 my-auto" src="@/assets/icons/account/prev.svg" alt="Prev">
                <p>Prev</p>
            </button>
            <button class=" text-black hover:bg-gray-100 px-3 py-1 rounded-md" v-for="item in numberOfPages" :key="item"
                :disabled="currentPage === item" @click="currentPage = item"
                :class="{ 'opacity-30': currentPage === item }">
                {{ item }}
            </button>
            <button class="text-black flex space-x-2 hover:bg-gray-100 px-3 py-1 rounded-md"
                :class="{ 'opacity-30': isLastPage }" :disabled="isLastPage" @click="next">
                <p>Next</p>
                <img class="h-4 w-4 my-auto" src="@/assets/icons/account/next.svg" alt="next">
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { onClickOutside, useOffsetPagination } from '@vueuse/core'

const selected_item = ref(null);
const target = ref(null);


const database = ref([])

for (let i = 0; i < 80; i++)
    database.value.push({ id: i, name: `user ${i}` })



function fetch(page, pageSize) {
    return new Promise((resolve, reject) => {
        const start = (page - 1) * pageSize
        const end = start + pageSize
        setTimeout(() => {
            resolve(database.value.slice(start, end))
        }, 100)
    })
}

const data = ref([])



const page = ref(1)
const pageSize = ref(6)

fetchData({
    currentPage: page.value,
    currentPageSize: pageSize.value,
})

function fetchData({ currentPage, currentPageSize }) {
    fetch(currentPage, currentPageSize).then((responseData) => {
        data.value = responseData
    })
}





const {
    currentPage,
    currentPageSize,
    pageCount,
    isFirstPage,
    isLastPage,
    prev,
    next,
} = useOffsetPagination({
    total: database.value.length,
    page: 1,
    pageSize,
    onPageChange: fetchData,
    onPageSizeChange: fetchData,
})


const numberOfPages = computed(() => {
    let numShown = 3;   // This sets the number of page tabs
    numShown = Math.min(numShown, pageCount.value);
    let first = currentPage.value - Math.floor(numShown / 2);
    first = Math.max(first, 1);
    first = Math.min(first, pageCount.value - numShown + 1);
    return [...Array(numShown)].map((k, i) => i + first);
})

const openMenu = (item) => {
    selected_item.value = item;
}

const download = () => {
    console.log('DOWNLOAD')
}

const report = () => {
    console.log('REPORT')
}

onClickOutside(target, () => {
    selected_item.value = null;
})

</script>