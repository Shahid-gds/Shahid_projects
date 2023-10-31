<template>
    <div class="flex h-screen flex-row px-2">
        <!-- SETTINGS SIDE BAR -->
        <div class="w-[30%] flex flex-col space-y-4">
            <h1 class="text-3xl text-primary py-2 font-bold">
                Account
            </h1>

            <!-- PROFILE COMPLETION INFORMATION CARD -->
            <div v-if="completeProfile"
                class=" bg-primary text-white p-8 space-x-3 bg-covers bg-center rounded-md flex flex-row bg-[url('@/assets/icons/account/account-settings-card-bg.png')]">
                <!-- PROGRESS CIRCLE -->
                <div class="my-auto">
                    <radial-progress-bar :diameter="100" innerStrokeColor="#284E8E" stopColor="#2A60F1"
                        startColor="#2A60F1" innerStrokeWidth="5" strokeWidth="5" :completed-steps="completedSteps"
                        :total-steps="totalSteps">
                        <p class="text-white text-xl"> {{ completedSteps }}%</p>
                        <p class="text-xs text-[#729FEF]">Complete</p>
                    </radial-progress-bar>
                </div>

                <!-- Progress Information -->
                <div class="flex flex-col space-y-2 w-full">
                    <h1 class="text-sm">Profile Information</h1>
                    <p class="text-xs text-[#99D3F9]">Complete your profile to Unlock all features</p>

                    <button @click="completeProfile = false"
                        class="bg-[#48B6FF] flex justify-center w-40 space-x-2  text-white py-2 px-3   rounded-3xl">
                        <mdicon name="account-edit" size="20" />
                        <span class="my-auto text-xs">
                            Complete profile
                        </span>
                    </button>
                </div>

            </div>

            <!-- SIDEBAR NAVIGATION -->
            <div class="flex flex-col ">
                <template v-for="(menu, index) in settingMenu" :key="index">
                    <div v-if="menu.role === userdata.role"
                        class="py-5 px-1 flex border-gray-700 flex-row justify-between cursor-pointer transition ease-in"
                        :class="current_tab === menu.current_tab ? 'text-primary' : 'text-gray-400'"
                        @click="setTab(index)">


                        <mdicon class="my-auto" :name="menu.icon" />
                        <div class="w-[1px] h-14"
                            :class="current_tab === menu.current_tab ? 'bg-primary' : 'bg-gray-400'">
                        </div>
                        <div class="w-52">
                            <h1>
                                {{ menu.setting_name }}
                            </h1>
                            <p class="text-xs">{{ menu.setting_text }}</p>
                        </div>

                        <mdicon class="my-auto" name="arrow-right" />
                    </div>
                </template>
            </div>
        </div>
        <div class="container ml-10">
            <Appearance v-if="current_tab === 0" />
            <Settings v-if="current_tab === 1" />
            <Billing v-if="current_tab === 2" />
            <OrganizationSettings v-if="current_tab === 3 && userdata.role === 'admin'" />
        </div>
    </div>
</template>


<script setup>
import RadialProgressBar from 'vue-radial-progress'
import Appearance from '@/components/Account/Preferences.vue';
import Settings from '@/components/Account/Settings.vue';
import Billing from '@/components/Account/Billing.vue'
import OrganizationSettings from '@/components/Account/OrganizationSettings.vue'


import { ref, computed } from 'vue'
import { useStore } from 'vuex';

const store = useStore();

const userdata = computed(() => store.state.userdata);


const completeProfile = ref(true);
const current_tab = ref(1);
const completedSteps = ref(75);
const totalSteps = ref(100);

const settingMenu = ref([
    {
        setting_name: "Preferences",
        setting_text: "Dark and Light Mode, Font Size",
        icon: "heart",
        name: "Appearance",
        current_tab: 0,
        role: 'admin'
    },
    {
        setting_name: "Account Settings",
        setting_text: "Personal Information, Email",
        icon: "account",
        name: "Settings",
        current_tab: 1,
        role: 'admin'
    },
    {
        setting_name: "Billing",
        setting_text: "Payment, Withdrawal",
        icon: "cash-multiple",
        name: "Billing",
        current_tab: 2,
        role: 'admin'
    },
    {
        setting_name: "Organizations Settings",
        setting_text: "Oganization Information, Email",
        icon: "account",
        name: "Organization Settings",
        current_tab: 3,
        role: 'admin'
    },
    // {
    //     setting_name: "Security",
    //     setting_text: "Change Password, 2FA",
    //     icon: "lock-open",
    //     name: "Account",
    //     current_tab: 2
    // },
    // {
    //     setting_name: "User Permissions",
    //     setting_text: "lorem ipsum lorem ipsum",
    //     icon: "account-lock-open",
    //     name: "Account",
    //     current_tab: 3
    // },
    // {
    //     setting_name: "Notifications",
    //     setting_text: "lorem ipsum lorem ipsum",
    //     icon: "bell",
    //     name: "Account",
    //     current_tab: 4
    // },
    // {
    //     setting_name: "Languages",
    //     setting_text: "Dummy Text Dummy Text",
    //     icon: "flag",
    //     name: "Account",
    //     current_tab: 5
    // },

])

const setTab = (index) => {
    current_tab.value = index;
}

</script>

