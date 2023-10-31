<template>
    <div class="h-[40rem] overflow-y-auto">
        <div class="grid grid-cols-12  bg-gray-200 font-lg font-bold text-gray-500 p-3 sticky top-0 rounded-md ">
            <div class="col-span-1">Invoice ID</div>
            <div class="col-span-2">Rate Conf</div>
            <div class="col-span-2">Date Period</div>
            <div class="col-span-2">Destinations</div>
            <div class="col-span-1">Amount</div>
            <div class="col-span-1">Status</div>
            <div class="col-span-3">

            </div>
        </div>

        <div class="grid grid-cols-12 py-8  border-b px-3 my-auto" v-for="item in 10" :key="item">
            <div class="col-span-1 text-gray-500 my-auto font-bold">
                <p>#1234</p>
            </div>
            <div class="col-span-2 text-gray-500 my-auto">
                <p> 14/09/2021</p>
            </div>
            <div class="col-span-2 text-gray-500 my-auto ">
                <p>14/09/2025</p>
            </div>
            <div class="col-span-2 text-gray-500 my-auto">
                <p>{{ item }} Destinations</p>
            </div>
            <div class="col-span-1 text-gray-500 my-auto font-bold">
                <p>$400.00</p>
            </div>
            <div class="col-span-1 text-xs my-auto font-bold">
                <span v-if="item % 2 === 0" class="text-green-500 bg-green-100  px-4 py-1  rounded-full">Paid</span>
                <span v-else class="text-red-500 bg-red-100 px-4 py-1  rounded-full">Unpaid</span>
            </div>
            <div class="col-span-3 flex justify-end">
                <div v-if="item % 2 === 1" class="space-x-2">
                    <button class="border px-2 text-xs py-2 rounded-md text-gray-500 font-bold">Open Dispute</button>
                    <button class="border px-2 text-xs py-2 rounded-md bg-primary text-white font-bold">Request Pay</button>
                </div>
                <button v-else class="border px-2 text-xs py-2 rounded-md text-gray-500 font-bold">Review</button>

            </div>
        </div>
    </div>
</template>