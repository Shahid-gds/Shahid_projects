<template>
    <div class="w-full">
       
        <div class="">
            <div class="ml-72 mr-3">
                <Header />
            </div>
            <div class="fixed top-0">
                <SideMenu />
            </div>
        </div>
        <div class="ml-72 flex h-full w-full">
           <div class="flex w-full">
            <div class="bg-[#FAFBFC] w-1/5 p-3">
                <span class="text-[#1C1C1C] font-semibold text-xl">Fleet Manager</span>
             </div>
            <div class="bg-[#EDEDF3] w-4/5 flex">
                <div class="p-3 border-b-4 border-[#C9CCE6] border-r-2 border-r-white">
                    <span class="text-[#3C5AA8] font-bold text-sm uppercase px-2">Map</span>
                </div>
                <div class="p-3 bg-[#3C5AA8] border-b-4 border-[#091D54]">
                    <span class="text-[white] font-bold text-sm uppercase px-2">Details</span>
                </div>
                <div class="p-3 border-b-4 border-[#C9CCE6] border-l-2 border-l-white border-r-2 border-r-white">
                    <span class="text-[#3C5AA8] font-bold text-sm uppercase px-2">Feed</span>
                </div>
                <div class="p-3 border-b-4 border-[#C9CCE6] border-l-2 border-l-white">
                    <span class="text-[#3C5AA8] font-bold text-sm uppercase px-2">Queued Loads</span>
                </div>
             </div>
           </div>
        </div>
        <div>
            
        </div>

</div>
</template>

<script>
import Header from '../Dispatch/Header.vue';
import SideMenu from '../SideMenu/SideMenu.vue';
export default {
    components:{Header,SideMenu}

}
</script>