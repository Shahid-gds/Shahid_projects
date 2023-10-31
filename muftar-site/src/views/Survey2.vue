<template>
    <div id="app" class="flex justify-center items-center h-screen bg-gray-100">
      <div>
        <transition name="slide" mode="out-in">
          <div v-if="currentQuestionIndex === -1" key="intro">
            <h1 class="text-2xl font-bold mb-4">Welcome to Muftar Survey!</h1>
            <p class="mb-4">
              As we are building our software, we want our app to help the trucking industry.
            </p>
            <p class="text-gray-500 italic mb-4">Estimated time: 2-5 minutes</p>
            <p class="mb-6">If you have any questions, please contact support!</p>
            <button @click="startSurvey" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              START
            </button>
          </div>
          <question-component v-else :key="currentQuestionIndex" :question="questions[currentQuestionIndex]" @option-selected="selectOption" />
        </transition>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from "vue";
  import QuestionComponent from "./survey/Question.vue";
  
  const questions = reactive([
    {
      text: "Question 1",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      text: "Question 2",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      text: "Question 3",
      options: ["Option 1", "Option 2", "Option 3"],
    },
  ]);
  
  const currentQuestionIndex = ref(-1);
  
  function startSurvey() {
    currentQuestionIndex.value = 0;
  }
  
  function selectOption(option) {
    if (currentQuestionIndex.value < questions.length - 1) {
      currentQuestionIndex.value += 1;
    } else {
      alert("Survey completed");
    }
  }
</script>
<style scoped>

.slide-enter-active,
.slide-leave-active {
transition: transform 0.5s;
}
.slide-enter-from,
.slide-leave-to {
transform: translateX(100%);
}
.slide-enter-to,
.slide-leave-from {
transform: translateX(0);
}
</style>
