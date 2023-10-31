<template>
                <div class="xl:flex justify-center w-full px-6">
                   <div>
                    <div class="lg:block hidden">
                        <div class="lg:absolute flex justify-end mt-5 right-16 top-5">
                            <p>Already have an account? <a href="#" class="text-[#00008E] font-[700]">Sign In</a></p>
                        </div>
                    </div>
                    <div class="lg:hidden">
                        <div class="text-center py-10">
                            <p>Already have an account? <a href="#" class="text-[#00008E] font-[700]">Sign In</a></p>
                        </div>
                      </div>
                    <div class="2xl:w-[1000px] w-full lg:mt-[10%] mt-[5%] xl:p-36 p-16 bg-[#F3F3F3] rounded-lg">
                          <h1 class="2xl:text-[39px] text-[29px] font-[700] text-[#00008E] mt-5 text-center">Select your organization</h1>      
                          <div class="flex flex-col w-full space-y-5 mt-5">
                            <div class="flex justify-center w-full">
                                <form class="flex flex-col space-y-5 mt-5 w-[370px]">
                                    <div class="relative">
                                        <div class="w-full p-2 px-4 bg-[white] rounded-t-lg cursor-pointer text-left"
                                            @click="actiontoggleDropdown">
                                            <div class="flex justify-between">
                                                <div class="w-full">{{ selectedAction || 'No' }}</div>
                                                <div class="w-1/2 flex justify-end">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#898989" viewBox="0 0 24 24"
                                                        stroke="none"
                                                        class="w-6 h-6 text-[#3C5AA8] transform transition-transform duration-300"
                                                        :class="{ 'rotate-180': actionshowDropdown }">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="actionshowDropdown"
                                            class="absolute w-full border-t-2 pb-10 rounded-b-lg text-left bg-white border-[#E1E4EB] transition-transform duration-300 max-h-40 overflow-y-auto"
                                            :class="{ 'scale-y-100': actionshowDropdown, 'scale-y-0': !actionshowDropdown }">
                                            <option v-for="(action, index) in actions" :key="index"
                                                class="p-2 cursor-pointer hover:bg-gray-100" @click="selectAction(action)">
                                                {{ action }}
                                            </option>
                                        </div>
                                    </div>
                               <router-link to="/search-org">
                                  <div class="py-16 text-center flex">
                                      <button
                                            class="bg-[#0F0FB1] text-[white] mt-3 w-full text-center p-4 text-xl">
                                            Next
                                          </button>
                                          <button class="bg-[#00008E] mt-3 text-center w-[73px] p-4 text-xl flex justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="w-6 h-6">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>                
                                          </button>
                                     </div>
                               </router-link>
                            </form>
                            </div>
                          </div>
                    </div>
                   </div>
                </div>
</template>

<script setup>
import { ref } from 'vue'

const actions = ['Carrier or Broker', 'Shipper'];
const selectedAction = ref(null);
const actionshowDropdown = ref(false);

const actiontoggleDropdown = () => {
    actionshowDropdown.value = !actionshowDropdown.value;
};

const selectAction = (action) => {
    selectedAction.value = action;
    actionshowDropdown.value = false;
    console.log(`Selected Action: ${action}`)
};
</script>

<style scoped>
h1 {
    font-family: 'Avenir', sans-serif;
}
.btn-color {
    background: linear-gradient(to top, #3C59A8 0%, #1E2D54 100%);
}
</style>