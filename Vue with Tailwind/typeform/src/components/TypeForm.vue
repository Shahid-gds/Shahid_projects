<template>
  
        <div class="container mx-auto mt-96" v-if="!nextDev">
            <div class="lg:ml-96 p-16">
                <h1 class="container mx-auto uppercase font-bold md:text-7xl text-3xl">Summer Club</h1>
                <p class="text-xl w-1/2 text-center">Meet the newest member of our Product family and let us to know your thoughts</p>
                <button class="bg-black text-white p-3 px-7 mt-20 rounded text-2xl md:ml-40" @click="nextDev=true">Ok, Let's Go</button>
            </div>
        </div>
        <div class="container mx-auto mt-72" v-if="nextDev">
            <div class="p-16 lg:ml-24">
                <p class="text-xl w-1/2" v-if="!currentPara">{{ quetions[currentQuestion].Para }}</p>
                <button class="bg-black text-white p-2 px-6 mt-20 rounded text-xl" @click="nextQuestion">{{quetions[currentQuestion].button}}</button>
            </div>
        </div>
        <div class="container mx-auto mt-72" v-if="nextDev">
            <div class="p-16 lg:ml-24">
                <p class="text-xl w-1/2 border-2 border-[black]" v-if="currentPara">{{ quetions[currentQuestion].Para }}</p>
                <button class="bg-black text-white p-2 px-6 mt-20 rounded text-xl" @click="nextQuestion">{{quetions[currentQuestion].button}}</button>
            </div>
        </div>

     
    
</template>

<script setup>

import { ref } from 'vue'
const quetions = ref([
    { Para: `❝ Thanks for taking time out to tell us more about you and your beachwear preferences`, button:`Sure Thing` },
    { Para: `1🠖 Let's start by finding out how beachwear aware you are...`, button:`Let's do it` },
    { Para: `1`, button:`Let's do it` },
])


const currentQuestion = ref(0)


const nextQuestion = () => {

    currentQuestion.value = currentQuestion.value + 1;

}
const nextDev = ref(false)
const currentPara = ref(false)
</script>