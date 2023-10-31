<template>
    <div class="p-6 w-full">
        <div class=" bg-[#F6F6F6] w-full h-[100%] p-6 rounded-lg px-16">
            <div class="text-[24px] font-bold">
                <h1>My Account</h1>
            </div>
            <div class="mt-6 py-6 bg-white px-8 space-y-4">
                <div class="flex items-center space-x-2 justify-between border-2 p-4 rounded-lg">
                   <div class="flex space-x-2">
                    <div class="rounded-full relative">
                        <div>
                            <img class="rounded-full w-24" src="@/assets/images/profile.svg" alt="">
                        </div>
                        <div class="absolute top-16 right-0 bg-[#3A54B4] p-1 rounded-full text-white" v-if="Editing">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                              </svg>                              
                        </div>                                                          
                    </div>
                    <div>
                        <h1 class="text-[24px] font-[600]">John Doe</h1>
                        <p class="text-[#A6AEBC]">Team Manager</p>
                        <p class="text-[#A6AEBC]">Lead, USA</p>
                    </div>
                   </div>
                   <div class="flex items-center space-x-2 p-2 border-2 rounded-full cursor-pointer" @click="toggleEdit" v-if="!Editing">
                    <div>Edit</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>                          
                    </div>
                   </div>
                   <div v-else class="flex items-center space-x-2 p-2 bg-[#3A54B4] text-white rounded-full cursor-pointer">
                    <div>Save</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                          </svg>
                                                    
                    </div>
                   </div>
                </div>
                <div class="border-2 p-4 rounded-lg">
                    <div class="flex items-center space-x-2 justify-between">
                        <div>
                            <h1 class="font-[600] text-xl">Personal Information</h1>
                           </div>
                           <div @click="toggleEditing" class="flex items-center space-x-2 p-2 border-2 rounded-full cursor-pointer" v-if="!isEditing">
                            <div>Edit</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                  </svg>                          
                            </div>
                           </div>
                           <div v-else class="flex items-center space-x-2 p-2 bg-[#3A54B4] text-white rounded-full cursor-pointer">
                            <div>Save</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                  </svg>
                                                            
                            </div>
                           </div>
                    </div>
                    <div class="space-y-4">
                        <div class="flex">
                            <div class="w-1/2">
                                <div>
                                    <label for="" class="text-[#A6AEBC]">First Name</label>
                                </div>
                                <div class="">
                                    <input type="text" class="py-2 w-[50%] font-bold  rounded-lg outline-none" :class="{' border-2 px-4': isEditing}" v-model="userData.fname" :readonly="!isEditing">
                                </div>
                            </div>
                            <div class="w-full">
                                <div>
                                    <label for="" class="text-[#A6AEBC]">Last Name</label>
                                </div>
                                <div class="">
                                    <input type="text" class=" py-2 w-[30%] font-bold  rounded-lg outline-none" :class="{' border-2 px-4': isEditing}" v-model="userData.lname" :readonly="!isEditing">
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="w-1/2">
                                <div>
                                    <label for="" class="text-[#A6AEBC]">Email</label>
                                </div>
                                <div class="w-full">
                                    <input type="email" class="py-2 w-[50%]  rounded-lg font-bold outline-none" :class="{' border-2 px-4': isEditing}" v-model="userData.email" :readonly="!isEditing">
                                </div>
                            </div>
                            <div class="w-full">
                                <div>
                                    <label for="" class="text-[#A6AEBC]">Phone</label>
                                </div>
                                <div class="w-full">
                                    <input type="text" class=" py-2 w-[30%] rounded-lg font-bold outline-none" :class="{' border-2 px-4': isEditing}" v-model="userData.phone" :readonly="!isEditing">
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="w-1/2">
                                <div>
                                    <label for="" class="text-[#A6AEBC]">Bio</label>
                                </div>
                                <div class="w-full">
                                    <input type="text" class="py-2 w-1/2  rounded-lg font-bold outline-none" :class="{' border-2 px-4': isEditing}" v-model="userData.bio" :readonly="!isEditing">
                                </div>
                            </div>
                            <div class="w-full">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-2 p-4 rounded-lg">
                    <div class="flex items-center space-x-2 justify-between">
                        <div>
                            <h1 class="font-[600] text-xl">Address</h1>
                           </div>
                           <div @click="toggleEditingTwo" class="flex items-center space-x-2 p-2 border-2 rounded-full cursor-pointer" v-if="!isEditingTwo">
                            <div>Edit</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                  </svg>                          
                            </div>
                           </div>
                           <div v-else class="flex items-center space-x-2 p-2 bg-[#3A54B4] text-white rounded-full cursor-pointer">
                            <div>Save</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                  </svg>
                                                            
                            </div>
                           </div>
                    </div>
                    <div class="space-y-4">
                        <div class="flex w-full">
                            <div class="w-1/2">
                                <div>
                                    <label for="" class="text-[#A6AEBC]">Country</label>
                                </div>
                                <div class="">
                                    <input type="text" class="py-2 w-1/2 font-bold  rounded-lg outline-none" :class="{' border-2 px-4': isEditingTwo}" v-model="userData.country" :readonly="!isEditingTwo">
                                </div>
                            </div>
                            <div class="w-full">
                                <div>
                                    <label for="" class="text-[#A6AEBC]">State</label>
                                </div>
                                <div class="">
                                    <input type="text" class=" py-2 w-[30%] font-bold rounded-lg outline-none" :class="{' border-2 px-4': isEditingTwo}" v-model="userData.state" :readonly="!isEditingTwo">
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="w-1/2">
                                <div>
                                    <label for="" class="text-[#A6AEBC]">City</label>
                                </div>
                                <div class="w-full">
                                    <input type="text" class="py-2 w-1/2  rounded-lg font-bold outline-none" :class="{' border-2 px-4': isEditingTwo}" v-model="userData.city" :readonly="!isEditingTwo">
                                </div>
                            </div>
                            <div class="w-full">
                                <div>
                                    <label for="" class="text-[#A6AEBC]">Postal Code</label>
                                </div>
                                <div class="w-full">
                                    <input type="text" class=" py-2 w-[30%] rounded-lg font-bold outline-none" :class="{' border-2 px-4': isEditingTwo}" v-model="userData.postal" :readonly="!isEditingTwo">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
const Editing = ref(false);
const isEditing = ref(false);
const isEditingTwo = ref(false);

const userData = reactive({
  fname: 'John',
  lname: 'Doe',
  email: 'johndoe@muftar.com',
  phone: '+1-123456 78',
  bio: 'Team Manager',
  country: 'USA',
  state: 'Washington',
  city: 'DC',
  postal: '98000',
});

const toggleEdit = () => {
  Editing.value = !Editing.value;
};
const toggleEditing = () => {
  isEditing.value = !isEditing.value;
};
const toggleEditingTwo = () => {
  isEditingTwo.value = !isEditingTwo.value;
};
</script>
