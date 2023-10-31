<template>
    <div class="pl-5 pr-5">
        <div class="flex justify-between items-center">
            <div class="flex justify-center">
                <div class="flex gap-2 justify-center items-center">
                    <img class="w-6 h-6" src="@/assets/icons/dispatch/status-icon-color.svg" alt="" />
                    <p class="mt-3 font-bold" style="color: #3d5aa9">STATUS</p>
                </div>
            </div>
        </div>

        <div class="text-black flex  justify-between items-center">
            <div class="flex">
                <div>
                    <img class="w-10 h-10 mr-3 rounded-full" :src="current_driver.photo" />
                </div>
                <div>
                    <p class="text-md m-0 text-black" v-if="current_driver.fname != ''">
                        {{ current_driver.fname }} {{ current_driver.lname }}
                    </p>
                    <p class="m-0 text-black italic text-sm" v-else>no name</p>
                    <p class="text-xs m-0 text-gray-400 italic">
                        {{ current_driver.id }}
                    </p>
                </div>
            </div>
            <div class="flex gap-4 mt-5">
                <img class="w-5 h-5" src="@/assets/icons/dispatch/transit-icon.svg" alt="">
                <p class="text-[#5EDE6E] font-bold">In Transit</p>
                <img class="w-5 h-5" src="@/assets/icons/dispatch/msg-icon.svg" alt="">
                <p class="text-primary font-bold">Message</p>
                <img class="w-5 h-5" src="@/assets/icons/dispatch/dots.svg" alt="">
            </div>
        </div>
        <div class="flex gap-5 justify-around">
            <div
                class="p-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="flex justify-start gap-4">
                    <img src="@/assets/icons/dispatch/status-icon-color.svg" alt="">
                    <h2 class="text-lg p-0">Current load Status <br><small>EST Timezone</small></h2>
                </div>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <td>6/17/2022</td>
                            <td>04:23 PM</td>
                            <td>Load #71838824 Assigned to Driver</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div
                class="p-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="flex justify-start gap-4">
                    <img src="@/assets/icons/dispatch/status-icon-color.svg" alt="">
                    <h2 class="text-lg p-0">Additional Fees <br><small>EST Timezone</small></h2>
                </div>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <td>6/17/2022</td>
                            <td>04:23 PM</td>
                            <td>Load #71838824 Assigned to Driver</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="flex gap-5 mt-5 justify-around">
            <div
                class="bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <img class="h-80 w-96" src="@/assets/icons/dispatch/map.png" alt="">
            </div>
            <div
                class="p-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="flex justify-start gap-4">
                    <img src="@/assets/icons/dispatch/status-icon-color.svg" alt="">
                    <h2 class="text-lg p-0">Upcoming Loads <br><small>EST Timezone</small></h2>
                </div>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <td>6/17/2022</td>
                            <td>04:23 PM</td>
                            <td>Load #71838824 Assigned to Driver</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Documents",
    props: ["current_driver"],
    data() {
        return {
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

</style>