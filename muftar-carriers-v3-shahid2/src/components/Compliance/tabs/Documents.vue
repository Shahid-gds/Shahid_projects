<template>
    <div class="pl-5 pr-5 space-y-3">
        <div class="flex space-x-4 ml-4">
            <img class="w-6 h-6 mt-3" src="@/assets/icons/compliance/dvr-info-color.svg" alt="" />
            <p class="mt-3 text-primary">DOCUMENTS</p>
        </div>

        <div class="text-black flex  justify-between items-center shadow-md rounded-xl p-1 pl-2 pr-2 mb-5">
            <div class="flex justify-between gap-2 items-center">
                <div>
                    <img class="w-14 h-14 mr-2 rounded-full" :src="current_driver.photo" />
                </div>
                <div>
                    <p class="text-4xl mt-6 font-bold  text-black" v-if="current_driver.fname != ''">
                        {{ current_driver.fname }} {{ current_driver.lname }}
                    </p>
                    <p class="m-0 text-black italic text-sm" v-else>no name</p>
                    <p class="text-sm text-secondry ">
                        <span class="text-primary">
                            Driver's License:
                        </span> (419513015) - issued in Alabama (AL)
                    </p>
                </div>
            </div>
            <div class="flex space-x-3 ">
                <div class="flex space-x-2">

                    <img class="w-5 h-5" src="@/assets/icons/compliance/call.svg" alt="">
                    <p class="intransit-color">Call</p>
                </div>
                <div class="flex space-x-2">

                    <img class="w-5 h-5" src="@/assets/icons/compliance/email.svg" alt="">
                    <p class="text-primary">Email</p>
                </div>
                <img class="w-5 h-5" src="@/assets/icons/dispatch/dots.svg" alt="">
            </div>

        </div>
        <!-- DRIVER REGISTRATION INFORMATION CARD -->
        <div class="flex  justify-between ">
            <div class="w-1/2">
                <div
                    class="flex flex-col gap-10 p-3 rounded-lg bg-[#f9f9f9] border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div class="flex justify-start space-x-3">
                        <img class="w-8 h-8 my-auto justify-center" src="@/assets/icons/dispatch/acnt-icon.svg"
                            alt="" />
                        <div class="flex flex-col">
                            <small class="text-lg text-black">Registration Information</small>
                            <small class="text-xs  text-gray-500">
                                for both Truck and Trailer
                            </small>
                        </div>
                    </div>
                    <div class="text-sm ml-2 flex flex-col space-y-8">
                        <span class="flex text-gray-500 justify-between ">
                            <!-- TEXT -->
                            <div class="flex">
                                <img class="mr-2 w-3"
                                    src="@/assets/icons/compliance/driver-info/driver-general-info.svg" alt="">
                                <p class="my-auto">
                                    JH4DC4360SS001610
                                </p>
                            </div>
                            <!-- ALERT -->
                            <div
                                class="border-2 flex rounded p-1 w-36 text-center justify-center space-x-2 text-[#FF7C17] bg-[#FFEDDF] border-[#FF7C17]">
                                <p class="text-xs">

                                    Expires in 38 Days
                                </p>
                                <img class="w-3" src="@/assets/icons/compliance/driver-info/alert-warning.svg" alt="">
                            </div>


                        </span>

                        <span class="flex text-gray-500">
                            <img class="mr-2" src="@/assets/icons/compliance/driver-info/driver-calander.svg" alt="">
                            Freightliner - Cascadia - 2021
                        </span>
                    </div>
                </div>
                <div
                    class="mt-5 bg-[#f9f9f9] flex justify-center items-center rounded-lg border border-gray-200 shadow-md">
                    <!-- <img class="w-full" src="@/assets/icons/dispatch/map.png" alt=""> -->
                    <!-- <MapboxMap style="height:280px; padding: 5px; border: 2px solid #cccfce;"
                        :center="[typeof (current_driver?.current_location?.longitude) === 'number' ? current_driver?.current_location?.longitude : 0, typeof (current_driver?.current_location?.latitude) === 'number' ? current_driver?.current_location?.latitude : 0]"
                        :zoom="6" :accessToken="accessToken" :mapStyle="mapStyle">
                        <MapboxMarker
                            :lngLat="[typeof (current_driver?.current_location?.longitude) === 'number' ? current_driver?.current_location?.longitude : 0, typeof (current_driver?.current_location?.latitude) === 'number' ? current_driver?.current_location?.latitude : 0]">
                            <template #icon>
                                <img class="w-8" src="@/assets/icons/map/active-driver.svg">
                            </template>

                        </MapboxMarker>
                    </MapboxMap> -->
                </div>

            </div>

            <div style="background:#f9f9f9; width: 45%"
                class="p-3 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="flex justify-start gap-4">
                    <img class="w-8 h-8 my-auto" src="@/assets/icons/dispatch/account-icon.svg" alt="" />
                    <div class="flex flex-col">
                        <small class="text-lg  text-black">
                            Driver’s Personal Information
                        </small>
                        <small class="text-xs text-gray-500">
                            for both Truck and Trailer
                        </small>
                    </div>
                </div>

                <div class="table mt-2 rounded-xl w-full" v-for="list in dummy" :key="list">
                    <div class="flex space-x-4  px-2 py-3 ">
                        <img class="my-auto" src="@/assets/icons/compliance/driver-info/driver-general-info.svg" alt="">
                        <div class="flex justify-between w-full">

                            <p class="text-sm flex">{{ list.label }}
                            <div v-if="list.label == 'Issued in:'"
                                class="border-2 flex ml-32 rounded p-1 w-36 text-center justify-center space-x-2 text-[#C86681] bg-[#F3E1E6] border-[#C86681]">
                                <p class="text-xs">
                                    Expires in 24 Days
                                </p>
                                <img class="w-3" src="@/assets/icons/compliance/driver-info/alert-danger.svg" alt="">
                            </div>

                            <div v-if="list.label == 'License Plate:'"
                                class="border-2 flex ml-32 rounded p-1 w-36 text-center justify-center space-x-2 text-[#3A9B5E] bg-[#DAF5E4] border-[#3A9B5E]">
                                <p class="text-xs">

                                    Expires in 213 Days
                                </p>
                                <img class="w-3" src="@/assets/icons/compliance/driver-info/alert-success.svg" alt="">
                            </div>
                            </p>
                            <p class="text-sm text-end text-gray-400">{{ list.data }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { MapboxMap, MapboxMarker } from 'vue-mapbox-ts'
export default {
    name: "Documents",
    props: ["current_driver"],
    components: {
        MapboxMap, MapboxMarker
    },
    data() {
        return {
            dummy: [
                { label: 'Full Name:', data: 'Michael Brown' },
                { label: 'Contact Details:', data: '(319)377-9806 | (319)377-9806' },
                { label: 'Address:', data: '55394 Lottie Rd, Perdido, Alabama(AL), 36562' },
                { label: 'Driver License:', data: '6915731' },
                { label: 'Issued in:', data: 'Alabama(AL)' },
                { label: 'Date of issue:', data: '08/11/2020' },
                { label: 'Date of Expiry:', data: '06/22/2025' },
                { label: 'License Plate:', data: '26AI512' },
                { label: 'Year:', data: '2016' },
                { label: 'Slogan:', data: '-----' },
                { label: 'Mounting:', data: 'Rear plates only' },

            ],
            currentLoad: [
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
            ],
        };
    },
};
</script>
  
<style scoped>
.heading-color {
    color: #3D5AA9 !important;
    font-weight: bolder;
}

.intransit-color {
    color: #5EDE6E !important;
    font-weight: bolder;
}
</style>