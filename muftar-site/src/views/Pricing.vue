<template>
    <div class=" py-12 px-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Pricing
          </h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Choose your plan
          </p>
        </div>
        <div class="mt-10">
          <div class="flex flex-wrap">
            <div
              v-for="(plan, index) in plans"
              :key="index"
              class="w-full sm:w-1/2 lg:w-1/3 p-4"
            >
              <div
                class="border rounded-lg overflow-hidden shadow-lg bg-white"
              >
                <div
                  class="bg-theme text-white font-bold text-xl uppercase p-6"
                >
                  {{ plan.title }}
                </div>
                <div class="p-6">
                  <h3 class="font-bold text-4xl my-4">
                    ${{ plan.price }}<span class="text-gray-500 text-base">/mo</span>
                  </h3>
                  <ul class="text-gray-600">
                    <li v-for="(feature, index) in plan.features" :key="index" class="my-2">
                      {{ feature }}
                    </li>
                  </ul>
                  <div class="w-full mt-5">
                    <a href="mailto:marketing@muftar.com" v-if="plan.tag == 'enterprise'" 
                      class="text-center bg-theme hover:bg-indigo-700 text-white w-1/3 mx-auto cursor-pointer px-4 mt-6 py-2 rounded font-bold" >
                      Contact Us
                    </a>
                    <router-link :to="{'name': 'PricingCalculator'}" v-else
                      class="text-center bg-theme hover:bg-indigo-700 text-white w-1/3 mx-auto cursor-pointer px-4 mt-6 py-2 rounded font-bold" >
                      Get Started
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const plans = ref([
        {
          title: 'Basic',
          tag: 'basic',
          price: 29,
          features: [
            'Feature 1',
            'Feature 2',
            'Feature 3',
          ],
        },
        {
          title: 'Pro',
          tag: 'pro',
          price: 59,
          features: [
            'Feature 1',
            'Feature 2',
            'Feature 3',
            'Feature 4',
            'Feature 5',
          ],
        },
        {
          title: 'Enterprise',
          tag: 'enterprise',
          price: 99,
          features: [
            'Feature 1',
            'Feature 2',
            'Feature 3',
            'Feature 4',
            'Feature 5',
            'Feature 6',
            'Priority support',
          ],
        },
      ]);
  
      return { plans };
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  body {
    font-family: 'Inter', sans-serif;
  }
  .bg-theme{ background-color: #274694;  }
</style>
  