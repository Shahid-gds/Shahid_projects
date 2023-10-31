<template>
    <div class="bg-[#F9F9F9]">
        <div class="p-6 flex items-center justify-between">
            <div class="text-[#3C5AA8] text-2xl font-extrabold">
                <h1>Order History</h1>
            </div>
            <div
                class="flex flex-row-reverse items-center bg-[white] px-3 rounded-full shadow-2xl">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14.001" viewBox="0 0 14 14.001">
                        <path id="Path_13134" data-name="Path 13134" d="M13.68-.118,10.407-3.391a5.685,5.685,0,0,0,.915-3.957A5.719,5.719,0,0,0,6.431-12.2,5.692,5.692,0,0,0,.047-5.819,5.718,5.718,0,0,0,4.9-.927,5.685,5.685,0,0,0,8.86-1.842l3.273,3.273A1.095,1.095,0,0,0,13.68-.118ZM2.163-6.562a3.5,3.5,0,0,1,3.5-3.5,3.5,3.5,0,0,1,3.5,3.5,3.5,3.5,0,0,1-3.5,3.5A3.5,3.5,0,0,1,2.163-6.562Z" transform="translate(0 12.25)" fill="#3c5aa8"/>
                    </svg>                      
                </div>
                <div class="text-sm text-[black] w-64">
                    <input class="p-2 border-[#D6D6D6] px-1 outline-none focus:ring-0 focus:border-[#D6D6D6]" type="text" placeholder="Search Load Here....">
                </div>
            </div>
        </div>
        <div class="px-2">
            <div class="table-wrapper">
                <div class="table-header bg-[#EEEFF6] text-[#3C5AA8] text-sm from-neutral-50">
                    <div class="table-row text-left">
                        <div class="table-cell w-64">
                       <div class="flex items-center space-x-2">
                        <div>
                            Status
                        </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.787" height="12" viewBox="0 0 13.787 12">
                            <g id="Arrows" transform="translate(-358.198 -157)">
                              <path id="Icon_ionic-ios-arrow-round-down" data-name="Icon ionic-ios-arrow-round-down" d="M19.094,15.528a.544.544,0,0,0-.767,0l-2.537,2.53V8.413a.542.542,0,0,0-1.083,0v9.641L12.17,15.519a.548.548,0,0,0-.767,0,.54.54,0,0,0,0,.763l3.458,3.435h0a.608.608,0,0,0,.171.113.517.517,0,0,0,.208.042.543.543,0,0,0,.379-.154l3.458-3.435A.531.531,0,0,0,19.094,15.528Z" transform="translate(346.95 149.125)" fill="#a6aacc"/>
                              <path id="Icon_ionic-ios-arrow-round-up" data-name="Icon ionic-ios-arrow-round-up" d="M19.094,12.229a.544.544,0,0,1-.767,0L15.79,9.7v9.641a.542.542,0,0,1-1.083,0V9.7L12.17,12.238a.548.548,0,0,1-.767,0,.54.54,0,0,1,0-.763l3.458-3.435h0a.608.608,0,0,1,.171-.113.517.517,0,0,1,.208-.042.543.543,0,0,1,.379.154l3.458,3.435A.531.531,0,0,1,19.094,12.229Z" transform="translate(352.737 149.118)" fill="#a6aacc"/>
                            </g>
                        </svg>                              
                    </div>
                       </div>
                        </div>
                        <div class="table-cell w-60">
                            <div class="flex items-center space-x-2">
                                <div>
                                    Date
                                </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.787" height="12" viewBox="0 0 13.787 12">
                                    <g id="Arrows" transform="translate(-358.198 -157)">
                                      <path id="Icon_ionic-ios-arrow-round-down" data-name="Icon ionic-ios-arrow-round-down" d="M19.094,15.528a.544.544,0,0,0-.767,0l-2.537,2.53V8.413a.542.542,0,0,0-1.083,0v9.641L12.17,15.519a.548.548,0,0,0-.767,0,.54.54,0,0,0,0,.763l3.458,3.435h0a.608.608,0,0,0,.171.113.517.517,0,0,0,.208.042.543.543,0,0,0,.379-.154l3.458-3.435A.531.531,0,0,0,19.094,15.528Z" transform="translate(346.95 149.125)" fill="#a6aacc"/>
                                      <path id="Icon_ionic-ios-arrow-round-up" data-name="Icon ionic-ios-arrow-round-up" d="M19.094,12.229a.544.544,0,0,1-.767,0L15.79,9.7v9.641a.542.542,0,0,1-1.083,0V9.7L12.17,12.238a.548.548,0,0,1-.767,0,.54.54,0,0,1,0-.763l3.458-3.435h0a.608.608,0,0,1,.171-.113.517.517,0,0,1,.208-.042.543.543,0,0,1,.379.154l3.458,3.435A.531.531,0,0,1,19.094,12.229Z" transform="translate(352.737 149.118)" fill="#a6aacc"/>
                                    </g>
                                </svg>                              
                            </div>
                               </div>
                        </div>
                        <div class="table-cell w-36">
                            <div class="flex items-center space-x-2">
                                <div>
                                    Load Number
                                </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.787" height="12" viewBox="0 0 13.787 12">
                                    <g id="Arrows" transform="translate(-358.198 -157)">
                                      <path id="Icon_ionic-ios-arrow-round-down" data-name="Icon ionic-ios-arrow-round-down" d="M19.094,15.528a.544.544,0,0,0-.767,0l-2.537,2.53V8.413a.542.542,0,0,0-1.083,0v9.641L12.17,15.519a.548.548,0,0,0-.767,0,.54.54,0,0,0,0,.763l3.458,3.435h0a.608.608,0,0,0,.171.113.517.517,0,0,0,.208.042.543.543,0,0,0,.379-.154l3.458-3.435A.531.531,0,0,0,19.094,15.528Z" transform="translate(346.95 149.125)" fill="#a6aacc"/>
                                      <path id="Icon_ionic-ios-arrow-round-up" data-name="Icon ionic-ios-arrow-round-up" d="M19.094,12.229a.544.544,0,0,1-.767,0L15.79,9.7v9.641a.542.542,0,0,1-1.083,0V9.7L12.17,12.238a.548.548,0,0,1-.767,0,.54.54,0,0,1,0-.763l3.458-3.435h0a.608.608,0,0,1,.171-.113.517.517,0,0,1,.208-.042.543.543,0,0,1,.379.154l3.458,3.435A.531.531,0,0,1,19.094,12.229Z" transform="translate(352.737 149.118)" fill="#a6aacc"/>
                                    </g>
                                </svg>                              
                            </div>
                               </div>
                        </div>
                        <div class="table-cell w-36">
                            <div class="flex items-center space-x-2">
                                <div>
                                    Party
                                </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.787" height="12" viewBox="0 0 13.787 12">
                                    <g id="Arrows" transform="translate(-358.198 -157)">
                                      <path id="Icon_ionic-ios-arrow-round-down" data-name="Icon ionic-ios-arrow-round-down" d="M19.094,15.528a.544.544,0,0,0-.767,0l-2.537,2.53V8.413a.542.542,0,0,0-1.083,0v9.641L12.17,15.519a.548.548,0,0,0-.767,0,.54.54,0,0,0,0,.763l3.458,3.435h0a.608.608,0,0,0,.171.113.517.517,0,0,0,.208.042.543.543,0,0,0,.379-.154l3.458-3.435A.531.531,0,0,0,19.094,15.528Z" transform="translate(346.95 149.125)" fill="#a6aacc"/>
                                      <path id="Icon_ionic-ios-arrow-round-up" data-name="Icon ionic-ios-arrow-round-up" d="M19.094,12.229a.544.544,0,0,1-.767,0L15.79,9.7v9.641a.542.542,0,0,1-1.083,0V9.7L12.17,12.238a.548.548,0,0,1-.767,0,.54.54,0,0,1,0-.763l3.458-3.435h0a.608.608,0,0,1,.171-.113.517.517,0,0,1,.208-.042.543.543,0,0,1,.379.154l3.458,3.435A.531.531,0,0,1,19.094,12.229Z" transform="translate(352.737 149.118)" fill="#a6aacc"/>
                                    </g>
                                </svg>                              
                            </div>
                               </div>
                        </div>
                        <div class="table-cell w-36">
                            <div class="flex items-center space-x-2">
                                <div>
                                    Driver
                                </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.787" height="12" viewBox="0 0 13.787 12">
                                    <g id="Arrows" transform="translate(-358.198 -157)">
                                      <path id="Icon_ionic-ios-arrow-round-down" data-name="Icon ionic-ios-arrow-round-down" d="M19.094,15.528a.544.544,0,0,0-.767,0l-2.537,2.53V8.413a.542.542,0,0,0-1.083,0v9.641L12.17,15.519a.548.548,0,0,0-.767,0,.54.54,0,0,0,0,.763l3.458,3.435h0a.608.608,0,0,0,.171.113.517.517,0,0,0,.208.042.543.543,0,0,0,.379-.154l3.458-3.435A.531.531,0,0,0,19.094,15.528Z" transform="translate(346.95 149.125)" fill="#a6aacc"/>
                                      <path id="Icon_ionic-ios-arrow-round-up" data-name="Icon ionic-ios-arrow-round-up" d="M19.094,12.229a.544.544,0,0,1-.767,0L15.79,9.7v9.641a.542.542,0,0,1-1.083,0V9.7L12.17,12.238a.548.548,0,0,1-.767,0,.54.54,0,0,1,0-.763l3.458-3.435h0a.608.608,0,0,1,.171-.113.517.517,0,0,1,.208-.042.543.543,0,0,1,.379.154l3.458,3.435A.531.531,0,0,1,19.094,12.229Z" transform="translate(352.737 149.118)" fill="#a6aacc"/>
                                    </g>
                                </svg>                              
                            </div>
                               </div>
                        </div>
                        <div class="table-cell w-36">
                            <div class="flex items-center space-x-2">
                                <div>
                                    Origin
                                </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.787" height="12" viewBox="0 0 13.787 12">
                                    <g id="Arrows" transform="translate(-358.198 -157)">
                                      <path id="Icon_ionic-ios-arrow-round-down" data-name="Icon ionic-ios-arrow-round-down" d="M19.094,15.528a.544.544,0,0,0-.767,0l-2.537,2.53V8.413a.542.542,0,0,0-1.083,0v9.641L12.17,15.519a.548.548,0,0,0-.767,0,.54.54,0,0,0,0,.763l3.458,3.435h0a.608.608,0,0,0,.171.113.517.517,0,0,0,.208.042.543.543,0,0,0,.379-.154l3.458-3.435A.531.531,0,0,0,19.094,15.528Z" transform="translate(346.95 149.125)" fill="#a6aacc"/>
                                      <path id="Icon_ionic-ios-arrow-round-up" data-name="Icon ionic-ios-arrow-round-up" d="M19.094,12.229a.544.544,0,0,1-.767,0L15.79,9.7v9.641a.542.542,0,0,1-1.083,0V9.7L12.17,12.238a.548.548,0,0,1-.767,0,.54.54,0,0,1,0-.763l3.458-3.435h0a.608.608,0,0,1,.171-.113.517.517,0,0,1,.208-.042.543.543,0,0,1,.379.154l3.458,3.435A.531.531,0,0,1,19.094,12.229Z" transform="translate(352.737 149.118)" fill="#a6aacc"/>
                                    </g>
                                </svg>                              
                            </div>
                               </div>
                        </div>
                        <div class="table-cell w-36">
                            <div class="flex items-center space-x-2">
                                <div>
                                    Destination
                                </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.787" height="12" viewBox="0 0 13.787 12">
                                    <g id="Arrows" transform="translate(-358.198 -157)">
                                      <path id="Icon_ionic-ios-arrow-round-down" data-name="Icon ionic-ios-arrow-round-down" d="M19.094,15.528a.544.544,0,0,0-.767,0l-2.537,2.53V8.413a.542.542,0,0,0-1.083,0v9.641L12.17,15.519a.548.548,0,0,0-.767,0,.54.54,0,0,0,0,.763l3.458,3.435h0a.608.608,0,0,0,.171.113.517.517,0,0,0,.208.042.543.543,0,0,0,.379-.154l3.458-3.435A.531.531,0,0,0,19.094,15.528Z" transform="translate(346.95 149.125)" fill="#a6aacc"/>
                                      <path id="Icon_ionic-ios-arrow-round-up" data-name="Icon ionic-ios-arrow-round-up" d="M19.094,12.229a.544.544,0,0,1-.767,0L15.79,9.7v9.641a.542.542,0,0,1-1.083,0V9.7L12.17,12.238a.548.548,0,0,1-.767,0,.54.54,0,0,1,0-.763l3.458-3.435h0a.608.608,0,0,1,.171-.113.517.517,0,0,1,.208-.042.543.543,0,0,1,.379.154l3.458,3.435A.531.531,0,0,1,19.094,12.229Z" transform="translate(352.737 149.118)" fill="#a6aacc"/>
                                    </g>
                                </svg>                              
                            </div>
                               </div>
                        </div>
                        <div class="table-cell w-36">
                            <div class="flex items-center space-x-2">
                                <div>
                                    Rate
                                </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.787" height="12" viewBox="0 0 13.787 12">
                                    <g id="Arrows" transform="translate(-358.198 -157)">
                                      <path id="Icon_ionic-ios-arrow-round-down" data-name="Icon ionic-ios-arrow-round-down" d="M19.094,15.528a.544.544,0,0,0-.767,0l-2.537,2.53V8.413a.542.542,0,0,0-1.083,0v9.641L12.17,15.519a.548.548,0,0,0-.767,0,.54.54,0,0,0,0,.763l3.458,3.435h0a.608.608,0,0,0,.171.113.517.517,0,0,0,.208.042.543.543,0,0,0,.379-.154l3.458-3.435A.531.531,0,0,0,19.094,15.528Z" transform="translate(346.95 149.125)" fill="#a6aacc"/>
                                      <path id="Icon_ionic-ios-arrow-round-up" data-name="Icon ionic-ios-arrow-round-up" d="M19.094,12.229a.544.544,0,0,1-.767,0L15.79,9.7v9.641a.542.542,0,0,1-1.083,0V9.7L12.17,12.238a.548.548,0,0,1-.767,0,.54.54,0,0,1,0-.763l3.458-3.435h0a.608.608,0,0,1,.171-.113.517.517,0,0,1,.208-.042.543.543,0,0,1,.379.154l3.458,3.435A.531.531,0,0,1,19.094,12.229Z" transform="translate(352.737 149.118)" fill="#a6aacc"/>
                                    </g>
                                  </svg>                              
                            </div>
                               </div>
                        </div>
                        <div class="table-cell w-36">Confirmation</div>
                        <div class="table-cell w-36">Manage</div>
                    </div>
                </div>
                <div class="table-body text-xs pb-36" style="max-height: 90vh; overflow-y: scroll;">
                    <div class="table-row" v-for="(tbody, index) in tbodys" :key="index">
                        <div class="table-cell p-4 w-28">
                            <div class="text-[#8C8C8D] pb-2 w-24">{{tbody.location}}</div>
                            <div class="w-24">
                                <div v-if="tbody.status_paid" class="bg-[#EBEEF6] text-xs p-2 px-8 text-[#3C5AA8] uppercase rounded-br-2xl rounded-tl-2xl">{{tbody.status_paid}}</div>
                                <div v-if="tbody.pending" class="bg-[#FFEFF0] text-center text-xs p-2 px-5 text-[#F18265] uppercase rounded-br-2xl rounded-tl-2xl">{{tbody.pending}}</div>
                                <div v-if="tbody.completed" class="bg-[#E7FBF5] text-center text-xs p-2 px-3 text-[#15D89D] uppercase rounded-br-2xl rounded-tl-2xl">{{tbody.completed}}</div>
                            </div>
                        </div>
                        <div class="table-cell">
                            <div class="flex">
                                <div class="text-[#8C8C8D] uppercase font-semibold show-text">{{tbody.date}}</div>
                            </div>
                            <div class="flex">
                                <div class="text-[black]  font-semibold show-text">{{tbody.hours}}</div>
                            </div>
                        </div>
                        <div class="table-cell text-[#8C8C8D]">{{tbody.loadnumber}}</div>
                        <div class="table-cell">
                            <div class="flex items-center cursor-pointer space-x-1 bg-[#EEEFF6] p-2 w-20 px-3 rounded-br-xl rounded-tl-xl">
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
                        <div class="table-cell text-[#8C8C8D]">{{tbody.driver}}</div>
                        <div class="table-cell text-[#8C8C8D]">{{tbody.origin}}</div>
                        <div class="table-cell text-[#8C8C8D]">{{tbody.destination}}</div>
                        <div class="table-cell text-[#8C8C8D]">{{tbody.rate}}</div>
                        <div class="table-cell text-[#8C8C8D]">
                         <div v-if="tbody.paid" class="flex cursor-pointer space-x-2 items-center uppercase text-[#3C5AA8] p-2 w-28 px-8 rounded-tl-2xl rounded-br-2xl bg-[#EEEFF6]">
                            <div class="">
                                {{tbody.paid}}
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12.419" height="12.421" viewBox="0 0 12.419 12.421">
                                    <path id="Icon_awesome-check-double" data-name="Icon awesome-check-double" d="M12.247,4.239l-.961-.961a.58.58,0,0,0-.822,0L4.655,9.088l-2.7-2.7a.58.58,0,0,0-.822,0l-.963.963a.583.583,0,0,0,0,.825l4.075,4.077a.58.58,0,0,0,.822,0l7.18-7.185A.585.585,0,0,0,12.247,4.239ZM4.381,6.81c.15.153.548,0,.548,0L9.974,1.76a.389.389,0,0,0,0-.548l-1.1-1.1a.385.385,0,0,0-.548,0L4.655,3.788,3.311,2.441a.385.385,0,0,0-.548,0l-1.1,1.1a.389.389,0,0,0,0,.548Z" transform="translate(0.004 0.002)" fill="#3c5aa8"/>
                                  </svg>                                  
                            </div>
                         </div>
                         <div v-if="tbody.pay_driver" class="flex cursor-pointer space-x-2 items-center uppercase text-[white] p-2 w-28 rounded-tl-2xl rounded-br-2xl bg-[#4CBC9A]">
                            <div>
                                <svg id="add-user" xmlns="http://www.w3.org/2000/svg" width="13.386" height="18" viewBox="0 0 13.386 18">
                                    <path id="Path_13660" data-name="Path 13660" d="M29.815,18.891a2.66,2.66,0,0,0,0-1.475c-.387-1.154-1.932-1.875-3.033-2.359-.431-.189-1.626-.509-1.77-1.053-.225-.859.631-1.514,1.012-2.19a6.591,6.591,0,0,0,.8-2.485c.235-2.9-1.541-4.59-4.086-4.3A3.411,3.411,0,0,0,19.663,8.4a6.114,6.114,0,0,0,1.264,4.129c.312.429.64.7.59,1.222-.059.611-.712.781-1.179.969a13.611,13.611,0,0,0-1.432.716c-.97.536-2.035,1.181-2.275,2.064-.52,1.918,1.191,2.525,2.65,2.806a1.262,1.262,0,0,1,.36-.727l.768-.769a1.273,1.273,0,0,1,1.8,0l.444.444,1.6-1.6a1.273,1.273,0,0,1,1.8,0l.768.768a1.275,1.275,0,0,1,0,1.8l-.174.174C28.13,20.2,29.472,19.783,29.815,18.891Z" transform="translate(-16.535 -4.999)" fill="#fff"/>
                                    <path id="Path_13661" data-name="Path 13661" d="M40.6,72.232a.407.407,0,0,0,0-.576l-.768-.768a.407.407,0,0,0-.576,0L37.045,73.1,35.99,72.04a.408.408,0,0,0-.576,0l-.768.768a.408.408,0,0,0,0,.576l1.344,1.344.768.768a.407.407,0,0,0,.576,0l.768-.768Z" transform="translate(-30.928 -57.615)" fill="#fff"/>
                                </svg>                                                                                                    
                            </div>
                            <div class="">
                                {{tbody.pay_driver}}
                            </div>
                         </div>
                         <div v-if="tbody.check_bol" class="flex cursor-pointer space-x-2 items-center uppercase text-[#4CBC9A] p-2 w-28 rounded-tl-2xl rounded-br-2xl bg-[#EDF8F5]">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17.433" height="13" viewBox="0 0 17.433 13">
                                    <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M5.921,17.322.255,11.656a.872.872,0,0,1,0-1.233L1.488,9.191a.872.872,0,0,1,1.233,0l3.817,3.817,8.175-8.175a.872.872,0,0,1,1.233,0l1.233,1.233a.872.872,0,0,1,0,1.233L7.154,17.322A.872.872,0,0,1,5.921,17.322Z" transform="translate(0 -4.577)" fill="#5fc4a5"/>
                                </svg>                                                                                                                                     
                            </div>
                            <div class="">
                                {{tbody.check_bol}}
                            </div>
                         </div>
                        </div>
                        <div class="table-cell">
                            <div class="flex space-x-3">
                                <div  class="bg-gradient-to-l from-[#21315D] via-[#21325E] to-[#3C5AA8] cursor-pointer px-3 flex items-center space-x-1 p-2 rounded-br-xl rounded-tl-xl">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18.128" height="14.999" viewBox="0 0 18.128 14.999">
                                            <g id="Rapit" transform="translate(79.414 -1.022)">
                                              <g id="qr-code-scan" transform="translate(-77.349 1.522)">
                                                <path id="Path_2308" data-name="Path 2308" d="M305.953,80.79h-1.959a.41.41,0,0,0-.009.82h1.968a.694.694,0,0,1,.693.693v1.959a.41.41,0,1,0,.82.009V82.3A1.515,1.515,0,0,0,305.953,80.79Z" transform="translate(-293.467 -80.789)" fill="#fff" stroke="#fff" stroke-width="1"/>
                                                <path id="Path_2309" data-name="Path 2309" d="M81.2,84.673a.409.409,0,0,0,.409-.409h0V82.3a.694.694,0,0,1,.693-.693h1.959a.41.41,0,1,0,.009-.82H82.3A1.515,1.515,0,0,0,80.79,82.3v1.959a.409.409,0,0,0,.409.409Z" transform="translate(-80.79 -80.79)" fill="#fff" stroke="#fff" stroke-width="1"/>
                                                <path id="Path_2310" data-name="Path 2310" d="M84.262,306.646H82.3a.694.694,0,0,1-.693-.693v-1.959a.41.41,0,0,0-.82-.009v1.968a1.515,1.515,0,0,0,1.513,1.513h1.959a.41.41,0,1,0,.009-.82Z" transform="translate(-80.79 -293.467)" fill="#fff" stroke="#fff" stroke-width="1"/>
                                                <path id="Path_2311" data-name="Path 2311" d="M307.056,303.67a.408.408,0,0,0-.409.408h0v1.959a.694.694,0,0,1-.693.693h-1.96a.41.41,0,0,0-.009.82h1.968a1.515,1.515,0,0,0,1.513-1.513V304.08a.408.408,0,0,0-.408-.408Z" transform="translate(-293.467 -293.554)" fill="#fff" stroke="#fff" stroke-width="1"/>
                                              </g>
                                              <g id="Group_362" data-name="Group 362" transform="translate(-73.995 5.109)">
                                                <g id="Group_65" data-name="Group 65">
                                                  <g id="layer1">
                                                    <path id="path839" d="M161.81,159.8h6.968l-3.937,6.826-.554-.927,2.81-4.976h-4.757Z" transform="translate(-161.487 -159.8)" fill="#fff"/>
                                                    <path id="path841" d="M154.69,187.85h4.922l-.418.7-3.023.016,1.528,2.48-.54.926Z" transform="translate(-154.69 -186.577)" fill="#fff"/>
                                                    <path id="path843" d="M168,170.437l.834.377-.567-.938-.783-.366Z" transform="translate(-166.899 -169.069)" fill="#fff"/>
                                                  </g>
                                                </g>
                                              </g>
                                              <path id="Path_15154" data-name="Path 15154" d="M.41,0H3.72a.41.41,0,0,1,0,.82H.41S0,.637,0,.41A.41.41,0,0,1,.41,0Z" transform="translate(-79.414 8.385)" fill="#fff"/>
                                              <rect id="Rectangle_2163" data-name="Rectangle 2163" width="4.13" height="0.82" rx="0.41" transform="translate(-65.416 8.445)" fill="#fff"/>
                                            </g>
                                          </svg>                                                                                
                                    </div>
                                    <div class="text-[white] font-extrabold uppercase">
                                        {{tbody.summary}}
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
      location: '642477c...a797c',
      status_paid: 'paid',
      pending: '',
      completed: '',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: 'Paid',
      pay_driver: '',
      check_bol: '',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: 'paid',
      pending: '',
      completed: '',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$555',
      paid: 'paid',
      pay_driver: '',
      check_bol: '',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: 'pedding',
      completed: '',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$999.5',
      paid: 'paid',
      pay_driver: '',
      check_bol: '',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: 'pending',
      completed: '',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: 'pay driver',
      check_bol: '',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
     

 destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: 'pay driver',
      check_bol: '',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
    {
      location: '642477c...a797c',
      status_paid: '',
      pending: '',
      completed: 'completed',
      date: '03/23/2023',
      hours: '03 hours ago',
      loadnumber: 'Load #52871740',
      show_btn: 'Show',
      driver: '640fd2d ... 092d0',
      origin: 'New York NY 10001',
      destination: 'Washington DC 20500',
      rate: '$55',
      paid: '',
      pay_driver: '',
      check_bol: 'Check Bol',
      summary: 'summary',
    },
  ];
</script>


<style scoped>
.show-text {
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
.tbody-container {
    height: 100vh;
    overflow-y: auto;
  }
  
</style>