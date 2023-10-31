<template>
    <div class="flex flex-col px-28 mt-5">
        <!-- HEADERS -->
        <div class="flex flex-col space-y-5">
            <div class="flex flex-row justify-between">
                <div class="flex space-x-2">
                    <img class="rounded-full h-24 w-24 border-2" :src="current_broker.photo" alt="Broker Photo">
                    <h1 class="text-3xl font-bold my-auto">{{ current_broker.name }}
                    </h1>
                </div>
                <div class="flex flex-row space-x-4">
                    <button
                        class="flex flex-row my-auto border-2 border-gray-300 justify-center rounded-md px-10 py-2 space-x-2">
                        <mdicon class="text-gray-400" name="message" />
                        <span class="text-gray-500">Message</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- INFORMATION -->
        <div class="grid grid-cols-2 gap-10 mt-10 ">
            <div>
                <p class="text-gray-400 text-lg">Driver ID</p>
                <p class="text-gray-500">
                    {{ current_broker.id }}
                </p>
            </div>

            <div>
                <p class="text-gray-400 text-lg">Email</p>
                <p class="text-gray-500">{{ current_broker.email }}</p>
            </div>

            <div>
                <p class="text-gray-400 text-lg">Phone</p>
                <p class=" text-gray-500">{{ current_broker.phone }}
                </p>
            </div>
            <div>
                <p class="text-gray-400 text-lg">Status</p>
                <p class="text-gray-500">{{ current_broker.status }}</p>
            </div>
            <div>
                <p class="text-gray-400 text-lg">Country</p>
                <p class="text-gray-500">
                    {{ current_broker?.address?.country }}
                </p>
            </div>

            <div>
                <p class="text-gray-400 text-lg">Full Address</p>
                <p class="text-gray-500">{{ current_broker?.address?.line1 }},{{ current_broker?.address?.line2 }}
                </p>
                <p class="text-gray-500">{{ current_broker?.address?.city }},{{ current_broker?.address?.state }},{{
                    current_broker?.address?.zip
                }}</p>
                <p class="text-gray-500">{{ current_broker?.address?.country }}</p>
            </div>
            <!-- <div>
                <p class="text-gray-400">Current Location</p>
                <p class="text-gray-500"> {{ (current_driver.current_location?.longitude &&
                    current_driver.current_location?.latitude)
                    ? current_driver.current_location?.longitude + ',' + current_driver.current_location?.latitude :
                    'No Current Location'
                }} </p>
            </div>



            <div>
                <p class="text-gray-400 text-lg">Earnings</p>

                <p class="text-gray-500">

                    {{ current_driver?.stats?.lifetime_earnings }}
                </p>
            </div> -->
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
</template>
  
<script>
export default {
    name: 'AccountDetails',
    props: ['current_driver', 'current_broker'],
    data() {
        return {

        }
    }
}
</script>
  
<style>

</style>