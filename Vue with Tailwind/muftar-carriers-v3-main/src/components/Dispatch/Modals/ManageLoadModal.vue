<template>
    <div>
        <div class="overflow-x-auto overflow-y-auto fixed  shadow-lg inset-0 z-50 flex justify-center items-center">
            <div class="relative mx-auto   max-w-2xl">
                <div class="bg-white justify-center w-[600px] relative mx-auto shadow-lg rounded-xl" ref="el">

                    <div class="bg-white   border-0 rounded-2xl shadow-lg p-5 space-y-7 relative flex flex-col  outline-none focus:outline-none"
                        style=" overflow-x: hidden; overflow-y: hidden;">
                        <!--header-->
                        <div class="flex items-start justify-between border-solid border-slate-200 rounded-t-xl">
                            <h3 class="ml-5 text-3xl font-semibold text-black">
                                Manage Load
                            </h3>
                            <!-- {{current_load}} -->
                        </div>
                        <div class="flex flex-col ml-5">
                            <p class="text-black">Load Number: {{ current_load.confirmationNumber }}</p>
                            <span class="text-xs  text-black">Load id: {{ loadID }}</span>
                        </div>
                        <!-- driver selected -->
                        <!-- {{ current_driver }} -->
                        <!-- {{current_driver}} -->
                        <section v-if="current_driver">
                            <div
                                class="flex items-center justify-between  w-full mx-auto p-2  border border-gray-300 rounded-md">
                                <div class="flex items-center">
                                    <img class="w-12 h-12 mr-3 rounded-full" :src="current_driver?.photo" />
                                    <div class="flex flex-col justify-center">
                                        <p class="text-black text-sm ">{{ current_driver.fname }} {{
                                            current_driver.lname
                                        }}</p>
                                        <!-- <p class="text-black text-sm">Last Load:
                                            {{ current_driver?.load_assignment?.last_assigned }}</p> -->
                                    </div>
                                </div>
                                <div v-if="current_driver?.load_assignment?.load != ''" class="flex flex-col ">
                                    <button
                                        class="text-red-500 bg-red-100  active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none  ease-linear transition-all duration-150"
                                        type="button" @click="unAssignLoadFromDriver()">
                                        Unassign
                                    </button>
                                </div>
                            </div>
                            <!-- DESTINATIONS -->

                            <div class="flex  justify-center py-4  ">
                                <div class="text-xs bg-gray-100  p-4 m-2 rounded-md max-w-max "
                                    v-for="(dest, idx) in current_load.destinations" :key="idx">
                                    <p>{{ dest.id }} | {{ dest.location_type }}</p>
                                    <p class="font-bold">{{ dest.location_name }}</p>

                                    <p class="text-gray-400 italic text-xs">{{ dest.coordinates.latitude }} ,
                                        {{ dest.coordinates.longitude }}</p>
                                    <div @click="viewOnGoogleMaps(dest.coordinates)"
                                        class="hover:text-blue-400 cursor-pointer">
                                        <span class="text-xs">{{ dest.address.line1 }} {{
                                            dest.address.line2
                                        }}</span><br />
                                        <span class="text-xs">{{ dest.address.city }}, {{ dest.address.state }}
                                            {{ dest.address.zip }}</span>
                                    </div>

                                    <p class="text-sm" :class="{ 'text-green-500': dest.status == 'visited' }">{{
                                        dest.status
                                    }}
                                    </p>
                                </div>
                            </div>
                            <div class="w-11/12 mx-auto my-5">
                                <!-- <hr /> -->
                                <p v-if="current_load.status == 'awaiting_bol' || current_load.status == 'rejected_bol'"
                                    class="text-white ml-2">Still waiting for BOL</p>
                                <div v-if="current_load.status == 'pending_confirmation'">
                                    <p class="text-gray-500  text-xl">DRIVER HAS SENT THE BOL </p>

                                    <div class="my-4" v-if="bol_list.length > 0">
                                        <div class="flex flex-row justify-between space-y-2">

                                            <h1 class="text-xl text-gray-400 uppercase mb-2">Submitted BOLS</h1>
                                            <div class="flex space-x-1">
                                                <mdicon @click="listView = false"
                                                    :class="{ 'bg-gray-200  rounded-md text-gray-500': !listView }"
                                                    class="my-auto cursor-pointer p-1 text-gray-400" size="25"
                                                    name="grid" />
                                                <mdicon :class="{ 'bg-gray-300 rounded-md text-gray-500': listView }"
                                                    @click="listView = true"
                                                    class="my-auto cursor-pointer  p-1 text-gray-400" size="25"
                                                    name="view-list" />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-3 gap-2" v-if="!listView">
                                            <div v-for="(bl, idx) in bol_list" :key="idx">
                                                <a :href="bl.path"
                                                    class="flex flex-col space-x-2 justify-center  rounded-md bg-gray-100 text-center"
                                                    target="_blank">
                                                    <div class="mx-auto">
                                                        <mdicon size="80" class="w-full text-red-600" name="file-pdf-box" />
                                                    </div>

                                                    <div class="flex flex-col text-sm  text-gray-500 justify-center">
                                                        <p class="">
                                                            {{ $fmtDate(bl.created) }}
                                                        </p>
                                                        <p>
                                                            {{ $defaultTime(bl.created) }}
                                                        </p>
                                                        <p>{{ $relativeDate(bl.created) }}</p>
                                                    </div>

                                                </a>
                                            </div>
                                        </div>
                                        <div class="grid mt-2" v-if="listView">
                                            <div class="grid grid-cols-2 border-b">
                                                <div class="flex  text-gray-500 ml-8">
                                                    <h1>File</h1>
                                                </div>
                                                <div class="flex flex-row    text-gray-500 justify-evenly">
                                                    <p class="my-auto">Date Created</p>
                                                    <p class="my-auto">Size</p>
                                                    <p class="my-auto">Confirmation</p>
                                                </div>

                                            </div>
                                            <div v-for="(bl, idx) in bol_list" :key="idx">
                                                <a :href="bl.path" class="grid grid-cols-2   rounded-md  text-center"
                                                    target="_blank">
                                                    <div class="flex justify-start">
                                                        <div>
                                                            <mdicon size="80" class="w-full text-red-600"
                                                                name="file-pdf-box" />
                                                        </div>
                                                        <p class="my-auto text-justify text-gray-500 text-xs">{{
                                                            bl.filename
                                                        }}</p>
                                                    </div>
                                                    <div class="flex flex-row justify-around ">
                                                        <div
                                                            class="flex flex-col space-y-1  ml-4 text-[12px]  text-gray-500 justify-center">
                                                            <p>
                                                                {{ $fmtDate(bl.created) }}
                                                            </p>
                                                            <p>
                                                                {{ $defaultTime(bl.created) }}
                                                            </p>
                                                            <p>{{ $relativeDate(bl.created) }}</p>
                                                        </div>
                                                        <p class="text-sm  text-gray-500 justify-center  my-auto">{{
                                                            $formateSize(bl.size)
                                                        }}</p>
                                                        <p class="text-sm pr-8  justify-center my-auto">
                                                            <mdicon v-if="bl.confirmation" class="text-green-400"
                                                                name="check-circle-outline" />
                                                            <mdicon v-else class="text-red-400"
                                                                name="close-circle-outline" />
                                                        </p>
                                                    </div>

                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col w-11/12">
                                        <div class="w-full mb-2" v-if="rejectionState">
                                            <label for="message"
                                                class="block mb-2 text-white font-bold text-lg">Reason</label>
                                            <textarea id="message" rows="2"
                                                class="block p-2.5 w-full resize-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                                placeholder="Write your message..." v-model="rejection_reason"></textarea>
                                        </div>

                                        <div v-if="!rejectionState">
                                            <button type="button"
                                                class="focus:outline-none text-white bg-green-700 hover:bg-green-800  ont-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                                @click="makeBOlDecision('accept')">Accept BoL</button>

                                            <button type="button"
                                                class="focus:outline-none text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                                @click="rejectionState = true">Reject</button>
                                        </div>
                                        <div v-else>
                                            <button type="button"
                                                class="focus:outline-none text-red-700 bg-red-100 hover:bg-red-200  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                                @click="rejectionState = false">Cancel</button>

                                            <button type="button"
                                                class="focus:outline-none text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                                @click="makeBOlDecision('reject')">Send</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                        <!--footer-->
                        <div class="flex items-center justify-end p-3 rounded-b">
                            <button
                                class="text-red-500 bg-transparent  active:bg-red-600 border border-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button" @click="hideModal()">
                                Cancel
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
import axios from 'axios'
import { ref, defineEmits, defineProps, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useApi } from '@/composables/useApi'
import { onClickOutside } from '@vueuse/core'

const { api_path } = useApi();
const store = useStore();


const el = ref(null)
onClickOutside(el, () => {
    hideModal();
})

const loading = ref(false);
const rejectionState = ref(false);
const bol_list = ref([]);
const current_driver = ref({ load_assignment: { load: '' } })
const activeDriver = ref(false);
const activeLoadConfirmId = ref("");
const post = ref('')
const bol_choice = ref('');
const rejection_reason = ref('')
const listView = ref(true)
const feedback = ref({ status: '', text: '' })


const props = defineProps(['current_load'])
const emit = defineEmits(['reCallLoads', 'hideModal'])


const orgID = computed(() => store.state.orgID);
const loadID = computed(() => props.current_load.id);
const driverID = computed(() => props.current_load.driverID);



const getName = ({ fname, lname, email }) => {
    if (fname || lname)
        return `${fname} ${lname}`
    return email;
}

const hideModal = () => {
    emit('hideModal', false)
}

const makeBOlDecision = async (choice) => {
    let confirmBol = false;
    loading.value = true;
    if (choice == 'accept') {
        confirmBol = true;
    }

    const config = {
        headers: {
            orgID: orgID.value,
        }
    }

    const payload = {
        loadID: loadID.value,
        driverID: driverID.value,
        confirmBOL: confirmBol,
        reason: rejection_reason.value
    }
    try {
        const res = await axios.post(api_path.value + "loads/bol/decision", payload, config);
        console.log(res.data);
        // this.loading = false
        emit('reCallLoads')
        emit('hideModal')
    } catch (error) {
        console.log(error);
        loading.value = false
    }

}

// const getLoad=()=>{

// }

const getDriver = async () => {
    console.log("DRIVER ID", driverID.value);
    console.log("ORG ID", orgID.value);
    console.log("CURRENT LOAD", props.current_load)
    loading.value = true;
    const config = {
        headers: {
            orgID: orgID.value,
            driverID: driverID.value
        }
    }

    try {
        const res = await axios.get(api_path.value + "fleet/drivers/one", config);
        activeDriver.value = true;
        current_driver.value = res.data.result.data;
        console.log("CURRENT DRIVER", current_driver.value)
        loading.value = false;
    } catch (error) {
        console.log(error)
        loading.value = false;
    }
}

const getBOLs = async () => {
    loading.value = true;
    const config = {
        headers: {
            orgID: orgID.value,
            loadID: loadID.value,
        }
    }

    try {
        const res = await axios.get(api_path.value + "loads/bols", config);
        bol_list.value = res.data.result;
        console.log("BOL LIST", bol_list.value)
        loading.value = false;
    } catch (error) {
        console.log(error)
        loading.value = false;
    }
}


const unAssignLoadFromDriver = async () => {
    console.log(props.current_load);
    const config = {
        headers: {
            orgID: orgID.value,
        }
    }
    const payload = {
        loadID: props.current_load._id,
        driverID: props.current_load.driverID
    }
    try {
        const res = await axios.post(api_path.value + "loads/assignment?to=unassign", payload, config);

        console.log(res.data)
        if (res.data.status === 'warning') {

            feedback.value.status = res.data.status;
            feedback.value.text = res.data.feedback;
        } else {
            hideModal()
            emit('reCallLoads');
        }
    } catch (error) {
        console.log(error);

    }
}

onMounted(() => {
    getDriver()
})
getBOLs();



</script>
      

      
<style scoped></style>