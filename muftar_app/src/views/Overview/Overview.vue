<template>
    <div class="">
        <div class="">
            <div class="ml-72 mr-3">
                <Header />
            </div>
            <div class="fixed top-0">
                <LeftMenu />
            </div>
        </div>
        <div class="ml-72 flex">
            <div class="w-4/5 h-screen">
                <Map/>
            </div>
            <div class="w-full bg-[#F5F5F5]">
                <div class="overview">
                    <div class="flex text-center space-x-1">
                        <div class="bg-[#3C5AA8] w-48 h-16 p-2 items-center uppercase border-b-4 border-[#091D54] space-x-3">
                            <h1 class="text-lg text-white font-bold">42</h1>
                            <p class="text-xs text-white font-[600]">Unassigned</p>
                        </div>
                        <div class="bg-[#EDEDF3] border-b-4 border-[#C9CCE6] w-48 h-16 p-2  cursor-pointer">
                            <h1 class="text-lg text-[#3C5AA8] font-bold">21</h1>
                            <p class="text-xs text-[#3C5AA8] font-[600] uppercase">En Route</p>
                        </div>
                        <div class="bg-[#EDEDF3] border-b-4 border-[#C9CCE6] w-48 h-16 p-2  cursor-pointer">
                            <h1 class="text-lg text-[#3C5AA8] font-bold">6</h1>
                            <p class="text-xs text-[#3C5AA8] font-[600] uppercase">At Destination</p>
                        </div>
                        <div class="bg-[#EDEDF3] border-b-4 border-[#C9CCE6] w-48 h-16 p-2  cursor-pointer">
                            <h1 class="text-lg text-[#3C5AA8] font-bold">11</h1>
                            <p class="text-xs text-[#3C5AA8] font-[600] uppercase">Pending Approval</p>
                        </div>
                        <div class="bg-[#EDEDF3] border-b-4 border-[#C9CCE6] w-48 h-16 p-2  cursor-pointer">
                            <h1 class="text-lg text-[#3C5AA8] font-bold">18</h1>
                            <p class="text-xs text-[#3C5AA8] font-[600] uppercase">Complete Delivery</p>
                        </div>
                    </div>
                    <div class="bg-[#EBECF5] w-full flex items-center justify-between h-16 p-3 my-auto">
                        <div class="space-x-1 px-2">
                            <span class="text-[#666668] text-xs">Latest</span>
                            <span class="text-[#3C5AA8] font-bold text-xs">42</span>
                            <span class="text-[#666668] text-xs">from a total of</span>
                            <span class="text-[#3C5AA8] font-bold text-xs">42</span>
                            <span class="text-[#666668] text-xs">loads</span>
                        </div>
                        <div class="flex space-x-3">
                            <div class="cursor-pointer">
                                <img src="../../assets/images/gridView.svg" alt="">
                            </div>
                            <div class="cursor-pointer">
                                <img src="../../assets/images/listView.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
               <div class="overflow-y-auto h-full">
                <TabViews />
               </div>
            </div>
        
        </div>
        <div>
            
        </div>

</div>
</template>

<script>
import Header from '../Overview/Header.vue'
import LeftMenu from '../LeftMenu/LeftMenu.vue';
import TabViews from '../Overview/TabViews.vue'
import Map from '../Overview/Map.vue';
export default {
    components: {
        LeftMenu,
        Header,
        TabViews,
        Map
    },   
}



</script>

<style scoped>
::-webkit-scrollbar {
    width: 10px;
    background-color: #DEE1F8;
  }
  
 
  ::-webkit-scrollbar-thumb {
    background-color: #A2A5D8;
    border-radius: 5px;
  }
  

</style>

