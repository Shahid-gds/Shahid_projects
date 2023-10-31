<template>
    <div class="p-6 ">
        <div class="pb-8 pt-3 border-b">
            <h1 class="text-2xl font-bold">Preferences</h1>
        </div>

        <div class="flex justify-between my-4">
            <div>
                <h1 class="text-lg font-bold">Mobile Push Notifications</h1>
                <p class="text-sm text-gray-500">Recieve push notifications on mentions and comments via your mobile
                    app.</p>
            </div>

            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[14px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary">
                </div>
            </label>


        </div>

        <div class="flex justify-between my-4">
            <div>
                <h1 class="text-lg font-bold">Email Notifications</h1>
                <p class="text-sm text-gray-500">Recieve email updates on mentions, comments, and edit digests for all
                    the pages you have followed.</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[14px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary">
                </div>

            </label>

        </div>

        <div class="flex justify-between my-4">
            <div>
                <h1 class="text-lg font-bold">Always send email notifications</h1>
                <p class="text-sm text-gray-500">Recieve updates by email, even when you're active on the app.</p>
            </div>

            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[14px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary">
                </div>

            </label>

        </div>

        <div class="pb-8 pt-3 border-b">
            <h1 class="text-2xl font-bold">My Settings</h1>
        </div>

        <div class="flex justify-between my-4">
            <div>
                <h1 class="text-lg font-bold">Appearance</h1>
                <p class="text-sm text-gray-500">Customize how Muftar looks on your device.</p>
            </div>
            <div class="relative my-auto border rounded-md">
                <button @click="showMenu = !showMenu" class="flex space-x-2 px-4 py-2">
                    <span class="text-base">Dark</span> <img
                        class="h-3 w-3 my-auto transform transition-transform duration-300 ease-in-out"
                        :class="{ 'rotate-180': showMenu }" src="@/assets/icons/account/arrow_down.svg" alt="Arrow Down">
                </button>

                <div v-if="showMenu" ref="el" class="absolute top-10 z-10 bg-white w-full border rounded-md shadow-md">
                    <ul>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">Dark</li>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">Light</li>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">Default</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="flex justify-between my-4">
            <div>
                <h1 class="text-lg font-bold">Change Language</h1>
                <p class="text-sm text-gray-500">Change your current language</p>
            </div>
            <div class="relative my-auto border rounded-md">
                <button @click="showLanguageMenu = !showLanguageMenu" class="flex space-x-2 px-4 py-2">
                    <span class="text-base">Language</span> <img
                        class="h-3 w-3 my-auto transform transition-transform duration-300 ease-in-out"
                        :class="{ 'rotate-180': showLanguageMenu }" src="@/assets/icons/account/arrow_down.svg"
                        alt="Arrow Down">
                </button>

                <div v-if="showLanguageMenu" ref="langEl"
                    class="absolute top-10 z-10 bg-white w-full border rounded-md shadow-md">
                    <ul>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">English</li>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">Arabic</li>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">Urdu</li>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">Sindhi</li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="flex justify-between my-4">
            <div>
                <h1 class="text-lg font-bold">Change My Time</h1>
                <p class="text-sm text-gray-500">Change your time format</p>
            </div>
            <div class="relative my-auto border rounded-md">
                <button @click="showTimeMenu = !showTimeMenu" class="flex space-x-2 px-4 py-2">
                    <span class="text-base">Time</span> <img
                        class="h-3 w-3 my-auto transform transition-transform duration-300 ease-in-out"
                        :class="{ 'rotate-180': showTimeMenu }" src="@/assets/icons/account/arrow_down.svg"
                        alt="Arrow Down">
                </button>

                <div v-if="showTimeMenu" ref="timeEl"
                    class="absolute top-10 z-10 bg-white w-full border rounded-md shadow-md">
                    <ul>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">12 Hour</li>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">24 Hour</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="flex justify-between my-4">
            <div>
                <h1 class="text-lg font-bold">Open on Start</h1>
                <p class="text-sm text-gray-500">Choose what to show when muftar starts or when switch workspaces</p>
            </div>

            <div class="relative my-auto border rounded-md">
                <button class="flex space-x-2 px-4 py-2">
                    <span class="text-base">Last Visited Page</span> <img class="h-3 w-3 my-auto"
                        src="@/assets/icons/account/arrow_down.svg" alt="Arrow Down">
                </button>

                <!-- <div v-if="showMenu" ref="el" class="absolute top-10 bg-white w-full border rounded-md shadow-md">
                    <ul>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">Dark</li>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">Light</li>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">Default</li>
                    </ul>
                </div> -->
            </div>
        </div>

        <div class="flex justify-between my-4">
            <div>
                <h1 class="text-lg font-bold">Open Links in Deskop App</h1>
                <p class="text-sm text-gray-500 ">You must have the <span class="underline cursor-pointer font-bold">Mac
                        or Windows
                        app</span> installed.</p>
            </div>

            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[14px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary">
                </div>

            </label>
        </div>

        <div class="pb-8 pt-3 border-b">
            <h1 class="text-2xl font-bold">Privacy</h1>
        </div>


        <div class="flex justify-between my-4">
            <div>
                <h1 class="text-lg font-bold">Cookie Settings</h1>
                <p class="text-sm text-gray-500">Customize cookies. See <span
                        class="underline cursor-pointer font-bold">Cookie Notice</span> for details.</p>
            </div>

            <div class="relative my-auto border rounded-md">
                <button class="flex space-x-2 px-4 py-2">
                    <span class="text-base">Customize</span> <img class="h-3 w-3 my-auto"
                        src="@/assets/icons/account/arrow_down.svg" alt="Arrow Down">
                </button>

                <!-- <div v-if="showMenu" ref="el" class="absolute top-10 bg-white w-full border rounded-md shadow-md">
                    <ul>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">Dark</li>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">Light</li>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">Default</li>
                    </ul>
                </div> -->
            </div>
        </div>

        <div class="flex justify-between my-4">
            <div>
                <h1 class="text-lg font-bold">Show my view History</h1>
                <p class="text-sm text-gray-500">People with edit or full access will be able to see when you've viewed
                    a page. <span class="underline cursor-pointer font-bold">Learn more</span></p>
            </div>
            <div class="relative my-auto border rounded-md">
                <button class="flex space-x-2 px-4 py-2">
                    <span class="text-base">Record</span> <img class="h-3 w-3 my-auto"
                        src="@/assets/icons/account/arrow_down.svg" alt="Arrow Down">
                </button>

                <!-- <div v-if="showMenu" ref="el" class="absolute top-10 bg-white w-full border rounded-md shadow-md">
                    <ul>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">Dark</li>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">Light</li>
                        <li class="p-2 cursor-pointer hover:bg-gray-100">Default</li>
                    </ul>
                </div> -->
            </div>
        </div>

    </div>
</template>


<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'


const showMenu = ref(false);
const showLanguageMenu = ref(false);
const showTimeMenu = ref(false);
const el = ref(null);
const langEl = ref(null)
const timeEl = ref(null);

onClickOutside(el, () => {
    showMenu.value = false;
})

onClickOutside(langEl, () => {
    showLanguageMenu.value = false;
})

onClickOutside(timeEl, () => {
    showTimeMenu.value = false;
})

</script>