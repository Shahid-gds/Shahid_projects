<template>
    <div class="main-div">
    
        <section class="bg-white w-11/12 h-full mx-auto px-8 mt-5 rounded-md shadow-lg py-8">
            <div class="w-full mx-auto rounded border-2 border-gray-200">
                <div class="border-b border-gray-200 flex justify-between items-center p-2">
                <h2 class="text-lg p-2 font-bold">Muftar Load Board</h2>
                <a href=""
                    class="bg-blue-500 py-1 px-3 text-white rounded">Go to Muftar Portal</a>
            </div>
            <div class="flex flex-col">
                <!---->
                <div class="overflow-x-auto">
                    <div class="m-2 flex flex-row justify-between px-2">
                        <div>
                            <p class="my-auto flex space-x-1">
                                <span>Showing </span>
                                <span class="font-bold text-blue-500">10</span>
                                    <span>result out of</span>
                                    <span class="font-bold text-blue-500">10</span>
                            </p>
                            <div class="flex space-x-5 py-2 cursor-pointer">
                                <div>Prev</div>
                                <div class="cursor-pointer px-2 rounded-md bg-blue-200 font-bold text-xl">1</div>
                                <div class="cursor-pointer px-2 rounded-md bg-blue-200">2</div>
                                <div class="cursor-pointer px-2 rounded-md bg-blue-200">3</div>
                                <div class="cursor-pointer px-2 rounded-md bg-blue-200">4</div>
                                <div>Next</div>
                            </div>
                        </div>
                        <div>
                            <input class="border p-2 rounded-md focus:ring-0 w-96" placeholder="Search Table.." type="text">
                        </div>
                    </div>
                    <table class="text-sm w-3/4 text-left container mx-auto bg-gray-50 dark:text-gray-400">
                        <thead class="text-xs text-gray-900 uppercase bg-gray-50  dark:text-gray-800">
                            <tr>
                                <th scope="col" class="p-2">More Info</th>
                                <th scope="col" class="p-2">Post ID</th>
                                <th scope="col" class="p-2">Requester</th>
                                <th scope="col" class="p-2">Timestamp</th>
                                <th scope="col" class="p-2">From Address</th>
                                <th scope="col" class="p-2">To Address</th>
                                <th scope="col" class="p-2">Status</th>
                                <th scope="col" class="p-2">Rate ($)</th>
                            </tr>
                        </thead>
                        <tbody class="pb-10" v-for="(tbody, index) in tbodys" :key="index">
                            <tr class="bg-white relative">
                                <td class="">
                                    <span
                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer mx-auto">{{ tbody.more_info}}</span>
                                </td>
                                <td class="p-2">
                                    <p class="flex items-center text-xs text-gray-500 -bottom-1">{{ tbody.post_idOne}} <span
                                            class="text-xl font-bold">{{ tbody.dots }}</span> {{ tbody.post_idTwo }}</p>
                                </td>
                                <td class="p-2">
                                    <p class="flex items-center text-xs text-gray-500 -bottom-1">{{ tbody.requsterOne}}<span
                                            class="text-xl font-bold">{{ tbody.dots }}</span> {{ tbody.requsterTwo }}</p>
                                </td>
                                <td class="p-2">{{ tbody.timestamp }}</td>
                                <td class="p-2">
                                    <div>
                                        <p>{{ tbody.from_addressTimeStamp}}</p>
                                        <p>{{ from_addressOne }}</p>
                                        <p>{{ tbody.from_addressTwo }}</p>
                                    </div>
                                </td>
                                <td class="p-2">
                                    <p>{{ tbody.to_addressTimeStamp }}</p>
                                    <p>{{ tbody.to_addressOne }} </p>
                                    <p>{{ tbody.to_addressTwo }}</p>
                                </td>
                                <td class="p-2">{{ tbody.status }}</td>
                                <td class="p-2 font-bold">{{ tbody.rate }}</td>
                            </tr>                                                                               
                        </tbody>
                    </table>
                </div>
                <div class="flex space-x-2 bg-gray-50 py-2 px-2">
                    <div class="my-auto">
                        <button>Prev</button>
                    </div>
                    <div class="flex space-x-2">
                        <button
                            class="cursor-pointer px-2 rounded-md bg-blue-200 font-bold text-xl">1</button>
                        </div>
                    <div class="flex space-x-2">
                        <button class="cursor-pointer px-2 rounded-md bg-blue-200">2</button>
                    </div>
                    <div class="flex space-x-2">
                        <button class="cursor-pointer px-2 rounded-md bg-blue-200">3</button>
                    </div>
                    <div class="flex space-x-2">
                        <button class="cursor-pointer px-2 rounded-md bg-blue-200">4</button>
                    </div>
                    <div class="my-auto">
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script setup>
const tbodys = [
  {
    id: 1,
    more_info: 'View',
    post_idOne: '0x8bbe7',
    dots: '...',
    post_idTwo:'c3b66',
    requsterOne: '63f61de',
    requsterTwo: '8c15c',
    timestamp: '6 days ago 7/25/2023',
    from_addressTimeStamp: '12:00 - 7/25/2023',
    from_addressOne: '20 W 34th St.,',	
    from_addressTwo: 'New York, NY 10001',	
    to_addressTimeStamp: '12:00 - 7/25/2023',
    to_addressOne: '1600 Pennsylvania Avenue NW,',	
    to_addressTwo: 'Washington, DC 20500',
    status:'unassigned',
    rate:'$888.00'	
  },
  {
    id: 2,
    more_info: 'View',
    post_idOne: '0x414ed',
    dots: '...',
    post_idTwo:'cd2b2',
    requsterOne: '63f61de',
    requsterTwo: '8c15c',
    timestamp: '6 days ago 7/25/2023',
    from_addressTimeStamp: '12:00 - 7/25/2023',
    from_addressOne: '20 W 34th St.,',	
    from_addressTwo: 'New York, NY 10001',	
    to_addressTimeStamp: '12:00 - 7/25/2023',
    to_addressOne: '1600 Pennsylvania Avenue NW,',	
    to_addressTwo: 'Washington, DC 20500',
    status:'unassigned',
    rate:'$555.00'	
  },
  {
    id: 3,
    more_info: 'View',
    post_idOne: '0x414ed',
    dots: '...',
    post_idTwo:'cd2b2',
    requsterOne: '63f61de',
    requsterTwo: '8c15c',
    timestamp: '6 days ago 7/25/2023',
    from_addressTimeStamp: '12:00 - 7/25/2023',
    from_addressOne: '20 W 34th St.,',	
    from_addressTwo: 'New York, NY 10001',	
    to_addressTimeStamp: '12:00 - 7/25/2023',
    to_addressOne: '1600 Pennsylvania Avenue NW,',	
    to_addressTwo: 'Washington, DC 20500',
    status:'unassigned',
    rate:'$123.00'	
  },
  {
    id: 4,
    more_info: 'View',
    post_idOne: '0x414ed',
    dots: '...',
    post_idTwo:'cd2b2',
    requsterOne: '63f61de',
    requsterTwo: '8c15c',
    timestamp: '6 days ago 7/25/2023',
    from_addressTimeStamp: '12:00 - 7/25/2023',
    from_addressOne: '20 W 34th St.,',	
    from_addressTwo: 'New York, NY 10001',	
    to_addressTimeStamp: '12:00 - 7/25/2023',
    to_addressOne: '1600 Pennsylvania Avenue NW,',	
    to_addressTwo: 'Washington, DC 20500',
    status:'unassigned',
    rate:'$1252.00'	
  },
  {
    id: 5,
    more_info: 'View',
    post_idOne: '0x414ed',
    dots: '...',
    post_idTwo:'cd2b2',
    requsterOne: '63f61de',
    requsterTwo: '8c15c',
    timestamp: '6 days ago 7/25/2023',
    from_addressTimeStamp: '12:00 - 7/25/2023',
    from_addressOne: '20 W 34th St.,',	
    from_addressTwo: 'New York, NY 10001',	
    to_addressTimeStamp: '12:00 - 7/25/2023',
    to_addressOne: '1600 Pennsylvania Avenue NW,',	
    to_addressTwo: 'Washington, DC 20500',
    status:'unassigned',
    rate:'$55.00'	
  },
  {
    id: 6,
    more_info: 'View',
    post_idOne: '0x414ed',
    dots: '...',
    post_idTwo:'cd2b2',
    requsterOne: '63f61de',
    requsterTwo: '8c15c',
    timestamp: '6 days ago 7/25/2023',
    from_addressTimeStamp: '12:00 - 7/25/2023',
    from_addressOne: '20 W 34th St.,',	
    from_addressTwo: 'New York, NY 10001',	
    to_addressTimeStamp: '12:00 - 7/25/2023',
    to_addressOne: '1600 Pennsylvania Avenue NW,',	
    to_addressTwo: 'Washington, DC 20500',
    status:'unassigned',
    rate:'$88.00'	
  },
  {
    id: 7,
    more_info: 'View',
    post_idOne: '0x414ed',
    dots: '...',
    post_idTwo:'cd2b2',
    requsterOne: '63f61de',
    requsterTwo: '8c15c',
    timestamp: '6 days ago 7/25/2023',
    from_addressTimeStamp: '12:00 - 7/25/2023',
    from_addressOne: '20 W 34th St.,',	
    from_addressTwo: 'New York, NY 10001',	
    to_addressTimeStamp: '12:00 - 7/25/2023',
    to_addressOne: '1600 Pennsylvania Avenue NW,',	
    to_addressTwo: 'Washington, DC 20500',
    status:'unassigned',
    rate:'$225.00'	
  },
  {
    id: 8,
    more_info: 'View',
    post_idOne: '0x414ed',
    dots: '...',
    post_idTwo:'cd2b2',
    requsterOne: '63f61de',
    requsterTwo: '8c15c',
    timestamp: '6 days ago 7/25/2023',
    from_addressTimeStamp: '12:00 - 7/25/2023',
    from_addressOne: '20 W 34th St.,',	
    from_addressTwo: 'New York, NY 10001',	
    to_addressTimeStamp: '12:00 - 7/25/2023',
    to_addressOne: '1600 Pennsylvania Avenue NW,',	
    to_addressTwo: 'Washington, DC 20500',
    status:'unassigned',
    rate:'$888.00'	
  },
  {
    id: 9,
    more_info: 'View',
    post_idOne: '0x414ed',
    dots: '...',
    post_idTwo:'cd2b2',
    requsterOne: '63f61de',
    requsterTwo: '8c15c',
    timestamp: '6 days ago 7/25/2023',
    from_addressTimeStamp: '12:00 - 7/25/2023',
    from_addressOne: '20 W 34th St.,',	
    from_addressTwo: 'New York, NY 10001',	
    to_addressTimeStamp: '12:00 - 7/25/2023',
    to_addressOne: '1600 Pennsylvania Avenue NW,',	
    to_addressTwo: 'Washington, DC 20500',
    status:'unassigned',
    rate:'$555.00'	
  },
  {
    id: 10,
    more_info: 'View',
    post_idOne: '0x414ed',
    dots: '...',
    post_idTwo:'cd2b2',
    requsterOne: '63f61de',
    requsterTwo: '8c15c',
    timestamp: '6 days ago 7/25/2023',
    from_addressTimeStamp: '12:00 - 7/25/2023',
    from_addressOne: '20 W 34th St.,',	
    from_addressTwo: 'New York, NY 10001',	
    to_addressTimeStamp: '12:00 - 7/25/2023',
    to_addressOne: '1600 Pennsylvania Avenue NW,',	
    to_addressTwo: 'Washington, DC 20500',
    status:'unassigned',
    rate:'$6652.00'	
  },
 
]
</script>
<style scoped>


</style>