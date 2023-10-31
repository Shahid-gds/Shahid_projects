<template>
    <div class="p-3">
        <h1 class="text-3xl font-bold">Sales Funnel</h1>
    </div>
    <div class="p-3 flex justify-around w-full  z-50 mx-auto absolute top-10">
        <div>
            <h1 class="font-bold text-gray-400">Total Market</h1>
            <h1 class="font-bold text-3xl">142,901</h1>
        </div>
        <div>
            <h1 class="font-bold  text-gray-400">Prospects</h1>
            <h1 class="font-bold text-3xl">142,901</h1>
        </div>
        <div>
            <h1 class="font-bold  text-gray-400">Leads</h1>
            <h1 class="font-bold text-3xl">142,901</h1>
        </div>
        <div>
            <h1 class="font-bold  text-gray-400">Sales</h1>
            <h1 class="font-bold text-3xl">142,901</h1>
        </div>
    </div>
    <div class="p-3">
        <apexchart height="300" type="area" :options="chartOptions" :series="series"></apexchart>

    </div>
</template>


<script setup>
import { ref } from 'vue'

const series = ref([{
    name: 'series1',
    data: [70, 50, 60, 10, 30, 50, 60, 50, 40, 30, 20, 10]
}])

const chartOptions = ref({
    chart: {
        toolbar: {
            show: false,
        },
        sparkline: {
            enabled: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    tooltip: {
        fixed: {
            enabled: false,
            position: 'topRight'
        }
    }
})

</script>