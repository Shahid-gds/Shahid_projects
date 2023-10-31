<template>
    <div class="container mx-auto mt-56 pb-20">
        <div class="text-center">
            <h1 class="text-5xl text-[#3C58A8]">Choose your Plan</h1>
            <p class="font-[400] mt-2 text-xl text-[#666668]">14 days unlimited free trial. No contract or credit card
                required</p>
        </div>
       <div class=" mt-10">
        <div class="">
          <div class="flex justify-center">
           <div class="border-2  rounded-full">
            <button class="p-4 rounded-full"
            :class="{ 'active bg-[#3C58A8] text-[white]': isBroker }"
            @click="togglePlan(true)"
          >
            Carrier
          </button>
          <button class="p-4 rounded-full"
            :class="{ 'active bg-[#3C58A8] text-[white]': !isBroker }"
            @click="togglePlan(false)"
          >
            Broker
          </button>
           </div>
          </div>
            <div class="mt-16 w-full">
                <div v-if="isBroker" class="md:flex xl:px-56 md:space-x-20 justify-center">
                    <!-- Carrier plan content -->
                  <div class="flex justify-center">
                    <div class="bg-[#FFFFFF] drop-shadow-xl filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)) rounded-3xl w-96 p-10 mt-10" v-for="plan in plans">
                      <div class="flex space-x-3 border-b-2 py-6">
                        <!-- <div class="space-x-1 flex ml-12">
                          <span class="text-[#3C58A8] text-3xl font-[400]">{{ plan.pricing[carrier].sign }} </span>
                          <span class="text-5xl font-[400]">{{ plan.pricing[carrier].price }} </span>
                        </div> -->
                        <div class="flex flex-col w-full">
                          <span class="text-2xl text-center uppercase text-[#3C58A8]">{{ plan.name }}</span>
                          <!-- <span class="font-[400] text-sm">{{ plan.pricing[carrier].label }} </span> -->
                        </div>
                      </div>
                      <ul class="mt-8 space-y-4">
                        <li v-for="list in plan.listing[carrier]" :key="list">
                          <span class="p-6 font-[400]">{{ list }}</span>
                        </li>
                      </ul>
                    
                        <div class="flex justify-center mt-16">
                          <button class="bg-[#3C58A8]  text-[white] p-3 rounded-full px-10">Get Started</button>
                        </div>
                     
                    </div>
                  </div>
                    <div class="flex justify-center">
                      <div class="bg-[#FFFFFF] drop-shadow-xl filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)) rounded-3xl w-96 p-10 mt-10" v-for="plan in proplans">
                        <div class="flex space-x-3 border-b-2 py-6">
                          <div class="space-x-1 flex ml-12">
                            <span class="text-[#3C58A8] text-3xl font-[400]">{{ plan.pricing[carrier].sign }} </span>
                            <span class="text-5xl font-[400]">{{ plan.pricing[carrier].price }} </span>
                          </div>
                          <div class="flex flex-col">
                            <span class="text-2xl uppercase text-[#3C58A8]">{{ plan.name }}</span>
                            <span class="font-[400] text-sm">{{ plan.pricing[carrier].label }} </span>
                          </div>
                        </div>
                        <ul class="mt-8 space-y-4">
                          <li v-for="list in plan.listing[carrier]" :key="list">
                            <span class="p-6 font-[400]">{{ list }}</span>
                          </li>
                        </ul>
                       
                         <div class="flex justify-center mt-16">
                            <button class="bg-[#3C58A8] text-[white] p-3 rounded-full px-10">Get Started</button>
                         </div>
                     
                      </div>
                    </div>
                    
                  </div>
                  <div v-else class="">
                    <div class="flex justify-center pb-2">
                      <input
                        type="range"
                        v-model="selectedValue"
                        :min="minPrice"
                        :max="maxPrice"
                        :step="priceStep"
                        class="xl:w-[52%] w-[80%] cursor-pointer"
                        list="loadRangesList"
                      />
                    </div>
                    
                    <div class=" flex justify-center ">
                      <div class="text-xl bg-[#3C58A8] p-2 px-6 rounded-xl text-white">
                        {{ getFormattedSelectedValue }}
                      </div>
                    </div>
                    <!-- <datalist id="loadRangesList" >
                      <option value="0">No Load</option>
                      <option value="150">Light Load</option>
                      <option value="500">Medium Load</option>
                      <option value="1500">Heavy Load</option>
                      <option value="4000">Heavy Load</option>
                    </datalist> -->
                    <!-- Broker plan content -->
                    <div class="md:flex md:space-x-20 justify-center">
                    <div class="flex justify-center">
                      <div
                      class="bg-[#FFFFFF] drop-shadow-xl filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)) rounded-3xl w-96 h-1/2 p-10 mt-10"
                      v-for="plan in isBroker ? brokerPlans : brokerPlans"
                      :key="plan.name"
                    >
                      <div class="flex space-x-3 border-b-2 py-6">
                        <div class="space-x-1 flex">
                          <span class="text-[#3C58A8] text-3xl font-[400]">{{ plan.pricing[broker].sign }}</span>
                          <span class="text-5xl font-[400]">{{ toStringLocale(calculatePrice(plan.pricing[broker].price)) }}</span>
                        </div>
                        <div class="flex flex-col">
                          <span class="text-2xl uppercase text-[#3C58A8]">{{ plan.name }}</span>
                          <span class="font-[400] text-sm">{{ plan.pricing[broker].label }}</span>
                        </div>
                      </div>
                      <ul class="mt-8 space-y-4">
                        <li v-for="list in plan.listing[broker]" :key="list">
                          <span class="p-6 font-[400]">{{ list }}</span>
                        </li>
                      </ul>
                      <div class="flex justify-center mt-16">
                        <button class="bg-[#3C58A8] text-[white] p-3 rounded-full px-10">Get Started</button>
                      </div>
                    </div>
                    </div>
                   <div class="flex justify-center">
                    <div
                    class="bg-[#FFFFFF] drop-shadow-xl filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08)) rounded-3xl w-96 h-1/2 p-10 mt-10"
                    v-for="plan in isBroker ? brokerPlans : brokerenter"
                    :key="plan.name"
                  >
                    <div class="flex space-x-3 border-b-2 py-6">
                      <div class="space-x-1 flex">
                        <span class="text-[#3C58A8] text-3xl font-[400]">{{ plan.pricing[broker].sign }}</span>
                        <span class="text-5xl font-[400]">{{ toStringLocale(calculatePrice(plan.pricing[broker].price)) }}</span>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-2xl uppercase text-[#3C58A8]">{{ plan.name }}</span>
                        <span class="font-[400] text-sm">{{ plan.pricing[broker].label }}</span>
                      </div>
                    </div>
                    <ul class="mt-8 space-y-4">
                      <li v-for="list in plan.listing[broker]" :key="list">
                        <span class="p-6 font-[400]">{{ list }}</span>
                      </li>
                    </ul>
                    <div class="flex justify-center mt-16">
                      <button class="bg-[#3C58A8] text-[white] p-3 rounded-full px-10">Get Started</button>
                    </div>
                  </div>
                   </div>
                    </div>
                  </div>
            </div>
            
          </div>
       </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const isBroker = ref(true);

const togglePlan = (isBrokerValue) => {
  isBroker.value = isBrokerValue;
};

const carrier = ref('carrier');

const plans = [
  {
    name: 'Free',
    pricing: {
      carrier: { sign: '$', price: '54', label: '/ MO' },
    },
    listing: {
        carrier: [
        '10,000 Visitors',
        'Create unlimeted Wdiges',
        'All Widges Types',
        '3rd Wdiges Intigration',
        'Advanced Targeting',
        'Widges A/B Testing'
      ],
    }
  },

];

const proplans = [
  {
    name: 'Premium',
    pricing: {
      carrier: { sign: '$', price: '35', label: '/ MO' },
    },
    listing: {
      carrier: [
        '20,000 Visitors',
        'Create unlimeted Wdiges',
        'All Widges Types',
        '3rd Wdiges Intigration',
        'Advanced Targeting',
        'Widges A/B Testing'
      ],
    }
  },

];

const broker = ref('broker');
const brokerPlans = [
  {
    name: 'Basic',
    pricing: {
      broker: { sign: '$', price: '', label: '/ MO' },
    },
    listing: {
        broker: [
        '10,000 Visitors',
        'Create unlimeted Wdiges',
        'All Widges Types',
        '3rd Wdiges Intigration',
        'Advanced Targeting',
        'Widges A/B Testing'
      ],
    }
  },

];



const brokerenter = [
  {
    name: 'Premium',
    pricing: {
      broker: { sign: '$', price: '', label: '/ MO' },
    },
    listing: {
        broker: [
        '10,000 Visitors',
        'Create unlimeted Wdiges',
        'All Widges Types',
        '3rd Wdiges Intigration',
        'Advanced Targeting',
        'Widges A/B Testing'
      ],
    }
  },

];



const selectedValue = ref(0);

const loadRanges = [
  { min: 0, max: 0,  price: 0 },
  { min: 1, max: 150,  price: 3.5 },
  { min: 150, max: 500, price: 3 },
  { min: 500, max: 1500, price: 2.5 },
  { min: 1500, max: 4000, price: 2 },
  { min: 4000, max: 4000, price: 1.5 },
];

const minPrice = 0;
const maxPrice = 4000;

function toStringLocale(price) {
  if (typeof Intl === 'object' && typeof Intl.NumberFormat === 'function') {
    return new Intl.NumberFormat().format(price);
  } else {
    return price.toLocaleString();
  }
}

function calculatePrice(basePrice) {
  const selectedLoad = selectedValue.value;
  let pricePerLoad = 0;

  for (const range of loadRanges) {
    if (selectedLoad >= range.min && selectedLoad <= range.max) {
      pricePerLoad = range.price;
      break;
    }
  }

  const totalPrice = pricePerLoad * selectedLoad;  // Multiply by price per load
  return totalPrice;
}
const getFormattedSelectedValue = computed(() => {
  const selectedLoad = selectedValue.value;
  const selectedRange = loadRanges.find(range => selectedLoad >= range.min && selectedLoad <= range.max);

  if (selectedRange) {
    const formattedValue = toStringLocale(selectedLoad);
    const plusSign = selectedRange.max === maxPrice ? (selectedLoad < maxPrice ? '' : '+') : '';
    return `${plusSign}${formattedValue} Loads`;
  } else {
    return '';
  }
});
</script>
<style scoped>
  ul {
    list-style: none;
  }
  
  ul li:before {
    content: '✓';
    color: #3C58A8;
  }
  
</style>