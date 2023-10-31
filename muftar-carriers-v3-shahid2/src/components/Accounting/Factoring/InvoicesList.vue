<template>
    <!-- TABLE SECTION -->
    <section class="px-14 py-10 space-y-5">
        <div class="flex justify-between">
            <h1 class="font-bold text-3xl">In Process</h1>
            <p class="text-gray-400 my-auto">Total Advance Balance <span class="text-gray-500 ml-1 font-bold">$14,396</span>
            </p>
        </div>


        <div>
            <div class="grid grid-cols-6 bg-primary text-white font-bold p-4 rounded-md">
                <div>Invoice</div>
                <div>Invoice#</div>
                <div>Invoice Date</div>
                <div>Due Date</div>
                <div>Amount</div>
                <div>Status</div>
            </div>

            <div class="grid grid-cols-6 p-4 last:rounded-md last:border-b text-sm text-gray-400 font-bold bg-white odd:bg-gray-100"
                v-for="item in 6" :key="item">
                <div>Highland Technology</div>
                <div>1004</div>
                <div>09/14/2023</div>
                <div>11/14/2024</div>
                <div>$182,257.53</div>
                <div>In Review</div>
            </div>
        </div>
    </section>

    <section class="px-14 py-10 space-y-5">
        <div class="flex justify-between">
            <h1 class="font-bold text-3xl">Unfunded</h1>

        </div>

        <div class="flex justify-between">
            <div class="flex space-x-2">
                <h1 class="text-gray-400 my-auto">Filter:</h1>
                <div class="rounded-md text-gray-500 border w-36 p-2 font-bold">All</div>
            </div>
            <p class="text-gray-400 my-auto">Total Eligibal Invoice Value <span
                    class="text-gray-500 ml-1 font-bold">$14,396</span></p>
        </div>


        <div>
            <div class="grid grid-cols-6 bg-primary text-white font-bold p-4 rounded-md">
                <div>Invoice</div>
                <div>Invoice#</div>
                <div>Invoice Date</div>
                <div>Due Date</div>
                <div>Amount</div>
                <div>Status</div>
            </div>

            <div class="grid grid-cols-6 p-4 last:rounded-md last:border-b text-sm text-gray-400 font-bold bg-white odd:bg-gray-100"
                v-for="item in 6" :key="item">
                <div>Highland Technology</div>
                <div>1004</div>
                <div>09/14/2023</div>
                <div>11/14/2024</div>
                <div>$182,257.53</div>
                <div>In Review</div>
            </div>
        </div>
    </section>
</template>


