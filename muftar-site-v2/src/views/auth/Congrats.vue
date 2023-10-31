<template> 
    <div class="">
        <div class="container mx-auto px-6">
          <div class="container mx-auto p-6 rounded-xl xl:w-[40%] lg:w-[50%] bg-svg-background">
            <div class="bg-[white] p-6 rounded-2xl border-2">
              <div class="flex justify-center w-full">
                <div class="space-y-2">
                  <div class="flex justify-center -mt-16">
                    <img class="" src="@/assets/icons/Congrates.svg" alt="">
                  </div>
                  <div>
                    <h1 class="sm:text-5xl text-2xl text-center font-semibold text-[#3D5AA9]">Congratulations!</h1>
                  </div>
                  <div class="sm:text-xl text-lg text-center">thank you for pre-registering for Muftar. Our app will enter beta on August 28th?</div>
                </div>
              </div>
            
              <div class="flex justify-center mt-10">
                <router-link to="/login" class="bg-[#3D5AA9] p-3 px-6 rounded-lg text-white">
                  Continue
                </router-link>
              </div>
            </div>
            </div>
        </div>  
      </div>  
</template>
