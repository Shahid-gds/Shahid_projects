<template>
    <!-- LEFT -->
    <div class="flex flex-col w-full overflow-y-auto pb-40 space-y-10">
        <div class="grid  gap-4 p-7 w-[20rem] lg:w-full">
            <div class="col-span-12 w-[100%]">
                <h1 class="text-2xl font-bold">Bank Payout</h1>

                <div class="flex border-4 rounded-2xl text-white border-primary h-[20rem] relative">
                    <!-- LEFT -->
                    <div class="bg-primary   rounded-tl-md w-[50%]  rounded-bl-md  p-10 space-y-5 "
                        :class="{ 'translate-x-full    transition-all duration-700 ease-in-out': moveDiv, 'transition-all rounded-tr-[2rem] rounded-br-[2rem] duration-700 ease-in-out': !moveDiv }">
                        <div class="flex justify-between">
                            <h1 class="my-auto text-2xl">My Balance</h1>
                            <div class="bg-gray-50 rounded-md p-2"><img class="w-6  h-6"
                                    src="@/assets/icons/account/dots-line.svg" alt=""></div>
                        </div>

                        <div>
                            <h1 class="text-4xl font-bold">$35,450.87<span class="text-sm text-gray-400">USD</span></h1>
                        </div>

                        <div class="rounded-lg border max-w-max p-3">
                            PL 2424 234242 234242 23424
                        </div>

                        <div class="flex space-x-4">
                            <button class="px-6 py-2 rounded-lg bg-white text-lg text-black">Send</button>
                            <button class="px-6 py-2 rounded-lg border text-lg"
                                @click="moveDiv = !moveDiv">History</button>
                        </div>
                    </div>
                    <!-- RIGHT -->
                    <div class="text-black  my-auto space-y-5 px-10 w-[50%]">
                        <div class="">
                            <h1 class=" text-2xl max-w-max ml-10"> <span>Income </span> / <span
                                    class="text-gray-400">month</span> </h1>
                            <h1 class="text-xl font-bold max-w-max ml-10 text-gray-500">$3,333.22</h1>
                            <div class="border-[3px] border-green-400 text-green-400 rounded-xl ml-10  max-w-max px-2 ">
                                +10.2%
                            </div>
                        </div>

                        <div class="border">

                        </div>

                        <div>
                            <div class="">
                                <h1 class=" text-2xl max-w-max ml-10"> <span>Spendings </span> / <span
                                        class="text-gray-400">month</span> </h1>
                                <h1 class="text-xl font-bold max-w-max ml-10 text-gray-500">$3,333.22</h1>
                                <div class="border-[3px] border-red-400 text-red-400 rounded-xl ml-10  max-w-max px-2 ">
                                    -4.2%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2">
            <div class="m-4 p-8 border rounded-lg">
                <div class="flex justify-between">
                    <div class="my-auto space-y-5">
                        <h1 class="text-2xl font-bold">Revenue</h1>
                        <h1 class="text-5xl font-bold ">20.8k</h1>
                        <p class="text-sm"><span class="text-red-400 font-bold">-12% </span>vs last month</p>
                    </div>
                    <apexchart width="350" type="area" :options="options" :series="series"></apexchart>
                </div>
            </div>
            <div class="m-4 p-8 border rounded-lg">

                <div class="flex justify-between">
                    <div class="my-auto space-y-5">
                        <h1 class="text-2xl font-bold">Expenses</h1>
                        <h1 class="text-5xl font-bold ">20.8k</h1>
                        <p class="text-sm"><span class="text-green-400 font-bold">+12% </span>vs last month</p>
                    </div>
                    <apexchart width="350" type="area" :options="options" :series="series"></apexchart>
                </div>
            </div>
        </div>

        <section class="flex">
            <div class="m-4 p-8 border rounded-lg">
                <div class="space-y-2 border-b pb-7">
                    <h1 class="text-2xl font-bold">Bank Account</h1>
                    <p>Update your payment information or switch plans according to your needs.</p>
                </div>

                <div class="mt-4 flex justify-between w-full ">
                    <div class="flex items-center mb-2 ">
                        <div class=" font-medium">Bank:</div>
                        <div class=" text-gray-700">{{ bank }}</div>
                    </div>
                    <div class="flex items-center mb-2">
                        <div class=" font-medium">Routing Number:</div>
                        <div class=" text-gray-700">{{ maskedRoutingNumber }}</div>
                    </div>
                    <div class="flex items-center mb-2">
                        <div class=" font-medium">Account Number:</div>
                        <div class=" text-gray-700">{{ maskedAccountNumber }}</div>
                    </div>
                </div>

                <div class="py-7">
                    <h1 class="text-xl font-bold">Plan</h1>

                    <div class="flex mt-3">
                        <div class="space-y-2">
                            <h1 class="font-bold">Team <span
                                    class="text-gray-500 font-normal bg-gray-100 p-2 rounded-md">Annual</span></h1>
                            <p class="font-bold text-gray-400">$20.00 / month + tax</p>

                            <div class="flex space-x-4">
                                <button class="text-white bg-primary rounded-lg px-4 py-2">Explore Plans</button>
                                <button class="border rounded-lg px-4 py-2">Manage Plans</button>
                            </div>
                        </div>

                        <div class="space-y-2 ml-32">
                            <h1 class="font-bold">Billing Period</h1>
                            <p class="text-gray-500 font-bold">Monthly <span class="text-gray-400">Renews August 13th
                                    2022</span></p>
                            <button class="border rounded-lg px-4 py-2">Change Billing Period</button>

                        </div>
                    </div>
                </div>
            </div>

            <div class="m-4 p-8 border w-1/2 rounded-lg space-y-5">
                <h1 class="text-2xl font-bold">Factoring Services</h1>
                <div class="flex  items-center justify-between mx-auto p-5 rounded border border-gray-300">
                    <img src="https://firebasestorage.googleapis.com/v0/b/muftar-digital-trucking.appspot.com/o/factoring%2Flogos%2FApex_Logo_Online.jpg?alt=media&token=a996567f-f9d1-4d21-a750-58818efc0772"
                        alt="Bank Logo" class=" w-20">
                    <div class="ml-5 text-lg font-medium">Bank Name</div>
                    <button class="bg-gray-300 rounded-full px-5 py-2">Contact</button>
                </div>
                <!-- <div class="flex">
                    <div class="space-y-2">
                        <h1 class="font-bold"><span class="text-5xl font-bold">$20</span> per month</h1>
                        <p class="text-xl">10/15 Users</p>
                    </div>

                    <div class="ml-28 space-y-3">
                        <div>
                            <h1 class="font-bold text-xl">Payment Method</h1>
                            <p class="text-gray-400 text-sm">Change how you pay for your plan.</p>
                        </div>

                        <div class=" p-4 border rounded-lg flex space-x-40">
                            <div class="flex space-x-5">
                                <div class="border px-2 py-1 rounded-md my-auto">
                                    <img class="h-8 w-8" src="@/assets/icons/account/visa-blue.svg" alt="visa">
                                </div>
                                <div>
                                    <p class="font-bold text-gray-500">Visa ending in 1234 <span
                                            class="px-2 py-1 border-2 border-black rounded-full text-black">default</span>
                                    </p>
                                    <p class="text-gray-400 text-sm">Expiry 06/2029</p>
                                    <div class="flex space-x-2 mt-2">
                                        <img class="h-4 w-4 my-auto" src="@/assets/icons/account/email.svg"
                                            alt="Email Icon">
                                        <p class="text-gray-400">billing@testemail.com</p>
                                    </div>
                                </div>
                            </div>

                            <button class="rounded-md text-white bg-primary px-4 py-2 my-auto">Edit</button>
                        </div>

                    </div>
                </div> -->
            </div>
        </section>
    </div>

</template>

<script setup>
import { ref } from 'vue'

const headers = ref(['Bank Payout', 'Current Bill', 'Factoring Services', 'Revenue', 'Expenses'])

const bank = ref('Chase');
const routingNumber = ref('123456789');
const accountNumber = ref('987654321');

const maskedRoutingNumber = ref(routingNumber.value.replace(/\d(?=\d{4})/g, '*'));
const maskedAccountNumber = ref(accountNumber.value.replace(/\d(?=\d{4})/g, '*'));

const moveDiv = ref(false);

const series = ref([{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
}])

const options = ref({
    chart: {
        height: 350,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
})
</script>