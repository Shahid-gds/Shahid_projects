<template>
    <div class="my-10 space-y-5">
        <h1 class="text-4xl text-gray-600 font-bold text-center">Select Plan</h1>
        <div class="grid grid-cols-3 p-4 gap-5 ">
            <!-- PLAN 1 -->
            <div class="border rounded-md p-8   space-y-10  transition-all"
                :class="{ 'scale-110 bg-primary ': selectedPlan === 1 }" @click="setPlan(1)">
                <div class="space-y-3 border-b pb-8">
                    <h1 class="font-bold text-gray-500" :class="{ 'text-white': selectedPlan === 1 }">Basic</h1>
                    <h1 class="text-5xl  font-bold"
                        :class="{ 'text-white': selectedPlan === 1, 'text-gray-700': selectedPlan !== 1 }">Free <span
                            class="text-sm text-gray-500" :class="{ 'text-white': selectedPlan === 1 }">+ with
                            feedback</span></h1>
                    <p :class="{ 'text-white': selectedPlan === 1 }">The Perfect way to get started and get used to with our
                        application.</p>
                </div>

                <div class="space-y-4 text-sm text-gray-500 font-bold">
                    <p class="flex space-x-2"><img class="h-5 w-5 my-auto" src="@/assets/icons/account/checkmark.svg"
                            alt="CheckMark"> <span :class="{ 'text-white': selectedPlan === 1 }">All
                            features in
                            Standard</span> </p>
                    <p class="flex space-x-2"> <img class="h-5 w-5 my-auto" src="@/assets/icons/account/checkmark.svg"
                            alt="CheckMark"> <span :class="{ 'text-white': selectedPlan === 1 }">All
                            features in
                            Standard</span></p>
                    <p class="flex space-x-2"> <img class="h-5 w-5 my-auto" src="@/assets/icons/account/checkmark.svg"
                            alt="CheckMark"> <span :class="{ 'text-white': selectedPlan === 1 }">All
                            features in
                            Standard</span></p>
                </div>

                <div>
                    <button class="bg-primary  w-full p-4 rounded-md font-bold" @click="selectPlan"
                        :class="{ 'text-gray-500 bg-white': selectedPlan === 1, 'text-white': selectedPlan !== 1 }">Select
                        Plan</button>
                </div>
            </div>
            <!-- PLAN 2 -->
            <div class="border rounded-md p-8   space-y-10  transition-all"
                :class="{ 'scale-110 bg-primary': selectedPlan === 2 }" @click="setPlan(2)">
                <div class="space-y-3 border-b pb-8">
                    <h1 class="font-bold text-gray-500" :class="{ 'text-white': selectedPlan === 2 }">Professional</h1>
                    <h1 class="text-5xl  font-bold"
                        :class="{ 'text-white': selectedPlan === 2, 'text-gray-700': selectedPlan !== 2 }">$299 <span
                            class="text-sm text-gray-500" :class="{ 'text-white': selectedPlan === 2 }">/month</span></h1>
                    <p :class="{ 'text-white': selectedPlan === 2 }">The Perfect way to get started and get used to with our
                        application.</p>
                </div>

                <div class="space-y-4 text-sm text-gray-500 font-bold">
                    <p class="flex space-x-2"><img class="h-5 w-5 my-auto" src="@/assets/icons/account/checkmark.svg"
                            alt="CheckMark"> <span :class="{ 'text-white': selectedPlan === 2 }">All
                            features in
                            Standard</span> </p>
                    <p class="flex space-x-2"> <img class="h-5 w-5 my-auto" src="@/assets/icons/account/checkmark.svg"
                            alt="CheckMark"> <span :class="{ 'text-white': selectedPlan === 2 }">All
                            features in
                            Standard</span></p>
                    <p class="flex space-x-2"> <img class="h-5 w-5 my-auto" src="@/assets/icons/account/checkmark.svg"
                            alt="CheckMark"> <span :class="{ 'text-white': selectedPlan === 2 }">All
                            features in
                            Standard</span></p>
                </div>

                <div>
                    <button class="bg-primary  w-full p-4 rounded-md font-bold" @click="selectPlan"
                        :class="{ 'text-gray-500 bg-white': selectedPlan === 2, 'text-white': selectedPlan !== 2 }">Select
                        Plan</button>
                </div>
            </div>
            <!-- PLAN 3 -->
            <div class="border rounded-md p-8   space-y-10  transition-all"
                :class="{ 'scale-110 bg-primary': selectedPlan === 3 }" @click="setPlan(3)">
                <div class="space-y-3 border-b pb-8">
                    <h1 class="font-bold text-gray-500" :class="{ 'text-white': selectedPlan === 3 }">Startup</h1>
                    <h1 class="text-5xl  font-bold"
                        :class="{ 'text-white': selectedPlan === 3, 'text-gray-700': selectedPlan !== 3 }">Enterprise </h1>
                    <p :class="{ 'text-white': selectedPlan === 3 }">The Perfect way to get started and get used to with our
                        application.</p>
                </div>

                <div class="space-y-4 text-sm text-gray-500 font-bold">
                    <p class="flex space-x-2"><img class="h-5 w-5 my-auto" src="@/assets/icons/account/checkmark.svg"
                            alt="CheckMark"> <span :class="{ 'text-white': selectedPlan === 3 }">All
                            features in
                            Standard</span> </p>
                    <p class="flex space-x-2"> <img class="h-5 w-5 my-auto" src="@/assets/icons/account/checkmark.svg"
                            alt="CheckMark"> <span :class="{ 'text-white': selectedPlan === 3 }">All
                            features in
                            Standard</span></p>
                    <p class="flex space-x-2"> <img class="h-5 w-5 my-auto" src="@/assets/icons/account/checkmark.svg"
                            alt="CheckMark"> <span :class="{ 'text-white': selectedPlan === 3 }">All
                            features in
                            Standard</span></p>
                </div>

                <div>
                    <button class="bg-primary  w-full p-4 rounded-md font-bold" @click="selectPlan"
                        :class="{ 'text-gray-500 bg-white': selectedPlan === 3, 'text-white': selectedPlan !== 3 }">Select
                        Plan</button>
                </div>
            </div>

        </div>
    </div>
</template>


<script setup>
import { ref, defineEmits } from 'vue'

const selectedPlan = ref(2)

const emit = defineEmits(['selectPlan'])

const setPlan = (plan) => {
    selectedPlan.value = plan;
}


const selectPlan = () => {
    emit('selectPlan');
}
</script>