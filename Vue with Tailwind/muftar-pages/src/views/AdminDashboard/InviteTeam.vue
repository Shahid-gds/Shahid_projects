<template>
    <div class="flex space-x-4 w-full">
        <div class="p-8 w-full h-full">
            <div class="flex space-x-3">
                <div class="text-[#3A54B4] font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>                      
                </div>
                <div>
                    <div class="text-[#3A54B4] text-lg uppercase font-bold">Invite Team Members</div>
                </div>
            </div>
            <div class="mt-6 w-1/2 flex space-x-3 items-center">
               <div class="w-full">
                <input type="search" class="border-2 w-full p-2 rounded-lg outline-none px-4">
               </div>
               <div class="w-full">
                <button class="bg-[#3A54B4] p-2 rounded-lg px-4 text-white">Invite New Member</button>
               </div>
            </div>
            <div>
                <div class="mt-10 w-full">
                    <div class="w-full text-sm text-left">
                        <div class="text-md text-[#3A54B4] w-full bg-slate-300 rounded-tr-lg rounded-tl-lg">
                            <div class="flex items-center">
                                <div scope="col" class="py-3 px-6">
                                    <input type="checkbox">
                                </div>
                                <div scope="col" class="px-6 py-3 w-full">
                                    Member
                                </div>
                                <div scope="col" class="px-6 py-3 w-full">
                                    <div class="flex items-center">
                                       Role
                                    </div>
                                </div>
                                <div scope="col" class="px-6 py-3 w-1/2">
                                    <div class="flex items-center">
                                        Last Login
                                    </div>
                                </div>
                                <div scope="col" class="px-6 py-3 w-1/2">
                                    <div class="flex items-center">
                                       Date added
                                    </div>
                                </div>
                                <div scope="col" class="px-6 py-3 w-full">
                                    <div class="flex items-center">
                                       Status
                                    </div>
                                </div>
                                <div scope="col" class="py-3 w-[30%]"></div>
                            </div>
                        </div>
                        <div class="w-full overflow-y-scroll h-[42rem]">
                            <div v-for="(item, index) in tableData" :key="index" class="w-full flex items-center ">
                                <div scope="row" class=" py-4 font-medium px-6">
                                  <input type="checkbox">
                                </div>
                                <div class="px-6 py-4 flex items-center space-x-2 w-full">
                                    <div class="rounded-full">
                                        <img class="rounded-full w-6" src="@/assets/images/profile.svg" alt="">                                                          
                                    </div>
                                    <div class="font-bold">
                                       {{item.member}}
                                    </div>
                                    <div class="">
                                       {{item.email}}
                                    </div>
                                </div>
                                <div class="px-6 py-4 w-full">
                                  {{ item.role }}
                                </div>
                                <div class="px-6 py-4 w-1/2">
                                  {{ item.login }}
                                </div>
                                <div class="px-6 py-4 w-1/2">
                                  {{ item.dateAdded }}
                                </div>
                                <div class="px-6 py-4 w-full flex space-x-4 items-center">
                                  <div>{{ item.status }}</div>
                                  <div v-if="item.button" class="bg-[#3A54B4] p-2 rounded-lg text-white">{{ item.button }}</div>
                                </div>
                                <div class="w-[30%] text-[22px]">...</div>
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
    member: 'Beo Binitio',
    email: 'beobinitio@gmail.com',
    role: 'Memeber',
    login: '---',
    dateAdded: '---',
    status: 'Pending',
    button: 'Resent Invite'
  },
  {
    member: 'Beo Binitio',
    email: 'beobinitio@gmail.com',
    role: 'Supervisor',
    login: '5 min ago',
    dateAdded: 'Today',
    status: '----',
    button: ''
  },
  {
    member: 'Beo Binitio',
    email: 'beobinitio@gmail.com',
    role: 'Memeber',
    login: 'Online',
    dateAdded: '24 July,2023',
    status: '----',
    button: ''
  },
  {
    member: 'Beo Binitio',
    email: 'beobinitio@gmail.com',
    role: 'Memeber',
    login: 'Online',
    dateAdded: '24 July,2023',
    status: '----',
    button: ''
  },
  {
    member: 'Beo Binitio',
    email: 'beobinitio@gmail.com',
    role: 'Memeber',
    login: '5 min ago',
    dateAdded: '24 July,2023',
    status: '----',
    button: ''
  },
  {
    member: 'Beo Binitio',
    email: 'beobinitio@gmail.com',
    role: 'Memeber',
    login: 'Online',
    dateAdded: '24 July,2023',
    status: 'Pending',
    button: 'Resend Invite'
  },
  {
    member: 'Beo Binitio',
    email: 'beobinitio@gmail.com',
    role: 'Memeber',
    login: '5 min ago',
    dateAdded: '24 July,2023',
    status: '----',
    button: ''
  },
  {
    member: 'Beo Binitio',
    email: 'beobinitio@gmail.com',
    role: 'Memeber',
    login: 'Online',
    dateAdded: '24 July,2023',
    status: '----',
    button: ''
  },
  {
    member: 'Beo Binitio',
    email: 'beobinitio@gmail.com',
    role: 'Memeber',
    login: 'Online',
    dateAdded: '24 July,2023',
    status: '----',
    button: ''
  },
  {
    member: 'Beo Binitio',
    email: 'beobinitio@gmail.com',
    role: 'Memeber',
    login: 'Online',
    dateAdded: '24 July,2023',
    status: '----',
    button: ''
  },
  {
    member: 'Beo Binitio',
    email: 'beobinitio@gmail.com',
    role: 'Memeber',
    login: 'Online',
    dateAdded: '24 July,2023',
    status: '----',
    button: ''
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