<template>
  <div class="flex flex-col justify-center items-center space-y-6">
    <h2 class="text-xl ">{{ question.question }}</h2>
    <ul class="w-full flex flex-col justify-center items-center space-y-4 py-2">
      <li v-for="(option, index) in options" :key="index"
        class="w-full md:w-3/4 lg:w-5/12 px-2 py-2 border-2 border-white flex cursor-pointer hover:bg-600 space-x-2 rounded-md" :class="{ 'bg-600  font-bold': opt === option, 'bg-800': opt !== option }" @click="selectOption(option)">
        <span class="px-2 py-1 border rounded-md bg-black">{{ index + 1 }}</span>
        <p class="my-auto text-sm">
          {{ option }}
        </p>
      </li>
    </ul>
  </div>
</template>
  
<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  question: Object,
  options: Array,
});

const opt=ref(null)

const emit = defineEmits(['selectOption']);

const selectOption = (option) => {
  opt.value=option;
  emit('selectOption', option);
};
</script>
  