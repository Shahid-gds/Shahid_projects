<template>
    <div class="p-3">
        <h1 class="font-bold ">Visits</h1>
        <div class="flex space-x-2">
            <h1 class="font-bold text-2xl">3,280</h1>
            <p class="text-green-500 font-bold text-sm mt-auto">2.85%</p>
        </div>

        <div>
            <apexchart type="donut" height="200" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const series = ref([40, 30, 30])
// const series = ref([
//     {
//         name: "Chrome",
//         data: [45]
//     }, {
//         name: "Safari",
//         data: [55]
//     }, {
//         name: "Edge",
//         data: [41]
//     }
// ])

const chartOptions = ref({
    chart: {
        type: 'donut',
    },
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10
        }
    },
    legend: {
        position: 'bottom',
        customLegendItems: ['Chrome', 'Safari', 'Edge'],
    },
    dataLabels: {
        enabled: false,
    },
    colors: ['#116cff', '#ff7800', '#00baff'],
    grid: {
        padding: {
            bottom: -80
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
})
</script>