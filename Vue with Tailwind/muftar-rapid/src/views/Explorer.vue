<template>
    <div id="Explorer">
        <router-link class=" logo-brand flex mx-auto  items-center justify-center text-white text-2xl py-3"
            :to="{ name: 'About' }">
            <img src="@/assets/rapid-logo.png" />
        </router-link>
        <section class="bg-white w-11/12 h-full mx-auto px-8 rounded-md shadow-lg py-8">
            <div class="w-full mx-auto rounded  border-2 border-gray-200">
                <div class="border-b  border-gray-200 flex justify-between items-center p-2">
                    <h2 class="text-lg p-2 font-bold ">Muftar Load Board</h2>

                     <a href="https://portal.muftar.com" class="bg-blue-500 py-1 px-3 text-white rounded">Go to Muftar Portal</a>
                </div>
                <LedgerTable />
            </div>
        </section>
    </div>
</template>
<script setup>

import LedgerTable from '@/components/explorer/LedgerTable.vue'
</script>
<style>
#Explorer {
    background-color: var(--primary);
    min-height: 100vh;
    padding-bottom: 4rem;

}

.logo-brand {
    text-decoration: none;
}

.logo-brand img {
    width: 35%;
    max-width: 320px;
}
</style>
  