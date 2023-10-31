<template>
    <div class="flex space-x-4 w-full">
        <div class="p-8 w-full h-full">
            <div>
                <p class="text-[#959595]"> Project / ITSM Service Desk / All tickets</p>
                <h1 class="text-[#3A54B4] text-lg uppercase font-bold">Open All tickets</h1>
            </div>
            <div>

                <div class="relative sm:rounded-lg mt-10 w-full">
                    <div class="w-full text-sm text-left">
                        <thead class="text-md text-[#3A54B4] w-full bg-slate-300 ">
                            <tr class="">
                                <th scope="col" class="py-3 px-6">
                                    <input type="checkbox">
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Request Type
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center">
                                        Key
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center">
                                        Summary
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center">
                                        Reporter
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center">
                                        Assignee
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center">
                                        Status
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center">
                                        Created
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                   <div class="p-1 rounded-lg bg-slate-300 flex items-center">
                                    <div class="">
                                        Time to resolu...
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                                        </svg>                                          
                                    </div>
                                   </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center">
                                        P
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="w-full">
                            <tr v-for="(item, index) in tableData" :key="index" class="border-t-2 w-full">
                                <td scope="row" class=" py-4 font-medium px-6">
                                  <input type="checkbox">
                                </td>
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900">
                                  {{ item.requestType }}
                                </td>
                                <td class="px-6 py-4">
                                  {{ item.key }}
                                </td>
                                <td class="px-6 py-4">
                                  {{ item.summary }}
                                </td>
                                <td class="px-6 py-4">
                                  {{ item.reporter }}
                                </td>
                                <td class="px-6 py-4 flex items-center space-x-2">
                                    <div class="rounded-full">
                                        <img class="rounded-full w-6" src="@/assets/images/profile.svg" alt="">                                                          
                                    </div>
                                    <div>
                                        Summary Serv.....
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                  {{ item.status }}
                                </td>
                                <td class="px-6 py-4">
                                  {{ item.created }}
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center space-x-2  rounded-full px-6 p-1 text-white"  :class="{
                                        'bg-red-500': item.time === '-15m',
                                        'bg-[#3A54B4]': item.time !== '-15m'
                                      }">
                                        <div>{{item.time}}</div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#3A54B4" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                                    </svg> 
                                </td>
                              </tr>
                        </tbody>
                    </div>
            </div>

        </div>
    </div>
</div>
</template>

<script setup>

const tableData = [
  {
    requestType: 'Request admin access',
    key: 'ITSM-1234',
    summary: 'Admint acces to Muftar',
    reporter: 'Polly Product Manager',
    status: 'Waiting for Support',
    created: '24/Sep/20',
    time: '-15m',
  },
  {
    requestType: 'Report a System Problem',
    key: 'ITSM-1314',
    summary: 'Banc.ly Inc is show',
    reporter: 'Polly Product Manager',
    status: 'Waiting for Support',
    created: '24/Sep/20',
    time: '3h 44m'
  },
  {
    requestType: 'Report a System Problem',
    key: 'ITSM-1314',
    summary: 'Banc.ly Inc is show',
    reporter: 'Polly Product Manager',
    status: 'Waiting for Support',
    created: '24/Sep/20',
    time: '3h 44m'
  },
  {
    requestType: 'Report a System Problem',
    key: 'ITSM-1314',
    summary: 'Banc.ly Inc is show',
    reporter: 'Polly Product Manager',
    status: 'Waiting for Support',
    created: '24/Sep/20',
    time: '3h 44m'
  },
  {
    requestType: 'Report a System Problem',
    key: 'ITSM-1314',
    summary: 'Banc.ly Inc is show',
    reporter: 'Polly Product Manager',
    status: 'Waiting for Support',
    created: '24/Sep/20',
    time: '3h 44m'
  },
  {
    requestType: 'Report a System Problem',
    key: 'ITSM-1314',
    summary: 'Banc.ly Inc is show',
    reporter: 'Polly Product Manager',
    status: 'Waiting for Support',
    created: '24/Sep/20',
    time: '3h 44m'
  },
  {
    requestType: 'Report a System Problem',
    key: 'ITSM-1314',
    summary: 'Banc.ly Inc is show',
    reporter: 'Polly Product Manager',
    status: 'Waiting for Support',
    created: '24/Sep/20',
    time: '3h 44m'
  },
  {
    requestType: 'Report a System Problem',
    key: 'ITSM-1314',
    summary: 'Banc.ly Inc is show',
    reporter: 'Polly Product Manager',
    status: 'Waiting for Support',
    created: '24/Sep/20',
    time: '3h 44m'
  },
  {
    requestType: 'Report a System Problem',
    key: 'ITSM-1314',
    summary: 'Banc.ly Inc is show',
    reporter: 'Polly Product Manager',
    status: 'Waiting for Support',
    created: '24/Sep/20',
    time: '3h 44m'
  },
  {
    requestType: 'Report a System Problem',
    key: 'ITSM-1314',
    summary: 'Banc.ly Inc is show',
    reporter: 'Polly Product Manager',
    status: 'Waiting for Support',
    created: '24/Sep/20',
    time: '3h 44m'
  },
  {
    requestType: 'Report a System Problem',
    key: 'ITSM-1314',
    summary: 'Banc.ly Inc is show',
    reporter: 'Polly Product Manager',
    status: 'Waiting for Support',
    created: '24/Sep/20',
    time: '3h 44m'
  },
];
</script>

<style scoped>
thead {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  th:first-child {
    border-top-left-radius: 10px;
  }
  
  th:last-child {
    border-top-right-radius: 10px;
  }
::-webkit-scrollbar {
    width: 5px;
    background-color: #DEE1F8;
  }
  
 
  ::-webkit-scrollbar-thumb {
    background-color: #A2A5D8;
    border-radius: 5px;
  }
</style>