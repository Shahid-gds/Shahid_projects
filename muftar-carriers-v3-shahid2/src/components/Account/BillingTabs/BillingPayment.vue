<template>
    <div class="w-full m-4">
        <Plan v-if="!showInvoice && showPlan" @selectPlan="selectPlan" />
        <Payment v-if="!showInvoice && !showPlan && showPayment" @selectPayment="selectPayment" />
        <Invoice v-if="showInvoice && !showPayment && !showPlan" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Plan from './components/Plan.vue'
import Invoice from './components/Invoice.vue'
import Payment from './components/Payment.vue'

const showPlan = ref(true);
const showPayment = ref(false);
const showInvoice = ref(false);

const hide = ref(true);

const selectPlan = () => {
    showPayment.value = true;
    showPlan.value = false
}

const selectPayment = () => {
    showPayment.value = false;
    showPlan.value = false;
    showInvoice.value = true;
}


</script>