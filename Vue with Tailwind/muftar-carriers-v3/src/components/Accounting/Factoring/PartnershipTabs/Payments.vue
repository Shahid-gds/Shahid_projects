<template>
    <section class="space-y-10 mt-4 overflow-hidden" xyz="fade right stagger-1">
        <div class="border rounded-md flex justify-between p-2 xyz-in">
            <div class="flex space-x-2">
                <img class="h-5 w-5 my-auto" src="@/assets/icons/accounting/factoring/calendar.svg" alt="">
                <h1 class="font-bold">Payment Schedule</h1>
            </div>

            <p class="text-gray-400">Every Month on the 24th</p>
        </div>

        <div class="xyz-in">
            <h1 class="font-bold">History</h1>
            <div class="border rounded-lg">
                <div class="grid grid-cols-5">
                    <div class="border p-4 border-l-0 border-b-0 border-t-0 font-bold text-gray-400">Invoice #</div>
                    <div class="border p-4 border-l-0 border-b-0 border-t-0 font-bold text-gray-400">Date</div>
                    <div class="border p-4 border-l-0 border-b-0 border-t-0 font-bold text-gray-400">Status</div>
                    <div class="border p-4 border-l-0 border-b-0 border-t-0 font-bold text-gray-400">Amount</div>
                    <div class="border p-4 border-l-0 border-b-0 border-t-0 font-bold text-gray-400"></div>
                </div>

                <div v-for="item in 4" :key="item" class="grid grid-cols-5 border ">
                    <div class="p-4 border-r text-gray-600">#1001</div>
                    <div class="p-4 border-r text-gray-600">Sep 24, 2022</div>
                    <div class="p-4 border-r  ">
                        <p class="text-green-400 rounded-md bg-green-100 w-min px-2 py-1">Paid</p>
                    </div>
                    <div class="p-4 border-r text-gray-600">$4,000.00</div>
                    <div class="flex justify-center items-center">
                        <img class="w-5 h-5 my-auto" src="@/assets/icons/accounting/factoring/arrow-right.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>