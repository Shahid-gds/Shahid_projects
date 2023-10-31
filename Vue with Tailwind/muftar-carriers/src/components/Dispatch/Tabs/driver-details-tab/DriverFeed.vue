<template>
    <section class="h-screen pb-72 overflow-y-auto">
        <div v-if="loading" class="text-center mt-10">
            loading
        </div>
        <div v-if="!loading && driver_feed.length > 0">
            <div class="flex flex-col p-8 border bg-gray-50/20 rounded-md mx-4 space-y-2" v-for="(df, idx) in driver_feed"
                :key="idx">

                <section class="flex space-x-2">
                    <img src="@/assets/img/accountPerson.svg" alt="PERSON">
                    <div class=" my-auto">
                        <div class="flex space-x-2">
                            <h1 class="font-bold">John Doe</h1>
                            <p>({{ df.by.role }})</p>
                        </div>
                        <p class="text-xs text-gray-400"> {{ $relativeDate(df.created) }}</p>
                    </div>

                </section>

                <section class="pl-[4.5rem]">
                    <div>
                        {{ df.body }}
                    </div>
                </section>

                <section class="flex space-x-3 pl-16">
                    <div class="flex  px-2 py-1 rounded-md space-x-1 text-sm text-blue-700 bg-blue-100"><span
                            class="text-blue-500">#
                        </span><span class="font-bold">Marketing </span></div>
                    <div class="flex  px-2 py-1 rounded-md space-x-1 text-sm text-blue-700 bg-blue-100"><span
                            class="text-blue-500">#
                        </span><span class="font-bold">Promotion </span></div>
                </section>
            </div>
        </div>
        <div class="flex items-center justify-center h-[83vh]" v-if="!loading && driver_feed.length <= 0">
            <p class="text-2xl">NO FEED FOUND!</p>
        </div>
        <!-- component -->

    </section>
</template>

<script setup>
import axios from 'axios'
import { ref, defineProps, toRefs, watch } from 'vue'
import { useApi } from '@/composables/useApi'

const { api_path } = useApi();

const props = defineProps(['current_driver'])
const { current_driver } = toRefs(props)

const loading = ref(false);
const driver_feed = ref([]);


watch(current_driver, (new_driver, old_driver) => {
    if (new_driver != old_driver) {
        getDriverFeed();
    }

})


const getDriverFeed = async () => {
    loading.value = true;
    const config = {
        headers: {
            driverID: current_driver.value._id
        }
    }

    try {
        const res = await axios.get(api_path.value + 'driver/load/feed', config);
        driver_feed.value = res.data.result;
        console.log(driver_feed.value);
        loading.value = false;

    } catch (error) {
        console.log(error)
        loading.value = false;

    }
}

getDriverFeed();

</script>

