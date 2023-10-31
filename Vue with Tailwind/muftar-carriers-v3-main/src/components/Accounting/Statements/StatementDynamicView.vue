<template>
    <div class="flex flex-col px-8" style="min-height:80vh;">
        <div class="flex space-x-3">

            <div>
                <DropdownAnimated @selectedItem="getStatements" :options="drivers_board" :loading="loading"
                    placeholder="Select Driver" />
            </div>

            <!-- <div v-if="statements.length > 0" class="ml-2 relative">
                <div @click="openMenu = true" class="">
                    Select Statement Period
                </div>
                <template>
                    <div class="flex flex-col space-y-2 w-full p-2 border rounded-md cursor-pointer"
                        v-for="(stmt, idx) in all_statements" :key="idx">
                        <div class="absolute bg-white top-4 w-full border rounded-md p-2" @click="setStatement(stmt)">
                            {{ Object.keys(stmt.details).length > 0 ? $fmtDate(stmt.details.pay_period.start_time) :
                                "00-00-00"
                            }}
                            - {{ stmt.details ? $fmtDate(stmt.details.pay_period.end_time) : "00-00-00" }}
                        </div>
                    </div>
                </template>

            </div> -->
            <div v-if="statements.length > 0" class="my-auto">
                <div class="cursor-pointer border relative w-52 rounded-md p-2 select-none" @click="setMenuState">
                    <span> {{ current_statement ? $fmtDate(current_statement.details.pay_period.start_time) + ' - ' +
                        $fmtDate(current_statement.details.pay_period.end_time) : 'Select Statement' }}
                    </span>
                    <div class="absolute left-0 top-11 border rounded-md w-full bg-white" ref="target" v-if="openMenu">

                        <div class="flex flex-col space-y-2 w-full  border rounded-md hover:bg-gray-100 cursor-pointer"
                             v-for="(stmt, idx) in all_statements" :key="idx">
                            <div class="p-2" @click="setStatement(stmt)">
                                {{ Object.keys(stmt.details).length > 0 ? $fmtDate(stmt.details.pay_period.start_time) :
                                    "00-00-00"
                                }}
                                - {{ stmt.details ? $fmtDate(stmt.details.pay_period.end_time) : "00-00-00" }}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <section class="mx-auto mt-2 bg-white border-2 border-grey-200 min:w-10/12"
            v-if="all_statements.length > 0 && current_statement">
            <div class="flex items-center justify-between px-2 mx-auto">
                <h2 class="text-2xl uppercase">{{ current_statement.id }}</h2>

                <div class="flex space-x-4 px-2 py-4">
                    <div class="border-2 border-red-400 flex text-red-600 items-center rounded p-2 h-10 cursor-pointer"
                        @click="generatePDF()">
                        <mdicon name="file-pdf-box" />
                        <span class="font-bold ml-2 ">Download as PDF</span>
                    </div>
                    <div class="border-2 border-blue-600 flex items-center text-blue-600 rounded p-2  h-10  cursor-pointer">
                        <!-- <img class="w-10" src="@/assets/icons/finance/calendar.svg" /> -->
                        <mdicon name="calendar" />
                        <span class="font-bold ml-2 ">Schedule</span>
                    </div>

                    <div @click="isEditable"
                        class="border-2 border-blue-600 flex items-center text-blue-600 w-28 rounded p-2 h-10  cursor-pointer">
                        <div class="flex mx-auto" v-if="!editable">
                            <mdicon name="Pencil" />
                            <span class="font-bold ml-2 ">Edit</span>
                        </div>
                        <div class="flex mx-auto" v-else>
                            <mdicon name="content-save" />
                            <span class="font-bold ml-2 ">Save</span>
                        </div>
                    </div>

                    <div
                        class="border-2 border-green-600 flex items-center text-green-600 rounded p-2  h-10  cursor-pointer">
                        <!-- <img class="w-10" src="@/assets/icons/finance/calendar.svg" /> -->
                        <mdicon name="send" />
                        <span class="font-bold ml-2 ">Process</span>
                    </div>
                </div>
            </div>
            <StatementDetails v-if="current_statement" :current_statement="current_statement" :editable="editable" />

            <StatementMatrix v-if="current_statement" :current_statement="current_statement" :editable="editable"
                @updateStatement="updateStatement" />

            <!-- <StatementSection v-if="current_statement" 
                :current_statement="current_statement" 
                :editable="editable"
                @updateStatement="updateStatement" /> -->
        </section>

        <section class=" mt-2 p-3 pt-4 bg-white border-2 border-grey-200 rounded w-10/12"
            v-if="(current_driver && all_statements.length === 0 && !loading)">
            <p>Selected Driver Does not have statements</p>
        </section>
        <section v-if="current_driver == null" class=" mt-2 p-3 pt-4 bg-white border-2 border-grey-200 rounded w-10/12">
            <p>Please select a driver and statement number to continue</p>
        </section>
    </div>
</template>


<script setup>
import axios from "axios";
import { useStore } from "vuex";
import { onClickOutside } from '@vueuse/core'
import { useRouter, useRoute } from 'vue-router'
import { ref, computed, onMounted, watch } from 'vue'
import DropdownAnimated from "@/components/utils/DropdownAnimated.vue";
// import VueHtml2pdf from "vue-html2pdf";
// import StatementSection from "./subcomponents/StatementSection.vue";
import StatementDetails from "./subcomponents/StatementDetails.vue";
import StatementMatrix from './subcomponents/StatementMatrix.vue'
// // import gql from 'graphql-tag'
// import { useQuery } from '@vue/apollo-composable'
// import { GET_ALL_DRIVERS } from '@/_graphql/queries'
import { useApi } from '@/composables/useApi'

const { api_path } = useApi();


// const updated_drivers = ref([])

// const { result, loading: drivers_loading } = useQuery(GET_ALL_DRIVERS);

// const drivers = computed(() => result.value?.allDrivers ?? []);

// watch(drivers, (newDrivers) => {
//     if (newDrivers && newDrivers.length > 0) {
//         newDrivers.forEach((driver) => {
//             updated_drivers.value.push({
//                 driver_name: getName(driver),
//                 driver_id: driver.driverId
//             })
//         })
//     }


// if (drivers && drivers.length) {
//         drivers.forEach((driver) => {
//             drivers_board_selected.push({
//                 driver_name: getName(driver),
//                 driver_id: driver._id
//             })
//         })
//     }
// })

const store = useStore();
const router = useRouter();
const route = useRoute();



const loading = ref(false);
const editable = ref(false);
const current_statement = ref(null);
const current_driver = ref(null);
const drivers_board = ref([]);
const target = ref(null)

const all_statements = ref([]);
const openMenu = ref(false);


const orgID = computed(() => store.state.orgID);
const driverID = computed(() => store.state.driverID);
const userID = computed(() => store.state.userID);
const statements = computed(() => all_statements.value);


onClickOutside(target, () => {

    openMenu.value = false;

})

const getStatements = async (val) => {
    current_driver.value = val;
    // router.push({ path: route.fullPath });
    loading.value = true;
    const config = {
        headers: {
            orgID: orgID.value,
            driverID: val.driver_id
        }
    }

    try {
        const res = await axios.get(api_path.value + `statements/driver`, config);
        all_statements.value = res.data.result;
        console.log('asdasdasdad', all_statements.value);
        loading.value = false;

    } catch (error) {
        loading.value = false;
        console.log(error)
    }

}

const getAllDriverStatements = async (val) => {
    current_driver.value = val;
    loading.value = true;
    const config = {
        headers: {
            orgID: orgID.value,
            driverID: val
        }
    }

    try {
        const res = await axios.get(api_path.value + `statements/driver`, config);
        loading.value = false;
        console.log(res);
        return all_statements.value = res.data.result;
    } catch (error) {
        loading.value = false;
        console.log(error)
    }
}



const getAllDrivers = async () => {
    loading.value = true;
    const config = {
        headers: {
            userID: userID.value,
            orgID: orgID.value
        },

    }
    try {
        const res = await axios.get(api_path.value + "/fleet/drivers/all", config);
        let drivers = res.data.result;
        let drivers_board_selected = [];
        console.log(drivers)

        if (drivers && drivers.length) {
            drivers.forEach((driver) => {
                drivers_board_selected.push({
                    driver_name: getName(driver),
                    driver_id: driver._id
                })
            })
        }

        drivers_board.value = drivers_board_selected

        console.log(drivers_board.value)
        loading.value = false;
    } catch (error) {
        loading.value = false;
        console.log(error)
    }
}

const updateStatement = (stmt) => {
    current_statement.value = stmt
}

const isEditable = () => {
    editable.value = !editable.value;
}

function setMenuState() {
    openMenu.value = !openMenu.value;
}

function setStatement(val) {
    console.log('HELLo 1', openMenu.value)
    // this.$router.push({ path: this.$route.fullPath, query: { driver_id: val.driver._id, statement_id: val.id } },)
    openMenu.value = false;
    current_statement.value = val;
    console.log('HELLo 2', openMenu.value)
}

const getName = ({ fname, lname, email }) => {
    if (fname || lname)
        return `${fname} ${lname}`
    return email;
}

onMounted(() => {
    getAllDrivers()
    if (route.query && route.query.driver_id) {
        const driver_id = route.query.driver_id;
        getAllDriverStatements(driver_id);
    }
})


</script>
  


<style scoped></style>
