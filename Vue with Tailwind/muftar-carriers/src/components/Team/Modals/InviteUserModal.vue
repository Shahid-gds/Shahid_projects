<template>
    <div>
        <teleport to="body">
            <vue3-snackbar bottom right :duration="4000"></vue3-snackbar>
        </teleport>
        <div class="overflow-x-auto overflow-y-auto fixed shadow-lg inset-0 z-50 flex justify-center items-center">
            <div class="relative mx-auto w-[60%] max-w-2xl">
                <div class="bg-white justify-center mx-auto shadow-lg rounded-xl" ref="backDrop">
                    <div class="flex flex-col p-10 space-y-6 relative">
                        <!-- CLOSE BUTTON -->
                        <div class="absolute right-4 top-4">
                            <img class="w-9 h-9 cursor-pointer" @click="hideModal"
                                src="@/assets/icons/members/cross-small.svg" alt="">
                        </div>
                        <!-- HEADER -->
                        <div>
                            <h1 class="text-primary text-4xl">Invite User</h1>
                        </div>
                        <!-- FORM INPUT -->
                        <div>
                            <div class="flex flex-row  rounded-md border border-gray-50 shadow px-4  bg-white">
                                <mdicon class="my-auto text-[#A8B1CA]" name="account" />
                                <input placeholder="Email or UserID" v-model="email"
                                    class="w-full border-none focus:ring-0 placeholder:text-lg placeholder:text-gray-400 text-gray-400 text-lg bg-transparent"
                                    type="text">
                            </div>
                           
                        </div>


                        <!-- ROLE SELECTION -->
                        <div class="flex flex-col">
                            <!-- HEADING -->
                            <div class="flex flex-col space-y-1">
                                <h1 class="text-primary font-bold text-lg">Role</h1>
                                <p class="text-gray-500 text-sm">Can't find the role you need? <span
                                        class="text-primary">Add Role</span></p>
                            </div>
                        </div>

                        <!-- ROLE SELECTION -->
                        <div class="w-72 relative">
                            <div @click="showRolesList = !showRolesList"
                                class="cursor-pointer border shadow p-3 rounded-md">
                                {{ is_role_selected ? selectedRole : 'Select Role' }}
                            </div>

                            <XyzTransition xyz="fade down duration-1.5 fade-up ease-in-out">
                                <ul v-if="showRolesList" ref="roleList"
                                    class="absolute w-72 border  rounded-md shadow-xl  bg-white">
                                    <li v-for="role in roles" :key="role" @click="selectRole(role)"
                                        class="p-2 hover:bg-gray-100 cursor-pointer">
                                        {{ role }}
                                    </li>
                                </ul>
                            </XyzTransition>
                           

                        </div>

                        <!-- CUSTOM MESSAGE -->
                        <div class="flex flex-col space-y-2">
                            <div class="flex flex-row space-x-6">
                                <h1 class="text-gray-600 my-auto">Custom Message</h1>
                                <p class="text-xs my-auto text-gray-300">(Optional)</p>
                            </div>
                            <div class="flex flex-row px-2 border border-gray-50 shadow rounded-md">
                                <textarea v-model="custom_message"
                                    class="w-full border-none focus:ring-0 text-gray-400 placeholder:text-gray-400"
                                    placeholder="Provide a custom message here" style="resize: none;" rows="4">
                                                                                                                                                                                                                                </textarea>
                            </div>
                        </div>

                        <!-- BUTTONS -->
                        <div class="flex flex-row justify-end space-x-5">
                            <button class="rounded-md px-8 py-2 flex space-x-2 text-gray-500 border bg-[#fefdff]"
                                @click="hideModal">
                                <span>
                                    Cancel
                                </span>
                            </button>
                            <button class="rounded-md px-8 py-2 flex space-x-2 bg-primary text-white" @click="inviteUser">
                                <span v-if="loading">
                                    Inviting...
                                </span>
                                <span v-if="!loading">
                                    Invite User
                                </span>
                            </button>


                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div @click="hideModal" class="fixed bg-black/70 backdrop-blur-sm z-40 inset-0">

        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useApi } from '@/composables/useApi'
import { useStore } from 'vuex'


import axios from 'axios';



const { api_path } = useApi();

const roleList = ref(null);
const backDrop = ref(null);

const store = useStore();

const emit = defineEmits(['hideModal'])
const loading = ref(false);




const roles = ref(["Admin", "Dispatch", "Safety", "Accounting"]);
const showRolesList = ref(false);

const is_role_selected = ref(false);
const selectedRole = ref(null);
const email = ref('');
const custom_message = ref('');



onClickOutside(roleList, () => {
    showRolesList.value = false;
})

onClickOutside(backDrop, () => {
    hideModal();
})


const orgID = computed(() => store.state.orgID);

const inviteUser = async () => {

    loading.value = true;

    const config = {
        headers: {
            orgID: orgID.value,
        }
    }

    const payload = {
        email: email.value,
        role: selectedRole.value,
        custom_message: custom_message.value
    }

    try {
        const res = await axios.post(api_path.value + 'carriers/team/invite', payload, config);
        console.log(res);
        if (res.status === 200) {
            loading.value = false;

            hideModal();
        }
    } catch (error) {
        loading.value = false;

        console.log(error)
    }

}

const selectRole = (role) => {
    is_role_selected.value = true;
    selectedRole.value = role;
    showRolesList.value = false;
}

const hideModal = () => {
    emit('hideModal', false);
}

</script>


