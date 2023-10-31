<template>
    <div class="pl-5 pr-5">
        <div class="flex justify-between items-center">
            <div class="flex justify-center">
                <div class="flex gap-2 justify-center items-center">
                    <img class="w-6 h-6" src="@/assets/icons/dispatch/status-icon-color.svg" alt="" />
                    <p class="mt-3 font-bold" style="color: #3d5aa9">STATUS</p>
                </div>
            </div>
        </div>

        <div class="text-black flex  justify-between items-center">
            <div class="flex">
                <div>
                    <img class="w-10 h-10 mr-3 rounded-full" src="@/assets/img/accountPerson.svg" />
                </div>
                <div>
                    <p class="text-lg m-0 text-black font-bold">
                        Michael Brown
                    </p>
                    <p class="heading-color text-sm">381 Dusseldorf Dr</p>

                </div>
            </div>
            <div class="flex gap-4">
                <img class="w-4 h-4" src="@/assets/icons/dispatch/transit-icon.svg" alt="">
                <p class="intransit-color text-sm">In Transit</p>
                <img class="w-4 h-4" src="@/assets/icons/dispatch/msg-icon.svg" alt="">
                <p class="heading-color text-sm">Message</p>
                <img class="w-4 h-4" src="@/assets/icons/dispatch/dots.svg" alt="">
            </div>
        </div>
        <div class="flex gap-2 justify-around">
            <div class="p-3 rounded-xl border"
                style="background-image: linear-gradient(to right, #f3f4f6 , white); font-size: 13px;">
                <div class="flex justify-start gap-4">
                    <img src="@/assets/icons/dispatch/status-icon-color.svg" alt="">
                    <h2 class="text-lg p-0 font-bold">Current load Status <br><small>EST Timezone</small></h2>
                </div>
                <div class="table p-2" v-for="dum in dummy" :key="dum">
                    <div class="flex flex-row gap-5 text-black">
                        <div class="basis-1">
                            <div class="flex gap-1">
                                <img src="@/assets/img/date.svg" alt="">
                                06/17/20221
                            </div>
                        </div>
                        <div class="basis-2">
                            <div class="flex gap-1">
                                <img src="@/assets/img/time.svg" alt="">
                                24:23 PM
                            </div>
                        </div>
                        <div class="basis-2">
                            <div class="flex gap-1">
                                <img src="@/assets/img/menu.svg" alt="">
                                Load #71838824 Assigned
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-3 rounded-xl border"
                style="background-image: linear-gradient(to right, #f3f4f6 , white); font-size: 13px;">
                <div class="flex justify-start gap-4">
                    <img src="@/assets/icons/dispatch/status-icon-color.svg" alt="">
                    <h2 class="text-lg p-0">Additional Fees <br><small>EST Timezone</small></h2>
                </div>
                <div class="table p-2" v-for="dum in dummy" :key="dum">
                    <div class="flex flex-row gap-5 text-black">
                        <div class="basis-1">
                            <div class="flex gap-1">
                                <img src="@/assets/img/date.svg" alt="">
                                06/17/20221
                            </div>
                        </div>
                        <div class="basis-2">
                            <div class="flex gap-1">
                                <img src="@/assets/img/time.svg" alt="">
                                24:23 PM
                            </div>
                        </div>
                        <div class="basis-2">
                            <div class="flex gap-1">
                                <img src="@/assets/img/menu.svg" alt="">
                                Load #71838824 Assigned
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="table">
            <div class="flex flex-row gap-5 text-black">
            <div class="basis-1">
              <div class="flex gap-1">
                <img src="@/assets/img/date.svg" alt="">
                06/17/20221
              </div>
            </div>
            <div class="basis-2">
              <div class="flex gap-1">
                <img src="@/assets/img/time.svg" alt="">
              24:23 PM
              </div>
            </div>
            <div class="basis-2">
              <div class="flex gap-1">
                <img src="@/assets/img/menu.svg" alt="">
                Load #71838824 Assigned
              </div>
            </div>
          </div>
          </div>
          <div class="table">
            <div class="flex flex-row gap-5 text-black">
            <div class="basis-1">
              <div class="flex gap-1">
                <img src="@/assets/img/date.svg" alt="">
                06/17/20221
              </div>
            </div>
            <div class="basis-2">
              <div class="flex gap-1">
                <img src="@/assets/img/time.svg" alt="">
              24:23 PM
              </div>
            </div>
            <div class="basis-2">
              <div class="flex gap-1">
                <img src="@/assets/img/menu.svg" alt="">
                Load #71838824 Assigned
              </div>
            </div>
          </div>
          </div> -->
            </div>
        </div>
        <div class="flex gap-5 mt-5 justify-around">
            <img style="width:50%; height:50%; object-fit: contain;" src="@/assets/icons/dispatch/map.png" alt="">
            <div class="p-3 rounded-lg border"
                style="background-image: linear-gradient(to right, #f3f4f6 , white); font-size: 13px;">
                <div class="flex justify-start gap-4">
                    <img src="@/assets/icons/dispatch/status-icon-color.svg" alt="">
                    <h2 class="text-lg p-0">Upcoming Loads <br><small>EST Timezone</small></h2>
                </div>
                <div class="table pt-2 pb-2" v-for="dum in dummy" :key="dum">
                    <div class="flex flex-row gap-5 text-black">
                        <div class="basis-1">
                            <div class="flex gap-1">
                                <img src="@/assets/img/date.svg" alt="">
                                06/17/20221
                            </div>
                        </div>
                        <div class="basis-2">
                            <div class="flex gap-1">
                                <img src="@/assets/img/time.svg" alt="">
                                24:23 PM
                            </div>
                        </div>
                        <div class="basis-2">
                            <div class="flex gap-1">
                                <img src="@/assets/img/menu.svg" alt="">
                                Load #71838824 Assigned
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Status",
    props: ["current_driver"],
    data() {
        return {
            dummy: [
                {},
                {},
                {},
                {},
                {},
                {},
                {}
            ],
            currentLoad: [
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
                {
                    text: "6/17/2022 | 04:23PM -- Load #714548412 Asinged to Driver",
                },
            ],
        };
    },
};
</script>
  
<style scoped>
.heading-color {
    color: #3D5AA9 !important;
    font-weight: bolder;
}

.intransit-color {
    color: #5EDE6E !important;
    font-weight: bolder;
}

.table:nth-child(odd) {
    background-color: #f2f2f2;
}

.table {
    margin-bottom: 0rem !important;
}
</style>