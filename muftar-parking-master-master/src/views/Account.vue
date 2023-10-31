<template>
        <div class="w-11/12 mx-auto">
        <div class="flex items-center">
            <div class="pr-4">
            <img src="@/assets/logo.svg" alt="Logo" class="h-24 w-auto" />
            </div>
            <div class="text-xl">
            Powered by Muftar
            </div>
        </div>
        <div class="flex justify-between">
            <h1 class="text-4xl m-7">Account (as user)</h1>
            <div class="">
                <router-link class="text-blue-300 mx-4 " :to="{'name': 'Overview'}">Overview</router-link>
                <router-link class="text-blue-300 mx-4 " :to="{'name': 'Account'}">Account</router-link>
            </div>
        </div>
        <AccountProfile />
        <PaymentHistoryTable />
    </div>
</template>
<script setup>
import AccountProfile from '@/components/AccountProfile.vue'
import PaymentHistoryTable from '@/components/PaymentHistoryTable.vue'
</script>
<style scoped>
</style>Í