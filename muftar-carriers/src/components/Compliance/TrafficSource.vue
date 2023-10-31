<template>
    <div class="p-3">
        <h1 class="text-2xl font-bold">Traffic Source</h1>
    </div>
    <div>
        <apexchart type="bar" height="180" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const series = ref([{
    name: 'Search Engine Traffic',
    data: [44, 55, 41, 64, 22, 43, 21]
}, {
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