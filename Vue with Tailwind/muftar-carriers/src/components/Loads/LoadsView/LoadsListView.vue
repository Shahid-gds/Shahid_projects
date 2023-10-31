<template>
    <div class="grid grid-cols-7 text-center p-4 bg-white border-b text-gray-500 odd:bg-gray-100 last:rounded-b-md">
        <div class="my-auto">
            {{ load_status }}
        </div>

        <div class="my-auto">
            {{ $relativeDate(load.created) }}
        </div>

        <div class="my-auto">
            <p>{{ load.confirmation_number }}</p>

            <p class="text-xs">{{ load.id }}</p>
        </div>
        <div class="my-auto">
            <p>{{ load.destinations[0].location_name }}</p>
            <p>{{ load.destinations[0].address.city }},{{ load.destinations[0].address.state }},{{
                load.destinations[0].address.zip
            }}</p>
        </div>
        <div class="my-auto">
            <p>{{ load.destinations[1].location_name }}</p>
            <p>{{ load.destinations[1].address.city }},{{
                load.destinations[1].address.state
            }},{{ load.destinations[1].address.zip }}</p>
        </div>
        <div class="my-auto">
            {{ $displayPrice(load.quote.price) }}
        </div>
        <div class="my-auto">
            <a :href="`https://rapid.muftar.com/${load.id}`" target="_blank"
                class="py-3 px-4 w-36 text-center bg-primary mx-auto rounded-md text-white uppercase">View Load</a>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps(['load']);






const load_status = computed(() => {
    let load_status = ""
    if (props.load.status === "unassigned") {
        load_status = "Unassigned"
    }

    if (props.load.status === 'assigned' || props.load.status === 'en_route') {
        load_status = "Assigned"
    }

    if (props.load.status === 'awaiting_bol' || props.load.status === 'rejected_bol') {
        load_status = "At Destination";
    }

    if (props.load.status === 'pending_confirmation') {
        load_status = "Pending Approvel"
    }

    if (props.load.status === 'completed') {
        load_status = "Completed"
    }
    return load_status
})



</script>