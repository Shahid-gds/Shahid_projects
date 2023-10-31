<template>
    <div class="h-screen overflow-y-auto pb-32">
        <div class="container mx-auto space-y-6">
            <div class="grid grid-cols-12 gap-4  ">
                <div class="col-span-9 flex   border rounded-md shadow">
                    <div class="w-[75%] ">
                        <SplineChart />
                    </div>
                    <div class="flex flex-col border-l  justify-between items-center">
                        <SplineChart1 />
                        <div class="w-full border-t"></div>
                        <SplineChart2 />
                    </div>
                </div>


                <div class="col-span-3 w-full border rounded-md shadow ">
                    <RadarChart />
                </div>
            </div>

            <div class="grid grid-cols-12 gap-4 ">
                <div class="col-span-4 w-full   border rounded-md shadow">
                    <HeatMapChart />
                </div>

                <div class="col-span-3 w-full  border rounded-md shadow ">
                    <VisitByDevice />
                </div>
                <div class="col-span-5 w-full  border rounded-md relative ">
                    <SalesFunnel />
                </div>
            </div>

            <div class="grid grid-cols-12 gap-4 ">
                <div class="col-span-3 w-full  border rounded-md ">
                    <TopCountry />

                </div>

                <div class="col-span-3 w-full  border rounded-md  ">
                    <TrafficSource />
                </div>

                <div class="col-span-3 w-full border rounded-md ">
                    <Visits />
                </div>

                <div class="col-span-3 w-full  border rounded-md ">
                    <Revenue />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import RadarChart from '@/components/Compliance/RadarChart.vue'
import SplineChart from '@/components/Compliance/SplineChart.vue'
import SplineChart1 from '@/components/Compliance/SplineChart1.vue'
import SplineChart2 from '@/components/Compliance/SplineChart2.vue'
import HeatMapChart from '@/components/Compliance/HeatMapChart.vue'
import VisitByDevice from '@/components/Compliance/VisitByDevice.vue'
import SalesFunnel from '@/components/Compliance/SalesFunnel.vue'
import TopCountry from '@/components/Compliance/TopCountry.vue'
import TrafficSource from '@/components/Compliance/TrafficSource.vue'
import Visits from '@/components/Compliance/Visits.vue'
import Revenue from '@/components/Compliance/Revenue.vue'




</script>