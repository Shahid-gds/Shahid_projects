<template>
    <div class="p-3 space-y-5">
        <h1 class="text-2xl font-bold">Top Country</h1>

        <div class="space-y-2">
            <p class="text-gray-400 font-bold">Visits</p>
            <div class="flex space-x-2">
                <h1 class="text-2xl font-bold">3,280</h1>
                <p class="text-green-700 font-bold text-xs mt-auto">2.84%</p>
            </div>
            <div class="space-y-4">
                <div class="flex justify-between font-bold text-gray-500 text-sm">
                    <div class="flex space-x-2">
                        <Icon class="my-auto" icon="flagpack:us" />
                        <h1>United States</h1>
                    </div>
                    <h1>20%</h1>
                </div>

                <div class="flex justify-between font-bold text-gray-500 text-sm">
                    <div class="flex space-x-2">
                        <Icon class="my-auto" icon="flagpack:gb-ukm" />
                        <h1>United Kingdom</h1>
                    </div>
                    <h1>10%</h1>
                </div>

                <div class="flex justify-between font-bold text-gray-500 text-sm">
                    <div class="flex space-x-2">
                        <Icon class="my-auto" icon="flagpack:ca" />
                        <h1>Canada</h1>
                    </div>

                    <h1>5%</h1>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

</script>