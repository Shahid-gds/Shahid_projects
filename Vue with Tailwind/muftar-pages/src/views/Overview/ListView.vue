<template>
    <div class="tab_view">
        <div class="flex mt-3 space-x-4 px-3 w-full" v-for="load in loads" :key="load.id">
            <div class="w-full h-auto bg-[white] shadow-lg rounded-xl">
                <div class="">
                    <div class="flex justify-between">
                        <div class="p-4">
                            <div class="text-lg space-x-2">
                                <span class="text-[#3C5AA8] font-bold uppercase">Load</span>
                                <span class="text-[#242021] font-bold">{{load.loadNumber}}</span>
                            </div>
                            <p class="text-[#BEBEBE]">{{load.loadId}}</p>
                        </div>
                        <div
                            class="w-28 h-8 bg-[#F1F2FB] text-xs rounded-bl-xl rounded-tr-xl p-2 text-center text-[#A1AFD6] uppercase">
                            <span>{{load.status}}</span>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="w-full">
                            <div class="mt-3 flex">
                                <div class="px-4">
                                    <span class="text-[#C9CCE6] font-bold">{{ load.timestamp }}</span>
                                </div>
                                <div class="mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="480.093" height="108.91" viewBox="0 0 480.093 108.91">
                                        <g id="Group_1936" data-name="Group 1936" transform="translate(-121.824 -81.688)">
                                          <rect id="Line" width="85.701" height="1" transform="translate(344.111 104.896) rotate(90)" fill="#c9cce6"/>
                                          <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M13.157,3A5.568,5.568,0,0,0,7.5,8.483c0,4.112,5.657,10.183,5.657,10.183S18.815,12.6,18.815,8.483A5.568,5.568,0,0,0,13.157,3Zm0,7.441a1.959,1.959,0,1,1,2.021-1.958A1.991,1.991,0,0,1,13.157,10.441Z" transform="translate(114.324 81)" fill="#c9cce6"/>
                                          <rect id="Rectangle_2069" data-name="Rectangle 2069" width="2" height="411.813" transform="translate(139.688 92.833) rotate(-90)" fill="#3c5aa8"/>
                                          <rect id="Rectangle_2071" data-name="Rectangle 2071" width="2" height="24" transform="translate(577.917 92.834) rotate(-90)" fill="#3c5aa8"/>
                                          <path id="fast-delivery" d="M18.077,79.071s0-.007,0-.01a.408.408,0,0,0-.416-.395h-.109L15.863,75.5a.416.416,0,0,0-.37-.217H12.612l.11-.844a1.137,1.137,0,0,0-.3-.9,1.206,1.206,0,0,0-.89-.373H2.587a.437.437,0,0,0-.437.386l-.09.7H7.155a.571.571,0,0,1,.583.581.61.61,0,0,1-.615.581h-1.7v0H.434A.431.431,0,0,0,0,75.828a.4.4,0,0,0,.412.411H7.019a.607.607,0,0,1,.527.614.653.653,0,0,1-.653.622H2.338a.435.435,0,0,0-.439.415.408.408,0,0,0,.417.415h4.5a.608.608,0,0,1,.536.615.653.653,0,0,1-.659.622H1.1a.435.435,0,0,0-.439.415.408.408,0,0,0,.417.415h.374L1.3,81.856a1.137,1.137,0,0,0,.3.9,1.206,1.206,0,0,0,.89.373h.323a1.851,1.851,0,0,0,1.847,1.5,1.98,1.98,0,0,0,1.928-1.5h4.031a1.391,1.391,0,0,0,.876-.319,1.212,1.212,0,0,0,.835.319H12.4a1.851,1.851,0,0,0,1.847,1.5,1.98,1.98,0,0,0,1.928-1.5h.266a1.389,1.389,0,0,0,1.37-1.217l.261-2.8s0-.008,0-.011,0-.011,0-.017S18.077,79.074,18.077,79.071ZM4.689,83.795a1.021,1.021,0,0,1-1.042-1.037,1.09,1.09,0,0,1,1.1-1.037,1.021,1.021,0,0,1,1.042,1.037A1.09,1.09,0,0,1,4.689,83.795Zm9.584,0a1.021,1.021,0,0,1-1.042-1.037,1.09,1.09,0,0,1,1.1-1.037,1.021,1.021,0,0,1,1.042,1.037A1.09,1.09,0,0,1,14.272,83.795Zm2.689-1.939a.509.509,0,0,1-.5.441h-.288a1.855,1.855,0,0,0-1.828-1.4,1.984,1.984,0,0,0-1.9,1.4h-.088a.369.369,0,0,1-.273-.111.35.35,0,0,1-.09-.277l.539-5.793h1.239l-.2,2.109a1.137,1.137,0,0,0,.3.9,1.206,1.206,0,0,0,.89.373h2.41Z" transform="translate(555.917 12.934)" fill="#c9cce6"/>
                                          <path id="Icon_material-my-location" data-name="Icon material-my-location" d="M11.645,7.757a3.632,3.632,0,0,0-3.689,3.575,3.691,3.691,0,0,0,7.378,0A3.632,3.632,0,0,0,11.645,7.757Zm8.245,2.681a8.1,8.1,0,0,0-7.323-7.1V1.5H10.722V3.341a8.171,8.171,0,0,0-7.323,7.1H1.5v1.788H3.4a8.171,8.171,0,0,0,7.323,7.1v1.841h1.844V19.323a8.17,8.17,0,0,0,7.323-7.1h1.9V10.438Zm-8.245,7.151a6.354,6.354,0,0,1-6.456-6.257,6.354,6.354,0,0,1,6.456-6.257A6.354,6.354,0,0,1,18.1,11.332,6.354,6.354,0,0,1,11.645,17.589Z" transform="translate(332.278 103.477) rotate(-90)" fill="#c9cce6"/>
                                        </g>
                                      </svg>
                                      
                                      
                                      
                                </div>
                                <div class="space-x-1">
                                    <span class="text-[#C9CCE6] font-bold ml-1 mt-1">$</span>
                                    <span class="text-[#3C5AA8] font-bold">{{load.price}}</span>
                                </div>
                            </div>

                            <div class="flex w-full -mt-20 space-x-10">
                                <div class="ml-36 w-56">
                                    <span>
                                        <div>{{load.location}}</div>
                                    </span>
                                </div>
                                <div class="w-56">
                                     <span>
                                        <div>{{load.trucklocation}}</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-between">
                        <div class="w-36 h-10"></div>
                        <div
                            class="w-28 flex space-x-1  px-3 items-center 10 bg-gradient-to-l from-[#21315D] via-[#21325E] to-[#3C5AA8] rounded-tl-xl rounded-br-xl">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17.023" height="10.605"
                                    viewBox="0 0 17.023 10.605">
                                    <g id="Group_1694" data-name="Group 1694" transform="translate(-16.417 -14.572)">
                                        <g id="Icon_ionic-ios-eye" data-name="Icon ionic-ios-eye"
                                            transform="translate(16.417 14.572)">
                                            <path id="Path_13537" data-name="Path 13537"
                                                d="M10.754,7.875C7.7,7.875,5.29,9.738,2.41,12.784a.569.569,0,0,0,0,.784c2.466,2.64,4.639,4.912,8.347,4.912,3.663,0,6.41-2.861,8.363-4.934a.564.564,0,0,0,.019-.762C17.145,10.445,14.39,7.875,10.754,7.875Zm.167,8.613a3.316,3.316,0,1,1,3.256-3.156A3.369,3.369,0,0,1,10.921,16.488Z"
                                                transform="translate(-2.252 -7.875)" fill="#c9cce6" />
                                            <path id="Path_13538" data-name="Path 13538"
                                                d="M15.932,14.126a1.683,1.683,0,0,1,.118-.622c-.038,0-.076,0-.118,0a2.361,2.361,0,1,0,2.432,2.357c0-.048,0-.1,0-.144a1.736,1.736,0,0,1-2.428-1.587Z"
                                                transform="translate(-7.422 -10.554)" fill="#c9cce6" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div class="text-[white] text-xs uppercase font-[600]">
                                <span>View Load</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const loads = [
  {
    id: 1,
    loadNumber: "#80276302",
    loadId: "04222beb06b34f28b0e3ffd26516727a",
    status: "in_queue",
    timestamp: "03 months ago",
    location: "synthesize synergistic,functionalities San Francisco, California,94134",
    trucklocation: "re-contextualize innovative, channels Troutdale, Oregon,97060",
    price: "1000.00",
  },
  {
    id: 2,
    loadNumber: "#80276302",
    loadId: "04222beb06b34f28b0e3ffd26516727a",
    status: "in_queue",
    timestamp: "03 months ago",
    location: "synthesize synergistic,functionalities San Francisco, California,94134",
    trucklocation: "re-contextualize innovative, channels Troutdale, Oregon,97060",
    price: "1000.00",
  },
  {
    id: 3,
    loadNumber: "#80276302",
    loadId: "04222beb06b34f28b0e3ffd26516727a",
    status: "in_queue",
    timestamp: "03 months ago",
    location: "synthesize synergistic,functionalities San Francisco, California,94134",
    trucklocation: "re-contextualize innovative, channels Troutdale, Oregon,97060",
    price: "1000.00",
  },
  {
    id: 4,
    loadNumber: "#80276302",
    loadId: "04222beb06b34f28b0e3ffd26516727a",
    status: "in_queue",
    timestamp: "03 months ago",
    location: "synthesize synergistic,functionalities San Francisco, California,94134",
    trucklocation: "re-contextualize innovative, channels Troutdale, Oregon,97060",
    price: "1000.00",
  },


];
</script>
<style>

</style>