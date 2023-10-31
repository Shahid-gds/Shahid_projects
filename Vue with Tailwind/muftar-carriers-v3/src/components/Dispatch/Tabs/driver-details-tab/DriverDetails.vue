<template>
    <div class="flex flex-col px-28 mt-5">
        <!-- HEADERS -->
        <div class="flex flex-col space-y-5">
            <div class="flex flex-row justify-between">
                <div class="flex space-x-2">
                    <img class="rounded-full h-24 w-24 border-2" :src="current_driver.photo" alt="">
                    <h1 class="text-3xl font-bold my-auto">{{ current_driver.fname }} {{ current_driver.lname }}</h1>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-10 mt-10">

            <div>
                <p class="text-gray-400 text-lg">Driver ID</p>
                <p class="text-gray-500">
                    {{ current_driver._id ? current_driver._id : current_driver.id }}
                </p>
            </div>

            <div>
                <p class="text-gray-400 text-lg">Email</p>
                <p class="text-gray-500">{{ current_driver.email }}</p>
            </div>
            <div>
                <p class="text-gray-400 text-lg">Phone</p>
                <p class=" text-gray-500">{{ current_driver?.phone?.length > 0 ? current_driver.phone : "No Number" }}
                </p>
            </div>

            <div>
                <p class="text-gray-400 text-lg">Role</p>
                <p class="text-gray-500">{{ current_driver.role }}</p>
            </div>
            <div>
                <p class="text-gray-400 text-lg">Country</p>
                <p class="text-gray-500">

                    {{ current_driver.address.country }}
                </p>
            </div>
            <div>
                <p class="text-gray-400 text-lg">Full Address</p>
                <p class="text-gray-500">{{ current_driver.address.line1 }},{{ current_driver.address.line2 }}</p>
                <p class="text-gray-500">{{ current_driver.address.city }},{{ current_driver.address.state }},{{
                    current_driver.address.zip
                }}</p>
                <p class="text-gray-500">{{ current_driver.address.country }}</p>
            </div>
            <div>
                <p class="text-gray-400">Current Location</p>
                <p class="text-gray-500"> {{ (current_driver.currentLocation?.longitude &&
                    current_driver.currentLocation?.latitude)
                    ? current_driver.currentLocation?.latitude + ',' + current_driver.currentLocation?.longitude :
                    'No Current Location'
                }} </p>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name: 'DriverFeedDetails',
    props: ['current_driver'],

}
</script>

<style scoped>

</style>