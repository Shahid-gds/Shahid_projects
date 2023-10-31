<template>
    <div class="pl-5 pr-5 space-y-3">
        <div class="flex space-x-4 ml-4">
            <img class="w-6 h-6 mt-3" src="@/assets/icons/compliance/dvr-info-color.svg" alt="" />
            <p class="mt-3 font-bold text-primary">DRIVER INFO</p>
        </div>

        <div class="text-black flex  justify-between items-center  rounded-xl p-1 pl-2 pr-2 mb-5">
            <div class="flex justify-between gap-2 items-center">
                <div>
                    <img class="w-14 h-14 mr-2 rounded-full" :src="current_driver.photo" />
                </div>
                <div>
                    <p class="text-md  text-black" v-if="current_driver.fname != ''">
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



        </div>
        <!-- DRIVER REGISTRATION INFORMATION CARD -->
        <div class="flex flex-col px-28 mt-5">
            <!-- HEADERS -->
            <div class="flex flex-col space-y-5">
                <div class="flex flex-row justify-between">
                    <div class="flex space-x-2">
                        <img class="rounded-full h-24 w-24 border-2" :src="current_driver.photo" alt="">
                        <h1 class="text-3xl font-bold my-auto">{{ current_driver.fname }} {{ current_driver.lname }}
                        </h1>
                    </div>
                </div>
            </div>

            <!-- INFORMATION -->
            <div class="grid grid-cols-2 gap-10 mt-10 ">
                <div>
                    <p class="text-gray-400 text-lg">Driver ID</p>
                    <p class="text-gray-500">
                        {{ current_driver._id }}
                    </p>
                </div>

                <div>
                    <p class="text-gray-400 text-lg">Email</p>
                    <p class="text-gray-500">{{ current_driver.email }}</p>
                </div>

                <div>
                    <p class="text-gray-400 text-lg">Phone</p>
                    <p class=" text-gray-500">{{ current_driver?.phone?.length > 0 ? current_driver.phone : "No Number"
                    }}
                    </p>
                </div>
                <div>
                    <p class="text-gray-400 text-lg">Role</p>
                    <p class="text-gray-500">{{ current_driver.role }}</p>
                </div>
                <div>
                    <p class="text-gray-400 text-lg">Country</p>
                    <p class="text-gray-500">
                        {{ current_driver?.address?.country }}
                    </p>
                </div>

                <div>
                    <p class="text-gray-400 text-lg">Full Address</p>
                    <p class="text-gray-500">{{ current_driver?.address?.line1 }},{{ current_driver?.address?.line2 }}
                    </p>
                    <p class="text-gray-500">{{ current_driver?.address?.city }},{{ current_driver?.address?.state }},{{
                        current_driver?.address?.zip
                    }}</p>
                    <p class="text-gray-500">{{ current_driver?.address?.country }}</p>
                </div>
                <div>
                    <p class="text-gray-400">Current Location</p>
                    <p class="text-gray-500"> {{ (current_driver.currentLocation?.longitude &&
                        current_driver.currentLocation?.latitude)
                        ? current_driver.currentLocation?.longitude + ',' + current_driver.currentLocation?.latitude :
                        'No Current Location'
                    }} </p>
                </div>
            </div>


            <div class="flex flex-col mt-10">
                <p class="text-gray-400 text-xl">Attachements</p>
                <!-- border-l-[1px] border-t-[1px]  border-r-[1px]  border-l-[1px]  border-b-[1px] border-r-[1px] -->
                <div
                    class="flex flex-row justify-between  p-2 border rounded-md rounded-bl-none rounded-br-none border-b-0  border-gray-300 ">
                    <div class="flex space-x-2">
                        <mdicon class="text-gray-400 rotate-45" name="paperclip" />
                        <p class="text-gray-500">Lorem_ipsum_dolor_sit.pdf </p>
                    </div>
                    <a href="#" class="text-primary">Download</a>
                </div>
                <div class="flex flex-row justify-between p-2 border rounded-md rounded-tl-none rounded-tr-none  ">
                    <div class="flex space-x-2">
                        <mdicon class="text-gray-400 rotate-45 " name="paperclip" />
                        <p class="text-gray-500">Lorem_ipsum_dolor_sit.pdf</p>
                    </div>
                    <a href="#" class="text-primary">Download</a>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    name: "DriverInfoTab",
    props: ["current_driver"],
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
            map: "",
            accessToken:
                "pk.eyJ1IjoibXVmdGFyZGlnaXRhbCIsImEiOiJja2t5bnQxaHYyYjlwMnhxbTM3MGRwdTJwIn0.HeK49l3qG9VGfL76XLTq2w", // your access token. Needed if you using Mapbox maps
            mapStyle: "mapbox://styles/muftardigital/ckkyptzj90v3717mtcrji6b55", // your map style
            selected_location: [-82.988994283, 33.9567159],
            center: [-83.988994283, 33.9567159],
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

.table {
    background-color: #ffffff !important;
}
</style>