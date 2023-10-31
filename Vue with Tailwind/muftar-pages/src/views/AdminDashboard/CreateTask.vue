<template>
    <div class="flex space-x-4 w-full">
        <div class="p-8 w-full h-full">
            <div class="flex space-x-3 items-center">
                <div class="text-[#3A54B4] font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>                                                                
                </div>
                <div>
                    <div class="text-[#3A54B4] text-lg uppercase font-bold">Create Task</div>
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
                    <div>All</div>
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
                                <div scope="col" class="px-3 py-3 w-full">
                                    Task Details
                                </div>
                                <div scope="col" class="px-3 py-3 w-full">
                                    Time Tracking
                                </div>
                                <div scope="col" class="px-3 py-3 w-full">
                                    <div class="flex items-center">
                                        Project or Department
                                    </div>
                                </div>
                                <div scope="col" class="px-3 py-3 w-full">
                                    <div class="flex items-center">
                                        Priority
                                    </div>
                                </div>
                                <div scope="col" class="px-3 py-3 w-full">
                                    <div class="flex items-center">
                                        Status
                                    </div>
                                </div>
                                <div scope="col" class="px-3 py-3 w-full">
                                    <div class="flex items-center">
                                        Assigned To
                                    </div>
                                </div>
                                <div scope="col" class="px-3 py-3 w-full">
                                    <div class="flex items-center">
                                        Notes/Comments
                                    </div>
                                </div>
                                <div scope="col" class="px-3 py-3 w-full">
                                    <div class="flex items-center">
                                        Attachments
                                    </div>
                                </div>
                                <div scope="col" class="px-3 py-3 w-full">
                                    <div class="flex items-center">
                                        Deadlines
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full overflow-y-scroll h-[42rem]">
                            <div v-for="(item, index) in tableData" :key="index" class="w-full flex items-center ">
                                <div class="px-3 py-4 w-full">
                                       {{item.task_details}}
                                </div>
                                <div class="px-3 py-4 w-full">
                                       {{item.time_tracking}}
                                </div>
                                <div class="px-3 py-4 w-full">
                                  {{ item.project_department}}
                                </div>
                                <div class="px-3 py-4 w-full">
                                  {{ item.priority}}
                                </div>
                                <div class="px-3 py-4 w-full">
                                  {{ item.status }}
                                </div>
                                <div class="px-3 py-4 w-full">
                                  {{ item.assigned_to }}
                                </div>
                                <div class="px-3 py-4 w-full">
                                    {{ item.notes }}
                                </div>
                                <div class="px-3 py-4 w-full">
                                  {{ item.attachments }}
                                </div>
                                <div class="px-3 py-4 w-full">
                                  {{ item.deadlines }}
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
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
  },
  {
    task_details: 'Lorem ipsum dolor sit amet.',
    time_tracking: '03:30 pm',
    project_department: 'Muftar Trasport',
    priority: 'High',
    status: 'In process',
    assigned_to: 'John Deo',
    notes: 'Lorem ipsum dolor sit amet.',
    attachments: 'Documents Attached',
    deadlines: 'XYZ',
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