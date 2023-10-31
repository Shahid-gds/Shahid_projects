<template>
    <div class="p-3">
        <h1 class="text-2xl font-bold">Visits By Time</h1>
    </div>
    <div>
        <apexchart type="heatmap" height="300" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>


<script setup>
import { ref } from 'vue'




const series = ref([{
    name: '12 AM',
    data: [45, 60, 88, 32, 51, 79, 98],
},
{
    name: '2 AM',
    data: [67, 28, 39, 56, 72, 41, 58],
},
{
    name: '6 AM',
    data: [83, 51, 11, 74, 97, 29, 64],
},
{
    name: '10 AM',
    data: [42, 95, 67, 80, 21, 57, 33],
},
{
    name: '1 PM',
    data: [70, 49, 26, 89, 63, 17, 41],
},
{
    name: '4 PM',
    data: [37, 82, 55, 19, 68, 94, 77],
},
{
    name: '8 PM',
    data: [58, 14, 91, 23, 37, 75, 51]
},

])


const chartOptions = ref({
    chart: {
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#3D5AA9"],
    xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
   
},)


</script>