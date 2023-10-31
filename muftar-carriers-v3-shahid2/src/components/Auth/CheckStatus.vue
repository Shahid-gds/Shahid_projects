<template>
    <div
        class="bg-[url('@/assets/images/Login-bg.png')] bg-cover h-screen flex justify-center items-center text-center">
        <div class="flex flex-col w-[400px] space-y-10">
            <h1 class="text-2xl">Check Your Application Status</h1>
            <div class="flex flex-row space-x-2 border rounded-md px-2 bg-white">
                <Icon width="30" class="my-auto text-gray-400" icon="ic:outline-email" />
                <input class="w-full border-none focus:ring-0 text-gray-400 bg-transparent placeholder:text-gray-400"
                    placeholder="Enter Your Email" type="text">
            </div>

            <div class="flex justify-center space-x-2 text-xl ">
                <Icon v-if="success" width="23" :class="{ 'text-green-300': success }" class="my-auto"
                    icon="grommet-icons:status-good" />
                <Icon v-if="!success" width="23" :class="{ 'text-red-400': !success }" class="my-auto"
                    icon="radix-icons:cross-circled" />
                <!-- <Icon class="my-auto text-red-400" icon=" grommet-icons:status-good" />
                <Icon class="my-auto " icon=" radix-icons:cross-circled" /> -->
                <p :class="success ? 'text-green-400' : 'text-red-400'">{{ success? 'Verified': 'Un-verified' }}</p>
            </div>

            <div class="flex justify-center">
                <button class="flex flex-row py-2 px-4 rounded-md bg-primary text-white border space-x-2">
                    <Icon width="23" class="my-auto" icon="grommet-icons:status-good" />
                    <p>Check Status</p>
                </button>
            </div>

            <div>
                <p class="text-sm text-center  my-5" style="color: #ACACAC">
                    Copyright © 2022 <span class="font-bold">Muftar</span>. All Rights Reserved.
                </p>
            </div>
        </div>
    </div>
</template>

<script>

import { Icon } from '@iconify/vue'

export default {
    data() {
        return {
            success: false
        }
    },
    components: {
        Icon
    }

}

</script>