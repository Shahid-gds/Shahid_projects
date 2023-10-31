<template>
    <div class="index w-full flex items-center justify-between 2xl:px-56 md:px-24 px-10">
        <div></div>
        <div class="flex items-center justify-center space-x-2 cursor-pointer rounded-tr-xl rounded-bl-xl view-btn">
            <div>
                <img src="@/assets/images/viewIcon.svg" alt=""> 
              </div>
              <div class="uppercase">
                <p>View Profile</p>
            </div>
        </div>
    </div>
      <div class="container mx-auto px-6">
       <div class="flex items-end space-x-4">
       <div>
        <div class="profile-div w-40 h-40 rounded-full -mt-20 p-8">
           <img src="@/assets/images/profileImg.svg" alt="">             
        </div>
        <div class="upload-profile w-10 h-10 -mt-10 ml-28 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22.33" height="18.379" viewBox="0 0 22.33 18.379">
                <path id="Icon_awesome-camera" data-name="Icon awesome-camera" d="M22.33,6.845V18.66a2.035,2.035,0,0,1-2.093,1.969H2.093A2.035,2.035,0,0,1,0,18.66V6.845A2.035,2.035,0,0,1,2.093,4.876H5.931l.536-1.35A2.09,2.09,0,0,1,8.426,2.25H13.9a2.09,2.09,0,0,1,1.958,1.276l.541,1.35h3.838A2.035,2.035,0,0,1,22.33,6.845ZM16.4,12.752a5.089,5.089,0,0,0-5.233-4.923,5.089,5.089,0,0,0-5.233,4.923,5.089,5.089,0,0,0,5.233,4.923A5.089,5.089,0,0,0,16.4,12.752Zm-1.4,0a3.735,3.735,0,0,1-3.838,3.61,3.735,3.735,0,0,1-3.838-3.61,3.735,3.735,0,0,1,3.838-3.61A3.735,3.735,0,0,1,15,12.752Z" transform="translate(0 -2.25)" fill="#3c5aa8"/>
            </svg>              
        </div>
       </div>
       <div>
        <h1 class="text-3xl">Franklin Smith</h1>
        <h5>#12345678910</h5>
       </div>
       </div>
       <div class="mt-16 sm:flex justify-between items-end">
        <div>
            <h2 class="text-xl">Company Profile</h2>
            <h3 class="text-sm">Update your company photo and details</h3>
        </div>
        <div class="button flex p-2 px-6 rounded-tr-xl rounded-bl-xl space-x-2 h-10 items-center">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18.467" height="17.371" viewBox="0 0 18.467 17.371">
                    <path id="Icon_awesome-save" data-name="Icon awesome-save" d="M17.888,6.048,14.43,2.8a2.044,2.044,0,0,0-1.4-.545H1.979A1.923,1.923,0,0,0,0,4.111V17.76a1.923,1.923,0,0,0,1.979,1.861h14.51a1.923,1.923,0,0,0,1.979-1.861V7.364a1.807,1.807,0,0,0-.58-1.316ZM9.234,17.14A2.563,2.563,0,0,1,6.6,14.658a2.563,2.563,0,0,1,2.638-2.482,2.563,2.563,0,0,1,2.638,2.482A2.563,2.563,0,0,1,9.234,17.14ZM13.191,5.332v3.9a.481.481,0,0,1-.495.465H3.133a.481.481,0,0,1-.495-.465V5.2a.481.481,0,0,1,.495-.465h9.42a.511.511,0,0,1,.35.136L13.046,5a.452.452,0,0,1,.145.329Z" transform="translate(0 -2.25)" fill="#fff"/>
                  </svg>                  
            </div>
            <div>
                <span>Save Changes</span>
            </div>
        </div>
       </div>
       <div class="public-profile mt-8 border-t-2 border-b-2 py-6 md:flex items-start">
            <div class="w-96">
                <h2 class="text-xl">Public Profile</h2>
                <h3 class="text-sm">This will bs displayed on your profile.</h3>
            </div>
           <div class="sm:flex items-center sm:space-x-10 xl:ml-36 mx-auto w-full">
            <!-- <div class="profile-div w-28 h-28 rounded-full p-6">
                <img src="@/assets/images/profileImg.svg" alt="">             
             </div> -->
             <div class="xl:w-3/5 space-y-4">
                <div class="relative text-gray-600 ">
                    <input class="border-2 w-full rounded-md p-2 px-12" type="Text" placeholder="User Name">
                    <div class="absolute left-4 top-0 mt-2">
                       <svg xmlns="http://www.w3.org/2000/svg" width="19.335" height="19.335" viewBox="0 0 19.335 19.335">
                           <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M9.667,10.876A5.438,5.438,0,1,0,4.229,5.438,5.439,5.439,0,0,0,9.667,10.876ZM14.5,12.084H12.42a6.574,6.574,0,0,1-5.506,0H4.834A4.833,4.833,0,0,0,0,16.918v.6a1.813,1.813,0,0,0,1.813,1.813H17.522a1.813,1.813,0,0,0,1.813-1.813v-.6A4.833,4.833,0,0,0,14.5,12.084Z" fill="#dbdbdb"/>
                        </svg>                                       
                    </div>
                </div>
                <div class="lg:flex w-full lg:space-x-3">
                    <div class="relative text-gray-600 w-full pb-5">
                        <input class="border-2 w-full rounded-md p-2 px-12" type="Text" placeholder="12345678910">
                        <div class="absolute left-4 top-0 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="37" viewBox="0 0 18 37">
                                <text id="_" data-name="#" transform="translate(0 29)" fill="#dbdbdb" font-size="30" font-family="AvenirLTStd-Black, Avenir LT Std" font-weight="800"><tspan x="0" y="0">#</tspan></text>
                              </svg>                                                                    
                        </div>
                    </div>
                    <div class="relative text-gray-600 w-full">
                        <input class="border-2 w-full rounded-md p-2 px-12" type="Text" placeholder="website123example.com">
                        <div class="absolute left-4 top-0 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="37" viewBox="0 0 18 37">
                                <text id="_" data-name="#" transform="translate(0 29)" fill="#dbdbdb" font-size="30" font-family="AvenirLTStd-Black, Avenir LT Std" font-weight="800"><tspan x="0" y="0">#</tspan></text>
                              </svg>                                                                    
                        </div>
                    </div>
                </div>
             </div>
           </div>
       </div>
       <div class="personal-detail border-b-2 py-6 md:flex items-start">
            <div class="sm:w-96">
                <h2 class="text-xl">Personal Details</h2>
                <h3 class="text-sm">Your personal details here..,</h3>
            </div>
           <div class="sm:flex items-center sm:space-x-10 sm:ml-36 mx-auto w-full">
             <div class="xl:w-3/5 space-y-4">
                <div class="lg:flex w-full lg:space-x-3">
                    <div class="relative text-gray-600 w-full pb-5">
                        <input class="border-2 w-full rounded-md p-2 px-12" type="Text" placeholder="+1 123 - 456 - 7890">
                        <div class="absolute left-4 top-0 mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19.151" height="19.667" viewBox="0 0 19.151 19.667">
                                <g id="XMLID_7_" transform="translate(-4.219)">
                                  <path id="XMLID_8_" d="M172.186,46.831a5.947,5.947,0,0,0-5.264-5.666c-.058-.007-.122-.017-.189-.029a2.736,2.736,0,0,0-.446-.049.749.749,0,0,0-.8.673.777.777,0,0,0,.116.61,1.152,1.152,0,0,0,.829.356c.082.011.16.022.225.037,2.629.587,3.515,1.511,3.947,4.118.011.064.015.142.02.225.019.312.058.96.755.96h0a1.238,1.238,0,0,0,.185-.015c.649-.1.629-.691.619-.976a1.447,1.447,0,0,1,0-.207A.277.277,0,0,0,172.186,46.831Z" transform="translate(-151.401 -38.578)" fill="#dbdbdb"/>
                                  <path id="XMLID_9_" d="M161.394,1.569c.078.006.152.011.213.02,4.317.664,6.3,2.71,6.853,7.061a2.545,2.545,0,0,1,.012.26c.005.34.017,1.047.776,1.062h.024a.745.745,0,0,0,.563-.214,1.189,1.189,0,0,0,.207-.91c0-.072-.006-.141-.006-.2A8.8,8.8,0,0,0,161.794.012a.308.308,0,0,0-.054,0,.372.372,0,0,1-.053,0c-.044,0-.1,0-.157-.008S161.381,0,161.3,0a.781.781,0,0,0-.86.8C160.4,1.5,161.072,1.545,161.394,1.569Z" transform="translate(-146.679)" fill="#dbdbdb"/>
                                  <path id="XMLID_10_" d="M21.573,29.32c-.092-.07-.187-.143-.276-.214-.471-.379-.973-.729-1.458-1.067l-.3-.211a3.01,3.01,0,0,0-1.708-.648,2.213,2.213,0,0,0-1.842,1.167.979.979,0,0,1-.84.51,1.668,1.668,0,0,1-.676-.17,8.145,8.145,0,0,1-4.256-4.144c-.4-.89-.268-1.471.429-1.944a1.968,1.968,0,0,0,1.08-1.726c-.059-1.087-2.457-4.358-3.468-4.729a1.969,1.969,0,0,0-1.338,0,3.874,3.874,0,0,0-2.411,1.983A3.686,3.686,0,0,0,4.56,21.1a24,24,0,0,0,5.268,8.019,25.533,25.533,0,0,0,7.991,5.306,4.425,4.425,0,0,0,.79.235c.073.016.137.031.183.043a.307.307,0,0,0,.078.011h.025a4.533,4.533,0,0,0,3.765-2.865C23.132,30.512,22.268,29.851,21.573,29.32Z" transform="translate(0 -15.047)" fill="#dbdbdb"/>
                                  <path id="XMLID_11_" d="M171.107,83.556a.909.909,0,0,0-.956.551.738.738,0,0,0,.031.641.96.96,0,0,0,.724.383,1.712,1.712,0,0,1,1.588,1.71.809.809,0,0,0,.77.8h0a.759.759,0,0,0,.091-.005c.489-.058.726-.418.7-1.068a3.051,3.051,0,0,0-.952-2.064A2.84,2.84,0,0,0,171.107,83.556Z" transform="translate(-155.744 -78.452)" fill="#dbdbdb"/>
                                </g>
                            </svg>                                                                                                  
                        </div>
                    </div>
                    <div class="relative text-gray-600 w-full">
                        <input class="border-2 w-full rounded-md p-2 px-12" type="Text" placeholder="franklinsmith@gmail.com">
                        <div class="absolute left-4 top-0 mt-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25.266" height="19.668" viewBox="0 0 25.266 19.668">
                                <path id="Icon_awesome-at" data-name="Icon awesome-at" d="M13.2.562C6.214.562.563,4.961.563,10.4S6.213,20.23,13.2,20.23a15.383,15.383,0,0,0,6.9-1.595.834.834,0,0,0,.283-1.4l-.518-.493a1.467,1.467,0,0,0-1.6-.2A11.427,11.427,0,0,1,13.2,17.693c-5.168,0-9.373-3.273-9.373-7.3s4.2-7.3,9.373-7.3c5.1,0,9.373,2.285,9.373,6.345a3.267,3.267,0,0,1-2.963,3.319c-.884-.018-.861-.51-.686-1.191l1.194-4.8c.146-.587-.432-1.132-1.2-1.132H16.621a.65.65,0,0,0-.684.476v0a4.62,4.62,0,0,0-3.055-.863c-3.8,0-7.021,2.468-7.021,6.006,0,2.589,1.874,4.2,4.89,4.2a5.752,5.752,0,0,0,3.82-1.52c.485,1.352,2.069,1.352,3.6,1.352,5.548,0,7.656-2.84,7.656-5.845C25.829,4.038,20.226.562,13.2.562Zm-1.1,12.072a1.611,1.611,0,0,1-1.837-1.617A2.955,2.955,0,0,1,13.24,8.133c1.136,0,1.814.6,1.814,1.617A3.052,3.052,0,0,1,12.091,12.634Z" transform="translate(-0.563 -0.563)" fill="#dbdbdb"/>
                              </svg>                                                                                                 
                        </div>
                    </div>
                </div>
             </div>
           </div>
       </div>
       <!-- <div class="Organizations py-6 md:flex items-start">
            <div class="sm:w-96">
                <h2 class="text-xl">Organizations</h2>
                <h3 class="text-sm">Your personal details here..,</h3>
            </div>
           <div class="lg:flex items-center sm:space-x-3 sm:ml-36 w-full">
             <div class="sm:w-3/5">
                <div class="lg:flex w-full lg:space-x-3">
                    <div class="pb-3">
                      <button class="flex justify-center py-5 space-x-2 rounded-2xl">
                        <div class="">
                            <img src="@/assets/images/join.svg" alt="">                                                                                          
                        </div>
                          <div class="uppercase">Join</div>
                      </button>
                    </div>
                    <div class="w-full">
                        <button class="flex  justify-center py-5 space-x-2 rounded-2xl">
                            <div class="">
                                <img src="@/assets/images/createIcon.svg" alt="">                                                                                          
                            </div>
                              <div class="uppercase">Create</div>
                          </button>
                    </div>
                </div>
             </div>
           </div>
       </div> -->
      </div>
    </template>
    <script setup>
 
    </script>
    
    <style scoped>
    .view-btn{
        background: #ffff;
        width: 176px;
        height: 48px;
    }
    .index{
        background: #F9F9F9;
        height: 127px;
    }
    p{
        color: #3C5AA8;
        font-size: 13px;
        font-weight: 600;
    }
    h1{
        color: #3C5AA8;
        font-weight: 600;
    }
    h5{
        color: #ADAEB0;
    }
    h3{
        color: #666668;
    }
    .profile-div{
        background: #254694;
    }
    .upload-profile{
        background: #ffff;
    }
    .button {
        background: #3C5AA8;
        color: white;
    }
    button{
        background: #254694;
        width: 250px;
        height: 60px;
        color: white;
    }
    @media only screen and (max-width: 768px) {
        button{
            width: 100%;
        }
       }
    </style>
        