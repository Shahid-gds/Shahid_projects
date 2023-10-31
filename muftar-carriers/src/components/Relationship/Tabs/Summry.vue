<template>
    <div class="flex justify-around h-screen space-x-4 mx-5 mt-10">
        <div class="flex flex-col p-4 w-2/4 bg-gray-50  rounded-md">
            <!-- HEADING -->
            <div class="flex flex-row space-x-4">
                <mdicon size="60" class="text-primary my-auto" name="clock" />
                <div class="flex flex-col ">
                    <h1 class="text-2xl  ">Pending Loads</h1>
                    <p class="text-gray-400">Lorem ipsum dolor sit.</p>
                </div>
            </div>
            <!-- CONTENT -->
            <div class="rounded-md mt-5">
                <div class="flex space-x-4 row py-4 px-2 rounded-md" v-for="item in 10" :key="item">
                    <mdicon class="text-primary mt-0 " size="20" name="chevron-right-circle" />
                    <p class="text-xs my-auto text-gray-400">Lorem ipsum dolor sit amet, consectetur </p>
                </div>
            </div>
        </div>

        <div class="flex flex-col p-4 w-2/4 bg-gray-50 rounded-md">
            <!-- HEADING -->
            <div class="flex flex-row space-x-4">
                <mdicon size="60" class="text-primary my-auto" name="clock" />
                <div class="flex flex-col ">
                    <h1 class="text-2xl ">Pending Loads</h1>
                    <p class="text-gray-400">Lorem, ipsum dolor sit</p>
                </div>
            </div>

            <!-- CONTENT -->
            <div class="rounded-md mt-5">
                <div class="flex space-x-5 row py-4 px-2 rounded-md" v-for="item in 10" :key="item">
                    <!-- ITEM 1 -->
                    <div class="flex flex-row space-x-1">
                        <mdicon size="20" class="text-primary" name="calendar-month" />
                        <p class="text-xs my-auto text-gray-400">06/18/2022 </p>
                    </div>

                    <!-- ITEM 2 -->

                    <div class="flex flex-row space-x-1">
                        <mdicon size="20" class="text-primary" name="clock" />
                        <p class="text-xs my-auto text-gray-400">02:14 PM</p>
                    </div>

                    <!-- ITEM 3 -->
                    <div class="flex flex-row space-x-1">
                        <div class="flex flex-row space-x-1">
                            <mdicon size="18" class="text-primary" name="format-align-left" />
                            <p class="text-xs my-auto text-gray-400">Lorem ipsum dolor sit amet </p>
                        </div>

                    </div>
                </div>
            </div>
            <div>

            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Summry',
    props: ['current_broker'],
    data() {
        return {

        }
    }
}
</script>
  
<style scoped>
.row:nth-child(odd) {
    background-color: #F8F7F7;
}

.row:nth-child(even) {
    background-color: white;
}
</style>