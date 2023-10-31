<template>
    <div class="container max-w-3xl mx-auto m-4 p-10 space-y-5 rounded-xl border bg-white">
        <div class="space-y-3 border-b pb-2">
            <h1 class="text-4xl">Pending applicants</h1>
            <!-- <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, modi qui! Enim, dolores obcaecati
                debitis iusto eligendi molestiae. Ut quo vero sint voluptates possimus officia nemo in adipisci quisquam
                porro.</p> -->
        </div>
        <Teleport to="body">
            <XyzTransition xyz="fade-100% up">
                <SnackBar v-if="isUserAccepted" message="Request Has been Accepted" />
            </XyzTransition>
        </Teleport>
        <div>
            <div v-if="loading">
                <p class="mt-10 text-2xl">Loading...</p>
            </div>
            <div v-if="!loading">
                <!-- <div class="flex space-x-2 w-full py-4 border-b">
                    <input class="my-auto cursor-pointer focus:ring-0 rounded-sm border-blue-400" type="checkbox">
                    <p class=" text-lg"> 9/9 people selected </p>
                </div> -->
                <ul class="flex flex-col h-[36rem] space-y-4 overflow-y-auto">
                    <li class="text-black flex py-6 justify-between border-b" v-for="application in filteredApplicants"
                        :key="application._id">

                        <!-- {{ driver }} -->
                        <div class="flex space-x-4">
                            <!-- <input class="my-auto cursor-pointer focus:ring-0 rounded-sm border-blue-400" type="checkbox"> -->
                            <img class="h-10 w-10 my-auto rounded-full" :src="application.sender_info.photo"
                                :alt="application.sender_info.fname">

                            <div>
                                <p class="text-xl font-[500]">{{ application.sender_info.fname }} {{
                                    application.sender_info.lname }}
                                </p>
                                <p>{{ application.sender_info.email }}</p>
                                <p>{{ application.status }}</p>
                            </div>
                        </div>


                        <div v-if="application.status === 'confirmed'" class="my-auto mx-14">
                            <span class="text-green-500">Accepted</span>
                        </div>

                        <div v-if="application.status === 'rejected'" class="my-auto mx-14">
                            <span class="text-red-500">Rejected</span>
                        </div>

                        <div v-if="application.status === 'pending'" class="flex space-x-2 mx-2">
                            <button class="rounded-md text-green-600 bg-green-100 border border-green-500 my-auto px-4 py-2"
                                @click="sendRequest(true, application.sender_info._id, application._id)">Accept</button>
                            <button class="rounded-md text-red-600 bg-red-100 border border-red-500 my-auto px-4 py-2"
                                @click="sendRequest(false, application.sender_info._id, application._id)">Reject</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script setup>
import axios from 'axios'
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useStore } from 'vuex'
import { useApi } from '@/composables/useApi.js';


const { api_path } = useApi();



const selected_application = ref(null)
const target = ref(null)
const isUserAccepted = ref(false);

const store = useStore();

const loading = ref(false);
const applicants = ref([])

const userID = computed(() => store.state.userID)

const orgID = computed(() => store.state.orgID)

// onClickOutside(target, () => {
//     selected_application.value = null;
// })

// const showMenu = (application_id) => {
//     selected_application.value = driver_id;

// }

// const selectOp = (op) => {
//     console.log(op)
// }


const filteredApplicants = computed(() => {
    return applicants.value.filter((applicant) => applicant.status === 'pending')
})


const sendRequest = async (isAccepted, driverID, invitationID) => {
    console.log(orgID.value)

    const config = {
        headers: {
            orgID: orgID.value
        }
    }
    const payload = {
        driverID: driverID,
        invitationID: invitationID,
        isAccepted: isAccepted,
        reason: ""
    }

    try {

        const res = await axios.post(api_path.value + 'carriers/team/invite/decision', payload, config)
        console.log(res);
        // isAccepted.va = true;
        isUserAccepted.value = true
        setTimeout(() => {
            isUserAccepted.value = false
        }, 4000)
        getAllDrivers();

    } catch (error) {
        console.log(error)
    }

}

const getAllDrivers = async () => {
    loading.value = true;
    const config = {
        headers: {
            userID: userID.value,
            orgID: orgID.value
        }
    }

    try {
        const response = await axios.get(api_path.value + "/carriers/team/invite/requests", config)
        applicants.value = response.data.result;
        loading.value = false;
        console.log(applicants.value)

    } catch (error) {
        loading.value = false;
        console.log(error);
    }
}

getAllDrivers();

</script>