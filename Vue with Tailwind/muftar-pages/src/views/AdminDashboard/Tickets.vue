<template>
    <div class="flex space-x-4 w-full">
        <div class="p-8 w-full h-full">
            <div class="flex space-x-3 items-center">
                <div class="text-[#3A54B4] font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                      </svg>                                           
                </div>
                <div>
                    <div class="text-[#3A54B4] text-lg uppercase font-bold">Tickets</div>
                </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
                <div class="w-1/2 flex space-x-3 items-center relative">
                    <div class="w-full">
                        <input type="search" placeholder="Search.." class="border-2 w-1/2 p-2 rounded-lg outline-none px-4">
                    </div>
                       <div class="absolute right-[25rem] text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                          </svg>                          
                        </div>
                </div>
                <div class="flex items-center space-x-3 bg-[#3A54B4] p-2 text-white px-4 rounded-lg">
                    <div>All Tickets</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>                          
                    </div>
                </div>
            </div>
            <div>
                <div class="mt-10 w-full">
                    <div class="w-full text-sm text-left">
                        <div class="text-md text-[#3A54B4] w-full bg-slate-300 rounded-tr-lg rounded-tl-lg">
                            <div class="flex items-center">
                                <div scope="col" class="px-6 py-3 w-[5%]">
                                    <input type="checkbox">
                                </div>
                                <div scope="col" class="px-6 py-3 w-[15%]">
                                    S.No
                                </div>
                                <div scope="col" class="px-6 py-3 w-full">
                                    Ticket ID
                                </div>
                                <div scope="col" class="px-6 py-3 w-full">
                                    <div class="flex items-center">
                                       Name
                                    </div>
                                </div>
                                <div scope="col" class="px-6 py-3 w-full">
                                    <div class="flex items-center">
                                        Email
                                    </div>
                                </div>
                                <div scope="col" class="px-6 py-3 w-full">
                                    <div class="flex items-center">
                                       Subject
                                    </div>
                                </div>
                                <div scope="col" class="px-6 py-3 w-full">
                                    <div class="flex items-center">
                                       Category
                                    </div>
                                </div>
                                <div scope="col" class="px-6 py-3 w-full">
                                    <div class="flex items-center">
                                       Status
                                    </div>
                                </div>
                                <div scope="col" class="px-6 py-3 w-full">
                                    <div class="flex items-center">
                                       Priority
                                    </div>
                                </div>
                                <div scope="col" class="px-6 py-3 w-full">
                                    <div class="flex items-center">
                                       Created
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full overflow-y-scroll h-[42rem]">
                            <div v-for="(item, index) in tableData" :key="index" class="w-full flex items-center ">
                                <div class="px-6 py-4 w-[5%]">
                                       <input type="checkbox">
                                </div>
                                <div class="px-8 py-4 w-[15%]">
                                       {{item.s_no}}
                                </div>
                                <div class="px-6 py-4 w-full">
                                       {{item.ticket_Id}}
                                </div>
                                <div class="px-6 py-4 w-full">
                                  {{ item.name}}
                                </div>
                                <div class="px-6 py-4 w-full">
                                  {{ item.email}}
                                </div>
                                <div class="px-6 py-4 w-full">
                                  {{ item.subject }}
                                </div>
                                <div class="px-6 py-4 w-full">
                                  {{ item.category }}
                                </div>
                                <div class="px-6 py-4 w-full">
                                    <div class="bg-[#FFF1D7] text-center p-2 rounded-lg text-[#FFC553]" v-if="item.status_inprocess">
                                        {{ item.status_inprocess }}
                                    </div>
                                    <div class="bg-[#D9FFF2] text-center p-2 rounded-lg text-[#99EBC8]" v-if="item.status_closed">
                                        {{ item.status_closed }}
                                    </div>
                                    <div class="bg-[#FFDFD9] text-center p-2 rounded-lg text-[#FF7D64]" v-if="item.status_onhold">
                                        {{ item.status_onhold}}
                                    </div>
                                </div>
                                <div class="px-6 py-4 w-full">
                                  {{ item.priority }}
                                </div>
                                <div class="px-6 py-4 w-full">
                                  {{ item.created }}
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

const tableData = [
  {
    s_no: '01',
    ticket_Id: '#243645',
    name: 'Wade Warren',
    email: 'wadewarren@gmail.com',
    subject: 'ABCDE',
    category: 'Support',
    status_inprocess: 'In process',
    status_closed: '',
    status_onhold: '',
    priority: 'High',
    created: '2 hours ago',
  },
  {
    s_no: '02',
    ticket_Id: '#243645',
    name: 'Wade Warren',
    email: 'wadewarren@gmail.com',
    subject: 'ABCDE',
    category: 'Support',
    status_inprocess: '',
    status_closed: 'Closed',
    status_onhold: '',
    priority: 'High',
    created: '2 hours ago',
  },
  {
    s_no: '03',
    ticket_Id: '#243645',
    name: 'Wade Warren',
    email: 'wadewarren@gmail.com',
    subject: 'ABCDE',
    category: 'Support',
    status_inprocess: '',
    status_closed: '',
    status_onhold: 'On Hold',
    priority: 'High',
    created: '2 hours ago',
  },
  {
    s_no: '04',
    ticket_Id: '#243645',
    name: 'Wade Warren',
    email: 'wadewarren@gmail.com',
    subject: 'ABCDE',
    category: 'Support',
    status_inprocess: 'In process',
    status_closed: '',
    status_onhold: '',
    priority: 'High',
    created: '2 hours ago',
  },
  {
    s_no: '05',
    ticket_Id: '#243645',
    name: 'Wade Warren',
    email: 'wadewarren@gmail.com',
    subject: 'ABCDE',
    category: 'Support',
    status_inprocess: '',
    status_closed: 'Closed',
    status_onhold: '',
    priority: 'High',
    created: '2 hours ago',
  },
  {
    s_no: '06',
    ticket_Id: '#243645',
    name: 'Wade Warren',
    email: 'wadewarren@gmail.com',
    subject: 'ABCDE',
    category: 'Support',
    status_inprocess: '',
    status_closed: '',
    status_onhold: 'On Hold',
    priority: 'High',
    created: '2 hours ago',
  },
  {
    s_no: '07',
    ticket_Id: '#243645',
    name: 'Wade Warren',
    email: 'wadewarren@gmail.com',
    subject: 'ABCDE',
    category: 'Support',
    status_inprocess: 'In process',
    status_closed: '',
    status_onhold: '',
    priority: 'High',
    created: '2 hours ago',
  },
  {
    s_no: '08',
    ticket_Id: '#243645',
    name: 'Wade Warren',
    email: 'wadewarren@gmail.com',
    subject: 'ABCDE',
    category: 'Support',
    status_inprocess: '',
    status_closed: 'Closed',
    status_onhold: '',
    priority: 'High',
    created: '2 hours ago',
  },
  {
    s_no: '09',
    ticket_Id: '#243645',
    name: 'Wade Warren',
    email: 'wadewarren@gmail.com',
    subject: 'ABCDE',
    category: 'Support',
    status_inprocess: '',
    status_closed: '',
    status_onhold: 'On Hold',
    priority: 'High',
    created: '2 hours ago',
  },

];
</script>

<style scoped>
::-webkit-scrollbar {
    width: 5px;
  }
  
 
  ::-webkit-scrollbar-thumb {
    background-color: #A2A5D8;
    border-radius: 5px;
  }
</style>