<template>
    <!-- <div class="text-2xl mt-6 px-10">
        <h1>Clients: {x}</h1>
    </div> -->
    <div class="container mx-auto">
        <div class="container mx-auto p-20 rounded-x rounded-lg w-3/5 mt-36 border-2">        
                <div class="text-lg text-center">
                    <p>This service is the latest edition to Muftar Digital's technology to rapid conduct and and streamline transportation. Go to muftar.com for more information.</p>
                </div>
               <div class="flex flex-col justify-center items-center space-y-3 mt-8">
               <router-link to="/create-load" class="bg-[#3C5AA8] p-4 text-2xl text-white w-1/2 text-center rounded-lg">
                <div class="">
                    <button class="">Create Load</button>
                </div>
               </router-link>
               <router-link to="/load-board" class="bg-[#3C5AA8] p-4 text-2xl text-white w-1/2 text-center rounded-lg">
                <div class="">
                    <button class="">Load Board</button>
                </div>
               </router-link>
               </div>
               <div class="text-center mt-8">
                <div class="text-[#3C5AA8]">
                    <a href="#">Learn More</a>
                </div>
                <p>or</p>
                <div class="text-[#3C5AA8]">
                    <a href="#">View Clients</a>
                </div>
               </div>
          </div>
    </div>
</template>

<script setup>

</script>