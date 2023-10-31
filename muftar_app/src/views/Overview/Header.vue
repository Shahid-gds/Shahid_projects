<template>
    <div class="flex overflow-hidden items-center justify-between">
        <div class="trapezoid">
            <div class="flex p-6 justify-between">
               <div class="flex items-center space-x-2">
                <div class="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30.001" height="30.002" viewBox="0 0 30.001 30.002">
                        <path id="analysis" d="M11.778,8h15.8v3.076a1.238,1.238,0,0,0,1.238,1.238h3.076v9.97a7.242,7.242,0,0,0-2.27-1.743V14.807a1.489,1.489,0,0,0-.441-1.066l-3.03-3.03a1.489,1.489,0,0,0-1.066-.441H11.239V8.54a.541.541,0,0,1,.54-.54Zm13.527,3.285v3.029a.27.27,0,0,0,.27.27H28.6a.541.541,0,0,0-.111-.158l-3.03-3.03A.54.54,0,0,0,25.305,11.285Zm1.145,9.493a6.247,6.247,0,1,0,4.063,10.992l1.911,1.873-.065.067a.57.57,0,0,0,.012.8L35.8,37.842a.57.57,0,0,0,.8-.012l1.239-1.276a.57.57,0,0,0-.012-.8L34.4,32.421a.57.57,0,0,0-.8.012l-.076.078L31.572,30.6a6.247,6.247,0,0,0-5.122-9.824Zm0,3.092a.484.484,0,0,1,0,.968,2.186,2.186,0,0,0-2.187,2.187.484.484,0,0,1-.968,0,3.154,3.154,0,0,1,3.155-3.155Zm0-1.331a4.486,4.486,0,1,1-4.486,4.486A4.486,4.486,0,0,1,26.45,22.538Zm5.4,11.893a.541.541,0,0,1-.5.332h-1.73V33.507a7.214,7.214,0,0,0,.811-.465ZM8.541,11.238a.541.541,0,0,0-.54.54V37.462a.541.541,0,0,0,.54.54H28.111a.541.541,0,0,0,.54-.54V33.9a7.253,7.253,0,0,1-3.8.164.432.432,0,0,1-.411.3H12.215a.432.432,0,0,1,0-.863H23.258a7.248,7.248,0,0,1-2.983-2.738h-8.06a.432.432,0,0,1,0-.863h7.614a7.183,7.183,0,0,1-.592-2.738H12.215a.432.432,0,0,1,0-.863h7.057a7.167,7.167,0,0,1,.852-2.738H12.215a.432.432,0,0,1,0-.863h8.467a7.222,7.222,0,0,1,7.969-2.539v-4.6H25.575a1.238,1.238,0,0,1-1.238-1.238V11.238Zm20-3.191v3.029a.27.27,0,0,0,.27.27h3.029a.541.541,0,0,0-.111-.158L28.7,8.158A.541.541,0,0,0,28.543,8.047ZM12.215,19.952H24.437a.432.432,0,1,0,0-.863H12.215a.432.432,0,0,0,0,.863Zm0-3.6h8.773a.432.432,0,0,0,0-.863H12.215a.432.432,0,0,0,0,.863Z" transform="translate(-8.001 -8)" fill="#fff" fill-rule="evenodd"/>
                    </svg>                      
                </div>
                <div class="text-xl text-[white] uppercase font-[600]">
                    <h1>Overview</h1>
                </div>
               </div>
            </div>
        </div>
        <div class="flex items-center space-x-6">
            <div class="border-l-2 border-r-2 px-3">
                <img src="../../assets/images/bellicon.svg" alt="">
            </div>
            <div class="flex space-x-4 items-center">
                <div>
                    <h1 class="text-[#3C5AA8] font-bold">{{name}}</h1>
                    <span class="font-bold">Role:</span> <span class="text-[#8F8F8F]">{{role}}</span>
                </div>
                <div class="border-2 border-[#3C5AA8] rounded-xl">
                    <img class="w-14 h-14" src="../../assets/images/profile.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name: 'Franklin Smith',
            role: 'Admin'
        }
    }
}

</script>


<style scoped>
.trapezoid {
    border-bottom: 85px solid #3C5AA8;
    border-left: 0px solid transparent;
    border-right: 70px solid transparent;
    height: 0;
    width: 280px;
  }
</style>