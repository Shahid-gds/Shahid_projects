<template>
    <div class="container mx-auto pb-6">
        <header class="mt-16">
            <div class="flex justify-between">
                <div>
                    <h1 class="text-2xl font-[600]">Shaun Clark</h1>
                    <p class="text-[#333333] font-[600]">Case: Tax Evasion</p>
                </div>
                <div class="flex space-x-4 items-end">
                    <div class="relative w-full">
                        <div class="w-full flex p-2 border-2 rounded-full items-center cursor-pointer"
                            @click="toggleDropdown">
                            <div class="h-auto w-auto p-2 bg-[red] rounded-full"></div>
                            <div class="flex space-x-8 px-2">
                                <div class="w-full">{{ selectedLead || 'Lead' }}</div>
                                <div class="w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        class="w-6 h-6 text-[#3C5AA8] transform transition-transform duration-300"
                                        :class="{ 'rotate-180': leadshowDropdown }">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div v-if="leadshowDropdown"
                            class="absolute w-full border-2 rounded-lg mt-1 bg-white border-[#E1E4EB] transition-transform duration-300 max-h-40 overflow-y-auto"
                            :class="{ 'scale-y-100': leadshowDropdown, 'scale-y-0': !leadshowDropdown }">
                            <option v-for="(lead, index) in leads" :key="index" class="p-2 cursor-pointer hover:bg-gray-100"
                                @click="selectLead(lead)">
                                {{ lead }}
                            </option>
                        </div>
                    </div>
                    <div class="relative w-full">
                        <div class="w-full p-2 border-2 rounded-full items-center cursor-pointer"
                            @click="actiontoggleDropdown">
                            <div class="flex space-x-8 px-2">
                                <div class="w-full">{{ selectedAction || 'Action' }}</div>
                                <div class="w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        class="w-6 h-6 text-[#3C5AA8] transform transition-transform duration-300"
                                        :class="{ 'rotate-180': actionshowDropdown }">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div v-if="actionshowDropdown"
                            class="absolute w-full border-2 rounded-lg mt-1 bg-white border-[#E1E4EB] transition-transform duration-300 max-h-40 overflow-y-auto"
                            :class="{ 'scale-y-100': actionshowDropdown, 'scale-y-0': !actionshowDropdown }">
                            <option v-for="(action, index) in actions" :key="index"
                                class="p-2 cursor-pointer hover:bg-gray-100" @click="selectAction(action)">
                                {{ action }}
                            </option>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex space-x-4 mt-10 border-b-2 pb-4 uppercase">
                <div>
                    <a href="#" @click="setActiveLink(0)" :class="{ 'active-link': activeLink === 0 }">Information</a>
                </div>
                <div>
                    <a href="#" @click="setActiveLink(1)" :class="{ 'active-link': activeLink === 1 }">Tasks</a>
                </div>
                <div>
                    <a href="#" @click="setActiveLink(2)" :class="{ 'active-link': activeLink === 2 }">Matters</a>
                </div>
                <div>
                    <a href="#" @click="setActiveLink(3)" :class="{ 'active-link': activeLink === 3 }">Forms</a>
                </div>
                <div>
                    <a href="#" @click="setActiveLink(4)" :class="{ 'active-link': activeLink === 4 }">Documents</a>
                </div>
                <div>
                    <a href="#" @click="setActiveLink(5)" :class="{ 'active-link': activeLink === 5 }">Notes</a>
                </div>
            </div>
        </header>

        <div class="flex space-x-4 mt-10">
            <div class="w-full">
                <div class="w-full border-2 p-6">
                    <div class="flex justify-between px-16">
                        <div class="border-2 p-6 h-[5rem] w-[5rem] rounded-full ml-64 px-7 bg-[#3A54B4] text-[white]">
                            SC
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#30488C" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </div>
                    </div>
                    <div class="mt-16">
                        <div class="flex justify-between items-center">
                            <div class="w-[22%]">
                                <h1 class="text-[#333333] font-[600]">Tags:</h1>
                            </div>
                            <div class="flex space-x-2 w-full">
                                <div v-for="(tag, index) in tags" :key="index"
                                    class="p-2 bg-slate-300 px-6 rounded-full flex space-x-3 uppercase font-[600] text-slate-400">
                                    <div>{{ tag }}</div>
                                    <div class="cursor-pointer">x</div>
                                </div>
                            </div>
                            <div class="flex items-center w-[15%] space-x-1 text-[blue]" @click="addTag">
                                <div class="">+</div>
                                <div>Add Tag</div>
                            </div>
                        </div>
                        <div class="flex items-center mt-6 border-b-2 pb-4">
                            <div class="w-[20%]">
                                <h1 class="text-[#333333] font-[600]">Full Name:</h1>
                            </div>
                            <div class="w-full">
                                <input type="text" class="w-full outline-none" v-model="fullName">
                            </div>
                        </div>
                        <div class="flex items-center mt-6 border-b-2 pb-4">
                            <div class="w-[20%]">
                                <h1 class="text-[#333333] font-[600]">Email:</h1>
                            </div>
                            <div class="w-full">
                                <input type="text" class="w-full outline-none" v-model="email">
                            </div>
                        </div>
                        <div class="flex items-center mt-6 border-b-2 pb-4">
                            <div class="w-[20%]">
                                <h1 class="text-[#333333] font-[600]">Phone:</h1>
                            </div>
                            <div class="w-full">
                                <input type="text" class="w-full outline-none" v-model="phone">
                            </div>
                        </div>
                        <div class="flex items-center mt-6 border-b-2 pb-4">
                            <div class="w-[20%]">
                                <h1 class="text-[#333333] font-[600]">Company:</h1>
                            </div>
                            <div class="w-full">
                                <input type="text" class="w-full outline-none" v-model="company">
                            </div>
                        </div>
                        <div class="flex items-center mt-6 border-b-2 pb-4">
                            <div class="w-[20%]">
                                <h1 class="text-[#333333] font-[600]">Address:</h1>
                            </div>
                            <div class="w-full">
                                <input type="text" class="w-full outline-none" v-model="address">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full border-2 mt-10">
                    <div class="border-b-2">
                        <div class="flex p-6">
                            <div class="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                            <div class="w-full">
                                <textarea name="" id="" rows="3" class="outline-none p-2 w-full" placeholder="Write a Note"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="border-b-2">
                        <div class="flex p-6 space-x-3">
                            <div class="border-2 p-5 w-16 h-16 rounded-full bg-[#3A54B4] text-[white]">
                                SC
                            </div>
                            <div>
                              <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, error omnis voluptates
                                reiciendis dignissimos recusandae, ab reprehenderit culpa iste libero laudantium vitae
                                officiis laboriosam odit dolore velit harum maxime autem?
                              </div>
                              <div class="text-[#959595]">By Shaun Clark on 25 June, 2016 04: 34 PM</div>
                              <div class="flex mt-3 space-x-3">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#959595" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>                                      
                                </div>
                                <div class="text-[#959595] uppercase">30 Minutes</div>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="flex p-6 space-x-3">
                            <div class="border-2 p-5 w-16 h-16 rounded-full bg-[#3A54B4] text-[white]">
                                SC
                            </div>
                            <div>
                              <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, error omnis voluptates
                                reiciendis dignissimos recusandae, ab reprehenderit culpa iste libero laudantium vitae
                                officiis laboriosam odit dolore velit harum maxime autem?
                              </div>
                              <div class="flex justify-between">
                                <div class="text-[#959595]">By Shaun Clark on 25 June, 2016 04: 34 PM</div>
                                <div class="flex space-x-4 text-[#959595] font-[600]">
                                    <div>Edit</div>
                                    <div>Delete</div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full">
               <div class="border-2 flex items-center">
                <div class="px-3 ml-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#959595" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                    </svg>                      
                </div>
                <div class="w-full border-r-2 p-4">
                    <h1 class="text-xl text-[]">Tax Evasion & Embezzlement</h1>
                    <span class="text-[#959595] font-[600]">Open:</span> <span class="text-[#959595]">24 June, 2015-07:22pm</span>
                </div>
                <div class="px-8">
                    <div class="h-auto w-auto p-3 bg-[red] rounded-full"></div>
                </div>
               </div>
               <div class="border-2">
                  <div class="flex justify-between items-center mt-10">
                    <div class="p-4 ml-10">
                        <h1 class="text-xl">Checklist</h1>
                        <p class="text-[#959595]">2 of 6 Tasks Completed</p>
                    </div>
                    <div class="px-10">
                       <div class="border-2 p-2 px-6 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#30488C" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>   
                       </div>                       
                    </div>
                  </div>
                    <div class="flex">
                        <div class="border-2 w-[30%] border-[#30488C]"></div>
                        <div class="border-2 w-full"></div>
                    </div>
                    <div v-for="(item, index) in items" :key="index">
                        <div class="ml-10 px-4 pt-6">
                          <h1 :class="item.textColor">{{ item.title }}</h1>
                        </div>
                        <div class="px-6 flex items-center space-x-2 pb-5">
                          <div :class="item.checkboxClass">
                            <input type="checkbox" :id="'custom-checkbox' + index" :checked="item.isChecked">
                            <label :for="'custom-checkbox' + index"></label>
                          </div>
                          <div class="flex w-full justify-between">
                            <div class="w-full">
                            <h1 class="text-lg font-[600]">{{ item.subtitle }}</h1>
                            <p class="text-[#959595]">{{ item.description }}</p>
                            </div>
                            <div class="flex space-x-5 text-[#959595]">
                                <div>
                                    {{ item.deleteButton }}
                                </div>
                                <div>
                                    {{ item.editButton }}
                                </div>
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
import { ref } from 'vue'

const leads = ['Lead', 'Lead', 'Lead', 'Lead', 'Lead'];
const selectedLead = ref(null);
const leadshowDropdown = ref(false);

const toggleDropdown = () => {
    leadshowDropdown.value = !leadshowDropdown.value;
};

const selectLead = (lead) => {
    selectedLead.value = lead;
    leadshowDropdown.value = false;
};
const actions = ['Action', 'Action', 'Action'];
const selectedAction = ref(null);
const actionshowDropdown = ref(false);

const actiontoggleDropdown = () => {
    actionshowDropdown.value = !actionshowDropdown.value;
};

const selectAction = (action) => {
    selectedAction.value = action;
    actionshowDropdown.value = false;
};

const tags = ref(['Bluechip', 'Taxes'])
const addTag = () => {
    const newTag = prompt('Enter a New tag:');
    if (newTag) {
        tags.value.push(newTag);
    }
}
const activeLink = ref(0);
const setActiveLink = (index) => {
    activeLink.value = index;
};
const fullName = ref('Shaun Clark');
const email = ref('shaun@gmail.com');
const phone = ref('(403) 122325 2515');
const company = ref('No company information provided');
const address = ref('147 Conrnrow Road App #34, Bellenue');
const items = [
  {
    title: 'DOCUMENT - Late 3 Days',
    textColor: 'text-[green]',
    checkboxClass: 'custom-checkbox',
    isChecked: false,
    subtitle: 'Send Over all the Documentation',
    description: 'Scheduled for 24 June, 2016 *Assigned to Mark R.',
  },
  {
    title: 'INTAKE FROM',
    textColor: 'text-[lightgreen]',
    checkboxClass: 'custom-checkbox2',
    isChecked: true,
    subtitle: 'Send Over all the Documentation',
    description: 'Scheduled for 24 June, 2016 *Assigned to Mark R.',
  },
  {
    title: 'INTAKE FROM',
    textColor: 'text-[orange]',
    checkboxClass: 'custom-checkbox3',
    isChecked: false,
    subtitle: 'Send Over all the Documentation',
    description: 'Scheduled for 24 June, 2016 *Assigned to Mark R.',
    deleteButton: 'Delete',
    editButton: 'Edit',
  },
];
</script>

<style scoped>
.active-link {
    border-bottom: 4px solid #30488C;
    font-weight: 600;
    padding-bottom: 1rem;
}
 .custom-checkbox,
 .custom-checkbox2 {
    display: inline-block;
    position: relative;
  }
  .custom-checkbox label {
    width: 25px;
    height: 25px;
    border: 2px solid green;
    border-radius: 50%;
    display: inline-block;
    position: relative;
  }
  .custom-checkbox2 label {
    width: 25px;
    height: 25px;
    border: 2px solid lightgreen;
    border-radius: 50%;
    display: inline-block;
    position: relative;
  }
  .custom-checkbox3 label {
    width: 25px;
    height: 25px;
    border: 2px solid orange;
    border-radius: 50%;
    display: inline-block;
    position: relative;
  }
  .custom-checkbox input, 
  .custom-checkbox2 input,
  .custom-checkbox3 input {
    display: none; 
  }
  .custom-checkbox input:checked + label::before, 
  .custom-checkbox2 input:checked + label::before,
  .custom-checkbox3 input:checked + label::before  {
    content: "✓";
    position: absolute;
    width: 6px;
    height: 14px;
    left: 4px;
    top: -2px;
    color: #3C5AA8;
    font-weight: bold;
    transition: transform 0.2s ease;
  }
</style>

  