<template>
    <div class="main-container container mx-auto px-20 pb-40 mt-56">
   <div class="flex justify-center">
    <div>
       <div class="flex justify-center">
       <div class="space-y-8 mt-10 text-[#333333] text-lg">
        <div>
            <p>Are you seeking an organization or are you already an organization Admin ?</p>
        </div>
       <div class="flex space-x-3 w-full px-14">
        <div class="border-2 w-full text-center p-2 px-6 rounded-lg border-[#3A54B4]">
            <button class=" text-[#3A54B4]">Search Organization</button>
        </div>
        <div class="border-2 w-full text-center p-2 px-6 rounded-lg border-[#333333]">
            <button class=" text-[#333333]">Create Organization</button>
        </div>
       </div>
       </div>
       </div>
    </div>
   </div>
    </div>
   </template>
   <script setup>
  
   </script>
   <style scoped>
   .main-container {
       background-image: url('@/assets/images/mediapageBg.svg');
       height: auto;
       background-size: cover;
       background-position: center center;
       background-repeat: no-repeat;
   }
   </style>