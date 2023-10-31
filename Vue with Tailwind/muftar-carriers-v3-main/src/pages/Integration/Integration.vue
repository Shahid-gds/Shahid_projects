<template>
    <div class="h-screen overflow-y-auto pb-32">

        <Teleport to="body">
            <ConnectModal v-if="modal" :icon="icon" @hideModal="hideModal" />
        </Teleport>
        <div class="container mx-auto space-y-7 ">
            <div class="py-10 space-y-4 border-b">
                <h1 class="text-3xl font-bold">Connected apps</h1>
                <p class="text-gray-400">Integrate with your favourite apps and supercharge your workflow.</p>
            </div>

            <div class="grid grid-cols-4 gap-4" xyz="fade-100% up stagger-2">
                <div class="rounded-md space-y-4 shadow p-4 xyz-in" v-for="item in integrations" :key="item.id">
                    <!-- MODAL WHICH WILL TELEPORTED TO BODY -->

                    <div class="flex justify-between">
                        <Icon class="my-auto h-6 w-6" :icon="item.icon" />

                        <button class="rounded-md bg-white border px-3 py-1" @click="showModal(item)" :class="{
                            'bg-green-100 text-green-700 border-none': item.id === 1
                        }"> {{ item.status === 'connected' ? 'Connected' : 'Connect' }} </button>
                    </div>

                    <h1 class="text-xl font-bold">{{ item.name }}</h1>

                    <p>{{ item.description }}</p>

                </div>

            </div>
        </div>

    </div>
</template>


<script setup>
import axios from 'axios'
import { ref } from 'vue'
import ConnectModal from '@/components/Integration/ConnectModal.vue'

import { Icon } from '@iconify/vue'

const modal = ref(false)


const icon = ref(null)
const hideModal = () => {
    modal.value = false;
}

function showModal(item) {
    modal.value = true;
    icon.value = item.icon;
}

const integrations = ref([
    // {
    //     id: 1,
    //     icon: 'logos:figma',
    //     status: 'connect',
    //     name: 'Figma',
    //     description: 'Preview your figma files in your documents'
    // },
    // {
    //     id: 2,
    //     icon: 'logos:google-calendar',
    //     status: 'connect',
    //     name: 'Calendar',
    //     description: 'Automatically sync your Muftart events to Google Calendar.'
    // },
    // {
    //     id: 3,
    //     icon: 'logos:slack-icon',
    //     status: 'connect',
    //     name: 'Slack',
    //     description: 'Connect Slack to see conversation between you and your organization members.'
    // }
])


const getAvailableIntegrations = async () => {
    try {
        const res = await axios.get('https://muftardigital.pythonanywhere.com/integrations')
        integrations.value = res.data.result
        console.log(integrations.value)
    } catch (error) {
        console.error('Error fetching available integrations:', error)
    }
}

// onMounted(getAvailableIntegrations)
getAvailableIntegrations()

</script>