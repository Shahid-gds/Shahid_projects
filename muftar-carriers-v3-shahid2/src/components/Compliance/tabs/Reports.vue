<template>
    <div v-if="reports.length > 0">
        <div class=" rounded-t-lg mt-2" style="background-color: #3D5AA9;">
            <div class="grid gap-1 grid-cols-7 text-white font-bold p-2 text-center">
                <div>Date</div>
                <div>Report ID</div>
                <div>Broker</div>
                <div>Driver</div>
                <div>Report Type</div>
                <div>View Docs</div>
                <div>Options</div>
            </div>
        </div>

        <div class="w-full border-b" v-for="report in reports" :key="report.reportID">
            <div class="grid gap-1 grid-cols-7 p-2 text-center">
                <div class="my-auto">{{ $fmtDate(report.created) }}</div>
                <div class="my-auto">{{ report.reportID }}</div>
                <div class="my-auto">{{ report.broker }}</div>
                <div class="my-auto">{{ report.driver.fname }} {{ report.driver.lname }}</div>
                <div class=" rounded-xl items-center my-auto  text-center ml-5">
                    <span class="bg-red-400 text-sm   text-red-700 rounded-xl px-4 py-1">

                        {{ report.report_type }}
                    </span>
                </div>
                <div class="flex justify-center item-center my-auto">
                    <a :href="report.claim_docs" target="_blank" class="mx-1">
                        <img class="w-8 h-8" src="@/assets/icons/dispatch/pdf.svg">
                    </a>
                </div>
                <div class=" flex justify-center">
                    <button class="button_gradient flex space-x-3 text-white w-38 p-4 rounded-lg">
                        <p class="font-bold">
                            Submit Claim
                        </p>
                        <img class="my-auto w-5" src="@/assets/icons/dispatch/arrow.svg" alt="">
                    </button>

                </div>
            </div>
        </div>

    </div>
    <GlobalLoader v-if="loading" />
    <div  class=" h-screen flex justify-center items-center" v-if="reports.length === 0 && !loading">
        <p class="-mt-40 text-5xl text-gray-400">
           OOPS<span class="text-red-500">!</span> NO REPORTS FOUND.
        </p>
    </div>
</template>
  
<script>
import axios from 'axios';
import { mapState } from 'vuex'
export default {
    name: 'Reports',
    data() {
        return {
            reports: [],
            loading: false
        }
    },
    methods: {
        async getReports() {
            this.loading = true;
            const config = {
                headers: {
                    orgID: this.orgID
                }
            }
            try {
                const res = await axios.get(this.$api_path + 'safety/reports', config);
                this.reports = res.data.result;
                this.loading = false;

            } catch (error) {
                this.loading = false;
                console.log(error);
            }
        }
    },
    computed: {
        ...mapState(['orgID'])
    },
    created() {
        this.getReports();
    },
}
</script>
<style scoped>
.table:nth-child(odd) {
    background-color: #F4F4F4;
}

.table {
    margin-bottom: 0rem !important;
    color: #A09F9F;
}
</style>