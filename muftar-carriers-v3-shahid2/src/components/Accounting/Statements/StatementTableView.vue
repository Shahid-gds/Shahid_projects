<template>
    <div class="px-8 h-screen">
        <div class="flex  mt-2 items-center">
            <div>
                <DropdownAnimated @selectedItem="getStatements" :options="drivers_board" :loading="loading"
                    placeholder="Select Driver" />
            </div>

            <div v-if="all_statements.length > 0" class="flex">
                <div v-for="(stmt, idx) in all_statements" :key="idx" @click="setStatement(stmt)" :class="current_statement && current_statement.id == stmt.id
                    ? 'cursor-pointer border-2 border-red-400 mx-2 p-2 flex bg-white rounded-lg items-center relative'
                    : 'cursor-pointer border-2 border-blue-600 mx-2 p-2 flex bg-white rounded-lg items-center relative'
                ">
                    <p v-if="current_statement && stmt.id == current_statement.id">*</p>
                    <img src="@/assets/icons/finance/statement.svg" class="w-5 mx-2" />
                    <p class="">
                        {{
                            stmt.details
                            ? $fmtDate(stmt.details.pay_period.start_time)
                            : "00-00-00"
                        }}
                        -
                        {{
                            stmt.details ? $fmtDate(stmt.details.pay_period.end_time) : "00-00-00"
                        }}
                    </p>
                    <p class="text-sm text-gray-500 italic absolute -bottom-3 right-3">
                        {{ stmt.id }}
                    </p>
                </div>
            </div>
        </div>

        <h2 v-if="(!loading && current_statement && all_statements.length > 0)" class="heading-color text-xl font-bold">
            Statements</h2>
        <!-- <p class="text-sm text-blue-200">These are load offers between you and your broker</p> -->
        <div v-if="(!loading && current_statement && all_statements.length > 0)" class="border-2 rounded-xl mr-2 ml-2 mt-2"
            style="background-color: #3C59A8;">
            <div class="grid gap-4 grid-cols-9 text-white font-bold p-2 text-center">
                <div>Pay Date:</div>
                <div>Range:</div>
                <div>Unit Name:</div>
                <div>Driver:</div>
                <div>Gross Balance:</div>
                <div>Net Balance:</div>
                <div>Year to Date:</div>
                <div>Status:</div>
                <div>Action:</div>
            </div>
        </div>
        <div v-if="!loading && current_statement && all_statements.length > 0" class="border-2 rounded-xl mr-2 ml-2">
            <div class="grid gap-4 grid-cols-9 tables text-gray-500  p-4 text-center"
                v-for="(statement, index) in all_statements" :key="index">

                <div>{{ $fmtDate(statement.details.pay_date) }}</div>
                <div>{{ $fmtDate(statement.details.pay_period.start_time) }} to {{
                    $fmtDate(statement.details.pay_period.end_time)
                }}</div>
                <div>{{ statement.carrier.name }}</div>
                <div class="text-xs">
                    {{ statement.driverID }}
                </div>

                <div>{{ $displayPrice(statement.tables[5][2][2].v) }}</div>
                <div>{{ $displayPrice(statement.tables[5][2][5].v) }}</div>

                <div>{{ $displayPrice(statement.tables[4][2][4].v) }}</div>
                <div>Unpaid</div>
                <div>
                    <router-link @click="getStatement(statement), toggleModal()"
                        :to="{ name: 'Table', query: { statement_id: statement.id } }">
                        <button class="p-2 text-white button_gradient rounded-xl">
                            Action
                        </button>
                    </router-link>

                </div>
            </div>

        </div>
        <!-- modal -->
        <StatementModal v-if="showModal" @hideModal="hideModal" />

        <section class=" mt-2 p-3 pt-4 bg-white border-2 border-grey-200"
            v-if="(current_driver && all_statements.length === 0 && !loading)">
            <p>Selected Driver Does not have statements</p>
        </section>
        <section v-if="current_driver == null && !current_statement"
            class=" mt-2 p-3 pt-4 bg-white border-2 border-grey-200">
            <p>Please select a driver and statement number to continue {{ current_driver }}</p>
        </section>
    </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import DropdownAnimated from "@/components/utils/DropdownAnimated.vue";
import StatementModal from '@/components/Accounting/Statements/modals/StatementModal.vue'
// import VueHtml2pdf from "vue-html2pdf";
// import StatementSection from "./subcomponents/StatementSection.vue";
export default {
    name: "StatementTableView",
    components: {
        // VueHtml2pdf,
        DropdownAnimated,
        // StatementSection,
        StatementModal
    },
    data() {
        return {
            loading: false,
            current_statement: null,
            // current_loads: [],
            current_driver: null,
            drivers_board: [],
            // for all statements
            all_statements: [],
            showModal: false,
        };
    },
    methods: {
        toggleModal: function (id) {
            this.showModal = !this.showModal;

        },
        hideModal(val) {
            this.showModal = val;
        },
        async getStatements(val) {
            this.current_driver = val;
            this.loading = true;
            const config = {
                headers: {
                    orgID: this.orgID,
                    driverID: val.driver_id
                }
            }

            try {
                const res = await axios.get(this.$api_path + `statements/driver`, config);
                console.log("TABLE STATEMENT", res.data.result[0]);
                this.all_statements = res.data.result;
                this.loading = false;
            } catch (error) {
                this.loading = false;
                console.log(error)
            }
        },
        getStatement(statement) {
            console.log(statement);
        },
        // async
        setStatement(val) {
            console.log(val);
            this.current_statement = val;
        },
        generatePDF() {
            this.$refs.html2Pdf.generatePdf();
        },
        async getData() {
            this.loading = true;
            const config = {
                headers: {
                    userID: this.userID,
                    orgID: this.orgID
                },

            }

            try {
                const res = await axios.get(this.$api_path + "/fleet/drivers/all", config)
                let drivers = res.data.result;
                let drivers_board = [];

                if (drivers && drivers.length) {
                    drivers.forEach((driver) => {
                        drivers_board.push({
                            driver_name: `${driver.fname} ${driver.lname}`,
                            driver_id: driver._id
                        })
                    })
                }
                this.drivers_board = drivers_board;
                this.loading = false;
            } catch (error) {
                this.loading = false;
                console.log(error)
            }
        },
        async getLoadInformation(lid) {
            this.loading = true;
            const config = {
                headers: {
                    userID: this.userID
                }
            }

            try {
                const res = await axios.get(this.$api_path + "loads/" + lid, config);
                this.loading = false;
                return res.data.result;
            } catch (error) {
                this.loading = false;
                console.log(error);
            }
        },
    },
    computed: {
        ...mapState(["orgID", "driverID", 'userID']),
    },
    mounted() {
        this.current_statement = this.all_statements[0];
        this.getData();
    },
};
</script>

<style scoped>
.heading-color {
    color: #3D5AA9 !important;
    font-weight: bolder;
}

.tables:nth-child(odd) {
    background-color: #f2f2f2;
}
</style>
