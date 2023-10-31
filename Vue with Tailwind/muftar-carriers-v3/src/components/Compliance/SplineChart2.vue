<template>
    <div class="">
        <div class="p-3">
            <h1 class="my-auto text-sm text-gray-400 font-bold">Payouts</h1>
            <div class="flex space-x-2">
                <h1 class="my-auto text-3xl font-bold">$71,168.67</h1>
                <h1 class="my-auto text-sm  text-green-500 font-bold">14.50%</h1>
            </div>
            <h1 class="my-auto text-sm font-bold text-gray-400">Expected Today</h1>
        </div>
        <div class="p-2">
            <apexchart type="line" height="50" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'


const series = ref([{
    name: 'New Visitors',
    data: [10, 20, 40, 30, 60, 50, 60],
},
])


const chartOptions = ref({
    chart: {
        toolbar: {
            show: false,
        },
        sparkline: {
            enabled: true
        },
    },
    dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 3,
        opacity: 0.5
    },
    xaxis: {
        labels: {
            show: false,
        }
    },
    yaxis: {
        labels: {
            show: false,
        }
    },
    legend: {
        show: false,

    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        width: 2,
    }
})

</script>