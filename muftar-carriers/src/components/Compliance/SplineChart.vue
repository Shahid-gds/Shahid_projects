<template>
    <div >
        <div class="flex justify-between p-3">
            <div>
                <h1 class="my-auto  font-bold text-gray-400">Gross Volume</h1>
                <div class="flex space-x-4"> 
                    <p class="my-auto text-4xl font-bold ">$64,718.50</p>
                    <p class="text-green-500 font-bold text-sm mt-auto">12.56%</p>
                </div>
            </div>

            <div class="mt-auto">
                <h1 class="text-4xl font-bold text-gray-400">$79,157.50</h1>
            </div>
        </div>
        <div>
            <apexchart type="line" height="300" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'


const series = ref([{
    name: 'New Visitors',
    data: [0, 10, 20, 30, 40, 50, 60],
}, {
    name: 'Returning Visitors',
    data: [20, 30, 40, 80, 20, 80, 120],
},
])


const chartOptions = ref({
    chart: {
        toolbar: {
            show: false
        },
    },
    xaxis: {
        // type: "datetime",
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        floating: false,
        fontSize: '15px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
        formatter: undefined,
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        customLegendItems: [],
        offsetX: 0,
        offsetY: 0,
        labels: {
            colors: undefined,
            useSeriesColors: false
        },
        markers: {
            width: 12,
            height: 12,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 20,

        },
        itemMargin: {
            vertical: 10,
            horizontal: 10
        },
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
        
    }
})

</script>


<style scoped></style>