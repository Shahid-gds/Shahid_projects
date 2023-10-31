<template>
    <div class="space-y-6 p-3">
        <h1 class="text-3xl font-bold">Visit by Device</h1>

        <div class="border-b pb-4">
            <p class="text-sm font-bold text-gray-400">Visits</p>
            <div class="flex space-x-2">
                <h1 class="font-bold text-2xl ">3,280</h1>
                <p class="text-sm font-bold text-green-500 mt-auto">2.84%</p>
            </div>
        </div>

        <div class="flex justify-between relative">
            <h1
                class="select-none bg-white p-3   absolute shadow font-bold left-[8.8rem] top-[2.5rem] border rounded-full">
                VS</h1>
            <div class="p-2 space-y-3">
                <h1 class="border-l-4 text-xl font-bold border-blue-700 pl-2">Mobile</h1>
                <h1 class="text-2xl font-bold">60%</h1>
                <p class="font-bold text-gray-400">1,961</p>
            </div>
            <div class="border"></div>
            <div class=" p-2 space-y-3">
                <h1 class="border-r-4 border-x-[#00b8fb] text-xl font-bold pr-2">Desktop</h1>
                <h1 class="text-2xl font-bold text-right">40%</h1>
                <p class="font-bold text-gray-400 text-right">1,312</p>
            </div>
        </div>
        <div class="flex gap-1">
            <div class="w-[60%] h-2 rounded-md bg-blue-700">

            </div>

            <div class="w-[40%] h-2 rounded-md bg-[#00b8fb]">

            </div>
        </div>
    </div>
</template>

<script setup>

</script>