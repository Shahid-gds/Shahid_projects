<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(property, index) in properties"
        :key="index"
        class="border rounded-md p-4 shadow-md"
      >
      <img :src="property.image" alt="Property Image" class="w-full h-64 object-cover rounded-md mb-4" />

  
        <h3 class="text-lg font-semibold mb-2">{{ property.title }}</h3>
  
        <p class="text-sm text-gray-500 mb-2">{{ property.address }}</p>
  
        <div class="flex items-center justify-between mb-2">
          <p class="text-lg font-semibold text-gray-700">${{ property.price }}</p>
          <p class="text-sm font-medium text-gray-500">
            <ul class="list-disc list-inside">
                <li v-for="amenity in property.amenities" :key="amenity">{{ amenity }}</li>
            </ul>
        </p>

        </div>
        <div class="">
            <button
            class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-150"
            @click="selectProperty(property)"
            >
            View Details
            </button>
            <button
            class="bg-stone-500 hover:bg-stone-600 text-white mx-4 py-2 px-4 rounded-md transition-colors duration-150"
            @click="selectProperty(property)"
            >
            Reserve
            </button>
        </div>
        
      </div>
    </div>
  </template>
<script setup>

import {ref, computed, onMounted} from 'vue'
import { useRouter, useRoute } from 'vue-router';

const properties = ref([
      {
        id: 1,
        title: 'Lot #021',
        address: '1234 Elm Street',
        price: 17500,
        amenities: ['Gas station', 'Convenience store', 'Coffee shop'],
        image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        id: 2, 
        title:'Lot #191',
        address: '5678 Maple Avenue',
        price: 17500,
        amenities: ['Restaurant', 'Bank', 'Pharmacy', 'Car wash'],
        image: 'https://images.unsplash.com/photo-1604275291560-55f54cec0e4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        id: 3,
        title: 'Lot #264',
        address: '9101 Oak Road',
        price: 17500,
        amenities: ['Auto repair shop', 'Gym', 'Park'],
        image: 'https://plus.unsplash.com/premium_photo-1674512540096-46b2ca19ef96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2066&q=80'
      },
      {
        id: 4,
        title: 'Lot #797',
        address: '1212 Cedar Lane',
        price: 17500,
        amenities: ['Middle of no where'],
        image: 'https://images.unsplash.com/photo-1470224114660-3f6686c562eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
      },
      {
        id: 5,
        title: 'Lot #238',
        address: '1313 Pine Street',
        price: 17500,
        amenities: ['Hospital', 'Movie theater', 'Shopping mall'],
        image: 'https://images.unsplash.com/photo-1513646981453-ffb069114476?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80'
      },
      {
        id: 6,
        title: 'Lot #001',
        address: '1414 Cedar Street',
        price: 17500,
        amenities: ['Public transportation', 'ATM', 'Post office'],
        image: 'https://images.unsplash.com/photo-1585937169521-4428971aaab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80'
      }
    ])
</script>
<style scoped>

</style>