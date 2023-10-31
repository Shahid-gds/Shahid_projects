<template>
    <div class="container mx-auto p-6">
           <div class="w-4/6 shadow-lg mx-auto p-10">
            <div class="border-2 p-6 mx-auto rounded-lg">
                <div class="flex justify-between items-center">
                    <h1 class="my-4 font-bold text-3xl">Load Confirmation</h1>
                    <div class="flex items-center text-[#3C5AA8] font-bold rounded-lg px-4 py-2 text-xl border-2">Raza Raharjo
                    </div>
                    <div class="flex">
                        <div class="border-2 cursor-pointer text-[#3C5AA8] font-bold py-2 px-4 rounded-xl">Guest
                        </div>
                    </div>
                </div>
                <section>
                    <div>
                        <h2 class="w-10/12 font-bold">Load Map</h2>
                        <div class="flex h-2/6 rounded-md">
                                <div class="map-container mapboxgl-map"
                                    style="height: 50vh; width: 100%;">
                                    <MapboxMap height="100vh" width="100%" :center="center" :zoom="3" :accessToken="accessToken" :mapStyle="mapStyle">
                                        <MapboxMarker>
                                            <template class="">
                                               <img src="../assets/images/mapmarker.svg" alt="">                      
                                            </template>
                                        </MapboxMarker>
                                    </MapboxMap>
                                </div>
                        </div>
                    </div>
                    <div class="w-2/3 mx-auto flex justify-evenly items-center mt-10">
                        <button
                            class="flex items-center text-center text-xl border-2  px-8 py-2 rounded-lg mt-3 pr-12">
                            <img class="w-8 mr-4" src="../assets/images/mapicon.svg"><span
                                class="text-[#3C5AA8] font-bold">Map</span>
                            </button>
                                <button
                            class="flex items-center text-xl border-2 px-8 py-2 rounded-lg mt-3 pr-12">
                            <img class="w-8 mr-4" src="../assets/images/feed.svg"><span
                                class="text-[#3C5AA8] font-bold">Feed</span>
                            </button>
                            </div>
                </section>
                <hr class="w-7/12 mx-auto my-10">
                <section class="w-11/12 md:w-10/12 mx-auto">
                    <h3 class="text-xl font-bold">Details</h3>
                    <div class="ml-4">
                        <p>
                            <span class="font-bold">Confirmation number:</span>
                            122afd25151adfdf25</p>
                        <p><span class="font-bold">Payment:</span> $888</p>
                        <p><span class="font-bold">Load PDF:</span> </p>
                        <p><span class="font-bold">Dispatcher:</span> </p>
                    </div>
                    <div class="point_locations w-11/12 md:w-10/12 mx-auto mt-5 flex justify-between">
                        <div class="text-left">
                            <h3 class="font-bold text-lg">PICKUP</h3>
                            <div>
                                <div>
                                    <p>7/25/2023 | <span class="text-gray-400 italic">1 week ago</span></p>
                                </div>
                                <p class="text-gray-500 italic">(40.7487658, -73.9857248)</p>
                                <p class="font-bold mt-4">Address:</p>
                                <div class="my-1">
                                    <p>20 W 34th St., </p>
                                    <p>New York, NY</p>
                                    <p>US 10001</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-left">
                            <h3 class="font-bold text-lg">DROPOFF</h3>
                            <div>
                                <div>
                                    <p>7/25/2023 | <span class="text-gray-400 italic">1 week ago</span></p>
                                </div>
                                <p class="text-gray-500 italic">(38.8976633, -77.0365739)</p>
                                <p class="font-bold mt-4">Address:</p>
                                <div class="my-1">
                                    <p>1600 Pennsylvania Avenue NW, </p>
                                    <p>Washington, DC</p>
                                    <p>US 20500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3">
                        <h3 class="font-bold text-lg">Commodity</h3>
                        <div>
                            <p>1000 | Frozen Salmon | 5000</p>
                        </div>
                    </div>
                </section>
                <hr class="w-7/12 mx-auto my-10">
                <section class="w-full md:w-10/12 mx-auto">
                    <h3 class="font-bold text-lg">Parties</h3>
                    <div class="party-grid">
                      <div class="flex justify-between">
                        <div class="ml-10">
                            <!---->
                            <span class="font-bold">vendor:</span>
                            63f61debdd328acfd088c15c
                        </div>
                        <div>
                            <!---->
                            <span class="font-bold">broker:</span>
                            6414d570ac162a710d1679f5
                        </div>
                      </div>
                        <div class="ml-10"> 
                            <!----><span class="font-bold">carrier:</span>
                            6408e4fb600cfc60dbda1a6d
                        </div>
                    </div>
                    <h3>Progression</h3>
                    <div class="py-3">
                        <p class="font-bold">Load Completion Progress (0.00%)</p>
                        <div class="timeline">
                            <div class="line">
                                <div class="bar" style="width: 0%;"></div>
                            </div>
                        </div>
                    </div>
                    <p class="text-red-600 mb-4"></p>
                    <div class="signatures"></div>
                    <div class="w-10/12 mx-auto flex justify-evenly items-center mt-10">
                        <button
                            class="flex items-center text-xl border-2 px-6 py-2 rounded-lg mt-3 mx-4">
                            <span class="text-[#3C5AA8] font-bold">Signature</span>
                            </button>
                                <button
                            class="flex items-center text-xl border-2 text-[#3C5AA8] px-6 py-2 rounded-lg mt-3 mx-4">
                            <span class="font-bold">Invite</span></button>
                        </div>
                </section>
               </div>
           </div>
    </div>
</template>
<script setup>
import { MapboxMap, MapboxMarker } from 'vue-mapbox-ts'
import { ref, computed } from 'vue'

const accessToken = ref('pk.eyJ1IjoibXVmdGFyZGlnaXRhbCIsImEiOiJja2t5bnQxaHYyYjlwMnhxbTM3MGRwdTJwIn0.HeK49l3qG9VGfL76XLTq2w')
const mapStyle = ref('mapbox://styles/muftardigital/ckkyptzj90v3717mtcrji6b55')
const center = ref([-101.29114529694438, 39.92256763648007]);



</script>

<style scoped>
.timeline {
    width: 100%;
    margin: 0;
}
.line {
    width: 100%;
    height: 10px;
    border-radius: 20px;
    background-color: #bcbcbc;
    position: relative;
}
</style>