<template>
    <div class="transition-all " :class="{ 'flex': selectedMember }">
        <!-- INVITE USER MODAL -->
        <Teleport to="body">
            <InviteUserModal v-if="showInviteModal" @hideModal="hideInviteModal" />
        </Teleport>

        <Teleport to="body">
            <DeleteUserModal v-if="showDeleteModal" @hideModal="hideDeleteModal" />
        </Teleport>
        <div class="flex flex-col h-screen space-y-6 py-6 px-5">
            <!-- HEADERS -->
            <div class="flex flex-row py-6 justify-between">
                <!-- HEADING -->
                <div class="flex flex-row space-x-14 text-gray-600">
                    <div class="flex flex-row space-x-3">

                        <img class="w-9 h-9 my-auto " src="@/assets/icons/relationship/user.svg" alt="">
                        <h1 class="text-3xl my-auto text-primary uppercase">Users</h1>
                    </div>
                    <!-- TEXT -->
                    <div class="lg:w-[450px] xl:w-[500px] md:w-[300px] ml-20 ">
                        <p class="text-sm">In this section, you can manage the users within your organization
                            and invite or remove users. </p>
                    </div>

                </div>
                <!-- ACTION -->
                <div class="my-auto">
                    <button @click="(showInviteModal = true)"
                        class="uppercase flex space-x-2 w-36 justify-center text-white font-bold text-xs md:font-extralight rounded-md bg-primary py-2 ">
                        <img class="w-4 h-4 my-auto" src="@/assets/icons/relationship/user-white.svg" alt="" />
                        <span>
                            Invite Users
                        </span>
                    </button>
                </div>
            </div>
            <!-- SEARCH -->
            <div class="px-2 py-2 bg-white rounded-md m-3 shadow">
                <div class="rounded-md flex bg-white space-x-2 mx-2  focus-within:ring-2 ring-primary">
                    <img class="h-5 w-5 my-auto opacity-50 m-1" src="@/assets/icons/dispatch/search.svg" alt="">
                    <input autocomplete="off"
                        class=" h-full text-left rounded-md text-md border-none focus:outline-none py-4 w-full "
                        name="search" placeholder="Search here" v-model="driver_search_query">
                </div>
            </div>
            <!-- CARDS -->
            <div v-if="loading">
                loading...
            </div>
            <div v-if="!loading" class="flex flex-col w-full">
                <ul class="overflow-y-auto h-screen pb-96 overflow-x-hidden ">
                    <li v-for="member in users" :key="member.id" @click="selectMember(member)"
                        class="py-3 px-5 mx-5 my-5  border-gray-50 border-t border-b border-r-8 border-l-[10px] cursor-pointer rounded-md">
                        <div class="flex flex-row justify-between">
                            <!-- TEXT -->
                            <div class="flex flex-row space-x-6">
                                <img class="w-16 h-16 rounded-full bg-white p-[1px] shadow-2xl shadow-gray-500"
                                    :src="member.photo" alt="Person Image">

                                <div class="my-auto">
                                    <h1 class="text-2xl ">{{ member.fname }} {{ member.lname }}</h1>
                                    <p class="text-sm text-gray-400">{{ member.email }}</p>
                                </div>
                            </div>

                            <!-- ACTIONS -->
                            <div class="flex flex-row my-auto space-x-14">
                                <div class="flex flex-row space-x-7 rounded-md px-8 py-3  border border-gray-100">
                                    <p class="text-xs text-primary font-bold uppercase my-auto">{{ member.role }}</p>

                                </div>
                                <div class="flex  relative cursor-pointer" @click="showPopup(member)">
                                    <div v-if="selected_member === member.email" ref="target"
                                        class="my-auto absolute bg-white top-8 right-4 px-6 py-2 rounded-md border shadow-md">
                                        <button @click="(showDeleteModal = true)" class="flex justify-center space-x-2">
                                            <img class="w-5 h-5 my-auto" src="@/assets/icons/members/trash.svg" alt="Trash">
                                            <p class="text-red-400 my-auto">remove</p>

                                        </button>
                                    </div>
                                    <div class="space-x-2 flex">
                                        <img class="w-6 h-6 my-auto" src="@/assets/icons/members/menu-dots.svg"
                                            alt="Menu dots">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        </div>


        <div class="w-full flex mt-16">
            <div v-if="selectedMember != null" class="flex flex-col space-y-6 p-6 w-full ">
                <div class="flex justify-between">
                    <div class="flex space-x-2">
                        <img class="h-20 w-20 rounded-full" :src="selectedMember.photo" alt="Person">
                        <h1 class="text-3xl font-bold my-auto text-black">{{ selectedMember.fname }} {{
                            selectedMember.lname
                        }}</h1>
                    </div>


                    <button
                        class="flex flex-row my-auto border-2 border-gray-300 justify-center rounded-md px-10 py-2 space-x-2">
                        <mdicon class="text-gray-400" name="message" />
                        <span class="text-gray-500">Message</span>
                    </button>

                </div>

                <div class="space-y-6 ">
                    <div>
                        <h1 class="text-gray-400 text-2xl">Driver ID</h1>
                        <p class="text-gray-500">{{ selectedMember.id }}</p>
                    </div>

                    <div>
                        <h1 class="text-gray-400 text-2xl">Email</h1>
                        <p class="text-gray-500">{{ selectedMember.email }}</p>
                    </div>


                    <div>
                        <h1 class="text-gray-400 text-2xl">Role</h1>
                        <p class="text-gray-500">{{ selectedMember.role }}</p>
                    </div>
                </div>

                <!-- FILES -->
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
        </div>

    </div>
</template>
 
<script setup>
import InviteUserModal from './Modals/InviteUserModal.vue';
import DeleteUserModal from './Modals/DeleteUserModal.vue';
import axios from 'axios'
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useStore } from 'vuex'
import { useApi } from '@/composables/useApi'

// import GET_ALL_USERS from '@/_graphql/queries/GET_ALL_USERS.gql'

// import gql from 'graphql-tag'
// import { useQuery } from '@vue/apollo-composable'

const users = ref([]);
const { api_path } = useApi();

const store = useStore();
const target = ref(null);
const loading = ref(false);

// const GET_ALL_USERS = gql`
// query GET_ALL_USERS{
//   allUsers {
//   	userId
//     fname
//     lname
//     email
//     photo
//     orgID
//     role
//     created
//   }
// }`


// const { result, loading } = useQuery(GET_ALL_USERS);

// const users = computed(() => result.value?.allUsers ?? []);

const driver_search_query = ref('');
const orgID = computed(() => store.state.orgID)

const getAllUsers = async () => {
    loading.value = true;
    const config = {
        headers: {
            orgID: orgID.value,
        }
    }
    try {
        const res = await axios.get(api_path.value + 'carriers/team/users', config);
        users.value = res.data.result.data;
        console.log(users.value)
        loading.value = false;
    } catch (error) {
        loading.value = false;
        console.log(error)
    }

}

getAllUsers();


const showInviteModal = ref(false);
const showDeleteModal = ref(false);

const selected_member = ref(null);

const selectedMember = ref(null);

onClickOutside(target, () => {
    selected_member.value = null;
})

const hideInviteModal = (val) => {
    showInviteModal.value = val;
}

const hideDeleteModal = (val) => {
    selected_member.value = val;
    showDeleteModal.value = val;
}




const selectMember = (member) => {
    selectedMember.value = member;
}

const showPopup = (member) => {
    selected_member.value = member.email;
}


</script>

