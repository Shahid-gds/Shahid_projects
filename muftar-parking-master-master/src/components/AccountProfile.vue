<template>
<div class="container mx-auto py-6">

    <div class="container mx-auto py-6">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-3xl font-bold">{{ user.name }}'s Profile</h1>
    </div>

      <div class="flex bg-white rounded-lg shadow-md px-6 py-4">
        <div class="w-1/3">
            <img :src="user.profilePic" alt="Profile Picture" class="w-2/4 rounded-lg shadow-md" />
        </div>
        <div class="w-2/3">
            <h2 class="text-xl font-bold mb-4">Contact Information</h2>
            <div class="text-lg mb-2">{{ user.name }}</div>
            <div class="text-lg mb-2">{{ user.email }}</div>
            <div class="text-lg">{{ user.phone }}</div>
        </div>
      </div>
  </div>

    <div class="flex items-center justify-between mb-6">
      <h1 class="text-3xl font-bold">Financial Profile</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-white rounded-lg shadow-md px-6 py-4">
        <h2 class="text-xl font-bold mb-4">Total Paid</h2>
        <div class="text-3xl font-bold">$ {{ currentBalance/100}}</div>
      </div>
      <div class="bg-white rounded-lg shadow-md px-6 py-4">
        <h2 class="text-xl font-bold mb-4">Due Next Month</h2>
        <div class="text-3xl font-bold">$ {{ totalRevenue/100}}</div>
      </div>
    </div>
  </div>

</template>
<script setup>
import {ref, computed, onMounted} from 'vue'
import { useRouter, useRoute } from 'vue-router';
    const currentBalance = ref(5000)
    const totalRevenue = ref(10000)

    const user = ref({
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      profilePic: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    });

</script>
<style scoped>


</style>