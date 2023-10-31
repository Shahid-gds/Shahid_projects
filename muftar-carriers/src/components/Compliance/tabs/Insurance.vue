<template>
    <div class="flex flex-col space-y-3">
        <div class="flex justify-end">
            <button class="p-2 text-white w-36 font-bold rounded-lg" @click="toggleCOIModal()"
                style="background:#3D5AA9">+ Add COI</button>
        </div>
        <div class="grid grid-cols-5 gap-2 p-2 bg-primary text-center font-bold text-white rounded-xl">
            <div>Insurance Company Name</div>
            <div>Policy #</div>
            <div>Claims Submission Email</div>
            <div>Documents</div>
            <div>Actions</div>
        </div>
        <div class="border-b w-full " v-for="insurance in insurances" :key="list">
            <div class="grid gap-1 grid-cols-5 p-2 text-center" style="color:#A09F9F">
                <div>
                    <p>{{ insurance.insurance_company_name }}</p>
                </div>
                <div>

                    <p>{{ insurance.policy_number }}</p>
                </div>
                <div>

                    <p>{{ insurance.submission_email }}</p>
                </div>
                <div class="flex gap-2 flex-col justify-center items-center">
                    <div class="flex">
                        <a v-for="(docsLink, index) in insurance.documents" target="_blank" class=" cursor-pointer"
                            :key="index" :href="docsLink">
                            <img class="w-5 h-5" src="@/assets/icons/dispatch/pdf.svg">
                        </a>
                    </div>
                </div>
                <div class="flex gap-4 justify-center items-center">
                    <img class="w-5 h-5" src="@/assets/icons/compliance/view.svg" alt="">
                    <button @click="toggleCOIModal()">
                        <img class="w-5 h-5" src="@/assets/icons/compliance/edit.svg" alt="">
                    </button>
                    <button @click="toggleInsuranceDeleteModal">
                        <img class="w-5 h-5" src="@/assets/icons/compliance/delete.svg" alt="">
                    </button>

                </div>
            </div>
        </div>

        <Teleport to="body">
            <COIModal v-if="showCOIModal" @hideModal="hideModal" />
        </Teleport>
        <Teleport to="body">
            <DeleteInsuranceModal v-if="showDeleteInsuranceModal" @hideModal="hideModal" />
        </Teleport>
    </div>
</template>
  
<script>
import axios from 'axios';
import { mapState } from 'vuex'
import COIModal from '@/components/Compliance/Modals/COIModal.vue'
import DeleteInsuranceModal from '@/components/Compliance/Modals/DeleteInsuranceModal.vue'
export default {
    name: 'Insurance',
    components: {
        COIModal,
        DeleteInsuranceModal
    },
    data() {
        return {
            showCOIModal: false,
            showDeleteInsuranceModal: false,
            insurances: []
        }
    },
    methods: {
        toggleCOIModal(id) {
            this.showCOIModal = !this.showCOIModal;
            if (this.showCOIModal)
                this.activeLoadConfirmId = id
        },
        hideModal(val) {
            if (val === 'DeleteModal') {
                this.showDeleteInsuranceModal = false;

            } else {
                this.showCOIModal = false;
            }
        },
        toggleInsuranceDeleteModal() {
            this.showDeleteInsuranceModal = !this.showDeleteInsuranceModal;
        },
        async getInsurances() {

            const config = {
                headers: {
                    orgID: this.orgID
                }
            }
            try {
                const res = await axios.get(this.$api_path + 'safety/insurance', config);
                this.insurances = res.data.result;


            } catch (error) {
                console.log(error)
            }
        }
    },
    computed: {
        ...mapState(['orgID'])
    },
    created() {
        this.getInsurances();
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