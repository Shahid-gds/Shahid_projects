<template>
    <div>
        <div class="flex justify-between p-3">
            <h1 class="my-auto text-xl font-bold">Weekly Visitors</h1>
        </div>
        <div>
            <apexchart type="radar" height="300" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'


const series = ref([{
    name: 'New Visitors',
    data: [80, 50, 30, 40, 100, 20, 100],
}, {
    name: 'Returning Visitors',
    data: [20, 30, 40, 80, 20, 80, 120],
},
])


const chartOptions = ref({

    xaxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
})

</script>