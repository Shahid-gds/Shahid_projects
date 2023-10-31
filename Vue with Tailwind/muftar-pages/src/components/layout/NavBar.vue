<template>
    <div class="bg-[#3A54B4] w-full">
       <div class="flex items-center justify-between  px-6 p-2">
        <div class="flex space-x-8 items-center w-full">
            <div class="flex space-x-3 items-center">
                <div class="">
                    <img src="@/assets/images/gridViewWhite.svg" alt="">
                </div>
                <div class="">
                    <img class="w-40" src="@/assets/images/Login/logo-White.svg" alt="">
                </div>
            </div>
           <div class="flex text-white space-x-4 items-center">
            <div>
                <a href="#">Your Work</a>
            </div>
            <div class="flex space-x-2 items-center">
                <div>
                    <a href="#">Projects</a>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>                  
                </div>
            </div>
            <div class="flex space-x-2 items-center">
                <div>
                    <a href="#">People</a>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>                  
                </div>
            </div>
            <div class="flex space-x-2 items-center">
                <div>
                    <a href="#">Apps</a>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>                  
                </div>
            </div>
            <!-- <div class="bg-white p-2 rounded-lg">
               <button class="text-[#3A54B4] font-bold">Create</button>
            </div> -->
           </div>
           </div>
           <div class="flex space-x-4 items-center">
            <div class="">
                <div class="relative">
                  <input type="text" class="w-80 p-2 text-sm px-4 rounded-lg" placeholder="Search">
                <div class="absolute right-5 top-1/2 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14.001" viewBox="0 0 14 14.001">
                    <path id="Path_13134" data-name="Path 13134" d="M13.68-.118,10.407-3.391a5.685,5.685,0,0,0,.915-3.957A5.719,5.719,0,0,0,6.431-12.2,5.692,5.692,0,0,0,.047-5.819,5.718,5.718,0,0,0,4.9-.927,5.685,5.685,0,0,0,8.86-1.842l3.273,3.273A1.095,1.095,0,0,0,13.68-.118ZM2.163-6.562a3.5,3.5,0,0,1,3.5-3.5,3.5,3.5,0,0,1,3.5,3.5,3.5,3.5,0,0,1-3.5,3.5A3.5,3.5,0,0,1,2.163-6.562Z" transform="translate(0 12.25)" fill="#3c5aa8"/>
                  </svg> 
                </div> 
                </div>                        
              </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>                  
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>                                  
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>                                               
            </div>
            <div class="p-2 border-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>                                                           
            </div>
           </div>
       </div>

    </div>
</template>