<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div class="flex justify-center">
          <i class="fas fa-check-circle text-6xl text-green-500"></i>
        </div>
        <h1 class="text-2xl font-bold text-center mt-4">Payment Successful</h1>
        <h3 class="text-xl font-bold text-center mt-4 text-gray-700">Confirmation Number: #{{ conf_code }}</h3>
        <p class="text-center mt-4">
          Thank you for subscribing to Muftar! You're now a part of our trucking SaaS community.
        </p>
        <div class="mt-8">
          <h2 class="text-xl font-semibold">Getting Started</h2>
          <p class="mt-2">
            To help you get started, we recommend going through our onboarding tutorials. These tutorials will guide you on how to effectively use Muftar and get the most out of its features.
          </p>
          <div class="mt-6 flex justify-center">
            <button class="bg-blue-600 text-white px-4 py-2 rounded-md" @click="goToTutorials()">Go to Tutorials</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup >
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const conf_code = computed(() => {
  return route.params.conf_code; // Replace 'yourParamName' with the actual parameter name from your route
});

  const goToTutorials = () => {
        // Replace with the actual URL or route to your tutorials page
        window.open(`https://portal.muftar.com/onboarding?reg=${conf_code.value}`, '_self');
      };
  </script>
  