<template>
    <nav class="flex w-full items-center justify-between flex-wrap bg-white pb-3 shadow-lg p-3">
        <div class="flex space-x-4 justify-between lg:w-auto w-full lg:border-b-0  border-solid border-b-2">
            <div>
                <img class="w-12 h-12" src="../../assets/images/logo.svg" alt="">
            </div>
            <div class="flex items-center flex-shrink-0 text-[#3C5AA8] border-2 w-36 p-2 rounded-lg px-4">
                <span class="font-semibold text-xl tracking-tight">House Ninja</span>
            </div>
           
        </div>
        <div class="relative mx-auto text-gray-600 lg:block hidden">
            <input
                class="border-2 border-gray-300 bg-white h-10 w-96 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search" autocomplete="off">
            <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
                <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                     version="1.1" id="Capa_1" x="0px" y="0px"
                     viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                     xml:space="preserve"
                     width="512px" height="512px">
            <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
          </svg>
            </button>
        </div>
        <div class="menu w-full lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div class="text-md font-bold text-[#3C5AA8] lg:flex-grow">
                <a href="#responsive-header"
                   class="block mt-4 lg:inline-block border-2 lg:mt-0 px-4 py-2 rounded-lg mr-2">
                    Clients
                </a>
                <a href="#responsive-header"
                   class="block mt-4 lg:inline-block border-2 lg:mt-0 px-4 py-2 rounded-lg mr-2">
                    Load Board
                </a>
                <a href="#responsive-header"
                   class=" block mt-4 lg:inline-block lg:mt-0 border-2 px-4 py-2 rounded-lg mr-2">
                    Create Load
                </a>
            </div>
            <div class="w-10 h-10 border-2 rounded-full ml-3">
               <img class="rounded-full" src="../../assets/images/profile5.svg" alt="">
            </div>
        </div>
    </nav>
</template>