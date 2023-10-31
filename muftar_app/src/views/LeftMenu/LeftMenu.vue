<template>
    <div class="bg-[#FFFFFF] w-72 h-screen">
      <div class="flex items-center space-x-10 p-6">
        <div>
            <img src="../../assets/images/logo.svg" alt="">
        </div>
            <div class="flex items-center" >
                <label class="bg-gradient-to-t from-[#D8C8C8]  via-[#FAFAFA] to-[#D8C8C8] h-6 w-12 rounded-3xl relative cursor-pointer overflow-hidden" :class="{toggleButton : 'toggleButton'}">
                <input type="checkbox" id="checkbox">
                <span class="left">
                                        
                </span>
                <span class="right">
               
                </span>
              </label>
              </div>
      </div>
      <div class="mt-2 bg-gradient-to-l from-[white] via-[white] to-[#F5F5F5] p-4 flex text-[#8D8D8D] justify-between px-6">
        <a href="#" class="flex space-x-2 items-center w-full">
           <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
              <path id="analysis" d="M10.771,8H22.355v2.256a.908.908,0,0,0,.908.908h2.256v7.311A5.311,5.311,0,0,0,23.853,17.2V12.991a1.092,1.092,0,0,0-.324-.782L21.308,9.988a1.092,1.092,0,0,0-.782-.324H10.375V8.4a.4.4,0,0,1,.4-.4Zm9.919,2.409V12.63a.2.2,0,0,0,.2.2h2.221a.4.4,0,0,0-.082-.116L20.806,10.49A.4.4,0,0,0,20.69,10.409Zm.84,6.961a4.581,4.581,0,1,0,2.979,8.061l1.4,1.374-.048.049a.418.418,0,0,0,.009.589l2.516,2.441a.418.418,0,0,0,.589-.009l.908-.936a.418.418,0,0,0-.009-.589L27.36,25.908a.418.418,0,0,0-.589.009l-.056.057-1.43-1.4a4.581,4.581,0,0,0-3.756-7.2Zm0,2.267a.355.355,0,0,1,0,.71,1.6,1.6,0,0,0-1.6,1.6.355.355,0,0,1-.71,0,2.313,2.313,0,0,1,2.314-2.314Zm0-.976a3.289,3.289,0,1,1-3.289,3.289A3.289,3.289,0,0,1,21.53,18.661Zm3.958,8.722a.4.4,0,0,1-.365.243H23.853V26.7a5.291,5.291,0,0,0,.595-.341ZM8.4,10.374a.4.4,0,0,0-.4.4V29.6a.4.4,0,0,0,.4.4H22.748a.4.4,0,0,0,.4-.4V26.99a5.319,5.319,0,0,1-2.789.12.317.317,0,0,1-.3.219H11.091a.317.317,0,0,1,0-.633h8.1A5.315,5.315,0,0,1,17,24.688H11.091a.317.317,0,0,1,0-.633h5.584a5.267,5.267,0,0,1-.434-2.008H11.091a.317.317,0,0,1,0-.633h5.175a5.256,5.256,0,0,1,.625-2.008h-5.8a.317.317,0,0,1,0-.633H17.3a5.3,5.3,0,0,1,5.844-1.862V13.537H20.888a.908.908,0,0,1-.908-.908V10.374Zm14.668-2.34v2.221a.2.2,0,0,0,.2.2h2.221a.4.4,0,0,0-.082-.116L23.18,8.116A.4.4,0,0,0,23.064,8.034Zm-11.973,8.73h8.962a.317.317,0,1,0,0-.633H11.091a.317.317,0,0,0,0,.633Zm0-2.641h6.434a.317.317,0,0,0,0-.633H11.091a.317.317,0,0,0,0,.633Z" transform="translate(-8.001 -8)" fill="#c4c4c4" fill-rule="evenodd"/>
            </svg>            
           </div>
        <div>
            <h1 class=" text-md hover:text-[#3C5AA8] hover:font-semibold">Overview</h1>
        </div>
                  
        </a>
        <!-- <div class="w-1.5 h-14 -mt-4 absolute ml-64 rounded-xl bg-[#3C5AA8]"></div>   -->
      </div>
      <div class="mt-1 bg-gradient-to-l from-blue-100 p-4 text-[#8D8D8D] flex justify-between hover:text-[#3C5AA8] hover:font-semibold px-6">
        <a href="#" class="flex space-x-2 items-center w-full">
           <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="29.522" height="19.297" viewBox="0 0 29.522 19.297">
              <path id="fast-delivery" d="M29.521,83.111c0-.006,0-.011,0-.017a.676.676,0,0,0-.68-.665h-.178L25.907,77.1a.677.677,0,0,0-.6-.365H20.6l.18-1.423a1.934,1.934,0,0,0-1.949-2.141H4.225a.722.722,0,0,0-.714.65l-.146,1.172h8.32a.948.948,0,0,1,.953.978,1.01,1.01,0,0,1-1,.978H8.858v0H.71a.714.714,0,0,0-.71.692.67.67,0,0,0,.674.692H11.463a1.014,1.014,0,0,1,.861,1.035,1.082,1.082,0,0,1-1.067,1.048H3.819a.721.721,0,0,0-.717.7.677.677,0,0,0,.68.7h7.351a1.014,1.014,0,0,1,.876,1.037A1.082,1.082,0,0,1,10.934,83.9H1.792a.721.721,0,0,0-.717.7.677.677,0,0,0,.68.7h.612l-.239,2.5a1.933,1.933,0,0,0,1.949,2.141H4.6a3.048,3.048,0,0,0,3.016,2.524,3.254,3.254,0,0,0,3.148-2.524h6.583a2.231,2.231,0,0,0,1.431-.537,1.945,1.945,0,0,0,1.363.537h.108a3.048,3.048,0,0,0,3.016,2.524,3.254,3.254,0,0,0,3.148-2.524h.435a2.3,2.3,0,0,0,2.238-2.051l.426-4.717c0-.006,0-.013,0-.019s0-.019,0-.029S29.521,83.117,29.521,83.111ZM7.657,91.071a1.7,1.7,0,0,1-1.7-1.747,1.805,1.805,0,0,1,1.793-1.747,1.7,1.7,0,0,1,1.7,1.747A1.805,1.805,0,0,1,7.657,91.071Zm15.651,0a1.7,1.7,0,0,1-1.7-1.747A1.805,1.805,0,0,1,23.4,87.578a1.7,1.7,0,0,1,1.7,1.747A1.805,1.805,0,0,1,23.309,91.071ZM27.7,87.8a.841.841,0,0,1-.809.743h-.47a3.048,3.048,0,0,0-2.985-2.367,3.255,3.255,0,0,0-3.109,2.367h-.144a.593.593,0,0,1-.446-.188.6.6,0,0,1-.147-.466l.881-9.76h2.023l-.321,3.553a1.934,1.934,0,0,0,1.949,2.141H28.06Z" transform="translate(0 -73.172)" fill="#3c5aa8"/>
            </svg>                  
           </div>
        <div>
            <h1 class="text-md text-[#3C5AA8] font-[800]">Dispatch</h1>
        </div>
                  
        </a>
        <div class="w-1.5 h-14 -mt-4 absolute ml-64 rounded-xl bg-[#3C5AA8]"></div>  
      </div>
      <div class="mt-1 bg-gradient-to-l from-[white] via-[white] to-[#F5F5F5] p-3.5 flex justify-between  text-[#8D8D8D] hover:text-[#3C5AA8] hover:font-semibold px-6">
        <a href="#" class="flex space-x-2 items-center w-full">
           <div>
            <img src="../../assets/images/complainceIcon.svg" alt="">                           
           </div>
        <div>
            <h1 class="text-md">Compliance</h1>
        </div>
                  
        </a>
        <!-- <div class="w-2 h-14 -mt-3.5 absolute ml-64 rounded-xl bg-[#3C5AA8]"></div>   -->
      </div>
      <div class="mt-1 bg-gradient-to-l from-[white] via-[white] to-[#F5F5F5]  p-3.5 flex justify-between px-6  text-[#8D8D8D] hover:text-[#3C5AA8] hover:font-semibold">
        <a href="#" class="flex space-x-3 items-center w-full">
           <div>
            <img src="../../assets/images/accountingIcon.svg" alt="">                          
           </div>
        <div>
            <h1 class="text-md">Accounting</h1>
        </div>
                  
        </a>
        <!-- <div class="w-2 h-14 -mt-3.5 absolute ml-64 rounded-xl bg-[#3C5AA8]"></div>   -->
      </div>
      <div class="mt-1 bg-gradient-to-l from-[white] via-[white] to-[#F5F5F5] p-3.5 flex justify-between px-6  text-[#8D8D8D] hover:text-[#3C5AA8] hover:font-semibold">
        <a href="#" class="flex space-x-2 items-center w-full">
           <div>
            <img src="../../assets/images/relationshipIcon.svg" alt="">                                      
           </div>
        <div>
            <h1 class="text-md">Relationships</h1>
        </div>
                  
        </a>
        <!-- <div class="w-2 h-14 -mt-3.5 absolute ml-64 rounded-xl bg-[#3C5AA8]"></div>   -->
      </div>
      <div class="mt-1 bg-gradient-to-l from-[white] via-[white] to-[#F5F5F5] p-3.5 flex justify-between px-6  text-[#8D8D8D] hover:text-[#3C5AA8] hover:font-semibold">
        <a href="#" class="flex space-x-2 items-center w-full">
           <div>
            <img src="../../assets/images/teamIcon.svg" alt="">                                      
           </div>
        <div>
            <h1 class="text-md">Team</h1>
        </div>
                  
        </a>
        <!-- <div class="w-2 h-14 -mt-3.5 absolute ml-64 rounded-xl bg-[#3C5AA8]"></div>   -->
      </div>
      <div class="mt-1 bg-gradient-to-l from-[white] via-[white] to-[#F5F5F5] p-3.5 flex justify-between px-6  text-[#8D8D8D] hover:text-[#3C5AA8] hover:font-semibold">
        <a href="#" class="flex space-x-2 items-center w-full">
           <div>
            <img src="../../assets/images/widgetsIcon.svg" alt="">                                      
           </div>
        <div>
            <h1 class="text-md">Widgets</h1>
        </div>
                  
        </a>
        <!-- <div class="w-2 h-14 -mt-3.5 absolute ml-64 rounded-xl bg-[#3C5AA8]"></div>   -->
      </div>
      <div class="mt-1 bg-gradient-to-l from-[white] via-[white] to-[#F5F5F5] p-3.5 flex justify-between px-6  text-[#8D8D8D] hover:text-[#3C5AA8] hover:font-semibold">
        <a href="#" class="flex space-x-2 items-center w-full">
           <div>
            <img src="../../assets/images/integrationIcon.svg" alt="">                                      
           </div>
        <div>
            <h1 class="text-md">Integration</h1>
        </div>
                  
        </a>
        <!-- <div class="w-2 h-14 -mt-3.5 absolute ml-64 rounded-xl bg-[#3C5AA8]"></div>   -->
      </div>
      <div class="mt-16 p-4 flex">
      <div>
        <svg id="background-2" data-name="background" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="236" height="60" viewBox="0 0 236 60">
            <defs>
              <linearGradient id="linear-gradient" x1="0.5" x2="0.939" y2="1.45" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#c9cce6"/>
                <stop offset="1" stop-color="#3c5aa8"/>
              </linearGradient>
              <clipPath id="clip-path">
                <path id="background" d="M30,0H206a30,30,0,0,1,0,60H30A30,30,0,0,1,30,0Z" fill="url(#linear-gradient)"/>
              </clipPath>
              <linearGradient id="linear-gradient-3" x1="0.5" x2="0.939" y2="1.45" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#757cbb"/>
                <stop offset="1" stop-color="#3c5aa8"/>
              </linearGradient>
            </defs>
            <path id="background-3" data-name="background" d="M30,0H206a30,30,0,0,1,0,60H30A30,30,0,0,1,30,0Z" fill="url(#linear-gradient)"/>
            <g id="background-4" data-name="background" clip-path="url(#clip-path)">
              <path id="Ellipse" d="M81.878,0c45.22,0,81.878,11.248,81.878,25.123S127.1,50.246,81.878,50.246,0,39,0,25.123,36.658,0,81.878,0Z" transform="translate(112.6 0)" opacity="0.21" fill="url(#linear-gradient-3)"/>
            </g>
          </svg> 
      </div>
      <div class="absolute flex items-center space-x-1 p-3 cursor-pointer px-8">
        <div>
            <img src="../../assets/images/help&supportIcon.svg" alt="">
        </div>
        <div>
            <h1 class="text-md text-white font-bold uppercase">Help & Support</h1>
        </div>
       
    </div>         
    </div>
      <div class="-mt-5 p-4 flex">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="236" height="60" viewBox="0 0 236 60">
            <defs>
              <linearGradient id="linear-gradient" x1="0.5" x2="1.094" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#c9cce6"/>
                <stop offset="1" stop-color="#3c5aa8"/>
              </linearGradient>
              <linearGradient id="linear-gradient-2" x1="0.5" x2="0.939" y2="1.45" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#3c5aa8"/>
                <stop offset="1" stop-color="#131633"/>
              </linearGradient>
              <clipPath id="clip-path">
                <path id="background" d="M30,0H206a30,30,0,0,1,0,60H30A30,30,0,0,1,30,0Z" fill="url(#linear-gradient)"/>
              </clipPath>
              <linearGradient id="linear-gradient-3" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#c9cce6"/>
                <stop offset="1" stop-color="#a0f9ff" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <g id="Group_1694" data-name="Group 1694" transform="translate(-0.001)">
              <g id="background-2" data-name="background" transform="translate(0.001)">
                <path id="background-3" data-name="background" d="M30,0H206a30,30,0,0,1,0,60H30A30,30,0,0,1,30,0Z" fill="url(#linear-gradient-2)"/>
                <g id="background-4" data-name="background" clip-path="url(#clip-path)">
                  <path id="Ellipse" d="M81.878,0c45.22,0,81.878,11.248,81.878,25.123S127.1,50.246,81.878,50.246,0,39,0,25.123,36.658,0,81.878,0Z" transform="translate(112.6 0)" opacity="0.21" fill="url(#linear-gradient-3)"/>
                </g>
              </g>
            </g>
          </svg>          
      </div>
      <div class="absolute flex items-center space-x-1 p-3 cursor-pointer px-8">
        <div>
            <img src="../../assets/images/logoIcon.svg" alt="">
        </div>
        <div>
            <h1 class="text-md text-white font-bold uppercase">Muftar GPT</h1>
        </div>
    </div>         
    </div>
    <div class="p-4">
        <div class="text-sm text-[#C9CCE6] font-semibold">
            <h1>v0.3.0</h1>
        </div>
        <div class="text-sm text-[#858585]">
            <p>Copyright ©  2023 Muftar Corp. <br>
                All Rights Reserved.</p>
        </div>
    </div>
    <div class="flex p-4 space-x-4 items-center">
        <div>
            <img src="../../assets/images/fbIcon.svg" alt="">
        </div>
        <div>
            <img src="../../assets/images/twitterIcon.svg" alt="">
        </div>
        <div>
            <img src="../../assets/images/linkedInIcon.svg" alt="">
        </div>
        <div>
            <img src="../../assets/images/youtubeIcon.svg" alt="">
        </div>
        <div>
            <img src="../../assets/images/instaIcon.svg" alt="">
        </div>
    </div>
    </div>
</template>



<style scoped>
/*.toggleButton {
    margin-left: 40%;
  }*/
  #checkbox {
    visibility: hidden;
  }
  
  #checkbox:checked~.left {
    transform: translateY(-50%) scale(0);
  }
  
  #checkbox:checked~.right {
    transform: translateY(-50%) scale(1);
    z-index: 10;
  }
  
  .left,
  .right {
    height: 1.3rem;
    width: 1.2rem;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    top: 50%;
  }
  
  .left {
    background: black;
    left: 0%;
    z-index: 10;
    transform: translateY(-50%) scale(1);
    transition: all 200ms cubic-bezier(0.8, 0.7, 0.72, 0.78);
  }
  
  .right {
    background: black;
    right: 0%;
    transform: translateY(-50%) scale(0);
    transition: all 200ms cubic-bezier(0.8, 0.7, 0.72, 0.78);
  }
</style>