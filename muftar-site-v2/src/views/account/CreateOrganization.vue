<template>
 <div class="container mx-auto px-20 pb-20 mt-56">
    <div v-if="showFristSection" class="absolute right-16 top-[65%]">
        <button @click="toggleSections" class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#444444" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
        </button>
    </div>
        <section v-if="showFristSection" class="media-section">
            <div class="container w-full mx-auto">
                
                <div class="w-full">
                    <div class="container mx-auto mt-20">
                        <div class="w-1/2 h-1/2 -left-80 -top-80 absolute">
                            <img src="@/assets/images/blueblurTop.svg" alt="">
                        </div>
                    </div>
                    <div class="text-[2rem] font-[900] uppercase text-[#3D5AA9] text-center">
                        <h1>Create Orginization Account</h1>
                    </div>
                    <div class="text-center xl:px-64 sm:px-20 text-[#444444]">
                        <p>Fill out the form below and we will
                            reach back out to you as soon as possible:</p>
                    </div>
                    <div class="mt-10 space-y-12">
                        <div class="lg:flex lg:space-x-14">
                            <div class="w-full space-y-3 inputs-section z-30">
                                <div>
                                    <label class="font-[900] text-[#444444] text-lg" for="">Organization Name</label>
                                </div>
                                <div class="w-full">
                                    <input type="text" class="w-full bg-white border text-left border-gray-300 rounded-md p-4 px-10 text-gray-700 focus:outline-none" placeholder="ABC">
                                </div>
                            </div>
                            <div class="w-full space-y-3 inputs-section">
                                <div>
                                    <label class="font-[900] text-[#444444] text-lg" for="">Organization Email</label>
                                </div>
                                <div class="w-full">
                                    <input type="email" class="w-full bg-white border text-left border-gray-300 rounded-md p-4 px-10 text-gray-700 focus:outline-none" placeholder="sample@example.com">
                                </div>
                            </div>
                        </div> 
                        <div class="lg:flex lg:space-x-14 ">
                            <div class="w-full space-y-3 inputs-section z-30">
                                <div>
                                    <label class="font-[900] text-[#444444] text-lg" for="">Organization MC Number/Dot</label>
                                </div>
                                <div class="w-full">
                                    <input type="text" class="w-full bg-white border text-left border-gray-300 rounded-md p-4 px-10 text-gray-700 focus:outline-none" placeholder="+111 111 0000">
                                </div>
                            </div>
                            <div class="w-full space-y-3">
                                <div>
                                  <label class="font-semibold text-[#444444] text-lg" for="organization-type">Organization Type</label>
                                </div>
                                <div class="relative w-full" @click="closeDropdownClickOutside">
                               <div class="flex items-center w-full">
                                <div class="w-full">
                                    <button
                                    @click="toggleDropdown"
                                    class="w-full bg-white border text-left border-gray-300 rounded-md p-4 px-10 text-gray-700 focus:outline-none">
                                    {{ selectedOrganization || 'Select Your Organization' }}
                                  </button>
                                 </div>
                                  <div class="absolute right-6 " @click="toggleDropdown">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 inline ml-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    :class="{ 'transform rotate-180': isOpen }">
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M19 9l-7 7-7-7"/>
                                  </svg>
                                  </div>
                               </div>
                                  <ul
                                    v-if="isOpen" class="absolute z-50 w-full bg-white border border-gray-300 mt-1 py-2 rounded-md shadow-lg">
                                    <li v-for="organization in organizations" :key="organization.id">
                                      <a @click="selectOrganization(organization)" class="block px-4 py-2 cursor-pointer">
                                        {{ organization.name }}
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                        </div>
                        <div class="organization">
                            <div class="flex w-full text-center items-center">
                             <div class="w-full border-b-2"></div>
                             <div class="w-[60%]">
                                 <label class="font-[900] text-[#444444] text-lg uppercase" for="">Organization Address</label>
                             </div>
                             <div class="w-full border-b-2"></div>
                            </div>
                           <div class="space-y-5 mt-5">
                             <div class="lg:flex lg:space-x-14">
                                 <div class="lg:flex lg:space-x-14 w-full">
                                     <div class="w-full space-y-3 inputs-section z-30">
                                         <div>
                                             <label class="font-[900] text-[#444444] text-lg" for="">County</label>
                                         </div>
                                         <div class="w-full">
                                             <input type="text" class="w-full bg-white border text-left border-gray-300 rounded-md p-4 px-10 text-gray-700 focus:outline-none" placeholder="USA">
                                         </div>
                                     </div>
                                     <div class="w-full space-y-3 inputs-section z-30">
                                         <div>
                                             <label class="font-[900] text-[#444444] text-lg" for="">State</label>
                                         </div>
                                         <div class="w-full">
                                             <input type="text" class="w-full bg-white border text-left border-gray-300 rounded-md p-4 px-10 text-gray-700 focus:outline-none" placeholder="Washigton">
                                         </div>
                                     </div>
                                 </div>                          
                             </div>
                             <div class="w-full space-y-3 inputs-section z-30">
                                 <div>
                                     <label class="font-[900] text-[#444444] text-lg" for="">Street Address</label>
                                 </div>
                                 <div class="w-full">
                                     <input type="text" class="w-full bg-white border text-left border-gray-300 rounded-md p-4 px-10 text-gray-700 focus:outline-none" placeholder="Washington, D.C. 20559-6000">
                                 </div>
                             </div>
                             <div class="lg:flex lg:space-x-14">
                                 <div class="lg:flex lg:space-x-14 w-full">
                                     <div class="w-full space-y-3 inputs-section z-30">
                                         <div>
                                             <label class="font-[900] text-[#444444] text-lg" for="">City</label>
                                         </div>
                                         <div class="w-full">
                                             <input type="text" class="w-full bg-white border text-left border-gray-300 rounded-md p-4 px-10 text-gray-700 focus:outline-none" placeholder="D.C">
                                         </div>
                                     </div>
                                     <div class="w-full space-y-3 inputs-section z-30">
                                         <div>
                                             <label class="font-[900] text-[#444444] text-lg" for="">Zip</label>
                                         </div>
                                         <div class="w-full">
                                             <input type="text" class="w-full bg-white border text-left border-gray-300 rounded-md p-4 px-10 text-gray-700 focus:outline-none" placeholder="98001 - 99403">
                                         </div>
                                     </div>
                                 </div>                          
                             </div>
                           </div>
                         </div>  
                    </div>
                    <div class="flex justify-center mt-8">
                        <div></div>
                        <div class="bg-[#3A54B4] p-4 rounded-xl text-center text-[white] xl:w-3/12" 
                        @click.prevent="submitContactForm()">
                            <button class="uppercase text-lg font-[900] justify-center">Create an Account</button>
                        </div>
                    </div>
                    <div class="text-center xl:px-64 px-20 text-[red] text-xl">
                        <p>{{ responseMessage }}</p>
                    </div>
                </div>
            </div>  
        </section>
    <div v-if="!showFristSection" class="absolute left-16 top-[56%] z-30">
        <button @click="toggleSections" class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#444444" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>                              
        </button>
    </div>
    <section v-if="!showFristSection" class="media-section">
        <div class="container w-full mx-auto p-6 pb-16 2xl:px-56 h-[50rem]">
            <div class="w-full items-center lg:space-x-20">
                <div class="container mx-auto mt-20 ">
                    <div class="w-1/2 h-1/2 -left-96 -top-80 absolute">
                        <img src="@/assets/images/blueblurTop.svg" alt="">
                    </div>
                </div>
                <div class="text-[2rem] font-[900] uppercase text-[#3D5AA9] text-center">
                    <h1>Invite</h1>
                </div>
                <div class="text-center xl:px-40 sm:px-20 text-[#444444]">
                    <p>Enter your email below and we will
                        reach back out to you as soon as possible:</p>
                </div>
                <div class="mt-10 space-y-12">
                        <div class="w-full space-y-3 inputs-section z-30">
                            <div>
                                <label class="font-[900] text-[#444444] text-lg" for="">Your Email Address</label>
                            </div>
                            <div class="w-full">
                                <input type="email" class="w-full bg-white border text-left border-gray-300 rounded-md p-4 px-10 text-gray-700 focus:outline-none" placeholder="sample@example.com">
                            </div>
                        </div>
                </div>
                <div class="flex justify-center mt-8">
                    <div></div>
                    <div class="bg-[#3A54B4] p-4 rounded-xl text-center text-[white] xl:w-3/12" 
                    @click.prevent="submitContactForm()">
                        <button class="uppercase text-lg font-[900] justify-center">Invite</button>
                    </div>
                </div>
                <div class="text-center xl:px-64 px-20 text-[red] text-xl">
                    <p>{{ responseMessage }}</p>
                </div>
            </div>
        </div>  
    </section>
 </div>
</template>
<script setup>
import { ref,  reactive, onMounted, onUnmounted } from 'vue';
import axios from 'axios';


const isOpen = ref(false);
const selectedOrganization = ref(null);

const organizations = reactive([
  { id: 1, name: 'Organization 1' },
  { id: 2, name: 'Organization 2' },
  { id: 3, name: 'Organization 3' },
]);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOrganization = (organization) => {
  selectedOrganization.value = organization.name;
  isOpen.value = false;
};
const closeDropdownClickOutside = (event) => {
    if(isOpen.value) {
        const dropdownElement = document.querySelector('.relative');
        if(dropdownElement && !dropdownElement.contains(event.target)){
            isOpen.value = false;
        }
    }
}
onMounted(() => {
    window.addEventListener('click', closeDropdownClickOutside)
});
onUnmounted(()=>{
    window.removeEventListener('click', closeDropdownClickOutside);
});
const showFristSection = ref(true)

const toggleSections = () => {
    showFristSection.value = !showFristSection.value;
}
</script>
<style scoped>
.media-section {
    background-image: url('@/assets/images/mediapageBg.svg');
    height: auto;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
.no-scroll {
    overflow: hidden;
  }
  /*.section-fade-enter-active, .section-fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  .section-fade-enter, .section-fade-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }*/
@media (max-width: 1024px) {
    .inputs-section{
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .contact-section{
            margin-top: 5rem;
        }
  }
</style>