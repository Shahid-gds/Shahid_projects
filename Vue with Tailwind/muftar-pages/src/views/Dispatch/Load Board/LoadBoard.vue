<template>
    <div class="bg-[#F9F9F9]">
        <div class="p-6 flex items-center justify-between">
            <div class="text-[#3C5AA8] text-2xl font-extrabold">
                <h1>Load Board</h1>
            </div>
            <div
                class="flex space-x-1 p-3 px-4 items-center bg-gradient-to-l from-[#21315D] via-[#21325E] to-[#3C5AA8] rounded-br-xl rounded-tl-xl">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.255" height="18.001" viewBox="0 0 20.255 18.001">
                        <path id="Icon_awesome-edit" data-name="Icon awesome-edit"
                            d="M14.157,2.929,17.329,6.1a.344.344,0,0,1,0,.485l-7.68,7.68-3.263.362a.684.684,0,0,1-.756-.756l.362-3.263,7.68-7.68A.344.344,0,0,1,14.157,2.929Zm5.7-.805L18.138.408a1.375,1.375,0,0,0-1.941,0L14.952,1.653a.344.344,0,0,0,0,.485L18.124,5.31a.344.344,0,0,0,.485,0l1.245-1.245a1.375,1.375,0,0,0,0-1.941ZM13.5,12.178v3.58H2.251V4.5h8.081a.432.432,0,0,0,.3-.123l1.407-1.407a.422.422,0,0,0-.3-.721H1.688A1.688,1.688,0,0,0,0,3.942V16.32a1.688,1.688,0,0,0,1.688,1.688H14.066a1.688,1.688,0,0,0,1.688-1.688V10.771a.423.423,0,0,0-.721-.3l-1.407,1.407A.432.432,0,0,0,13.5,12.178Z"
                            transform="translate(0 -0.007)" fill="#fff" />
                    </svg>
                </div>
                <div class="text-sm text-[white]">Create Load</div>
            </div>
        </div>
        <div class="px-2">
            <div class="table-wrapper">
                <div class="table-header bg-[#EEEFF6] text-[#3C5AA8] text-sm from-neutral-50">
                    <div class="table-row text-left">
                        <div class="table-cell w-96">Post Date</div>
                        <div class="table-cell w-56">Broker/Issuer</div>
                        <div class="table-cell w-64">Prerequisites</div>
                        <div class="table-cell w-64">Origin</div>
                        <div class="table-cell w-56">Destination</div>
                        <div class="table-cell w-40">Rate</div>
                        <div class="table-cell w-36">Decision</div>
                    </div>
                </div>
                <div class="table-body text-xs pb-36" style="max-height: 90vh; overflow-y: scroll;">
                    <div class="table-row" v-for="(tbody, index) in tbodys" :key="index">
                        <div class="table-cell p-4">
                            <div class="text-[#8C8C8D] pb-2">{{tbody.location}}</div>
                            <div class="flex space-x-3">
                                <div>{{tbody.date}}</div>
                                <div class="text-[#8C8C8D]">|</div>
                            <div class="text-[#8C8C8D]">{{tbody.days}}</div>
                            </div>
                        </div>
                        <div class="table-cell">
                            <div class="flex items-center space-x-1 bg-[#EEEFF6] p-2 w-20 px-3 rounded-br-xl rounded-tl-xl">
                                <div>
                                    <svg id="Icon_ionic-ios-eye" data-name="Icon ionic-ios-eye"
                                        xmlns="http://www.w3.org/2000/svg" width="17.023" height="10.605"
                                        viewBox="0 0 17.023 10.605">
                                        <path id="Path_13537" data-name="Path 13537"
                                            d="M10.754,7.875C7.7,7.875,5.29,9.738,2.41,12.784a.569.569,0,0,0,0,.784c2.466,2.64,4.639,4.912,8.347,4.912,3.663,0,6.41-2.861,8.363-4.934a.564.564,0,0,0,.019-.762C17.145,10.445,14.39,7.875,10.754,7.875Zm.167,8.613a3.316,3.316,0,1,1,3.256-3.156A3.369,3.369,0,0,1,10.921,16.488Z"
                                            transform="translate(-2.252 -7.875)" fill="#3c5aa8" />
                                        <path id="Path_13538" data-name="Path 13538"
                                            d="M15.932,14.126a1.683,1.683,0,0,1,.118-.622c-.038,0-.076,0-.118,0a2.361,2.361,0,1,0,2.432,2.357c0-.048,0-.1,0-.144a1.736,1.736,0,0,1-2.428-1.587Z"
                                            transform="translate(-7.422 -10.554)" fill="#3c5aa8" />
                                    </svg>
                                </div>
                                <div class="text-[#3C5AA8] uppercase font-semibold show-text">{{tbody.show_btn}}</div>
                            </div>
                        </div>
                        <div class="table-cell text-[#8C8C8D]">{{tbody.Prerequisites}}</div>
                        <div class="table-cell text-[#8C8C8D]">{{tbody.Origin}}</div>
                        <div class="table-cell text-[#8C8C8D]">{{tbody.Destination}}</div>
                        <div class="table-cell text-[#8C8C8D]">{{tbody.Rate}}</div>
                        <div class="table-cell">
                            <div class="flex space-x-3">
                                <div class="bg-[#EDF8F5] cursor-pointer flex items-center px-3 space-x-1 p-2 rounded-br-xl rounded-tl-xl">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14.222" height="10.605"
                                            viewBox="0 0 14.222 10.605">
                                            <path id="Icon_awesome-check" data-name="Icon awesome-check"
                                                d="M4.83,14.974.208,10.352a.711.711,0,0,1,0-1.006L1.214,8.341a.711.711,0,0,1,1.006,0l3.114,3.114L12,4.785a.711.711,0,0,1,1.006,0l1.006,1.006a.711.711,0,0,1,0,1.006L5.836,14.974A.711.711,0,0,1,4.83,14.974Z"
                                                transform="translate(0 -4.577)" fill="#4cbc9a" />
                                        </svg>
                                    </div>
                                    <div class="text-[#4CBC9A] font-extrabold uppercase accept-text">
                                        {{tbody.accept_btn}}
                                    </div>
                                </div>
                                <div class="bg-[#FFEFF0] cursor-pointer px-3 flex items-center space-x-1 p-2 rounded-br-xl rounded-tl-xl">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="10.605"
                                            viewBox="0 0 10.605 10.605">
                                            <path id="Icon_awesome-times" data-name="Icon awesome-times"
                                                d="M7.313,10.928l3.015-3.015a.948.948,0,0,0,0-1.34l-.67-.67a.948.948,0,0,0-1.34,0L5.3,8.918,2.288,5.9a.948.948,0,0,0-1.34,0l-.67.67a.948.948,0,0,0,0,1.34l3.015,3.015L.277,13.943a.948.948,0,0,0,0,1.34l.67.67a.948.948,0,0,0,1.34,0L5.3,12.938l3.015,3.015a.948.948,0,0,0,1.34,0l.67-.67a.948.948,0,0,0,0-1.34Z"
                                                transform="translate(0 -5.625)" fill="#ff606b" />
                                        </svg>
                                    </div>
                                    <div class="text-[#FF606B] font-extrabold uppercase decline-text">
                                        {{tbody.decline_btn}}
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
const tbodys = [
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '2 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$1,499.99',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'Riverbank California 95367',
    Destination: 'Troutdale Oregon 97060',
    Rate: '$2,000.21',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },
  {
    location: '641b608...06b5e',
    date: '3/23/2023 ',
    days: '4 days ago',
    show_btn: 'Show',
    Prerequisites: 'Prerequisites Goes Here …',
    Origin: 'New York NY 10001',
    Destination: 'Washington DC 20500',
    Rate: '$0',
    accept_btn: 'ACCEPT',
    decline_btn: 'DECLINE'
  },

];
</script>



<style scoped>.show-text {
    font-size: 10px;
}
.table-wrapper {
    display: flex;
    flex-direction: column;
    border: 1px solid #e2e8f0; /* Optional border */
    border-radius: 0.375rem; /* Optional border radius */
    overflow: hidden; /* Hide horizontal scrollbars */
}

.table-header {
    display: flex;
}

.table-row {
    display: flex;
}

.table-cell {
    flex: 1;
    padding: 1rem;
    border-bottom: 1px solid #e2e8f0; /* Optional border */
}
::-webkit-scrollbar {
    width: 5px;
    background-color: #DEE1F8;
  }
  
 
  ::-webkit-scrollbar-thumb {
    background-color: #A2A5D8;
    border-radius: 5px;
  }

.decline-text,
.accept-text {
    font-size: 11px;
    font-weight: 900;
}
.tbody-container {
    height: 100vh;
    overflow-y: auto;
  }
  
</style>