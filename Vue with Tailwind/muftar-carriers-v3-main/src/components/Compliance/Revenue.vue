<template>
    <div>

        <div class="p-3">
            <h1 class="font-bold ">Revenue</h1>
            <div class="flex space-x-2">
                <h1 class="font-bold text-2xl">$120,200</h1>
                <p class="text-green-500 font-bold text-sm mt-auto">7.56%</p>
            </div>
        </div>
        <div>
            <apexchart type="bar" height="180" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'

const series = ref([{
    name: 'Direct Traffic',
    data: [53, 32, 33, 52, 13, 44, 32]
}])

const chartOptions = ref({
    chart: {
        type: 'bar',
        width: '100%',
        height: 430,
        toolbar: {
            show: false
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ['#0672ff', '#00b9fd'],
    tooltip: {
        shared: true,
        intersect: false
    },
    legend: {
        show: 'true',
        position: 'top',
        horizontalAlign: 'left',
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'March', 'May', 'June', 'July', 'Aug'],
    },
})
</script>