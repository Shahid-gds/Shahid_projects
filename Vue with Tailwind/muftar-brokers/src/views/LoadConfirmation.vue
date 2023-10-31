<template>
    <div class="bg-[#f4f7f7] py-16">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <div class="text-4xl text-[#3a3b3b] font-bold">
                    <h1>Load Confirmation</h1>
                </div>
                <div class="rounded-xl text-white text-lg p-3 px-10 bg-[#3c5aa8]">
                    <button>Muftar Portal</button>
                </div>
            </div>
        </div>
        <!-- map section -->
        <div class="px-16 py-16">
            <div class="relative">
                <MapboxMap class="" height="105vh" :center="center" :zoom="3" :accessToken="accessToken"
                    :mapStyle="mapStyle"></MapboxMap>
            </div>
            <div class="absolute top-[16.4rem]">
                <div class="bg-[white] p-4 rounded-lg">
                    <div class="flex space-x-36">
                        <div class="flex space-x-3">
                            <div class="bg-[#c4c4c4] w-10 h-10 rounded-full"></div>
                            <div class="leading-tight">
                                <h1 class="font-bold">Alexader Scott</h1>
                                <div class="flex items-center space-x-2">
                                    <div class="w-3 h-3 rounded-full bg-[#ff9914]"></div>
                                    <div>
                                        <p class="text-[#ff9914]">Delivered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#3a86ff] p-2 px-4 rounded-lg flex space-x-2 items-center">
                            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="white" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                </svg>
                            </div>
                            <div>
                                <p class="text-white">Contact</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-10 w-full flex space-x-3">
                        <div class="border-2 p-2 rounded-lg w-full">
                            <p class="text-[#c4d2db]">Vehicle ID</p>
                            <h1 class="text-[#0c2333] font-bold">0987-ACDV</h1>
                        </div>
                        <div class="border-2 p-2 rounded-lg w-full">
                            <p class="text-[#c4d2db]">Vehicle Type</p>
                            <h1 class="text-[#0c2333] font-bold">Chrona MX</h1>
                        </div>
                        <div class="border-2 p-2 rounded-lg w-full">
                            <p class="text-[#c4d2db]">Driver's Rate</p>
                            <h1 class="text-[#0c2333] font-bold">4,8</h1>
                        </div>
                    </div>
                </div>
                <div class="p-4 bg-[#3c5aa8] mt-5 rounded-lg w-[80%]">
                    <div class="flex justify-between items-center">
                        <div class="relative" @click="closeDropdownClickOutside">
                            <div class="flex justify-between items-center">
                                <div class="w-full">
                                    <button @click="toggleDropdown"
                                        class="w-full text-left rounded-md text-white focus:outline-none">
                                        {{ selectedDelivery || 'Tracking Delivery' }}
                                    </button>
                                </div>
                                <div class="absolute -right-8 cursor-pointer" @click="toggleDropdown">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline ml-2" fill="none"
                                        viewBox="0 0 24 24" stroke="white" :class="{ 'transform rotate-180': isOpen }">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            <ul v-if="isOpen"
                                class="absolute z-50 w-full bg-white border border-gray-300 mt-1 py-2 rounded-md shadow-lg">
                                <li v-for="delivery in deliveries" :key="delivery.id">
                                    <a @click="selectDelivery(delivery)" class="block px-4 py-2 cursor-pointer">
                                        {{ delivery.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="">
                            <div class="bg-[white] p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="#3c5aa8" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="flex space-x-3 mt-8 items-center">
                        <div class="relative w-full text-gray-600 lg:block hidden">
                            <input
                                class=" border-gray-300 bg-white p-2 px-10 rounded-full w-full text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search...." autocomplete="off">
                            <button type="submit" class="absolute left-4 top-0 mt-2.5 mr-2">
                                <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                    version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966"
                                    style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px"
                                    height="512px">
                                    <path
                                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>
                        <div class="bg-[white] p-2 rounded-xl cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#3c5aa8" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex space-x-3 mt-10">
                        <div class="w-10 h-10 bg-[#d8d8d8] rounded-xl"></div>
                        <div class="flex space-x-1">
                            <div class="text-[white] leading-3">
                                <h1 class="text-xl font-bold">Phillip Anthropy</h1>
                                <p>3 OF 7</p>
                            </div>
                            <div class="w-2 h-2 bg-[#f4614a] rounded-full"></div>
                        </div>
                    </div>
                    <div>
                        <div class="mt-10">
                            <ul class="p-0">
                                <li v-for="(bullet, index) in bullets" :key="bullet.id" class="flex items-start relative">
                                    <div v-if="index !== bullets.length - 1" class="connected-bullet ml-1"></div>
                                    <div v-if="index == bullets.length - 1" class="mr-[1.5rem] -ml-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960"
                                            class="fill-[white]" width="24">
                                            <path
                                                d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                                        </svg>
                                    </div>
                                    <div v-if="index !== bullets.length - 1" class="dotted-line"></div>
                                    <div class="-mt-1.5">
                                        <div class="text-xl text-white uppercase">{{ bullet.heading }}</div>
                                        <div class="pb-10 text-white font-light">{{ bullet.address }}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="bg-[white] w-[55rem] py-4 rounded-lg absolute bottom-0 left-[25rem]">
                    <div class="flex space-x-6 pb-5 justify-center border-b-2 font-[400] text-xl w-full">
                        <div>
                            <a href="#">Cargo</a>
                        </div>
                        <div>
                            <a href="#">Trailer Type</a>
                        </div>
                        <div>
                            <a href="#">Driver</a>
                        </div>
                        <div>
                            <a href="#">Fuel Expenditure</a>
                        </div>
                        <div>
                            <a href="#">Etc</a>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <div class="">
                                    <img class="rounded-full w-28 h-28" src="@/assets/images/profile.jpg" alt="">
                                </div>
                                <div>
                                    <h1 class="font-bold text-lg">John Doe</h1>
                                    <p>Driver</p>
                                </div>
                            </div>
                            <div class="space-x-4">
                                <button class="p-2 bg-[#3c5aa8] px-14 rounded-xl text-white">Call</button>
                                <button class="p-2 bg-[#3c5aa8] px-14 rounded-xl text-white">Chat</button>
                            </div>
                        </div>
                    </div>
                        <div class="relative">
                            <table class="w-full text-sm text-left">
                                <thead class="text-lg text-[#524c4c]">
                                    <tr>
                                        <th scope="col" class="px-6">
                                            Experience
                                        </th>
                                        <th scope="col" class="px-6">
                                            Driver's License
                                        </th>
                                        <th scope="col" class="px-6">
                                            ID Number
                                        </th>
                                        <th scope="col" class="px-6">
                                            License Class
                                        </th>
                                        <th scope="col" class="px-6">
                                            Insurance Number
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-[#888484]">
                                        <th scope="row" class="px-6 py-4">
                                            12 years
                                        </th>
                                        <td class="px-6 py-4">
                                            CDC
                                        </td>
                                        <td class="px-6 py-4">
                                            CDC
                                        </td>
                                        <td class="px-6 py-4">
                                            CDC
                                        </td>
                                        <td class="px-6 py-4">
                                            CDC
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
  
        </div>
        <div class="absolute w-full bg-[#f4f7f7] top-[84rem] py-16 px-10 z-50">
            <div class="flex justify-between px-6">
                <div></div>
            <div class="space-x-4">
                <button class="border-2 border-[#3c5aa8] px-12 p-3 rounded-xl font-bold text-[#3c5aa8]">Signature</button>
                <button class="bg-[#3c5aa8] border-2 border-[#3c5aa8] px-12 p-3 rounded-xl font-bold text-[white]">Invite</button>
            </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { MapboxMap, MapboxMarker } from 'vue-mapbox-ts'
import axios from 'axios'
import { ref, computed, reactive, onMounted, onUnmounted } from 'vue'
const accessToken = ref('pk.eyJ1IjoibXVmdGFyZGlnaXRhbCIsImEiOiJja2t5bnQxaHYyYjlwMnhxbTM3MGRwdTJwIn0.HeK49l3qG9VGfL76XLTq2w')
const mapStyle = ref('mapbox://styles/muftardigital/ckkyptzj90v3717mtcrji6b55')
const center = ref([-101.29114529694438, 39.92256763648007]);

const isOpen = ref(false);
const selectedDelivery = ref(null);

const deliveries = reactive([
    { id: 1, name: 'Delevery One' },
    { id: 2, name: 'Delevery Two' },
    { id: 3, name: 'Delevery Three' },
]);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const selectDelivery = (delivery) => {
    selectedDelivery.value = delivery.name;
    isOpen.value = false;
};
const closeDropdownClickOutside = (event) => {
    if (isOpen.value) {
        const dropdownElement = document.querySelector('.relative');
        if (dropdownElement && !dropdownElement.contains(event.target)) {
            isOpen.value = false;
        }
    }
}
const bullets = ref([
    { id: 1, heading: 'Departure', address: 'Forestville, Califonia, 95436.' },
    { id: 2, heading: 'Order Picked Up', address: 'Morrow, Georgia, 30260.' },
    { id: 3, heading: 'Shipper Load Data', address: 'The Colony, Texas, 75056.' },
    { id: 4, heading: 'Shipper Load Data', address: 'The Colony, Texas, 75056.' },
    { id: 5, heading: 'Lorem Ipsum', address: 'The Colony, Texas, 75056.' },
    { id: 6, heading: 'Lorem Ipsum', address: 'The Colony, Texas, 75056.' },
    { id: 7, heading: 'Order Delivered', address: 'The Colony, Texas, 75056.' },
]);
onMounted(() => {
    window.addEventListener('click', closeDropdownClickOutside)
});
onUnmounted(() => {
    window.removeEventListener('click', closeDropdownClickOutside);
});
</script>

<style scoped>
.connected-bullet {
    width: 14px;
    height: 14px;
    background-color: white;
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 2rem;
    z-index: 2;
}

.dotted-line {
    position: absolute;
    left: 0.6rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: transparent;
    background: linear-gradient(to bottom, #fff 50%, transparent 50%);
    background-size: 100% 10px;
    z-index: 1;
}</style>