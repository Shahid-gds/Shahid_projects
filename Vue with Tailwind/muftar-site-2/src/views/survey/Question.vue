<template>
    <div>

      <h2 class="text-xl font-bold mb-6">
        {{ question.text }}
      </h2>
      <div class="grid gap-4">
        
            <button
            v-for="(option, index) in question.options"
            :key="index"
            @click="$emit('option-selected', option)"
            class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
            {{ option }}
            </button>
      </div>

    </div>
  </template>
  
  <script>
  export default {
    props: {
      question: {
        type: Object,
        required: true,
      },
    },
  };
  </script>