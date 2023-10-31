<template>
    <div class="main-container container mx-auto px-20 pb-40 mt-64">
       <div class="text-center px-40">
        <div class="#333333">
            <p>Seach for the Organization you're looking for.</p>
        </div>
        <div class="mt-5 relative">
            <div>
                <input type="text" class="shadow-lg outline-none p-4 w-full rounded-lg px-10" placeholder="Search by Name, MC Number, Or USDOT">
            </div>
            <div class="absolute right-5 top-2 mt-3 mr-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3A54B4" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>                  
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