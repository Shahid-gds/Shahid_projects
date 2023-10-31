<template>
    <div class="flex overflow-hidden items-center justify-between">
        <div class="flex items-center">
            <div class="main_trapezoid z-10">
                <div class="flex p-6 justify-between">
                   <div class="flex items-center space-x-2">
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42.837" height="28" viewBox="0 0 42.837 28">
                            <path id="fast-delivery" d="M42.836,87.594c0-.008,0-.016,0-.024a.981.981,0,0,0-.986-.965h-.259l-4-7.731a.982.982,0,0,0-.877-.53H29.888l.26-2.065a2.806,2.806,0,0,0-2.828-3.106H6.13a1.047,1.047,0,0,0-1.036.944l-.212,1.7H16.955a1.376,1.376,0,0,1,1.382,1.419,1.465,1.465,0,0,1-1.457,1.419H12.853l0,.006H1.03a1.036,1.036,0,0,0-1.03,1,.973.973,0,0,0,.977,1H16.633a1.471,1.471,0,0,1,1.25,1.5,1.57,1.57,0,0,1-1.548,1.52H5.541A1.047,1.047,0,0,0,4.5,84.7a.982.982,0,0,0,.987,1.014H16.155a1.472,1.472,0,0,1,1.271,1.5,1.57,1.57,0,0,1-1.561,1.521H2.6a1.047,1.047,0,0,0-1.04,1.014.982.982,0,0,0,.987,1.014h.887L3.087,94.4A2.806,2.806,0,0,0,5.916,97.51h.765a4.423,4.423,0,0,0,4.377,3.662,4.722,4.722,0,0,0,4.568-3.662h9.552a3.237,3.237,0,0,0,2.077-.779,2.822,2.822,0,0,0,1.978.779h.157a4.423,4.423,0,0,0,4.377,3.662,4.722,4.722,0,0,0,4.568-3.662h.631a3.33,3.33,0,0,0,3.247-2.977l.618-6.844c0-.009,0-.018,0-.028s0-.028,0-.042S42.836,87.6,42.836,87.594ZM11.111,99.144A2.459,2.459,0,0,1,8.643,96.61a2.62,2.62,0,0,1,2.6-2.535,2.459,2.459,0,0,1,2.468,2.535A2.619,2.619,0,0,1,11.111,99.144Zm22.71,0a2.459,2.459,0,0,1-2.468-2.535,2.62,2.62,0,0,1,2.6-2.535,2.459,2.459,0,0,1,2.468,2.535A2.619,2.619,0,0,1,33.822,99.144Zm6.373-4.74a1.221,1.221,0,0,1-1.174,1.079h-.682a4.423,4.423,0,0,0-4.331-3.435A4.723,4.723,0,0,0,29.5,95.482h-.209a.861.861,0,0,1-.648-.272.872.872,0,0,1-.214-.677L29.7,80.371h2.936l-.465,5.156A2.806,2.806,0,0,0,35,88.634h5.712Z" transform="translate(0 -73.172)" fill="#fff"/>
                          </svg>                                            
                    </div>
                    <div class="text-xl text-[white] uppercase font-[600]">
                        <h1>Dispatch</h1>
                    </div>
                   </div>
                </div>
               
            </div>
            <div class="Trapezoid text-center p-6 cursor-pointer space-x-6" v-for="(trapezoid, index) in trapezoids" :key="index" :class="['Trapezoid', { 'active': trapezoid.isActive }]"
            @click="toggleActive(index)">
                <h1 class="text-[#666668] font-medium uppercase text-sm">{{trapezoid.name}}</h1>
            </div>
        </div>
        <div class="flex items-center space-x-6 mr-3">
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
<script setup>
    const name = 'Franklin Smith';
    const role = 'Admin';
    
    const trapezoids = [
        {
            name: 'Fleet Manager',
            isActive: false
            // route: '/',
        },
        {
            name: 'Load Board',
            isActive: false
            // route: '/',
        },
        {
            name: 'Active Orders',
            isActive: true
            // route: '/',
        },
        {
            name: 'Order History',
            isActive: false
            // route: '/',
        },
    ];
    
    const toggleActive = (index) => {
        trapezoids.forEach((trapezoid, i) => {
            trapezoid.isActive = i === index;
        });
    };
</script>


<style scoped>
.main_trapezoid {
    border-bottom: 75px solid #3C5AA8;
    border-left: 0px solid transparent;
    border-right: 70px solid transparent;
    height: 0;
    width: 237.33px;
  }
.Trapezoid{
    width: 280px;
    height: 60px;
    margin-left: -4.9rem;
    margin-top: 7px;
    background-color: #EDEDF3;
    -webkit-clip-path: polygon(0% 0%, 70% 0%, 100% 100%, 30% 100%);
    clip-path: polygon(0% 0%, 70% 0%, 103% 145%, 31% 135%);
}
.Trapezoid.active {
    background-color: #242021;
  }
.Trapezoid.active h1 {
    color: white;
    font-weight: 600;
  }
  
</style>