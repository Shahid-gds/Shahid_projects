<template>
    <div v-if="claims.length > 0">
        <div class="border bg-white rounded-md w-96 my-4 shadow">
            <input class="border-none rounded-md w-full focus:ring-0 placeholder:text-gray-400 text-gray-400" placeholder="Search Claims" type="text">
        </div>
        <div class=" rounded-t-lg  px-12 bg-primary">
            <div class="grid gap-1 grid-cols-8 font-bold text-white p-2 text-center">
                <div>Date</div>
                <div>Report ID</div>
                <div>Broker</div>
                <div>Driver</div>
                <div>Report Type</div>
                <div>Amount($)</div>
                <div>View Docs</div>
                <div>Options</div>
            </div>
        </div>
        <div class="w-full border-b " v-for="claim in claims " :key="claim.claimID">
            <div class="grid gap-1 grid-cols-8 text-gray-400 text-sm px-12 py-5  text-center">
                <div>{{ $fmtDate(claim.created) }}</div>
                <div>{{ claim.claimID }}</div>
                <div>{{ claim.broker }}</div>
                <div class="text-xs">{{ claim.driver.fname }} {{ claim.driver.lname }}</div>
                <div class=" rounded-xl items-center my-auto  text-center ml-5">
                    <span class="bg-red-400 text-sm   text-red-700 rounded-xl px-4 py-1">

                        {{ claim.report_type }}
                    </span>
                </div>
                <div>{{ $displayPrice(claim.amount) }}</div>
                <div class="flex justify-center item-center">
                    <a :href="claim.claim_docs" target="_blank" class="mx-1">
                        <img class="w-8 h-8" src="@/assets/icons/dispatch/pdf.svg">
                    </a>
                </div>
                <div class="w-60">
                    <div class="flex justify-evenly">
                        <button class="text-white py-2 px-3  bg-green-500 rounded-full ">Check Status</button>
                        <button class="text-white py-2 px-3 bg-pink-500 rounded-full ">Cancel Claim</button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <GlobalLoader v-if="loading" />
    <div class="h-screen flex justify-center items-center" v-if="claims.length === 0 && !loading">
        <p class="-mt-40 text-5xl text-gray-400">
            OOPS<span class="text-red-500">!</span> NO CLAIMS FOUND.
        </p>
    </div>
</template>
  
<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: 'Claims',
    data() {
        return {
            claims: [],
            loading: false
        }
    },
    methods: {
        async getClaims() {
            this.loading = true;
            const config = {
                headers: {
                    orgID: this.orgID
                }
            }
            try {
                const res = await axios.get(this.$api_path + 'safety/claims', config);
                this.claims = res.data.result;
                this.loading = false;


            } catch (error) {
                console.log(error)
                this.loading = false;
            }
        },
    },
    computed: {
        ...mapState(["orgID"])
    },
    created() {
        this.getClaims();
    }
}
</script>
<style scoped>
.table:nth-child(odd) {
    background-color: #f2f2f2;
}

.table {
    margin-bottom: 0rem !important;
}
</style>