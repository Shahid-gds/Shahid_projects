<template>
    <div class="w-full">
        <div class="absolute right-0 mr-7 top-0 mt-20 p-2 font-extrabold text-[#3C5AA8] text-2xl cursor-pointer">&#10006;</div>
        <div class="bg-[white] flex space-x-5 p-6 shadow-md rounded-xl" v-for="detail in driverDetails">
            <div class="w-48 h-48 border-4 border-[white] shadow-lg flex items-center p-1 rounded-bl-xl rounded-tr-xl">
                <img class="w-full h-full object-contain rounded-bl-xl rounded-tr-xl" :src="detail.profileImg" :alt="detail.profileImg">
            </div>
            <div class="mt-3 flex-1">
                <h1 class="text-[#3C5AA8] text-xl font-bold">
                    {{detail.name}}
                </h1>
                <p>
                    <span class="text-[#242021] text-sm">Driver's License: </span>
                    <span class="text-[#ADAEB0] text-sm">{{detail.license}}</span>
                </p>
            <div class="mt-10">
                <table class="w-full">
                    <tbody class="">
                        <tr class="border-t-2 text-sm">
                          <td class="w-10 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19.444" viewBox="0 0 25 19.444">
                            <path id="Icon_awesome-address-card" data-name="Icon awesome-address-card" d="M22.917,2.25H2.083A2.084,2.084,0,0,0,0,4.333V19.611a2.084,2.084,0,0,0,2.083,2.083H22.917A2.084,2.084,0,0,0,25,19.611V4.333A2.084,2.084,0,0,0,22.917,2.25ZM7.639,6.417A2.778,2.778,0,1,1,4.861,9.194,2.78,2.78,0,0,1,7.639,6.417ZM12.5,16.694a.91.91,0,0,1-.972.833H3.75a.91.91,0,0,1-.972-.833v-.833a2.733,2.733,0,0,1,2.917-2.5h.217a4.471,4.471,0,0,0,3.455,0h.217a2.733,2.733,0,0,1,2.917,2.5ZM22.222,14.4a.348.348,0,0,1-.347.347h-6.25a.348.348,0,0,1-.347-.347v-.694a.348.348,0,0,1,.347-.347h6.25a.348.348,0,0,1,.347.347Zm0-2.778a.348.348,0,0,1-.347.347h-6.25a.348.348,0,0,1-.347-.347v-.694a.348.348,0,0,1,.347-.347h6.25a.348.348,0,0,1,.347.347Zm0-2.778a.348.348,0,0,1-.347.347h-6.25a.348.348,0,0,1-.347-.347V8.153a.348.348,0,0,1,.347-.347h6.25a.348.348,0,0,1,.347.347Z" transform="translate(0 -2.25)" fill="#c9cce6"/>
                          </svg>
                          </td>
                          <td>Driver ID:</td>
                          <td class="text-[#8C8C8D]">{{detail.Id}}</td>
                        </tr>
                        <tr class="border-t-2 text-sm">
                          <td class="w-10 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                <path id="Icon_awesome-envelope-open" data-name="Icon awesome-envelope-open" d="M25,22.656A2.344,2.344,0,0,1,22.656,25H2.344A2.344,2.344,0,0,1,0,22.656V9.8A2.344,2.344,0,0,1,.9,7.956C2.114,7,3.12,6.23,8.915,2.023,9.737,1.424,11.367-.017,12.5,0c1.133-.017,2.763,1.424,3.585,2.023,5.8,4.206,6.8,4.98,8.018,5.933A2.344,2.344,0,0,1,25,9.8Zm-3.206-9.6a.39.39,0,0,0-.554-.093c-1.115.824-2.708,1.988-5.155,3.764-.822.6-2.452,2.04-3.585,2.023-1.133.017-2.762-1.423-3.585-2.023-2.447-1.776-4.04-2.94-5.155-3.764a.39.39,0,0,0-.554.093l-.443.644a.391.391,0,0,0,.09.535c1.118.825,2.708,1.987,5.142,3.753.99.722,2.76,2.335,4.505,2.323,1.744.012,3.514-1.6,4.505-2.323,2.434-1.767,4.024-2.928,5.142-3.753a.391.391,0,0,0,.09-.536l-.443-.644Z" transform="translate(0 0)" fill="#c9cce6"/>
                              </svg>                              
                          </td>
                          <td>Email Address:</td>
                          <td class="text-[#8C8C8D]">{{detail.email}}</td>
                        </tr>
                        <tr class="border-t-2 text-sm">
                          <td class="w-10 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                <path id="Icon_awesome-phone" data-name="Icon awesome-phone" d="M24.091,1.2,19.013.029A1.179,1.179,0,0,0,17.67.708L15.327,6.176a1.169,1.169,0,0,0,.337,1.367l2.959,2.422a18.49,18.49,0,0,1-3.748,5.253,17.529,17.529,0,0,1-4.9,3.4L7.548,15.659a1.171,1.171,0,0,0-1.367-.337L.713,17.665a1.186,1.186,0,0,0-.684,1.348L1.2,24.091A1.171,1.171,0,0,0,2.343,25,22.653,22.653,0,0,0,25,2.343,1.17,1.17,0,0,0,24.091,1.2Z" transform="translate(0.001 0.001)" fill="#c9cce6"/>
                              </svg>                                                           
                          </td>
                          <td>Phone Number:</td>
                          <td class="text-[#8C8C8D]">{{detail.phone}}</td>
                        </tr>
                        <tr class="border-t-2 text-sm">
                          <td class="w-10 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                <path id="Icon_ionic-md-list-box" data-name="Icon ionic-md-list-box" d="M26.9,4.5H7.1A2.6,2.6,0,0,0,4.5,7.1V26.9a2.6,2.6,0,0,0,2.6,2.6H26.9a2.6,2.6,0,0,0,2.6-2.6V7.1A2.6,2.6,0,0,0,26.9,4.5ZM20.125,24.292H9.708V21.167H20.125Zm4.167-5.729H9.708V15.437H24.292Zm0-5.729H9.708V9.708H24.292Z" transform="translate(-4.5 -4.5)" fill="#c9cce6"/>
                              </svg>                                                                                       
                          </td>
                          <td>Role:</td>
                          <td class="text-[#8C8C8D]">{{detail.role}}</td>
                        </tr>
                        <tr class="border-t-2 text-sm">
                          <td class="w-10 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25.397" viewBox="0 0 25 25.397">
                                <path id="Icon_awesome-flag" data-name="Icon awesome-flag" d="M17.505,4.9c-2.658,0-4.853-1.725-8.2-1.725a9.641,9.641,0,0,0-3.375.6A2.778,2.778,0,1,0,1.753,5.057v19.15a1.19,1.19,0,0,0,1.19,1.19h.794a1.19,1.19,0,0,0,1.19-1.19V19.524a13.859,13.859,0,0,1,5.676-1.1c2.658,0,4.853,1.725,8.2,1.725a10.384,10.384,0,0,0,6.077-2.027,1.585,1.585,0,0,0,.687-1.307V4.759A1.587,1.587,0,0,0,23.306,3.32a14.441,14.441,0,0,1-5.8,1.58Z" transform="translate(-0.563 0)" fill="#c9cce6"/>
                              </svg>                                                                                                                    
                          </td>
                          <td>Country:</td>
                          <td class="text-[#8C8C8D]">{{detail.country}}</td>
                        </tr>
                        <tr class="border-t-2 text-sm">
                          <td class="w-10 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22.222" viewBox="0 0 25 22.222">
                                <path id="Icon_awesome-map-marked-alt" data-name="Icon awesome-map-marked-alt" d="M12.5,0A5.469,5.469,0,0,0,7.031,5.469c0,2.442,3.574,6.892,4.944,8.508a.685.685,0,0,0,1.05,0c1.369-1.615,4.944-6.066,4.944-8.508A5.469,5.469,0,0,0,12.5,0Zm0,7.292a1.823,1.823,0,1,1,1.823-1.823A1.823,1.823,0,0,1,12.5,7.292ZM.873,9.373A1.389,1.389,0,0,0,0,10.662V21.527a.7.7,0,0,0,.952.645l5.992-2.727V9.328a13.144,13.144,0,0,1-.922-2.015ZM12.5,15.611a2.074,2.074,0,0,1-1.585-.736c-.853-1.007-1.761-2.154-2.582-3.33v7.9l8.333,2.778V11.545c-.821,1.176-1.728,2.323-2.582,3.33A2.075,2.075,0,0,1,12.5,15.611ZM24.048,6.995,18.056,9.722v12.5l6.071-2.428A1.389,1.389,0,0,0,25,18.5V7.64A.7.7,0,0,0,24.048,6.995Z" fill="#c9cce6"/>
                              </svg>                                                                                                                                                 
                          </td>
                          <td>Full Address:</td>
                          <td class="text-[#8C8C8D]">{{detail.address}}</td>
                        </tr>
                        <tr class="border-t-2 border-b-2 text-sm">
                          <td class="w-10 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.125" height="24.167" viewBox="0 0 18.125 24.167">
                                <path id="Icon_awesome-map-marker-alt" data-name="Icon awesome-map-marker-alt" d="M8.131,23.679C1.273,13.737,0,12.716,0,9.062a9.062,9.062,0,1,1,18.125,0c0,3.654-1.273,4.674-8.131,14.617a1.133,1.133,0,0,1-1.863,0Zm.931-10.841A3.776,3.776,0,1,0,5.286,9.062,3.776,3.776,0,0,0,9.062,12.839Z" fill="#c9cce6"/>
                              </svg>                                                                                                                                              
                          </td>
                          <td>Current Location:</td>
                          <td class="text-[#8C8C8D]">{{detail.loction}}</td>
                        </tr>
                        <tr class="text-sm">
                          <td class="w-10 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.785" height="23.754" viewBox="0 0 20.785 23.754">
                                <path id="Icon_metro-attachment" data-name="Icon metro-attachment" d="M18.238,9.515,16.731,8.009,9.2,15.542a3.2,3.2,0,1,0,4.521,4.52l9.042-9.04a5.327,5.327,0,1,0-7.534-7.533L5.732,12.981l-.02.02A7.43,7.43,0,0,0,16.22,23.507l.019-.02h0l6.48-6.479L21.212,15.5l-6.48,6.478-.02.02a5.3,5.3,0,0,1-7.495-7.492l.021-.02h0L16.732,5a3.2,3.2,0,1,1,4.521,4.52l-9.042,9.04A1.065,1.065,0,0,1,10.7,17.049l7.535-7.534Z" transform="translate(-3.535 -1.928)" fill="#c9cce6"/>
                              </svg>                                                                                                                                                                               
                          </td>
                          <td>Attachments:</td>
                          <td class="text-[#8C8C8D] flex justify-between py-4">
                            <div>
                                <span class="">Lorem_ipsum_dolor_sit.pdf</span>
                            </div>
                            <div class="flex space-x-2">
                              <div>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.336" height="18.336" viewBox="0 0 18.336 18.336">
                                    <g id="Icon_feather-download" data-name="Icon feather-download" transform="translate(-3 -3)">
                                      <path id="Path_13565" data-name="Path 13565" d="M19.836,22.5v3.408a1.7,1.7,0,0,1-1.7,1.7H6.2a1.7,1.7,0,0,1-1.7-1.7V22.5" transform="translate(0 -7.776)" fill="none" stroke="#3c5aa8" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                      <path id="Path_13566" data-name="Path 13566" d="M10.5,15l4.26,4.26L19.02,15" transform="translate(-2.592 -4.536)" fill="none" stroke="#3c5aa8" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                      <path id="Path_13567" data-name="Path 13567" d="M18,14.724V4.5" transform="translate(-5.832)" fill="none" stroke="#3c5aa8" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                    </g>
                                  </svg>
                                  </span>
                              </div>
                                  <div class="text-[#3C5AA8]">
                                    <span>Download</span>
                                  </div>
                                 
                            </div>
                          </td>
                        </tr>
                        <tr class="border-b-2">
                          <td class="w-10 p-4">                                                                                                                                                                               
                          </td>
                          <td class="p-4"></td>
                          <td class="text-[#8C8C8D] flex justify-between py-4 border-t-2 text-sm">
                            <div>
                                <span>Lorem_ipsum_dolor_sit.pdf</span>
                            </div>
                            <div class="flex space-x-2">
                              <div>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.336" height="18.336" viewBox="0 0 18.336 18.336">
                                    <g id="Icon_feather-download" data-name="Icon feather-download" transform="translate(-3 -3)">
                                      <path id="Path_13565" data-name="Path 13565" d="M19.836,22.5v3.408a1.7,1.7,0,0,1-1.7,1.7H6.2a1.7,1.7,0,0,1-1.7-1.7V22.5" transform="translate(0 -7.776)" fill="none" stroke="#3c5aa8" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                      <path id="Path_13566" data-name="Path 13566" d="M10.5,15l4.26,4.26L19.02,15" transform="translate(-2.592 -4.536)" fill="none" stroke="#3c5aa8" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                      <path id="Path_13567" data-name="Path 13567" d="M18,14.724V4.5" transform="translate(-5.832)" fill="none" stroke="#3c5aa8" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                    </g>
                                  </svg>
                                  </span>
                              </div>
                                  <div class="text-[#3C5AA8]">
                                    <span>Download</span>
                                  </div>
                                 
                            </div>
                          </td>
                        </tr>
                      </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { onMounted, reactive } from 'vue';
const driverDetails = reactive([
  {
    profileImg: '',
    name: 'Test 2',
    license: '(419513015)',
    Id: '640fd2d4eeec07d7f94092d4',
    email: 'test2@user.com',
    phone: '1234567890',
    role: 'Driver',
    country: 'USA',
    address: 'building # 2,3 Austin,Texas,7000 USA',
    loction: '34.0207683,-118.1800417'
  }
]);

onMounted(() => {
  loadProfile();
});

async function loadProfile() {

  const profile4 = await import('../../../../assets/images/divers/profile4.svg')
  driverDetails[0].profileImg = profile4.default;
}
</script>